<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import GrandSon from '@cp/GrandSon.vue'

export default defineComponent({
  components:{
    GrandSon
  },
  setup(props, context) {
    // 业务代码写这里...
    const msg = ref<string>('Second!');
    const router = useRouter();

    setTimeout(()=>{
      msg.value="Second !!!!!!!"
    },3000)

    function goBack(){
      router.back()
    }

    return {
      msg,
      goBack
      // 需要给 template 用的数据、函数放这里 return 出去...
    }
  },
})
</script>
<template>
  <h1>{{ msg }}</h1>
  <router-view></router-view>
  <button @click="goBack()">go Back</button>
  <GrandSon :second-props="msg"></GrandSon>

</template>
