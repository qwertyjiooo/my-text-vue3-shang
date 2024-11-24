<template>
    <div class="screen">
        <div ref="content" class="content">
            <div class="text"></div>
            <br>
            <div class="text"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';

const content = ref(null);

// 更新尺寸的函数 
const updateSize = () => {
    const portWidth = window.innerWidth / 1980;
    const portHeight = window.innerHeight / 1080;

    const proportion = portWidth / portHeight;
    const wt = 100 / proportion;
    const ht = 100 * proportion;

    if (proportion > 1) {
        content.value.style.width = `${wt}vw`;
        content.value.style.height = '100vh';
    } else {
        content.value.style.width = '100vw';
        content.value.style.height = `${ht}vh`;
    }
};

onMounted(() => {
    // 初始化时调用一次
    updateSize();

    // 监听窗口大小变化
    window.addEventListener('resize', updateSize);
});

// 组件卸载时移除事件监听器
onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSize);
});
</script>

<style lang="less" scoped>
.screen {
    width: 100vw;
    height: 100vh;
    background-color: rgb(252, 163, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/image/pexels-raybilcliff-21365842.jpg');
    background-size: cover;
    background-position: center;
}

.content {
    background-color: aqua;
    .text{
        width: 10%;
        height: 10%;
        background-color: red;
        font-size: 150%;
    }
}
</style>
