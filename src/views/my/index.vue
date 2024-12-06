<template>
    <div class="content">
        <div class="text-red-500">{{ userStore.name }}</div>
        <Button @click="userStore.setName('张三')">
            点击确定
        </Button>
    </div>
</template>
<script setup>
import { getCeshiStore } from '@/store/modules/ceshi'
import { Button } from '@/components/ui/button';

const userStore = getCeshiStore()
</script>
<style scoped lang="less"></style>