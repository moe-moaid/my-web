import React, { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";

type Skill = {
  name: string | undefined;
  proficiency: number | undefined;
};

export default function SkillsForm() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [currentSkill, setCurrentSkil] = useState<Skill>();
  const handleAddSkill = (e: any) => {
    e.preventDefault();
    console.log("button clicked!");
    setSkills((prev: Skill[]) => {
      if (!prev)
        return [
          { name: currentSkill?.name, proficiency: currentSkill?.proficiency },
        ];
      return [
        ...prev,
        { name: currentSkill?.name, proficiency: currentSkill?.proficiency },
      ];
    });
  };
  function handleFormChang(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCurrentSkil((prev) => {
      const base = prev || { name: undefined, proficiency: undefined };
      return { ...base, [name]: value };
    });
  }
  useEffect(() => {
    console.log(skills);
  }, [skills]);
  return (
    <div className="flex flex-row gap-x-8 justify-center items-start mt-8">
      <form
        action=""
        className="flex flex-col gap-y-4 w-1/3 items-center bg-white rounded-3xl px-8 py-4 max-h-fit"
      >
        <h1>Add a Skill to the List</h1>
        <Input
          name="name"
          value={currentSkill?.name}
          placeHolder="Skill Name"
          onChange={handleFormChang}
        />
        <Input
          name="proficiency"
          value={currentSkill?.proficiency}
          placeHolder="Proficiency"
          onChange={handleFormChang}
        />
        <Button
          style_type="primary"
          fullWidth
          text="Update Information"
          onClick={handleAddSkill}
        />
      </form>
      <form
        action=""
        className="flex flex-col gap-y-4 w-1/3 items-center bg-white rounded-3xl px-8 py-4 max-h-fit"
      >
        <h1>Add a Skill to the List</h1>
        <p className="text-center my-4 font-medium">
          Edit your existing social media
        </p>
        <div className="flex flex-row gap-x-3 justify-start items-center bg-[#E4E4E4] p-2 rounded-md">
          <p className="border-e-2 border-white pe-3">Next.js</p>
          <p className="">90</p>
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
        {skills &&
          skills.map((item: Skill, index: number) => (
            <div
              key={` ${index} - ${item.name} - ${item.proficiency}`}
              className="flex flex-row gap-x-3 mt-4 w-fit justify-between items-center bg-[#E4E4E4] p-2 rounded-md"
            >
              <p className="border-e-2 border-white pe-3">{item.name}</p>
              <p className="">{item.proficiency}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSkills((prev) => {
                    return prev?.filter((value) => value.name !== item.name);
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
        <Button style_type="primary" text="Commit All Changes" fullWidth />
      </form>
    </div>
  );
}
