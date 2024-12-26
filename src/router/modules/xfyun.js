export const xfyunRouter = [
  {
    path: "/xFYun",
    component: () => import("@/layout/index.vue"),
    name: "xFYun",
    redirect: "/xfyun", // 作用是当用户访问根路径时,自动跳转到home页面
    meta: {
      title: "讯飞大模型",
      isShow: true,
    },
    children: [
      {
        path: "/xfyun",
        name: "xfyun",
        component: () => import("@/views/xfyun/index.vue"),
        meta: {
          title: "讯飞大模型",
        },
      },
    ],
  },
];
