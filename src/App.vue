<script setup lang="ts">
import { ref,reactive,watch,watchEffect,onMounted,provide,readonly } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

let a = ref({a:10})
console.log(a);

let b = reactive({a:11})
console.log(b);

let data = reactive({
  arr:[1,2,3],
  str:'test',
})

function ck() {
  data.arr[1] = 0
}

watch(()=>data,(a,b)=>{
  console.log(a);
  console.log(b);
},{deep:true})

console.log(a);
console.log(b);

watchEffect(()=>{
  console.log('watchEffect执行了,发生了什么?'+data);
})

function happy(){
  return 'happy cat'
}

let testProvide = reactive({
  a:'youGotIt'
})

onMounted(()=>{
  console.log('你好');
  provide('cool',testProvide)
  console.log('provide已经传出');
  
})

let read = readonly([9])
console.log(read);

</script>


<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <div class="boy" @click="ck">
      {{ a }}
    </div>

    <div @click="ck">{{ data.arr }}</div>
    <div @click="ck">{{ data.str }}</div>
    <div>{{ happy() }}</div>
  </header>

  <RouterView />
</template>

<style scoped>
.boy{
  height: 30%;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
