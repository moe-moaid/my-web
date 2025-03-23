import React, { InputHTMLAttributes, useState } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeHolder?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: any) => void;
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
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      className="p-2 outline-none border-b border-[#2EC4CE] w-full placeholder:text-black text-black"
    />
  );
}

/**
 * import React, { InputHTMLAttributes, useState } from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeHolder?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: any) => void;
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
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      className="p-2 outline-none border-b border-[#2EC4CE] w-full placeholder:text-black text-black"
    />
  );
}

 */