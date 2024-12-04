<template>
    <div class="">以下是面包屑组件</div>
    <br>
    <div aria-label="Breadcrumb">
        <gpyBreadrumb separator="/">
            <gpyBreadrumbItem v-for="(item, index) in routeList" :key="index" :to="item.path">{{ item.meta.title }}</gpyBreadrumbItem>
        </gpyBreadrumb>
    </div>
</template>

<script setup>
import gpyBreadrumb from './src/breadcrumb.vue'
import gpyBreadrumbItem from './src/breadcrumb-item.vue'

import { onMounted } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()
const routeList = route.matched

onMounted(() => {
    console.log(route)
})
</script>

<style lang="less" scoped></style>
