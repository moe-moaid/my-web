"use client";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#E4E4E4]">
        <div>
          <div className="w-100 justify-center items-center ">{children}</div>
        </div>
      </body>
    </html>
  );
}
