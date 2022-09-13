<script lang="ts">
import { defineComponent, ref } from 'vue'
import GrandSon from '@cp/GrandSon.vue'

export default defineComponent({
  components:{
    GrandSon
  },
  setup(props, context) {
    // 业务代码写这里...
    const msg = ref<string>('Third!');


    return {
      msg
      // 需要给 template 用的数据、函数放这里 return 出去...
    }
  },
})
</script>
<template>
  <GrandSon></GrandSon>
  <h1>{{ msg }}</h1>
</template>
