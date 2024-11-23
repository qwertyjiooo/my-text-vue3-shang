export const screenRouter = [
    {
        path: "/screen",
        name: "screen",
        component: () => import("@/views/screen/index.vue"),
        meta: {
            title: "数据大屏",
            isShow: true,
        },
    }
];