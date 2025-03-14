import React, { InputHTMLAttributes, useState } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeHolder?: string;
}
export default function Input<HTMLInputElement>({
  placeHolder,
  name,
  value,
  onChange,
}: Props) {
  const [input, setInput] = useState<string>("");
  return (
    <input
      type="text"
      name={name}
      value={input || value}
      onChange={onChange}
      placeholder={`${placeHolder ? placeHolder : ""}`}
      className="p-2 outline-none border-b border-[#2EC4CE] w-full placeholder:text-black text-black"
    />
  );
}
