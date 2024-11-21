<template>
    <div class="content">
        <div class="text-red-500">{{ userStore.name }}</div>
        <Button @click="userStore.setName('张三')">
            点击确定
        </Button>
    </div>
</template>
<script setup>
import { useUserStore } from '@/store'
import { Button } from '@/components/ui/button';

const userStore = useUserStore()

</script>

<style scoped lang="less">
.content{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>