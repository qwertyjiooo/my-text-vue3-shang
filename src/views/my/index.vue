<template>
    <div class="text-red-500">{{ userStore.name }}</div>
    <el-button @click="userStore.setName('张三')">修改姓名</el-button>
</template>
<script setup>
import { useUserStore } from '@/store'

const userStore = useUserStore()

</script>

<style scoped></style>