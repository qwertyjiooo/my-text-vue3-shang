<template>
    <div style="font-size: 24px;">模板引用 (Refs)</div>
    <div>( 通过 ref,父组件可以直接访问子组件的属性和方法。 )</div>
    <br>
    <div>{{aaa}}</div>
    <br>
</template>

<script setup>
import { defineExpose, ref} from 'vue'
const aaa = ref('')
const someMethod = () => {
    aaa.value = '子组件方法被调用了'
}
defineExpose({
    someMethod
})

</script>

<style lang='less' scoped></style>