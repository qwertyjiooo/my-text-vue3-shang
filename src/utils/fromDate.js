const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const day = date.getDate().toString().padStart(2, "0");
const hours = date.getHours().toString().padStart(2, "0");
const minutes = date.getMinutes().toString().padStart(2, "0");
const seconds = date.getSeconds().toString().padStart(2, "0");

export const fromDate = () => {
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  // 返回如：2024-12-05 15:31:23
};
