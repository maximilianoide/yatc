import { signIn, signOut, useSession } from "next-auth/react";
import { Container } from "./Container";

export function SignInBanner() {
  const { data: session } = useSession();
  if (session) {
    return null;
  }
  return (
    <div className="x-10 fixed bottom-0 flex w-full justify-between bg-primary p-4">
      <p className="text-white">watones</p>
      <div>
        <button
          className="p-4 px-4 py-2 text-white shadow-md"
          onClick={() => signIn()}
        >
          Login
        </button>
      </div>
    </div>
  );
}
