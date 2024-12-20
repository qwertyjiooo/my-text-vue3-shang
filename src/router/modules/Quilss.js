export const Quilss = [
    {
      path: "/Quilss",
      component: () => import("@/layout/index.vue"),
      name: "elementPlus",
      redirect: "/Quilss/quil",
      meta: {
        title: "富文本试用",
        isShow: true,
      },
      children: [
        {
          path: "/Quilss/quil",
          name: "quil",
          component: () => import("@/views/Quilss/quil/index.vue"),
          meta: {
            title: "Quil富文本",
          },
        },
      ],
    },
  ];