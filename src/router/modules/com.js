export const com = [
  {
    path: "/com",
    component: () => import("@/layout/index.vue"),
    name: "Com",
    redirect: "/communication",
    meta: {
      title: "组件间通信",
      isShow: true,
    },
    children: [
      {
        path: "/communication",
        name: "Communication",
        component: () => import("@/views/communication/index.vue"),
        meta: {
          title: "组件传值",
        },
      },
    ],
  },
];
