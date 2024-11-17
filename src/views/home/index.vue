<template>
    <el-button class="text-red-600" @click="aaa" :loading="loading">按钮</el-button>
    <ul>
        <li v-for="res in list" :key="res.id">
            <span>{{ res.first_name }}</span>
            <img :src="res.avatar" alt="">
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue'
import { api } from '../../api/index'
const loading = ref(false);  // 控制 loading 状态
const list = ref([]);

const aaa = async () => {
    try {
        loading.value = true;  // 开始 loading
        const res = await api.ceShi()
        list.value = res.data
        console.log(res.data)
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;  // 结束 loading
    }
}
</script>

<style lang='less' scoped></style>