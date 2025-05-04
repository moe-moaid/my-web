"use client";
import React from "react";
import AdminHeader from "../components/adminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-[rgb(36,36,36)]">
        <div>
          <AdminHeader />
          <div className="w-100 justify-center items-center ">{children}</div>
        </div>
      </body>
    </html>
  );
}
