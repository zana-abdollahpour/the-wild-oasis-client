"use client";

import { useFormStatus } from "react-dom";

export default function FormButton({
  children,
  pendingContent = "loading...",
}: {
  children: React.ReactNode;
  pendingContent: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? pendingContent : children}
    </button>
  );
}
