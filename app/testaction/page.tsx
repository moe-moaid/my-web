"use server";
import {
  addAbout,
  addContactInfo,
  addExp,
} from "@/actions/aboutSectionActions";
import React from "react";

type Props = {};

export default async function Page({}: Props) {
  return (
    <div className="flex flex-col max-w-7xl justify-center items-center mx-auto h-screen">
      <p>About Section Form</p>
      <form className="flex flex-col space-y-5 w-2/6" action={addAbout}>
        <input
          className="p-2 rounded-sm bg-gray-500/50 outline-none"
          name="title"
          type="text"
          placeholder="title"
          required
        />
        <input
          className="p-2 rounded-sm bg-gray-500/50 outline-none"
          name="description"
          type="text"
          placeholder="about you"
          required
        />
        <input
          className="p-2 rounded-sm bg-gray-500/50 outline-none"
          name="aboutImage"
          type="file"
          placeholder="about you"
          required
        />
        <button className="bg-blue-500 rounded-md p-2 font-semibold text-white/80">
          Enter Value
        </button>
      </form>

      <p className="mt-5">Contact Info Form</p>
      <form className="flex flex-col space-y-5 w-2/6" action={addContactInfo}>
        <input
          className="p-2 rounded-sm bg-gray-500/50 outline-none"
          name="platform"
          type="text"
          placeholder="platform"
          required
        />
        <input
          className="p-2 rounded-sm bg-gray-500/50 outline-none"
          name="link"
          type="text"
          placeholder="link"
          required
        />
        <button className="bg-blue-500 rounded-md p-2 font-semibold text-white/80">
          Enter Value
        </button>
      </form>

      <p className="mt-5">Skills Section Form</p>
      <form className="flex flex-col space-y-5 w-2/6" action={addExp}>
        <input
          className="p-2 rounded-sm bg-gray-500/50 outline-none"
          name="position"
          type="text"
          placeholder="position"
          required
        />
        <input
          className="p-2 rounded-sm bg-gray-500/50 outline-none"
          name="company"
          type="text"
          placeholder="company"
          required
        />
        <input
          className="p-2 rounded-sm bg-gray-500/50 outline-none"
          name="start_date"
          type="text"
          placeholder="start_date"
          required
        />
        <input
          className="p-2 rounded-sm bg-gray-500/50 outline-none"
          name="end_date"
          type="text"
          placeholder="end_date"
        />
        <div className="flex flex-row space-x-2">
          <input
            id="currently_working"
            type="checkbox"
            name="currently_working"
          />
          <label htmlFor="currently_working">currently working?</label>
        </div>
        <input
          className="p-2 rounded-sm bg-gray-500/50 outline-none"
          name="exp_Image"
          type="file"
          placeholder="exp_Image"
          required
        />
        <input
          className="p-2 rounded-sm bg-gray-500/50 outline-none"
          name="summery"
          type="text"
          placeholder="summery"
          required
        />
        <input
          className="p-2 rounded-sm bg-gray-500/50 outline-none"
          name="technologies"
          type="text"
          placeholder="technologies"
          required
        />
        <button className="bg-blue-500 rounded-md p-2 font-semibold text-white/80">
          Enter Value
        </button>
      </form>
    </div>
  );
}
