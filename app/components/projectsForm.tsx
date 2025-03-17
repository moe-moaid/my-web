import React, { ReactNode, useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";

type Props = {};

const Image_Placeholders: ReactNode = (
  <svg
    width="57"
    height="54"
    viewBox="0 0 57 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 7.71429C0 5.66833 0.750668 3.70617 2.08686 2.25946C3.42306 0.812753 5.23533 0 7.125 0H49.875C51.7647 0 53.5769 0.812753 54.9131 2.25946C56.2493 3.70617 57 5.66833 57 7.71429V46.2857C57 48.3317 56.2493 50.2938 54.9131 51.7405C53.5769 53.1872 51.7647 54 49.875 54H7.125C5.23533 54 3.42306 53.1872 2.08686 51.7405C0.750668 50.2938 0 48.3317 0 46.2857V7.71429ZM3.5625 42.4286V46.2857C3.5625 47.3087 3.93783 48.2898 4.60593 49.0131C5.27403 49.7365 6.18017 50.1429 7.125 50.1429H49.875C50.8198 50.1429 51.726 49.7365 52.3941 49.0131C53.0622 48.2898 53.4375 47.3087 53.4375 46.2857V32.7857L39.9819 25.2759C39.6479 25.0947 39.2696 25.0318 38.9007 25.0962C38.5318 25.1606 38.191 25.3489 37.9264 25.6346L24.7095 39.9446L15.2332 33.1097C14.8911 32.8631 14.4807 32.7522 14.0717 32.7957C13.6626 32.8393 13.28 33.0347 12.9889 33.3489L3.5625 42.4286ZM21.375 17.3571C21.375 15.8227 20.812 14.3511 19.8099 13.266C18.8077 12.181 17.4485 11.5714 16.0312 11.5714C14.614 11.5714 13.2548 12.181 12.2526 13.266C11.2505 14.3511 10.6875 15.8227 10.6875 17.3571C10.6875 18.8916 11.2505 20.3632 12.2526 21.4483C13.2548 22.5333 14.614 23.1429 16.0312 23.1429C17.4485 23.1429 18.8077 22.5333 19.8099 21.4483C20.812 20.3632 21.375 18.8916 21.375 17.3571Z"
      fill="#E4E4E4"
    />
  </svg>
);

export default function ProjectsForm({}: Props) {
  const [images, setImages] = useState<string[]>([]);
  function handleImagesUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    // setImages(URL.createObjectURL(e.target.files[0]));
    let image: string;
    for (image in e.target.files) {
      console.log(e.target.files[image]);
      setImages((prev) => {
        if (!e.target.files) return;
        return [...prev, URL.createObjectURL(e.target.files[image])]
      });
    }
  };
  useEffect(() => {
    console.log('images = ', images);
    
  }, [images]);
  return (
    <div className="flex flex-row justify-center items-start gap-x-8 mt-8">
      <form className="w-1/3 rounded-3xl bg-white max-h-fit flex flex-col items-center gap-y-4 px-4 py-8">
        <h1 className="text-center font-medium">Add/Edit a Project</h1>
        <Input name="title" placeHolder="Project Title" />
        <textarea
          className="w-full resize-none outline-none border-b border-[#2EC4CE]"
          rows={4}
          name="description"
          placeholder="Project description"
        />
        <div className="">
          <label
            htmlFor="project_images"
            className="bg-[#2E8CFA] text-white font-medium text-[12px] px-4 py-2 rounded-md"
          >
            Upload Project Images
          </label>
          <input
            id="project_images"
            type="file"
            hidden
            multiple
            onChange={handleImagesUpload}
            accept=".jpg, .jpeg, .png"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-x-5">
          {images.length === 0 && Image_Placeholders}
          {images.length === 0 && Image_Placeholders}
          {images.length === 0 && Image_Placeholders}
          {images && images.map((image) => {
            console.log(images);
            
            return <img src={image} className="w-[57px] h-[54px] rounded-lg" />
          }) }
        </div>
        <Button style_type="primary" text="UpdateInformation" fullWidth />
      </form>
      <form className="w-1/3 rounded-3xl bg-white flex flex-col items-center gap-y-4 px-4 py-8">
        <h1 className="text-center my-4 font-medium">
          Edit your Existing Projects
        </h1>
      </form>
    </div>
  );
}
