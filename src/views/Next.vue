<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(props, context) {
    // 业务代码写这里...
    const msg = ref<string>('Next!');


    return {
      msg
      // 需要给 template 用的数据、函数放这里 return 出去...
    }
  },
})
</script>
<template>
  <h1>{{ msg }}</h1>
</template>
