<template>
    <div class="" style="width: 100%;">
        <gpyTable :data="data">
            <gpyTableColumn prop="name" lable="姓名"></gpyTableColumn>
            <gpyTableColumn prop="sex" lable="性别"></gpyTableColumn>
            <gpyTableColumn lable="操作">
                <template #default>
                    <div>
                        <el-button @click="anniu">按钮</el-button>
                    </div>
                </template>
            </gpyTableColumn>
        </gpyTable>
    </div>
</template>

<script setup>

import gpyTable from './src/table.vue'
import gpyTableColumn from './src/tableColumn.vue'
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

const anniu = () => {
    console.log('anniu')
}
</script>

<style lang="less" scoped></style>
<!--
 * @Author: shenxiankun
 * @Date: 2022-04-18 10:51:35
 * @LastEditors: shenxiankun
 * @LastEditTime: 2022-04-18 10:51:35
 * @Description: 
-->