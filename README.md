# 文本溢出处理

## 组件
```vue
<template>
  <div>
    <div style="width: 100px;margin-bottom: 20px;">
      <bk-overflow-title>文本超出33333222222222222222222222222</bk-overflow-title>
    </div>
    <div style="width: 100px;margin-bottom: 20px;">
      <bk-overflow-title type="tips">
        文本超出33333222222222222222222222222
      </bk-overflow-title>
    </div>
  </div>
</template>


```
### overflowTitle 组件属性
<table class="props-table"><thead><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></thead><tbody><tr><td>content</td><td>文本内容。没有的话去default slot</td><td>String</td><td><div class="table-cell">--</div></td><td>--</td></tr><tr><td>type</td><td>默认给文本加上title，如果tips，则鼠标悬浮添加添加tooltips，但是如果不是纯文本</td><td>String</td><td><div class="table-cell"><span class="cell-item">tips</span><span class="cell-item">title</span></div></td><td><div class="table-cell"><span class="cell-item">title</span></div></td></tr><tr><td>calType</td><td>计算文本宽度方式，默认通过dom计算机文本宽度，canvas则通过measureText计算</td><td>String</td><td><div class="table-cell"><span class="cell-item">dom</span><span class="cell-item">canvas</span></div></td><td><div class="table-cell"><span class="cell-item">dom</span></div></td></tr><tr><td>resizeable</td><td>是否监听文本内容变化</td><td>Boolean</td><td><div class="table-cell">--</div></td><td><div class="table-cell"><span class="cell-item">false</span></div></td></tr></tbody></table>

## 指令
```vue
<template>
  <div>
    <div style="width: 100px;margin-bottom: 20px;">
      <div
        v-overflow-title
        class="text-ov"
      >
        222222222222222222222222
      </div>
    </div>
  </div>
</template>
<script >

  import { overflowTitle } from 'bkui-vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    directives: {
      overflowTitle,
    },
    setup() {
    },
  });

</script>

```
### overflowTitle 指令属性(计算父元素宽度)

<table class="props-table"><thead><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></thead><tbody><tr><td>content</td><td>文本内容。没有的话去default slot</td><td>String</td><td><div class="table-cell">--</div></td><td>--</td></tr><tr><td>calType</td><td>计算文本宽度方式，默认通过dom计算机文本宽度，canvas则通过measureText计算</td><td>String</td><td><div class="table-cell"><span class="cell-item">dom</span><span class="cell-item">canvas</span></div></td><td><div class="table-cell"><span class="cell-item">dom</span></div></td></tr></tbody></table>

## 组件库
整个功能已集中到MagicBox组件库
可以使用组件库：https://bkui-vue.woa.com/overflow-title
