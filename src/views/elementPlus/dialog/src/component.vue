<template>
    <!-- 定义弹出动画和关闭动画 -->
    <transition name="fade">
        <div 
            v-show="visible"
            class="dialog"
            @click="handleBackdropClick"
        >
            <div class="dialog-content" :style="content" >
                <div class="dialog-header">
                    <div>{{ title }}</div>
                    <!-- 关闭弹窗 -->
                    <div class="dialog-icon-close" @click="closeDialog">X</div>
                </div>
                <!-- 插槽内容 -->
                 <div class="dialog-body">
                    <slot></slot>
                 </div>
                <!-- 插槽底部按钮 -->
                <div class="dialog-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, defineEmits} from 'vue'
const props = defineProps({
    title: {
        type: String,
        default: '标题'
    },
    width: {
        type: String || Number,
        default: 500
    },
    height: {
        type: String || Number,
        default: ''
    },
    padding: {
        type: Number,
        default: 20
    },
    borderRadius: {
        type: Number,
        default: 10
    },
    // 是否显示对话框
    visible: {
        type: Boolean,
        default: false
    },
    // 点击遮罩层是否关闭弹窗
    closeOnClickModal: {
        type: Boolean,
        default: true
    }
})
const emit = defineEmits(['update:visible'])
const content = ref({
    width: props.width + 'px',
    height: props.height + 'px',
    padding: props.padding + 'px',
    borderRadius: props.borderRadius + 'px',
})
const closeDialog = () => {
    // 触发父组件的visible
    emit('update:visible', false)
}
const handleBackdropClick = (e) => {
    if (props.closeOnClickModal) {
        if (e.target.className === 'dialog') {
            closeDialog()
        }
    }
}

</script>

<style lang="less" scoped>
.dialog{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.dialog-content{
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.dialog-header{
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
}
.dialog-body{
    width: 100%;
    flex: 1;
    margin-top: 20px;
    overflow-y: auto;
}
.dialog-footer{
    width: 100%;
    padding-top: 20px;
    display: flex;
    justify-content: center;
}
.dialog-icon-close{
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
}
.dialog-icon-close:hover{
    color: #40aaff;
}
.dialog-line{
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin: 10px 0;
}


// 定义进入和离开的起始状态
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
// 定义进入和离开的结束状态
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.fade-enter-active {
  // 定义淡入动画的起始状态
  animation: fade-in 0.5s;
}
.fade-leave-active {
  // 定义淡出动画的起始状态
  // 此处的reverse表示淡出动画是淡入动画的逆向动画
  animation: fade-in 0.3s reverse;
}
// 定义淡入动画
@keyframes fade-in {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}
</style>
