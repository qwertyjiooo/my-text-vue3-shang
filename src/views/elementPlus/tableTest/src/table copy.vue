<template>
    <div style="width: 100%;">
        <table ref="table" style="width: 100%;">
            <slot></slot>
        </table>
        <button @click="mergeTableSections">合并表格</button>
    </div>
    <el-button @click="bbb">修改数据</el-button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const data = ref([
    { name: '张三', age: 18, gender: '男' },
    { name: '李四', age: 20, gender: '女' },
    { name: '王', age: 22, gender: '男' },
    { name: '赵六', age: 24, gender: '女' },
]);
const bbb = () => {
    data.value.forEach((item, index) => {
        item.name = '666'
    })
    console.log(data.value);
}
// 创建 table 引用
const table = ref(null);

// 合并表格的方法
const mergeTableSections = () => {
    const tableElement = table.value;

    // 获取所有的 <thead> 和 <tbody> 元素 使用Array.from()方法将HTMLCollection转换为数组
    const theads = Array.from(tableElement.getElementsByTagName('thead'));
    const tbodys = Array.from(tableElement.getElementsByTagName('tbody'));
    console.log(theads);
    // 如果有多个thead，合并列标题
    if (theads.length > 1) {
        const firstThead = theads[0];
        // 遍历所有的 theads
        theads.forEach((thead, index) => {
            if (index > 0) {
                const secondTheadCells = thead.getElementsByTagName('th');
                // 将第index个thead中的th元素复制到第一个thead中
                for (let i = 0; i < secondTheadCells.length; i++) {
                    const originalTh = secondTheadCells[i];
                    const newTh = originalTh.cloneNode(true);  // 克隆原始 <th> 元素

                    // 将克隆的 <th> 元素添加到第一个 <thead>
                    firstThead.querySelector('tr').appendChild(newTh);
                }
                // 删除第index个thead
                thead.remove();
            }
        })
    }

    // 获取所有的 <tbody> 元素
    if (tbodys.length > 1) {
        const firstTbody = tbodys[0];
        // 遍历所有的 tbodys
        tbodys.forEach((tbody, index) => {
            if (index > 0) {
                // 获取第index个 tbody 中的所有行
                const secondTbodyRows = tbody.querySelectorAll('tr');
                // 遍历第index个 tbody 中的每一行
                secondTbodyRows.forEach((secondRow, index) => {
                    const firstRow = firstTbody.querySelectorAll('tr')[index];

                    // 如果第一个 tbody 中有对应的行
                    if (firstRow) {
                        // 获取第index个 tbody 当前行的所有 <td>
                        const secondRowCells = secondRow.querySelectorAll('td');

                        // 将第index个 tbody 当前行的 <td> 添加到第一个 tbody 对应行的 <td> 中
                        secondRowCells.forEach((cell, i) => {
                            const firstRowCell = firstRow.querySelectorAll('td')[i];
                            const newCell = cell.cloneNode(true);  // 克隆原始 <td> 元素

                            // 合并：在现有的第一个 <td> 后追加新的 <td>
                            firstRow.appendChild(newCell);
                        });
                    } else {
                        // 如果第一个 tbody 中没有对应的行，则创建新的行
                        const newRow = document.createElement('tr');
                        secondRow.querySelectorAll('td').forEach(cell => {
                            const newCell = cell.cloneNode(true);  // 克隆原始 <td> 元素

                            newRow.appendChild(newCell);
                        });
                        firstTbody.appendChild(newRow);
                    }
                });

                // 删除第index个tbody
                tbody.remove();
            }
        })
    }
};

// 在 mounted 生命周期钩子中合并表格
onMounted(() => {
    mergeTableSections();
});
</script>

<style scoped>
table {
    border-collapse: collapse;
    margin: 20px 0;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

button {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>