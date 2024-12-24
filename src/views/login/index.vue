<template>
    <div class="login">
        <div class="login-box">
            <div class="login-title" :class="{
                'login-title-isLogin': isHover === 1,
                'login-title-isRegister': isHover === 2
            }">
                <div class="login-title-text">
                    <div class="login-title-button"
                        :class="{ 'isLogin-title-button': isHover === 1, 'isRegisterLogin': isHover === 2 }">
                        <div style="color: #fff;font-weight: 700;font-size: 26px;">欢迎回来！</div>
                        <br>
                        <div style="color: #fff;font-size: 16px;">已经有账户了？</div>
                        <br>
                        <el-button @click="isLogin">去登录</el-button>
                    </div>
                    <div class="register-title-button"
                        :class="{ 'isRegister-title-button': isHover === 2, 'isLoginRegister': isHover === 1 }">
                        <div style="color: #fff;font-weight: 700;font-size: 26px;">你好，欢迎</div>
                        <br>
                        <div style="color: #fff;font-size: 16px;">没有账户？</div>
                        <br>
                        <el-button @click="isRegister">去注册</el-button>
                    </div>
                </div>
            </div>
            <div style="display: flex;height: 100%;">
                <div class="login-input">
                    <div style="font-size: 26px;font-weight: 700;">register</div>
                    <br>
                    <el-input v-model="list.username" placeholder="请输入用户名"></el-input>
                    <br>
                    <el-input v-model="list.password" placeholder="请输入密码"></el-input>
                    <br>
                    <el-input v-model="list.password" placeholder="请再次输入密码"></el-input>
                    <br>
                    <el-button type="primary" @click="reSaveToken">注册</el-button>
                </div>
                <div class="login-input">
                    <div style="font-size: 26px;font-weight: 700;">login</div>
                    <br>
                    <el-input v-model="list.username" placeholder="请输入用户名"></el-input>
                    <br>
                    <el-input v-model="list.password" placeholder="请输入密码"></el-input>
                    <br>
                    <el-button type="primary" @click="saveToken">登录</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { api } from '../../api'

const router = useRouter()
const list = {
    username: "15938650343",
    password: "123456"
}

const isHover = ref(0)
const isLogin = () => {
    isHover.value = 1
}
const isRegister = () => {
    isHover.value = 2
}
{/* <el-button @click="saveToken" type="primary">登录</el-button> */ }

const saveToken = () => {
    localStorage.setItem('token', '123456')
    ElMessage.success('登录成功')
    router.push('/home')
}
const reSaveToken = () => {
    ElMessage.success('注册成功')
    setTimeout(() => {
        isHover.value = 1
    }, 1000)
}
</script>

<style lang='less' scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-color: orange;
    padding-top: 150px;

    .login-box {
        width: 700px;
        height: 400px;
        margin: 0 auto;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        position: relative;
        overflow: hidden;

        .login-title {
            position: absolute;
            width: 50%;
            height: 100%;
            background-color: #7397ea;
            border-radius: 10px 100px 100px 10px;
            z-index: 2;

            .login-title-text {
                width: 100%;
                height: 100%;
                position: relative;
                overflow: hidden;
            }
        }

        .login-input {
            width: 50%;
            height: 100%;
            z-index: 1;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0 40px;
        }
    }

    // --------------------------------------------------
    // 整体变化
    // 点击登录时整体变化
    .login-title-isLogin {
        animation: expand-shrink 1s forwards;
    }

    @keyframes expand-shrink {
        0% {
            width: 50%;
            left: 50%;
            border-radius: 100px 10px 10px 100px;
        }

        50% {
            width: 100%;
            left: 0;
            border-radius: 10px;
        }

        75% {
            width: 100%;
            left: 0;
            border-radius: 10px;
        }

        100% {
            width: 50%;
            left: 0;
            border-radius: 10px 100px 100px 10px;
        }
    }

    // 点击注册时整体变化
    .login-title-isRegister {
        animation: shrink-expand 1s forwards;
    }

    @keyframes shrink-expand {
        0% {
            width: 50%;
            left: 0;
            border-radius: 10px 100px 100px 10px;
        }

        50% {
            width: 100%;
            left: 0;
            border-radius: 10px;
        }

        75% {
            width: 100%;
            left: 0;
            border-radius: 10px;
        }

        100% {
            width: 50%;
            left: 50%;
            border-radius: 100px 10px 10px 100px;
        }
    }

    // --------------------------------------------------
    // 登录变化
    .login-title-button {
        position: absolute;
        right: -150px;
        top: 50%;
        transform: translateY(-50%);
    }

    .isLogin-title-button {
        animation: login 1s forwards;
    }

    // 点击登录时 登录 变化
    @keyframes login {
        0% {
            right: 150px;
            transform: translateY(-50%);
        }

        50% {
            right: 150px;
            transform: translateY(-50%);
        }

        75% {
            right: 0;
            transform: translateX(100%) translateY(-50%);
        }

        100% {
            right: 0;
            transform: translateX(100%) translateY(-50%);
        }
    }

    // 点击登录时 注册 变化
    .isLoginRegister {
        animation: login-register 1s forwards;
    }

    @keyframes login-register {
        0% {
            left: 0;
            transform: translateX(-100%) translateY(-50%);
        }

        50% {
            left: 0;
            transform: translateX(-100%) translateY(-50%);
        }

        75% {
            left: 0;
            transform: translateX(-100%) translateY(-50%);
        }

        100% {
            left: 150px;
            transform: translateY(-50%);
        }
    }

    // --------------------------------------------------
    // 注册变化
    .register-title-button {
        position: absolute;
        left: 150px;
        top: 50%;
        transform: translateY(-50%);
    }

    .isRegister-title-button {
        animation: register 1s forwards;
    }

    // 点击注册时 注册的变化
    @keyframes register {
        0% {
            left: 150px;
            transform: translateY(-50%);
        }

        50% {
            left: 150px;
            transform: translateY(-50%);
        }

        75% {
            left: 0;
            transform: translateX(-100%) translateY(-50%);
        }

        100% {
            left: 0;
            transform: translateX(-100%) translateY(-50%);
        }
    }

    // 点击注册时 登录的变化
    .isRegisterLogin {
        animation: register-login 1s forwards;
    }

    @keyframes register-login {
        0% {
            right: 0;
            transform: translateX(100%) translateY(-50%);
        }

        50% {
            right: 0;
            transform: translateX(100%) translateY(-50%);
        }

        75% {
            right: 0;
            transform: translateX(100%) translateY(-50%);
        }

        100% {
            right: 150px;
            transform: translateY(-50%);
        }
    }
}
</style>