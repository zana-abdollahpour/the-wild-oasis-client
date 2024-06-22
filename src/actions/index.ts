"use server";

import { mainRoutes } from "@/routes";
import { signIn } from "@/utils/auth";

export async function signInAction() {
  await signIn("google", { redirectTo: mainRoutes.account.url });
}
