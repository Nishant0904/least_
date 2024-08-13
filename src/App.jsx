import SignIn from "./pages/SignIn";
import { Outlet } from "react-router-dom";
import { SignedIn } from "@clerk/clerk-react";
import { SignedOut, SignInButton } from "@clerk/clerk-react";
import { Box } from "@mui/material";
export default function App() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Box height={30} />
        <Outlet />
      </SignedIn>
    </>
  );
}
