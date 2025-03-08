import { addAbout } from "@/actions/aboutSectionActions";
import React from "react";

type Props = {};

export default function AboutForm({}: Props) {
  return (
    <div className="mt-5">
      <form
        className="flex flex-col gap-y-8 bg-white py-[24px] px-8 rounded-3xl items-center w-1/3 mx-auto"
        action={addAbout}
      >
        <h1 className="font-medium text-[16px]">Edit the content of About Section</h1>
        <input
          className="p-2 outline-none border-b border-[#2EC4CE] w-full placeholder:text-black text-black"
          name="title"
          type="text"
          placeholder="Title"
          required
        />
        <input
          className="p-2 outline-none border-b border-[#2EC4CE] w-full text-black placeholder:text-black"
          name="description"
          type="text"
          placeholder="about you"
          required
        />
        <button className="rounded-lg text-[12px] px-8 py-2 text-white font-medium bg-[#2E8CFA]">Upload Picture</button>
        <input
          name="aboutImage"
          type="file"
          required
        />
        <button className="bg-[#2E8CFA] rounded-md px-2 py-1 font-semibold text-white w-full">
          Enter Value
        </button>
      </form>
    </div>
  );
}
