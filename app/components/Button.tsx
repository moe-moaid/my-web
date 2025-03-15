import React from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  style_type: "primary" | "secondary";
  fullWidth: boolean;
  text: string;
  onClick: (e: any) => void;
}
export default function Button({ style_type, fullWidth, text, onClick }: Props) {
  return (
    <button
      className={`${fullWidth ? "w-full py-2" : "px-2 py-1"} ${
        style_type === "primary" ? "bg-[#2E8CFA]" : ""
      } font-medium text-[12px] text-white rounded-md`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
