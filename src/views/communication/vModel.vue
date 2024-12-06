<template>
    <div @click="aaa">v-model 组件传值</div>
    <br>
    <el-input :value="msg2" @input="updateName"/>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps(['msg2'])
const emit = defineEmits(['update:msg2']);
const updateName = (e) => {
    // emit('update:msg2', e.target.value);
}
const aaa = () => {
}

</script>

<style lang='less' scoped>

</style>