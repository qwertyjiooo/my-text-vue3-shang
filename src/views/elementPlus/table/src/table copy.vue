<template>
    <table class="table" :style="{ width: width, height: height }">
        <tr>
            <th :style="{width: title.width}" v-for="item in title" :key="item">
                <div class="table-title">{{ item.label }}</div>
            </th>
        </tr>
        <tr v-for="(item, index) in data" :key="index" @mousemove="handleMouseOver(index)" @mouseout="handleMouseOut"
            :style="{ background: hoverIndex === index ? '#f5f7fa' : '' }">
            <td v-for="(res, i) in item" :key="i">
                <div class="table-content">{{ res }}</div>
            </td>
        </tr>
    </table>
</template>

<script setup>
import { ref, defineProps, provide } from 'vue'
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    width: {
        type: String,
        default: '100%'
    },
    height: {
        type: String,
        default: '100%'
    },
    title: {
        type: Array,
        default: () => []
    }
})
const hoverIndex = ref(null);
provide('tableData', props.data)
const handleMouseOver = (index) => {
    hoverIndex.value = index
}
const handleMouseOut = () => {
    hoverIndex.value = null
}
</script>

<style lang="less" scoped>
.table {
    padding: 24px;
    background: #fff;
    border-collapse: separate;
}

th,
td {
    padding: 12px 0;
    text-align: left;
    border-bottom: 1px solid #ebeef5;
}

.table-title,
.table-content {
    padding: 0 8px;
}
</style>
