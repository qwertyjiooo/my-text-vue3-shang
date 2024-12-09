import { defineStore } from "pinia";

export const useTableStore = defineStore("table", {
  state: () => ({
    tableData: [],
    prop: [],
    lable: [],
    slotDsata: [],
  }),
  getters: {
    // 处理tableData 数据
    filteredData: (state) => {
      return state.tableData.map((item) => {
        return state.prop.reduce((acc, key) => {
          if (key in item) {
            acc[key] = item[key];
          }
          return acc;
        }, {});
      });
    },
  },
  actions: {
    setTable(data) {
      this.tableData = data;
    },
    setColumn(data) {
      this.lable.push(data.lable);
      if (data.prop) this.prop.push(data.prop);
    },
    setSlotData(data) {
      this.slotDsata = data;
    },
  },
});
