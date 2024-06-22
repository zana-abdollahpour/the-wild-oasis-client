import type { MiddlewareConfig } from "next/server";

import { auth } from "./utils/auth";

export const middleware = auth;

export const config: MiddlewareConfig = {
  matcher: ["/account"],
};
