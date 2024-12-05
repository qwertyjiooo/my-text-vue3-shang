export const homeRouter = [
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "",
    redirect: "/home", // 作用是当用户访问根路径时,自动跳转到home页面
    meta: {
      title: "",
      isShow: true,
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
];
