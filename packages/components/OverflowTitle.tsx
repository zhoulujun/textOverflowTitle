import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  ref, shallowRef,
} from 'vue';
import { Popover } from 'bkui-vue';
import '../overflow.scss'
import getActualWidthByDom from '../utils/getActualWidthByDom';
import getActualWidthByCanvas from '../utils/getActualWidthByCanvas';
import { debounce } from 'bkui-vue/lib/shared';
import { HTMLAttributes } from '@vue/runtime-dom';

export  type TipsType = 'tips' | 'title'
export  type CalType = 'dom' | 'canvas'

export default defineComponent({
  name: 'OverflowTitle',
  props: {
    content: String,
    type: {
      type: String as PropType<TipsType>,
      default: 'tips'
    },
    calType: {
      type: String as PropType<CalType>,
      default: 'dom'
    },
    response: Boolean

  },
  setup(props, { slots }) {
    const boxRef = ref<HTMLElement>(null);
    const textRef = ref<HTMLElement>(null);
    const isShowTips = ref(false)
    const textProps = shallowRef<HTMLAttributes>()
    const contentText = computed(() => {
      if(props.content){
        return props.content
      }
      const slot = slots?.default?.()
      return  slot
    })

    onMounted(() => {
      const { clientWidth } = boxRef.value
      const resizeHandler = debounce(500, () => {
        isShowTips.value = false
        textProps.value = {}
        let textWidth = 0

        if (props.calType === 'dom') {
          textWidth = getActualWidthByDom(contentText.value as string, null, boxRef.value)
        } else {
          const { fontSize, fontFamily } = getComputedStyle(boxRef.value)
          textWidth = getActualWidthByCanvas(contentText.value as string, { fontSize, fontFamily })
        }
        if (textWidth > clientWidth) {
          isShowTips.value = true
          if(props.type==='title'){
            textProps.value = {title:textRef.value.innerText}
          }
        }
      })
      resizeHandler()
      if (props.response) {
        const observer = new ResizeObserver(resizeHandler);
        observer.observe(boxRef.value);
        onUnmounted(() => {
          observer.unobserve(boxRef.value)
          observer.disconnect()
        })
      }


    })
    return {
      boxRef,
      textRef,
      isShowTips,
      contentText,
      textProps
    }
  },
  render() {
    return (
      <div ref="boxRef" class="position-relative">
        <Popover disabled={this.type === 'title'}>
          {{
            default: () => (
              <div
                ref="textRef"
                class="text-ov"
                {...this.textProps}
                >
                {this.contentText}
              </div>
            ),
            content: () => this.contentText
          }}
        </Popover>
      </div>
    )
  }
});
