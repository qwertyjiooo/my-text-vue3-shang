export const notFoundRouter = [
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404/index.vue"),
    meta: {
      title: "404",
      isShow: false,
    }
  },
];
