import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

import { authRoutes } from "@/routes";
import { createGuest, getGuest } from "./data-service";

const authConfig: NextAuthConfig = {
  providers: [Google],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existingGuest = await getGuest(user.email!);
        if (!existingGuest)
          await createGuest({ email: user.email!, fullName: user.name! });

        return true;
      } catch (error) {
        return false;
      }
    },
    async session({ session }) {
      const guest = await getGuest(session.user.email!);
      if (!guest) throw new Error("Guest can not be found");

      return {
        ...session,
        user: {
          ...session.user,
          guestId: guest.id,
        },
      };
    },
  },
  pages: {
    signIn: authRoutes.login.url,
  },
};

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
