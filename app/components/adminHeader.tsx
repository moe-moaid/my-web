import React, { useState } from "react";
import UserCard from "./UserCard";

export default function AdminHeader() {
  const [showCard, setShowCard] = useState<boolean>(false);
  return (
    <header className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between items-center p-2">
      <div className="">
        <p className="font-bold leading-[10px]">Moe</p>
        <p className="font-bold">Portfolio</p>
      </div>
      <input
        className="bg-[#D9D9D9] w-full sm:w-1/3 px-4 py-1 rounded-full outline-none text-[#3b82f6] font-medium tracking-wider"
        type="text"
        placeholder="Search anything..."
      />
      {showCard && <UserCard />}
      <button onClick={() => setShowCard(!showCard)}>
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="31"
            height="31"
            rx="4"
            fill="#2E8CFA"
            fillOpacity="0.24"
          />
          <path
            d="M8.77778 21H21.2222C21.65 21 22 20.55 22 20C22 19.45 21.65 19 21.2222 19H8.77778C8.35 19 8 19.45 8 20C8 20.55 8.35 21 8.77778 21ZM8.77778 16H21.2222C21.65 16 22 15.55 22 15C22 14.45 21.65 14 21.2222 14H8.77778C8.35 14 8 14.45 8 15C8 15.55 8.35 16 8.77778 16ZM8 10C8 10.55 8.35 11 8.77778 11H21.2222C21.65 11 22 10.55 22 10C22 9.45 21.65 9 21.2222 9H8.77778C8.35 9 8 9.45 8 10Z"
            fill="#2E8CFA"
          />
        </svg>
      </button>
    </header>
  );
}
