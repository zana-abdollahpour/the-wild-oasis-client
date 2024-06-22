"use server";

import { mainRoutes } from "@/routes";
import { signIn, signOut } from "@/utils/auth";

export async function signInAction() {
  await signIn("google", { redirectTo: mainRoutes.account.url });
}

export async function signOutAction() {
  await signOut({ redirectTo: mainRoutes.home.url });
}
