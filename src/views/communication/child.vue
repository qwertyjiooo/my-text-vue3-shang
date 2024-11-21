<template>
    <div style="font-size: 24px;">父组件传给子组件的值</div>
    <br>
    <div>子组件：父组件传来的值：{{props.msg}}</div>
    <br>
    <div style="font-size: 24px;">子组件向父组件传值</div>
    <br>
    <el-button @click="handleClick">点我向父组件传值</el-button>
    <br>
</template>

<script setup>
import { ref } from 'vue'
// 接收父组件传来的值
const props = defineProps(['msg'])
// 向父组件传值
const massage = '来自子组件的问候'
const emit = defineEmits(['greet'])
const handleClick = () => {
    emit('greet', massage)
}

</script>
<style lang='less' scoped></style>