<template>
  <div class="common-layout">
    <el-container style="height: 100vh;">
      <el-scrollbar>
        <el-aside width="200px">
          <MenuList></MenuList>
        </el-aside>
      </el-scrollbar>
      <el-container>
        <el-header>Header</el-header>
        <el-scrollbar>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-scrollbar>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import MenuList from './menu.vue'
</script>

<style lang="less" scoped></style>
