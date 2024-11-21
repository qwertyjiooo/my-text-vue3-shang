<template>
    <div style="font-size: 24px;">透传 Attributes ($attrs)</div>
    <div>( $attrs 包含了父组件传递给子组件的所有属性,除了那些已经被 props 或 emits 声明的。)</div>
    <br>
    <div>姓名：{{ props.name }} · 年龄{{ attrs.age }} · 爱好：{{ attrs.hobby }}</div>
</template>

<script setup>
import {useAttrs} from 'vue'
const attrs = useAttrs()
const props = defineProps({
    name: {
        type: String,
        default: ''
    }
})

</script>

<style lang='less' scoped></style>