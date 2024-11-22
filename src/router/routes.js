import { loginRouter } from "./modules/login";
import { homeRouter } from "./modules/home";
import { com } from "./modules/com";
import { vueuse } from "./modules/vueuse";
import { ceShi } from "./modules/ceShi";
import { anyRoute } from "./modules/anyRoute";
import { notFoundRouter } from "./modules/404";

export const routes = [
  ...loginRouter,
  ...homeRouter,
  ...com,
  ...vueuse,
  ...ceShi,
  ...notFoundRouter,
  ...anyRoute,
  
];
// 异步路由
// export const asyncRoute = [
//   {
//     path: "/com",
//     component: () => import("@/layout/index.vue"),
//     name: "Com",
//     redirect: "/communication",
//     meta: {
//       title: "组件传值",
//     },
//     children: [
//       {
//         path: "/communication",
//         name: "Communication",
//         component: () => import("@/views/communication/index.vue"),
//         meta: {
//           title: "组件传值",
//         },
//       },
//     ],
//   },
//   {
//     path: "/vueuse",
//     component: () => import("@/layout/index.vue"),
//     name: "VueUse",
//     redirect: "/demo1",
//     meta: {
//       title: "VueUse",
//     },
//     children: [
//       {
//         path: "/demo1",
//         name: "VueUseDemo1",
//         component: () => import("@/views/vueuse/demo1.vue"),
//         meta: {
//           title: "VueUseDemo1",
//         },
//       },
//     ],
//   },
//   {
//     path: "/ceShi",
//     component: () => import("@/layout/index.vue"),
//     name: "测试",
//     redirect: "/my",
//     meta: {
//       title: "我的",
//     },
//     children: [
//       {
//         path: "/my",
//         name: "My",
//         component: () => import("@/views/my/index.vue"),
//         meta: {
//           title: "我的",
//         },
//       },
//     ],
//   },
// ];
// 输入任意路由
// export const anyRoute = {
//   //任意路由
//   path: '/:pathMatch(.*)*',
//   redirect: '/404',
//   name: 'Any',
//   meta: {
//     title: '任意路由',
//     hidden: true,
//     icon: 'DataLine',
//   },
// }
