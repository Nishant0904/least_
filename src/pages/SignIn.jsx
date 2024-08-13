import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Sidenav from "../components/Sidenav";
export default function SignIn() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Sidenav />
      </SignedIn>
    </header>
  );
}
