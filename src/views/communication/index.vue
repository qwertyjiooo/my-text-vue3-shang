<template>
    <div style="color: red;font-size: 24px">组件间通信</div>
    <br>
    <!-- 父组件向子组件传值 -->
    <child :msg="msg" @greet = "handleGreet" />
    <br>
    <h1>子组件向父组件传值：{{gre}}</h1>
    <br>
    <!-- 透传Attributes($attrs) -->
    <Attributes name="小明" age="18" hobby="篮球"/>
    <br>
    <!-- 获取子组件的引用 -->
    <getRefs ref="childRef"/>
    <el-button @click="callChildMethod">调用子组件方法</el-button>
</template>

<script setup>
import child from './child.vue'
import Attributes from './Attributes.vue'
import getRefs from './getRefs.vue';
import { ref } from 'vue'
// 父组件向子组件传值
const msg = '父组件传给子组件的值'
// 子组件向父组件传值
const gre = ref('子组件还没问候父组件')
const handleGreet  = (val) => {
    gre.value = val
}
// 获取子组件的引用
const childRef = ref(null)
const callChildMethod = () => {
    childRef.value.someMethod()
}

</script>

<style lang='less' scoped></style>