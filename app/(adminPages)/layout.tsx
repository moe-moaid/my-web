'use client';
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-[#E4E4E4]">
      <p className="font-bold text-[20px] text-red-500">
        this is admin layout
      </p>
      <div className="w-100 justify-center items-center ">
        {children}
      </div>
    </div>
  )
}
