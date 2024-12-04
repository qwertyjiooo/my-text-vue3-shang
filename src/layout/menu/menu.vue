<template>
    <el-menu text-color="black" active-text-color="red" :default-active="activeIndex"
        style="height: calc(100vh - 60px);">
        <el-scrollbar>
            <template v-for="(item) in routesList" :key="item.path">
                <!-- 没有子路由 -->
                <el-menu-item v-if="!item.children" :index="item.path" @click="handleMenuClick(item.path)">
                    <span>{{ item.meta?.title }}</span>
                </el-menu-item>


                <!-- 有子路由 -->
                <el-sub-menu v-else :index="item.path">
                    <template #title>
                        <span>{{ item.meta?.title }}</span>
                    </template>
                    <template v-for="subItem in item.children" :key="subItem.path">
                        <!-- 子路由中没有子路由 -->
                        <el-menu-item v-if="!subItem.children" :index="subItem.path" @click="handleMenuClick(subItem.path)">
                            <span>{{ subItem.meta?.title }}</span>
                        </el-menu-item>

                        
                        <!-- 子路由中还有子路由 -->
                        <el-sub-menu v-else :index="subItem.path">
                            <template #title>
                                <span>{{ subItem.meta?.title }}</span>
                            </template>
                            <template v-for="subSubItem in subItem.children" :key="subSubItem.path" >
                                <el-menu-item :index="subSubItem.path" @click="handleMenuClick(subSubItem.path)">
                                    <span>{{ subSubItem.meta?.title }}</span>
                                </el-menu-item>
                            </template>
                        </el-sub-menu>
                    </template>
                </el-sub-menu>
            </template>
        </el-scrollbar>
    </el-menu>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { routes } from '@/router/routes.js';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const routesList = ref([]);
const activeIndex = ref('');

onMounted(() => {
    routes.forEach(item => {
        if (item.meta?.isShow) {
            if (item.name !== '') {
                routesList.value.push(item)
            } else {
                routesList.value.push(...item.children)
            }
        }
    })
    activeIndex.value = route.path;
});

const handleMenuClick = (path) => {
    activeIndex.value = path;
    router.push(path);
}
</script>

<style lang='less' scoped></style>