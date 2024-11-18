<template>
    <div>登录页</div>
    <el-button @click="saveToken" type="primary">点击保存token</el-button>
</template>

<script setup>
import { ElMessage  } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()

const saveToken = () => {
    localStorage.setItem('token', '123456')
    ElMessage .success('登录成功')
    router.push('/home')
}

</script>

<style lang='less' scoped></style>