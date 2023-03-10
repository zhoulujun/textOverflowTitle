import {
  ObjectDirective,
} from 'vue';
import '../overflow.scss'
import getActualWidthByDom from '../utils/getActualWidthByDom';
import getActualWidthByCanvas from '../utils/getActualWidthByCanvas';

const overflowTitle: ObjectDirective<HTMLElement> = {
  mounted(el, { value = {} }) {
    const { clientWidth } = el.parentElement;
    if (!clientWidth) {
      return
    }
    const { content, calType = 'dom' } = value
    const text = content || el.textContent
    let textWidth = 0
    if (calType === 'dom') {
      textWidth = getActualWidthByDom(text, null, el.parentElement)
    } else {
      const { fontSize, fontFamily } = getComputedStyle(el)
      textWidth = getActualWidthByCanvas(text, { fontSize, fontFamily })
    }
    if (textWidth > clientWidth) {
      el.setAttribute('title', content || el.innerText)
    }
  },
};

export default overflowTitle;


