<template>
    <div style="width: 100%;">
        <el-container>
            <!-- 头部 -->
            <el-header style="background-color: antiquewhite;">
                <Header />
            </el-header>
            <!-- 内容区 -->

            <el-main>
                <el-scrollbar>
                    <div style="padding: 10px;">
                        <router-view></router-view>
                    </div>
                </el-scrollbar>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
import Header from '@/layout/Header/index.vue'

</script>

<style lang='less' scoped>
.el-main {
    padding: 0;
    margin: 0;
    // background-color: aquamarine;
    height: calc(100vh - 60px);
}
.el-header {
    padding: 10px;
    margin: 0;
}
</style>