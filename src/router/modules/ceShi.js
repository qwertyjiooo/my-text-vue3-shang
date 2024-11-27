export const ceShi = [
  {
    path: "/ceShi",
    component: () => import("@/layout/index.vue"),
    name: "测试",
    redirect: "/my",
    meta: {
      title: "pinia",
      isShow: true,
    },
    children: [
      {
        path: "/my",
        name: "My",
        component: () => import("@/views/my/index.vue"),
        meta: {
          title: "简单传值",
        },
      },
    ],
  },
];
