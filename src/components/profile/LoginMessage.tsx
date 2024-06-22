import Link from "next/link";

import { authRoutes } from "@/routes";

function LoginMessage() {
  return (
    <div className="grid bg-primary-800">
      <p className="self-center py-12 text-center text-xl">
        Please{" "}
        <Link href={authRoutes.login.url} className="text-accent-500 underline">
          login
        </Link>{" "}
        to reserve this
        <br /> cabin right now
      </p>
    </div>
  );
}

export default LoginMessage;
