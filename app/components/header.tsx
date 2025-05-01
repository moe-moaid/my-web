import Socials from "@/user-components/social";
import React from "react";


export default function Header() {
  return (
    <header className="sticky top-0 flex justify-between p-2 max-w-7xl mx-auto z-20">
      <Socials/>
    </header>
  );
}
