export const anyRoute = [
  {
    //任意路由
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "任意路由",
      hidden: false,
      icon: "DataLine",
    },
  },
];
