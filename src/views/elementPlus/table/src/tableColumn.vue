<template>
    <div class="table-column"></div>
</template>

<script setup>
import { defineProps, inject, onMounted } from 'vue'

const props = defineProps({
    prop: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: ''
    },
    align: {
        type: String,
        default: ''
    }
})
onMounted(() => {
    const label = inject('column')
    label.value.label.push(props.label)
    label.value.prop.push(props.prop)
    label.value.width.push(props.width)
})

</script>

<style lang="less" scoped>
.table-column {
    flex: 1;

    tr {
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    th {
        padding: 8px 0;
        background: #eeeeee;
        font-weight: 500;
        // 底部边框
        border-bottom: 1px solid #e0e0e0;
    }

    td {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 8px 0;
        border-bottom: 1px solid #e0e0e0;
    }
}
</style>
