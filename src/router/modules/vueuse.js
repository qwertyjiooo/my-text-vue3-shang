export const vueuse = [
  {
    path: "/vueuse",
    component: () => import("@/layout/index.vue"),
    name: "VueUse",
    redirect: "/demo1",
    meta: {
      title: "VueUse",
      isShow: true,
    },
    children: [
      {
        path: "/demo1",
        name: "VueUseDemo1",
        component: () => import("@/views/vueuse/demo1.vue"),
        meta: {
          title: "VueUseDemo1",
        },
      },
    ],
  },
];
