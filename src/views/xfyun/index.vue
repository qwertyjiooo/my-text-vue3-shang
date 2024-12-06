<template>
    <div class="text-gray-500">讯飞大模型（已放弃）</div>
    <br>
    <div>当前时间：{{ date }}</div>
</template>

<script setup>
import { ref } from "vue";
import { fromDate } from "@/utils/fromDate";
const date = fromDate();
const aaa = ref({
    name: "aaa",
    age: 18,
});
</script>

<style lang="less" scoped></style>
