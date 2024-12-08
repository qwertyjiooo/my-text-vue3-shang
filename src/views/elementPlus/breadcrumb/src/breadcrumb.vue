<template>
    <div class="gpy-breadcrumb" aria-label="Breadcrumb" role="navigation">
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps({
    separator: {
        type: String,
        default: '/'
    }
})
provide('breadcrumb', props)
</script>

<style lang="less">
// gpy-breadcrumb 清楚最后一个元素的span
.gpy-breadcrumb {
    display: flex;
    align-items: center;
}

.gpy-breadcrumb>.bradcrumb-item:last-child .iconfont {
    display: none;
}

.gpy-breadcrumb>.bradcrumb-item:last-child {
    color: #999999;
    // 鼠标移入时显示禁止图标
    &:hover {
        cursor: not-allowed;
    }
}
</style>
