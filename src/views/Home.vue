<script lang="ts">
import { defineComponent, ref,toRef } from 'vue'
import { useRoute,useRouter } from 'vue-router'
export default defineComponent({
  setup(props, context) {
    // 业务代码写这里...
    let msg = ref<string>('Home!!');
    const route = useRoute();
    const router = useRouter();
    const routerPath:any = toRef(route, 'name')
    console.log(route.name);

    function goNext(){
      router.push({
        name: 'lv2'
      })
    }

    return {
      msg,
      goNext,
      routerPath
      // 需要给 template 用的数据、函数放这里 return 出去...
    }
  },
})
</script>
<template>
  <h1>{{ msg }}</h1>
  <button v-if="routerPath==='home'" @click="goNext()">go second</button>
  <router-view></router-view>
</template>
