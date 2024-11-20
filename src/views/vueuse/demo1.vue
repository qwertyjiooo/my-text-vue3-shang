<template>
    <div>
        <div style="margin-left: 40%;" class="w-40 bg-red-100">
            <h1>鼠标位置：</h1>
            <h1>x:{{ x }}</h1>
            <h1>y:{{ y }}</h1>
            <br>
            <h1>鼠标是否按下</h1>
            <h1>{{ pressed }}</h1>
            <br>
            <h1>鼠标获取的文本</h1>
            <h1>{{ state.text }}</h1>
            <br>
        </div>
        <!-- <div style="margin-left: 40%; 
                    padding: 40px;
                    background-color: #f0f0f0;
                    width: 500px; height: 500px;"  
                    ref="container" 
        >   
            <h1>tilt: {{ tilt }}</h1>
            <h1>roll: {{ roll }}</h1>
            <h1>source: {{ source }}</h1>
            <div :style="{ 
                    transform: `rotateX(${tilt}deg) rotateY(${tilt}deg) rotate(${roll}deg)`,
                    transition: 'transform 0.1s',
                }"
                style="width: 100px;height: 100px;background-color: beige;"
            >
            </div>
            
        </div> -->
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMouse, useMousePressed, useTextSelection, useParallax } from '@vueuse/core'

const { x, y } = useMouse(); // 获取鼠标位置
const { pressed } = useMousePressed(); // 获取鼠标是否按下
const state = useTextSelection(); // 获取文本选中状态
const container = ref(null) // 获取容器
const { tilt, roll, source } = useParallax(container) // 获取倾斜和滚动状态

</script>

<style lang='less' scoped></style>