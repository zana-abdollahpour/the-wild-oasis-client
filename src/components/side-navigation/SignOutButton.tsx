import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "@/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button
        type="submit"
        className="flex w-fit items-center gap-4 bg-primary-900 bg-opacity-20 px-5 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100 md:w-full"
      >
        <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-primary-600" />
        <span className="hidden md:block">Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
