<template>
    <div class=""> table 表格</div>
    <gpyTable :data="data" :title="title"></gpyTable>
</template>

<script setup>
import gpyTable from './src/table.vue';

import { ref } from 'vue';

const title = ref([
    {
        label: '姓名',
        width: '100',
    },
    {
        label: '年龄',
        width: '100',
    },
    {
        label: '性别',
        width: '100',
    },
]);
const data = ref([
    {
        name: '张三',
        age: 18,
        sex: '男',
    },
    {
        name: '李四',
        age: 20,
        sex: '',
    },
    {
        name: '王五',
        age: 22,
        sex: '男',
    },
]);
</script>

<style lang="less" scoped></style>
