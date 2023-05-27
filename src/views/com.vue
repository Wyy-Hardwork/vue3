<script setup lang="ts">
    import {io} from 'socket.io-client'
    import {ref,onMounted} from 'vue'
    import request from '@/api/request'

    let test = ref('')
    let jtoken = ref('')
    const socket = io('http://localhost:3000')
    //本地连接不用写url
    socket.emit('connection')

    socket.on('count',(data)=>{
        console.log('在线人数:'+data);   
    })

    socket.on('speak-in',(data)=>{
        console.log(data);
        test.value = data
    }) 


    async function sendSocket(){
        // console.log(socket.connected+' 连接状况');     
        // let boy = '大家看得见吗'
        // socket.emit('speak',boy)
        let result = await request.get('/api/login')
        console.log(result.data);

    let result1 = await request.get('/api/logout')
    console.log(result1.data);
        
    }
    
    onMounted(()=>{
        getFn()
    })

    async function getFn(){
    let result = await request.post('/api',{
        a:'1',
        b:'2'
    })
    console.log(result.data);    
    }

    async function jwt() {
        let result = await request.post('/api/jwt')
        console.log(result.data);
        jtoken = result.data
    }

    async function justify() {
        let result1 = await request.post('/api/vip',{token:jtoken})
        console.log(result1.data);
    }
</script>
<template>
    <div>
        <div class="test" @click="sendSocket()">
            {{ test }}
        </div>
        <button @click="jwt">模拟jwt登录</button>
        <button @click="justify">模拟jwt验证</button>
    </div>
</template>


<style scoped>
    .test{
        width: 300px;
        height: 200px;
        background-color: rgb(105, 193, 163);
    }
</style>