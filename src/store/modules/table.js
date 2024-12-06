import { defineStore } from 'pinia'

export const useTableStore = defineStore('table', {
  state: () => ({
    tableData: [],
    table: [],
    lable: [],
  }),
  getters: {
    setTableData: (state) => state.tableData,
  },
  actions: {
    setTableDataAction(data) {
      this.tableData = data
    },
    setTableAction(lable) {
      this.lable.push(lable)
    }
  }
})