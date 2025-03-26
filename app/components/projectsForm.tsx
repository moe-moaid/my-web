import { MouseEvent, ReactNode, useState } from "react";
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
    setImages([]);
    if (!e.target.files || e.target.files.length === 0) return;
    /**
     * This approach for older versions of TS, you can update if from tsconfig.json file, 
     * {
     *    "compilerOptions": {
            "target": "ES2015" or you can do "ESNext" for more recent version
          }
        }
     */
    // const tempImages = Array.from(e.target.files).map((image) => URL.createObjectURL(image));
    // setImages(tempImages);

    const tempImages: string[] = [];
    for (let image of e.target.files) {
      let link = URL.createObjectURL(image);
      tempImages.push(link);

      setImages((prev) => [...prev, URL.createObjectURL(image)]);
    }
  }

  const removePic = (e: MouseEvent, itemIndex: number) => {
    e.preventDefault();
    setImages(() => images.filter((_, index) => (index !== itemIndex)));
  }

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
        <div className="flex flex-row flex-wrap items-center justify-center gap-5">
          {images?.length === 0 && Image_Placeholders}
          {images?.length === 0 && Image_Placeholders}
          {images?.length === 0 && Image_Placeholders}
          {images &&
            images.map((image, index) => {
              return (
                <div className="relative">
                  <button className="absolute -top-2 -left-2 animate-pulse" onClick={(e) => removePic(e, index)}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 11.4L12.9 14.3C13.0833 14.4833 13.3167 14.575 13.6 14.575C13.8833 14.575 14.1167 14.4833 14.3 14.3C14.4833 14.1167 14.575 13.8833 14.575 13.6C14.575 13.3167 14.4833 13.0833 14.3 12.9L11.4 10L14.3 7.1C14.4833 6.91667 14.575 6.68333 14.575 6.4C14.575 6.11667 14.4833 5.88333 14.3 5.7C14.1167 5.51667 13.8833 5.425 13.6 5.425C13.3167 5.425 13.0833 5.51667 12.9 5.7L10 8.6L7.1 5.7C6.91667 5.51667 6.68333 5.425 6.4 5.425C6.11667 5.425 5.88333 5.51667 5.7 5.7C5.51667 5.88333 5.425 6.11667 5.425 6.4C5.425 6.68333 5.51667 6.91667 5.7 7.1L8.6 10L5.7 12.9C5.51667 13.0833 5.425 13.3167 5.425 13.6C5.425 13.8833 5.51667 14.1167 5.7 14.3C5.88333 14.4833 6.11667 14.575 6.4 14.575C6.68333 14.575 6.91667 14.4833 7.1 14.3L10 11.4ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88334 18.6867 3.825 17.9743 2.925 17.075C2.025 16.1757 1.31267 15.1173 0.788001 13.9C0.263335 12.6827 0.000667932 11.3827 1.26582e-06 10C-0.000665401 8.61733 0.262001 7.31733 0.788001 6.1C1.314 4.88267 2.02633 3.82433 2.925 2.925C3.82367 2.02567 4.882 1.31333 6.1 0.788C7.318 0.262667 8.618 0 10 0C11.382 0 12.682 0.262667 13.9 0.788C15.118 1.31333 16.1763 2.02567 17.075 2.925C17.9737 3.82433 18.6863 4.88267 19.213 6.1C19.7397 7.31733 20.002 8.61733 20 10C19.998 11.3827 19.7353 12.6827 19.212 13.9C18.6887 15.1173 17.9763 16.1757 17.075 17.075C16.1737 17.9743 15.1153 18.687 13.9 19.213C12.6847 19.739 11.3847 20.0013 10 20Z"
                        fill="#6D6D6D"
                        fill-opacity="0.65"
                      />
                    </svg>
                  </button>

                  <img src={image} className="w-[57px] h-[54px] rounded-lg" />
                </div>
              );
            })}
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
