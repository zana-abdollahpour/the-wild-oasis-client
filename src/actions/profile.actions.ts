"use server";

import { revalidatePath } from "next/cache";
import type { Session } from "next-auth";

import { accountPageRoutes } from "@/routes";
import { auth } from "@/utils/auth";
import { updateGuest } from "@/utils/data-service";

export async function updateProfileAction(formData: FormData) {
  const session = (await auth()) as Session & { user: { guestId: string } };
  if (!session) throw new Error("You must be logged in!");

  const nationalID = formData.get("nationalID") as string;
  const [nationality, countryFlag] = (
    formData.get("nationality") as string
  ).split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updateData = { nationality, countryFlag, nationalID };

  await updateGuest(+session?.user?.guestId, updateData);

  revalidatePath(accountPageRoutes.guestProfile.url);
}
