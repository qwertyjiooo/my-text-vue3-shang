<template>
    <div class="bradcrumb-item" @click="to ? router.push(to) : ''">
        <slot></slot>
        <div class="iconfont icon-right">{{ breadcrumb.separator }}</div>
    </div>
</template>

<script setup>
import { defineProps, inject} from 'vue'
// 引入路由
import { useRouter } from 'vue-router'
// 获取路由实例
const router = useRouter()

defineProps({
    to: {
        type: String,
        default: ''
    }
})

const breadcrumb = inject('breadcrumb')

</script>

<style lang="less" scoped>
.bradcrumb-item {
    display: flex;
    cursor: pointer;
    font-weight: 600;
}

.iconfont {
    padding: 0 10px;
}
</style>
