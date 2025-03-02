import AdminSocials from "@/user-components/adminSocials";
import React from "react";

type Props = {};

export default function AdminHeader({}: Props) {
  return (
    <header className="sticky top-0 flex justify-between p-2 max-w-7xl mx-auto z-20">
      <AdminSocials/>
    </header>
  );
}
