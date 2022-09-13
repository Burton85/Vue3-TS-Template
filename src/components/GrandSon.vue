<script lang="ts">
import { defineComponent, inject, ref, toRef } from 'vue'
interface Msg {
  msg: string
}
export default defineComponent({
  props:{
     secondProps: {
      type: String,
      required: true,
      default: 'Default Props'
    },
  },
  setup(props, context) {
    // 业务代码写这里...
    const grandPaMsg: Msg | undefined = inject('grandPaMsg');
    console.log(props)
    const msg:string = props.secondProps
    const msgRef=ref<string>(props.secondProps)
    const msgToRef:any =toRef(props,'secondProps')

    return {
      grandPaMsg,
      msg,
      msgRef,
      msgToRef
      // 需要给 template 用的数据、函数放这里 return 出去...
    }
  },
})
</script>
<template>
  <p>{{ grandPaMsg?.msg }}</p>
  <p> It's my Father's message - origin : {{msg}}</p>
  <p> It's my Father's message - ref : {{msgRef}}</p>
  <p> It's my Father's message - toRef : {{msgToRef}}</p>
</template>
