import { loginRouter } from "./modules/login";
import { homeRouter } from "./modules/home";
import { com } from "./modules/com";
import { vueuse } from "./modules/vueuse";
import { ceShi } from "./modules/ceShi";
import { anyRoute } from "./modules/anyRoute";
import { notFoundRouter } from "./modules/404";
import { screenRouter } from "./modules/screen";
import { elementPlus } from "./modules/elementPlus";

export const routes = [
  ...loginRouter,
  ...homeRouter,
  ...com,
  ...vueuse,
  ...ceShi,
  ...notFoundRouter,
  ...anyRoute,
  ...elementPlus,
  ...screenRouter,
];
