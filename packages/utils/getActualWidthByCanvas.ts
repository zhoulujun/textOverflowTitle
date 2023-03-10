import { CSSProperties } from 'vue';

export default function getActualWidthByCanvas(text: string, options: CSSProperties): number {
  const { fontSize = 14, fontFamily = 'Microsoft YaHei' } = options;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = `${fontSize}px ${fontFamily}`;
  const metrics = ctx.measureText(text);
  const actual = Math.abs(metrics.actualBoundingBoxLeft) + Math.abs(metrics.actualBoundingBoxRight);
  return Math.max(metrics.width, actual);
}
