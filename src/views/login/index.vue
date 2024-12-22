<template>
    <div class="login">
        <div class="login-box">
            <div class="login-title" :class="{
                'login-title-isLogin': isHover === 1,
                'login-title-isRegister': isHover === 2
            }">
                <div class="login-title-text" style="text-align: center;">
                    <el-button @click="isLogin" class="login-title-button"
                        :class="{ 'isLogin-title-button': isHover === 1 }">去登录</el-button>
                    <el-button @click="isRegister" class="register-title-button"
                        :class="{ 'isRegister-title-button': isHover === 2 }">去注册</el-button>
                </div>
            </div>
            <div class="login-input">

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
</script>

<style lang='less' scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-color: orange;
    padding-top: 40px;

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
            width: 40%;
            height: 100%;
            background-color: #ccc;
            border-radius: 10px 100px 100px 10px;

            .login-title-text {
                width: 100%;
                height: 100%;

                .login-title-button {
                    position: absolute;
                    right: 50%;
                    transform: translateX(50%);
                }
                .isRegister-title-button {
                    animation: login .5s forwards;
                }

                @keyframes login {
                    0% {
                        right: 50%;
                    }

                    100% {
                        right: 0;
                        transform: translateX(50%);
                        opacity: 0;
                    }
                }

                .register-title-button {
                    position: absolute;
                    left: 100px;
                    top: 50%;
                    transform: translateX(-50%) translateY(-50%);
                }

                .isRegister-title-button {
                    animation: register 1s forwards;
                }

                @keyframes register {
                    0% {
                        left: 100px;
                    }

                    100% {
                        left: 0;
                        transform: translateX(-50%) translateY(-50%);
                        opacity: 0;
                    }
                }
            }
        }

        .login-title-isLogin {
            animation: expand-shrink 2s forwards;
        }

        @keyframes expand-shrink {
            0% {
                width: 40%;
                left: 60%;
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
                width: 40%;
                left: 0;
                border-radius: 10px 100px 100px 10px;
            }
        }

        .login-title-isRegister {
            animation: shrink-expand 1s forwards;
        }

        @keyframes shrink-expand {
            0% {
                width: 40%;
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
                width: 40%;
                left: 60%;
                border-radius: 100px 10px 10px 100px;
            }
        }
    }
}
</style>