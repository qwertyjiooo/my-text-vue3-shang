<template>
    <el-button @click="saveToken" type="primary">登录</el-button>
</template>

<script setup>
import { ElMessage  } from 'element-plus'
import { useRouter } from 'vue-router'
import { api } from '../../api'

const router = useRouter()
const list = {
    username: "15938650343",
    password: "123456"
}

const saveToken = () => {
    localStorage.setItem('token', '123456')
    ElMessage .success('登录成功')
    router.push('/home')

    // api.login(list).then(res => {
    //     if (res.response === 'ok') {
    //         ElMessage.success('登录成功')
    //         localStorage.setItem('token', res.data.sessionId)
    //         router.push('/home')
    //     }
    // })
}

</script>

<style lang='less' scoped></style>