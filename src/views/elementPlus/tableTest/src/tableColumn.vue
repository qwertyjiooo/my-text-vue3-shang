<template>
    <div class="tableColumn">
        <div v-show="false">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useTableStore } from '@/store/modules/table'

const tableStore = useTableStore()

const props = defineProps({
    prop: {
        type: String,
        default: ''
    },
    lable: {
        type: String,
        default: ''
    },
})

const slots = useSlots()  // 获取插槽内容
const slotElements = ref([])  // 存储插槽元素
const slotNames = () => {
    // 获取插槽内容并存储到数组
    if (!slots.default) return
    slotElements.value = Array.from(slots.default())
    tableStore.setSlotData(slotElements.value)

}

onMounted(() => {
    tableStore.setColumn(props)
    slotNames()
})

</script>

<style lang="less" scoped></style>

<!--
 * @Author: shenxh
 * @Date: 2022-05-18 15:32:51
 * @LastEditors: shenxh
 * @LastEditTime: 2022-05-18 15:32:51
 * @Description: 表格列
-->