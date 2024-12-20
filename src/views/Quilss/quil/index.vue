<template>
    <div>
        <h1>Quill</h1>
        <div ref="editorContainer" class="quill-editor-container"></div>
        <div style="height: 20px;"></div>
        <el-button type="primary" @click="handleSave">保存</el-button>
        <!-- 横线 -->
        <!-- 间隔 -->
        <div style="height: 20px;"></div>
        <hr />
        <div>
            <el-button>展示结果</el-button>
            <div style="height: 20px;"></div>
            <div ref="quillResult" v-html="quills"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

const editorContainer = ref(null)
const quills = ref(null)
const quillResult = ref(null)

const handleSave = () => {
    quills.value = editorContainer.value.querySelector('.ql-editor').innerHTML
    console.log(quillResult.value);
}
onMounted(() => {
    if (editorContainer.value) {
        new Quill(editorContainer.value, {
            theme: 'snow',
            modules: {
                toolbar: [
                    [{ header: '1' }, { header: '2' }, { font: [] }],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['bold', 'italic', 'underline'],
                    [{ align: [] }],
                    ['link'],
                    ['image'],
                    ['blockquote'],
                    [{ script: 'sub' }, { script: 'super' }],
                    [{ direction: 'rtl' }],
                ],
            },
        })
    }
})
</script>

<style scoped>
.quill-editor-container {
    height: 400px;
}
</style>