<template>
    <div class=""> table 表格</div>
    <br>
    <br>
    <br>
    <gpyTable :data="data" style="width: 100%">
        <gpyTableColumn prop="name" label="姓名" width="100"></gpyTableColumn>
        <gpyTableColumn prop="age" label="年龄"></gpyTableColumn>
        <gpyTableColumn prop="age" label="年龄" width="200"></gpyTableColumn>
        <gpyTableColumn prop="sex" label="性别"></gpyTableColumn>
    </gpyTable>
    <br>
    <br>
    <br>
    <el-table :data="data" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="100" />
        <el-table-column prop="age" label="年龄" />
        <el-table-column prop="age" label="年龄" width="200" />
        <el-table-column prop="sex" label="性别 " />
    </el-table>

</template>

<script setup>
import gpyTable from './src/table.vue';
import gpyTableColumn from './src/tableColumn.vue';

import { ref } from 'vue';

const data = ref([
    {
        name: '张三',
        age: 18,
        sex: '男',
    },
    {
        name: '李四',
        age: 20,
        sex: '女',
    },
    {
        name: '王五',
        age: 22,
        sex: '男',
    },
    {
        name: '王五',
        age: 22,
        sex: '男',
    },
    {
        name: '王五',
        age: 22,
        sex: '男',
    },
    {
        name: '王五',
        age: 22,
        sex: '男',
    },
    {
        name: '王五',
        age: 22,
        sex: '男',
    },
    {
        name: '王五',
        age: 22,
        sex: '男',
    },
]);
</script>

<style lang="less" scoped></style>
