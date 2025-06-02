import React, { useState } from "react";

type SocialMedia = {
  name: string | undefined;
  link: string | undefined;
};

export default function ContactForm() {
  const [newSocial, setNewSocial] = useState<SocialMedia[]>([]);
  const [currentValue, setCurrentValue] = useState<SocialMedia>({
    name: "",
    link: "",
  });

  return (
    <div className="flex flex-row justify-center gap-x-8 mt-8">
      {/* Add a link */}
      <form
        action=""
        className="rounded-3xl bg-white flex flex-col items-center p-4 gap-y-8 w-1/5 max-h-fit"
      >
        <p className="text-center my-4 font-medium">
          Add a Contact Link on Social Media
        </p>
        <input
          className="border-b border-[#2EC4CE] stroke-none outline-none w-full"
          type="text"
          placeholder="Social Media Name"
          name="name"
          onChange={(e) =>
            setCurrentValue({ name: e.target.value, link: currentValue?.link })
          }
        />
        <input
          className="border-b border-[#2EC4CE] stroke-none outline-none w-full"
          type="text"
          placeholder="link"
          name="link"
          onChange={(e) =>
            setCurrentValue({ name: currentValue?.name, link: e.target.value })
          }
        />
        <button
          className="bg-[#2E8CFA] px-2 py-1 rounded-lg text-white w-full outline-[#2EC4CE] disabled:hover:cursor-not-allowed disabled:bg-[#2E8CFA]/70"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setNewSocial([
              ...newSocial,
              { name: currentValue?.name, link: currentValue?.link },
            ]);
          }}
          disabled={!currentValue.name || !currentValue.link}
        >
          Add Social Media
        </button>
      </form>
      {/* Edit existing links */}
      <form
        action=""
        className="rounded-3xl bg-white flex flex-col items-center px-4 py-2 max-h-fit"
      >
        <p className="text-center my-4 font-medium">
          Edit your existing social media
        </p>
        <div className="flex flex-row gap-x-3 justify-start items-center bg-[#E4E4E4] p-2 rounded-md">
          <p className="border-e-2 border-white pe-3">Github</p>
          <p className="">https://www.github.com/example-profile</p>
          <button>
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 0.5C3.32143 0.5 0 3.82143 0 8C0 12.1786 3.32143 15.5 7.5 15.5C11.6786 15.5 15 12.1786 15 8C15 3.82143 11.6786 0.5 7.5 0.5ZM10.3929 11.75L7.5 8.85714L4.60714 11.75L3.75 10.8929L6.64286 8L3.75 5.10714L4.60714 4.25L7.5 7.14286L10.3929 4.25L11.25 5.10714L8.35714 8L11.25 10.8929L10.3929 11.75Z"
                fill="#FC3434"
              />
            </svg>
          </button>
        </div>
        {newSocial &&
          newSocial.map((item: SocialMedia, index: number) => (
            <div
              key={` ${index} - ${item.name} - ${item.link}`}
              className="flex flex-row gap-x-3 mt-4 w-full justify-between items-center bg-[#E4E4E4] p-2 rounded-md"
            >
              <p className="border-e-2 border-white pe-3">{item.name}</p>
              <p className="">{item.link}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setNewSocial((prev) => {
                    return prev.filter((value) => value.name !== item.name);
                  });
                }}
              >
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0.5C3.32143 0.5 0 3.82143 0 8C0 12.1786 3.32143 15.5 7.5 15.5C11.6786 15.5 15 12.1786 15 8C15 3.82143 11.6786 0.5 7.5 0.5ZM10.3929 11.75L7.5 8.85714L4.60714 11.75L3.75 10.8929L6.64286 8L3.75 5.10714L4.60714 4.25L7.5 7.14286L10.3929 4.25L11.25 5.10714L8.35714 8L11.25 10.8929L10.3929 11.75Z"
                    fill="#FC3434"
                  />
                </svg>
              </button>
            </div>
          ))}
        <button className="bg-[#2E8CFA] px-2 py-1 rounded-md mt-4 text-white font-medium">
          Commit All Changes
        </button>
      </form>
    </div>
  );
}
