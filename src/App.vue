<script setup lang="ts">
    import { ref, onMounted, toRefs,reactive, watch, watchEffect, provide } from 'vue'
    import foo from './helper/foo'
    import test from '@/assets/js/test'
    import Demo from './components/Demo.vue'
    test()

    interface Msg {
      msg: string
    }
    interface UserType {
      name: String,
      age: String 
    }
    const demo = ref<HTMLElement | null>(null)
    const count = ref<number>(1);
    function foo2():void{
      foo(count)
      user.name = "Haha" + count.value
    }
    const user = reactive<UserType>({
      name:'Burton',
      age:'24'
    })
    let userRef:any= toRefs(user)
    onMounted(function():void {
      // if(demo.value){
      //   demo.value.msg = "onMounted"
      // }
      user.name="Andy"
      user.age="18"
    })
    let { name, age } = user // reactive 解構後失去響應
    let { name:nameRef, age:ageRef } = userRef // reactive toRefs 後保持響應



    const foo3 = ref<string>('foo3')
    setTimeout(()=>{
      foo3.value = 'Hello World foo3!'
    }, 2000)

    function bar() {
      console.log(foo3.value)
    }

    // 使用 watch 需要先手动执行一次
    bar()

    // 然后当 foo3 有变动时，才会通过 watch 来执行 bar()
    watch(foo3, bar)

    const foo4 = ref<string>('foo4')

    setTimeout(() => {
      foo4.value = 'Hello World foo4!'
    }, 2000)

    function bar2() {
      console.log(foo4.value)
    }

    // 可以通过 watchEffect 实现 bar2() + watch(foo4, bar2) 的效果
    watchEffect(bar2)


    // 使用 provide / inject 實行爺孫傳值
    const grandPaMsg= reactive<Msg>({
      msg: 'Im your grandfather!' 
    })

    provide('grandPaMsg',grandPaMsg)

    setTimeout(()=>{
      grandPaMsg.msg="No Its grandmother"
    },3000)


</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  {{name}}
  {{age}}
  {{nameRef}}
  {{ageRef}}
  <Demo ref="demo"></Demo>

  <button @click="foo2()">foo</button>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
