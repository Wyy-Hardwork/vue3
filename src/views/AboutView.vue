<script setup lang="ts">
  import {onMounted,onUnmounted,ref,reactive,readonly,customRef,inject} from 'vue'
  import usePonit from '@/hooks/usePonit'
  import Com from './com.vue'
  import Coms from './coms.vue'
  onMounted(()=>{

  console.log(a);
  console.log('挂载!');
  let b :number = usePonit()
  console.log(b);
})
  onUnmounted(()=>{
  console.log('摧毁！');
})

let a = ref(0)

let b = reactive({
  a:1
})
b = readonly(b)
function add(){
  a.value++
}

function ar(){
  b.a++
}
console.log(b);

function defn(value:string,time:number){
  let timer:number
  return customRef((track,trigger)=>{
    return {
      get(){
        track()
        return value
      },
      set(newValue){
        clearTimeout(timer)
        timer = setTimeout(()=>{
          value = newValue
          trigger()
        },time)

      }
    }
  })
}

let keyword = defn('x',500)
console.log(keyword);


let ainputs = ref()

let box = inject('cool')
console.log(box);

let oox = 's'
const test = true?()=>{console.log('成了');
return 'yes'
}:()=>{console.log('没成');
return 'no'
}
test()

</script>

<script lang="ts">
  console.log('我是普通script,只会被引入一次');
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 @click="add">{{ a }}</h2>
    <h2 @click="ar">{{ b.a }}</h2>
    <div><input type="text" v-model="keyword"></div>
    <div>{{ keyword }}</div>

    <Suspense>
      <template v-slot:default>
      <img style="width: 120px;" src="https://pic.nximg.cn/file/20230425/24389852_102608699104_2.jpg" alt="">
      </template>
      <template v-slot:fallback>
        <div>
          加载中！
        </div>
      </template>
    </Suspense>

    <component :is="true?Com:Coms"></component>
    
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
