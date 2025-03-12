import { addAbout } from "@/actions/aboutSectionActions";
import React, { useState } from "react";

type Props = {};

export default function AboutForm({}: Props) {
  const [currentImage, setCurrentImage] = useState<string | null>("");
  const myImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setCurrentImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="mt-5">
      <form
        className="flex flex-col gap-y-8 bg-white py-[24px] px-8 rounded-3xl items-center w-1/3 mx-auto"
        action={addAbout}
      >
        <h1 className="font-medium text-[16px]">
          Edit the content of About Section
        </h1>
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
        <div>
          <label
            className="rounded-lg text-[12px] px-8 py-2 text-white font-medium bg-[#2E8CFA] hover:cursor-pointer"
            htmlFor="aboutImage"
          >
            Upload Picture
          </label>
          <input
            id="aboutImage"
            name="aboutImage"
            type="file"
            accept=".png, jpg"
            onChange={myImage}
            required
            hidden
          />
        </div>
        <div>
          {!currentImage ? (
            <svg
              width="103"
              height="88"
              viewBox="0 0 103 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M83.0563 10.2422H19.9438C14.9938 10.2422 10.9375 14.7594 10.9375 20.2719V67.9703C10.9375 73.4828 14.9938 78 19.9438 78H83.0563C88.0062 78 92.0625 73.4828 92.0625 67.9703V20.2719C92.0625 14.7594 88.0062 10.2422 83.0563 10.2422ZM88.6937 66.8984C88.6937 71.9516 86.6656 74.2102 82.1281 74.2102H20.9062C16.3688 74.2102 14.3406 71.9516 14.3406 66.8984V21.3055C14.3406 16.2523 16.3688 13.9937 20.9062 13.9937H82.1281C86.6656 13.9937 88.6937 16.2523 88.6937 21.3055V66.8984ZM36.3063 36.5797L44.7625 44.1211L66.7281 23.4109L83.6406 40.3695V68.6211H19.3937V51.6625L36.3063 36.5797ZM26.1656 19.6594C22.4187 19.6594 19.3937 23.0281 19.3937 27.2008C19.3937 31.3734 22.4187 34.7422 26.1656 34.7422C29.9125 34.7422 32.9375 31.3734 32.9375 27.2008C32.9375 23.0281 29.8781 19.6594 26.1656 19.6594Z"
                fill="black"
                fillOpacity="0.23"
              />
            </svg>
          ) : (
            <img src={currentImage} alt="Image Preview" />
          )}
        </div>

        <button className="bg-[#2E8CFA] rounded-md px-2 py-1 font-semibold text-white w-full">
          Save
        </button>
      </form>
    </div>
  );
}
