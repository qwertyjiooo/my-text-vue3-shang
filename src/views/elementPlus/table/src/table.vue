<template>
    <div class="table">
        <table class="table-content">
            <colgroup class="table-colgroup">
                <col v-for="(item, index) in column.label" :key="index" class="table-col"
                    :width="column.width ? column.width[index] : ''" />
            </colgroup>
            <thead class="table-head">
                <tr>
                    <th v-for="(item, index) in column.label" :key="index">
                        <div class="table-text table-head">
                            {{ item }}
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr v-for="(item, index) in sortedData" :key="index" @mousemove="handleMouseover(index)"
                    @mouseleave="handleMouseleave" :class="{ 'table-row-hover': index === hoverIndex || hoverIndex2 }">
                    <td v-for="(res, i) in item" :key="i">
                        <div class="table-text table-body">
                            {{ res }}
                        </div>
                    </td>
                </tr>
                <slot></slot>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, provide, computed } from 'vue'
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
})
// 表格需要的参数 从子组件中获取
const column = ref({
    label: [], // 表头
    prop: [], // 数据字段
    width: [],
})
provide('column', column)
// 计算子组件传入的参数
const sortedData = computed(() => {
    const newData = [];
    props.data.map(item => {
        const orderedItem = {};
        column.value.prop.forEach((key, index) => {
            // 判断data中是否有对应的字段，没有则赋值为空
            if (item.hasOwnProperty(key)) {
                // 将该字段的值赋给对应的字段
                orderedItem[index] = item[key];
            } else {
                orderedItem[index] = '';
            }
        })
        newData.push(orderedItem)
    })
    return newData
})
// 鼠标移入时记录当前行索引
const hoverIndex = ref(-1)
const hoverIndex2 = ref(-1)
// 鼠标移入
const handleMouseover = (index) => {
    hoverIndex.value = index
    hoverIndex2.value = index
}
// 鼠标移出
const handleMouseleave = () => {
    hoverIndex.value = -1
    // 移出时为了达到延迟效果，设置定时器
    setTimeout(() => {
        hoverIndex2.value = -1
    }, 300)
}
</script>

<style lang="less" scoped>
.table {
    width: 100%;
    background: #fff;
    font-size: 14px;
    line-height: 23px;
}

.table-content {
    width: 100%;
}

.table-colgroup {
    display: table-column-group;
    flex: 1;
}

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

.table-text {
    width: 100%;
    padding: 0 12px;
    // 超出一行显示省略号
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}

.table-row-hover {
    // background-color: #ffffff;
    transition: background-color 0.3s ease;
}

.table-row-hover:hover {
    background-color: #f5f7fa;
}
</style>
