import { CSSProperties } from 'vue';

export default function getActualWidthByDom(text: string, options: CSSProperties, dom: HTMLElement = document.body): number {
  const { fontSize, fontFamily } = options || {};
  const tempDom = document.createElement('div');
  tempDom.style.cssText = `position: absolute;left: -999em;top:-999em;z-index: -1;
    ${fontSize ? `font-size:${fontSize} ;` : ''}
    ${fontFamily ? `font-family:${fontFamily} ` : ''}
  `;
  tempDom.innerText = text;
  dom.append(tempDom);
  const { clientWidth } = tempDom;
  dom.removeChild(tempDom);
  return clientWidth;
}
