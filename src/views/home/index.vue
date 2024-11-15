<template>
    <el-button class="text-red-600" @click="aaa" :loading="loading">按钮</el-button>
</template>

<script setup>
import { ref } from 'vue'
import { api } from '../../api/index'
const loading = ref(false);  // 控制 loading 状态

const aaa = async () => {
    try {
        loading.value = true;  // 开始 loading
        const res = await api.ceShi()
        console.log(res)
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;  // 结束 loading
    }
}
</script>

<style lang='less' scoped></style>