export const elementPlus = [
  {
    path: "/elementPlus",
    component: () => import("@/layout/index.vue"),
    name: "elementPlus",
    redirect: "/elementPlus/dialog",
    meta: {
      title: "防elementPlus组件",
      isShow: true,
    },
    children: [
      {
        path: "/elementPlus/dialog",
        name: "dialog",
        component: () => import("@/views/elementPlus/dialog/index.vue"),
        meta: {
          title: "dialog-对话框",
        },
      },
      {
        path: "/elementPlus/breadcrumb",
        name: "breadcrumb",
        component: () => import("@/views/elementPlus/breadcrumb/index.vue"),
        meta: {
          title: "breadcrumb-面包屑",
        },
      },
      {
        path: "/elementPlus/table",
        name: "table",
        component: () => import("@/views/elementPlus/table/index.vue"),
        meta: {
          title: "table-表格",
        },
      },
      {
        path: "/elementPlus/tableTest",
        name: "tableTest",
        component: () => import("@/views/elementPlus/tableTest/index.vue"),
        meta: {
          title: "table-表格",
        },
      },
    ],
  },
];
