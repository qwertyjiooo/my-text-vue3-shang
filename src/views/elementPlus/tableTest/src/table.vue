<template>
    <div>
        <table ref="table" style="width: 100%;">
            <thead>
                <tr>
                    <th style="width: 100px;">列标题1</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>11</td>
                </tr>
                <tr>
                    <td>12</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th>列标题2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>21</td>
                </tr>
                <tr>
                    <td>22</td>
                </tr>
            </tbody>
        </table>
        <button @click="mergeTableSections">合并表格</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 创建 table 引用
const table = ref(null);

// 合并表格的方法
const mergeTableSections = () => {
    const tableElement = table.value;

    // 获取所有的 <thead> 和 <tbody> 元素
    const theads = Array.from(tableElement.getElementsByTagName('thead'));
    const tbodys = Array.from(tableElement.getElementsByTagName('tbody'));
    console.log(theads, tbodys);
    

    // 如果有多个thead，合并列标题
    if (theads.length > 1) {
        const firstThead = theads[0];
        const secondThead = theads[1];

        // 获取第二个thead中的th元素
        const secondTheadCells = secondThead.getElementsByTagName('th');

        // 将第二个thead中的th元素复制到第一个thead中
        for (let i = 0; i < secondTheadCells.length; i++) {
            const originalTh = secondTheadCells[i];
            const newTh = originalTh.cloneNode(true);  // 克隆原始 <th> 元素

            // 将克隆的 <th> 元素添加到第一个 <thead>
            firstThead.querySelector('tr').appendChild(newTh);
        }

        // 删除第二个thead
        secondThead.remove();
    }

    // 获取所有的 <tbody> 元素
    if (tbodys.length > 1) {
        const firstTbody = tbodys[0];
        const secondTbody = tbodys[1];

        // 获取第二个 tbody 中的所有行
        const secondTbodyRows = secondTbody.querySelectorAll('tr');

        // 遍历第二个 tbody 中的每一行
        secondTbodyRows.forEach((secondRow, index) => {
            const firstRow = firstTbody.querySelectorAll('tr')[index];

            // 如果第一个 tbody 中有对应的行
            if (firstRow) {
                // 获取第二个 tbody 当前行的所有 <td>
                const secondRowCells = secondRow.querySelectorAll('td');

                // 将第二个 tbody 当前行的 <td> 添加到第一个 tbody 对应行的 <td> 中
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

        // 删除第二个tbody
        secondTbody.remove();
    }
};

// 在 mounted 生命周期钩子中合并表格
onMounted(() => {
    // mergeTableSections();
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