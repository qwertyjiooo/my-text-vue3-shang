<template>
    <div class="" style="width: 100%;flex: 1;">
        <table style="width: 100%;">
            <colgroup>
                <col v-for="(item, index) in tableStore.lable" :key="index" />
            </colgroup>
            <thead>
                <tr>
                    <th v-for="(item, index) in tableStore.lable" :key="index">{{ item }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, i) in tableStore.filteredData" :key="i">
                    <td v-for="(res, r) in item" :key="r">{{ res }}</td>
                    <td v-if="tableStore.slotDsata.length > 0">
                        <component :is="tableStore.slotDsata[0]"/>
                    </td>
                </tr>
            </tbody>
        </table>
        <td>
            <slot></slot>
        </td>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTableStore } from '@/store/modules/table'

const props = defineProps({
    data: {
        type: Array,
        default: () => []
    }
})

const tableStore = useTableStore()
onMounted(() => {
    tableStore.setTable(props.data);
    console.log(tableStore.slotDsata);
    
})

</script>

<style lang="less" scoped>
td,
th {
    text-align: left;
    padding: 8px 0;
    border-bottom: 1px solid #eceef5;
}

th {
    color: #999;
    font-weight: 600;
}

td {
    color: #555;
}
</style>

<!--
 * @Author: shenxh
 * @Date: 2022-05-24 10:32:28
 * @LastEditors: shenxh
 * @LastEditTime: 2022-05-24 10:32:28
 * @Description: 表格测试
-->