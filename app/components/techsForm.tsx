import React, { useState, useEffect } from "react";
import Input from "./Input";
import Image from "next/image";

type SkillsType = {
  id: string;
  name: string;
  logo: File | string;
};
type CurrentSkilType = {
  id: string;
  name: string;
  logo: string;
};
export default function TechsForm() {
  const [skillImage, setSkillImage] = useState<string>();
  const [skills, setSkills] = useState<SkillsType[] | null>(null);
  const [currentSkill, setCurrentSkill] = useState<CurrentSkilType | null>(null);
  function handleFormSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = e.target as HTMLFormElement;
    const form = new FormData(data);
    const body = Object.fromEntries(form.entries());
    

    setSkills((prev) => {
      if (!prev)
        return [
          {
            id: crypto.randomUUID(),
            name: body.name as string,
            logo: body.logo as File,
          },
        ];
      if (prev && !prev.some((skill) => skill.id === currentSkill?.id))
      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          name: body.name as string,
          logo: body.logo as File,
        },
      ];
      if (prev && prev.some((skill) => skill.id === currentSkill?.id)){
        const skillToChange = prev.find((skill) => skill.id === currentSkill?.id);
        const newArr = [...prev];
        if (!skillToChange) return;
        const indexOfSkill = newArr.indexOf(skillToChange);
        if (indexOfSkill !== -1)
          newArr[indexOfSkill] = {...newArr[indexOfSkill], name: body.name as string, logo: body.logo}

        return newArr;
      }
    });
    setCurrentSkill(null);
  }


  const handleIputChange = (e: any) => {
    const { name, value } = e.target;
    setCurrentSkill({ ...currentSkill, [name]: value });
  }
  const handleEditButton = (e: React.MouseEvent, skillId: string) => {
    e.preventDefault();
    const selectedSkill = skills?.find((skill) => skill.id === skillId);
    if (!selectedSkill) return;
    setCurrentSkill({ id: selectedSkill.id, name: selectedSkill.name, logo: URL.createObjectURL(selectedSkill.logo) });
    setSkillImage(currentSkill?.logo);
  }

  return (
    <div className="flex flex-row justify-center gap-x-8 mt-8">
      <form
        className="flex flex-col bg-white rounded-3xl p-4 w-1/3 gap-y-8 max-h-fit"
        onSubmit={handleFormSubmit}
      >
        <h1 className="mx-auto font-medium text-[14px]">
          Add a Skill Name with its Logo
        </h1>
        <Input
          placeHolder="Skill Name"
          value={currentSkill?.name}
          name="name"
          required
          onChange={handleIputChange}
        />
        <div className="flex flex-row justify-between items-center">
          <label
            className="font-medium bg-[#2E8CFA] text-white px-2 py-1 rounded-md text-[12px]"
            htmlFor="skillLogo"
          >
            Upload Logo
          </label>
          <input
            id="skillLogo"
            name="logo"
            type="file"
            accept=".jpg, .jpeg, .png"
            hidden
            onChange={(e) => {
              if (!e.target.files) return;
              setSkillImage(URL.createObjectURL(e.target.files[0]));
              if (!currentSkill) return;
              setCurrentSkill({id: currentSkill?.id, name: currentSkill?.name,  logo: URL.createObjectURL(e.target.files[0]) });
            }}
          />
          {!currentSkill?.logo && (
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
          )}
          {currentSkill?.logo && (
            <Image
              src={ currentSkill.logo }
              width="57"
              height="52"
              alt="preview Image"
            />
          )}
        </div>
        <button
          className="font-medium bg-[#2E8CFA] text-white px-2 py-1 rounded-md text-[12px] disabled:bg-gray-300 disabled:hover:cursor-not-allowed"
          type="submit"
          disabled={!currentSkill?.name || (!currentSkill.logo && !skillImage)}
        >
          Update Information
        </button>
      </form>
      <form className="flex flex-col bg-white rounded-3xl p-4 w-1/3 gap-y-8 max-h-fit">
        <h1 className="mx-auto font-medium text-[14px]">
          Edit your Existing Skills
        </h1>
        {skills &&
          skills.map((skill) => {
            return (
            <div
              key={skill.id}
              className="flex flex-row justify-between items-center bg-[#E4E4E4] px-3 rounded-md py-1"
            >
              <p>{skill.name}</p>
              <div className="flex gap-x-2 items-center">
                {/* Edit Button */}
                <button
                  onClick={(e) => { handleEditButton(e, skill.id) }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.29163 13.36L6.81463 18.116L0.499634 20L2.29163 13.36ZM12.7046 2.41204L17.2266 7.16704L7.26563 17.64L2.74263 12.886L12.7046 2.41204ZM16.1416 0.348037L19.1176 3.47704C19.9246 4.32504 19.2036 5.09004 19.2036 5.09004L17.6826 6.69004L13.1586 1.93304L14.6796 0.334037L14.6996 0.315037C14.8186 0.203037 15.4746 -0.352963 16.1416 0.348037Z"
                      fill="#2E8CFA"
                    />
                  </svg>
                </button>
                {/* Delete Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setSkills((prev) => {
                      if (!prev) return null;
                      const tempArr = prev?.filter((item) => {
                        return item.id !== skill.id;
                      });
                      return tempArr;
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
                      d="M8 0.5C3.82143 0.5 0.5 3.82143 0.5 8C0.5 12.1786 3.82143 15.5 8 15.5C12.1786 15.5 15.5 12.1786 15.5 8C15.5 3.82143 12.1786 0.5 8 0.5ZM10.8929 11.75L8 8.85714L5.10714 11.75L4.25 10.8929L7.14286 8L4.25 5.10714L5.10714 4.25L8 7.14286L10.8929 4.25L11.75 5.10714L8.85714 8L11.75 10.8929L10.8929 11.75Z"
                      fill="#FC3434"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )
          })}
      </form>
    </div>
  );
}
