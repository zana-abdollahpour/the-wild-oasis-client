import type { MiddlewareConfig } from "next/server";

import { mainRoutes } from "./routes";
import { auth } from "./utils/auth";

export const middleware = auth;

export const config: MiddlewareConfig = {
  matcher: [mainRoutes.account.url],
};
