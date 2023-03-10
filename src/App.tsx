import { defineComponent } from 'vue'
import Page from '../packages/index';
const {overflowTitle,OverflowTitle} = Page

export default defineComponent({
  name: 'App',
  directives: {
    overflowTitle
  },
  setup() {
  },
  render() {
    return (
      <div class="box">
        <div v-OverflowTitle class="text-ov">33333222222222222222222222222</div>
        <OverflowTitle type="title"><span>222222222222222222222222</span><label>222</label></OverflowTitle>

      </div>
    )
  }
})
