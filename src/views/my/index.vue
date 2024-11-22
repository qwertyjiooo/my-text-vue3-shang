<template>
    <div class="content">
        <div class="text-red-500">{{ userStore.name }}</div>
        <Button @click="userStore.setName('张三')">
            点击确定
        </Button>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/store'
import { Button } from '@/components/ui/button';
import {routes} from '@/router/routes.js'

const userStore = useUserStore()
const aaa = []

// onMounted(() => {
//     routes.forEach(item => {
//         if (item.meta?.isShow) {
//             if (item.name !== '') {
//                 aaa.push(item)
//             } else {
//                 aaa.push(...item.children)
//             }
//         }
//     })
//     console.log(aaa);
// })

</script>

<style scoped lang="less">
// .content{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
// }
</style>