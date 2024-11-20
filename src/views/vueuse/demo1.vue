<template>
    <div>
        <div style="margin-left: 40%;" class="w-40 bg-red-600">
            <h1>鼠标位置：</h1>
            <h1>x:{{ x }}</h1>
            <h1>y:{{ y }}</h1>
            <br>
            <h1>鼠标是否按下</h1>
            <h1>{{ pressed }}</h1>
            <br>
            <h1>鼠标获取的文本</h1>
            <h1>{{ state.text }}</h1>
        </div>
    </div>
</template>

<script setup>
import { useMouse, useMousePressed, useTextSelection } from '@vueuse/core'

const { x, y } = useMouse(); // 获取鼠标位置
const { pressed } = useMousePressed(); // 获取鼠标是否按下
const state = useTextSelection(); // 获取文本选中状态

</script>

<style lang='less' scoped></style>