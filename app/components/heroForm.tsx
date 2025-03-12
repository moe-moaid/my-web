import React, { useState } from "react";

type Animations = { id: string; name: string };

export default function HeroForm() {
  const [addedAnime, setAddedAnime] = useState<Animations[]>([]);
  const [image, setImage] = useState<string | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };
  return (
    <form
      action=""
      className="flex flex-col gap-y-8 bg-white items-center w-1/3 rounded-3xl mx-auto px-4 py-6 mt-8"
    >
      <h1>Edit Hero Section Content</h1>
      <input
        className="border-b border-[#2EC4CE] outline-none stroke-none w-full p-1"
        type="text"
        placeholder="Your Position"
      />
      <div className="bg-[#E4E4E4] rounded-lg w-full flex flex-col items-center gap-y-4 py-4">
        <h1>Type-Animation Sentences</h1>
        <button
          className="stroke-none outline-none"
          onClick={(e) => {
            e.preventDefault();
            setAddedAnime([
              ...addedAnime,
              { id: crypto.randomUUID(), name: "" },
            ]);
          }}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.5 10.1211C0.5 4.59809 4.977 0.121094 10.5 0.121094C16.023 0.121094 20.5 4.59809 20.5 10.1211C20.5 15.6441 16.023 20.1211 10.5 20.1211C4.977 20.1211 0.5 15.6441 0.5 10.1211ZM10.5 2.12109C8.37827 2.12109 6.34344 2.96395 4.84315 4.46424C3.34285 5.96453 2.5 7.99936 2.5 10.1211C2.5 12.2428 3.34285 14.2777 4.84315 15.7779C6.34344 17.2782 8.37827 18.1211 10.5 18.1211C12.6217 18.1211 14.6566 17.2782 16.1569 15.7779C17.6571 14.2777 18.5 12.2428 18.5 10.1211C18.5 7.99936 17.6571 5.96453 16.1569 4.46424C14.6566 2.96395 12.6217 2.12109 10.5 2.12109Z"
              fill="#2E8CFA"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5 5.12109C11.5 4.85588 11.3946 4.60152 11.2071 4.41399C11.0196 4.22645 10.7652 4.12109 10.5 4.12109C10.2348 4.12109 9.98043 4.22645 9.79289 4.41399C9.60536 4.60152 9.5 4.85588 9.5 5.12109V9.12109H5.5C5.23478 9.12109 4.98043 9.22645 4.79289 9.41399C4.60536 9.60152 4.5 9.85588 4.5 10.1211C4.5 10.3863 4.60536 10.6407 4.79289 10.8282C4.98043 11.0157 5.23478 11.1211 5.5 11.1211H9.5V15.1211C9.5 15.3863 9.60536 15.6407 9.79289 15.8282C9.98043 16.0157 10.2348 16.1211 10.5 16.1211C10.7652 16.1211 11.0196 16.0157 11.2071 15.8282C11.3946 15.6407 11.5 15.3863 11.5 15.1211V11.1211H15.5C15.7652 11.1211 16.0196 11.0157 16.2071 10.8282C16.3946 10.6407 16.5 10.3863 16.5 10.1211C16.5 9.85588 16.3946 9.60152 16.2071 9.41399C16.0196 9.22645 15.7652 9.12109 15.5 9.12109H11.5V5.12109Z"
              fill="#2E8CFA"
            />
          </svg>
        </button>
        {addedAnime &&
          addedAnime.map((item) => (
            <div className="flex flex-row justify-between items-center bg-white rounded-md px-2 py-1 ">
              <input
                key={item.id}
                type="text"
                placeholder={item.name}
                className="outline-none"
                value={item.name}
                onChange={(e) => {
                  setAddedAnime((prev) =>
                    prev.map((el) =>
                      el.id === item.id ? { ...el, name: e.target.value } : el
                    )
                  );
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setAddedAnime((prev) => {
                    return prev.filter((el) => el.id !== item.id);
                  });
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0.121094C3.82143 0.121094 0.5 3.44252 0.5 7.62109C0.5 11.7997 3.82143 15.1211 8 15.1211C12.1786 15.1211 15.5 11.7997 15.5 7.62109C15.5 3.44252 12.1786 0.121094 8 0.121094ZM10.8929 11.3711L8 8.47824L5.10714 11.3711L4.25 10.514L7.14286 7.62109L4.25 4.72824L5.10714 3.87109L8 6.76395L10.8929 3.87109L11.75 4.72824L8.85714 7.62109L11.75 10.514L10.8929 11.3711Z"
                    fill="#FC3434"
                  />
                </svg>
              </button>
            </div>
          ))}
      </div>
      <input
        type="file"
        accept="image/*"
        id="fileInput"
        className="hidden"
        onChange={handleFileChange}
      />
      <label
        htmlFor="fileInput"
        className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
      >
        Upload Picture
      </label>

      {/* Image preview */}
      <div className="w-20 h-20 border border-gray-300 rounded-md flex items-center justify-center overflow-hidden">
        {image ? (
          <img
            src={image}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <svg
            width="103"
            height="88"
            viewBox="0 0 103 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M83.0563 10.1211H19.9438C14.9938 10.1211 10.9375 14.6383 10.9375 20.1508V67.8492C10.9375 73.3617 14.9938 77.8789 19.9438 77.8789H83.0563C88.0062 77.8789 92.0625 73.3617 92.0625 67.8492V20.1508C92.0625 14.6383 88.0062 10.1211 83.0563 10.1211ZM88.6937 66.7773C88.6937 71.8305 86.6656 74.0891 82.1281 74.0891H20.9062C16.3688 74.0891 14.3406 71.8305 14.3406 66.7773V21.1844C14.3406 16.1313 16.3688 13.8727 20.9062 13.8727H82.1281C86.6656 13.8727 88.6937 16.1313 88.6937 21.1844V66.7773ZM36.3063 36.4586L44.7625 44L66.7281 23.2898L83.6406 40.2484V68.5H19.3937V51.5414L36.3063 36.4586ZM26.1656 19.5383C22.4187 19.5383 19.3937 22.907 19.3937 27.0797C19.3937 31.2523 22.4187 34.6211 26.1656 34.6211C29.9125 34.6211 32.9375 31.2523 32.9375 27.0797C32.9375 22.907 29.8781 19.5383 26.1656 19.5383Z"
              fill="black"
              fillOpacity="0.23"
            />
          </svg>
        )}
      </div>
      <button className="w-full bg-[#2E8CFA] font-medium text-white py-1 rounded-lg">
        Update Information
      </button>
    </form>
  );
}
