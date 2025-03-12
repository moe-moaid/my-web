import React, { FormEvent, MouseEvent, useState } from "react";
import Input from "./Input";
import Button from "./Button";

type Props = {};
type Skill = {
  id: string;
  name: string;
};
type Company = {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  isWorking?: string;
  techStack: string;
  logo?: any;
};

export default function ExperienceForm({}: Props) {
  const [isWorking, setIsWorking] = useState<boolean>(false);
  const [image, setImage] = useState<string | null>("");
  const [skills, setSkills] = useState<Skill[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [companyToEdit, setCompanyToEdit] = useState<Company>();
  const handleAddSkill = (e: MouseEvent) => {
    e.preventDefault();
    setSkills([...skills, { id: crypto.randomUUID(), name: "newSkill" }]);
  };

  const handleAddLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const myForm = Object.fromEntries(formData.entries());

    setCompanies([
      ...companies,
      {
        id: crypto.randomUUID(),
        company: myForm.company as string,
        position: myForm.position as string,
        startDate: myForm.startDate as string,
        endDate: (myForm.endDate as string) || undefined,
        techStack: myForm.techStack as string,
        logo: myForm.logo || null,
      },
    ]);
  };
  return (
    <div className="mt-8 flex flex-row justify-center items-start">
      <form
        className="flex flex-col gap-y-8 bg-white py-[24px] px-8 rounded-3xl items-start w-1/3 mx-auto justify-center"
        onSubmit={handleSubmit}
      >
        {companyToEdit && <h1>{ companyToEdit.id }</h1>}
        <Input
          name="company"
          placeHolder="Company Name"
          value={companyToEdit?.company || ""}
        />
        <Input name="position" placeHolder="Your Position" value={companyToEdit?.position || ""}/>
        <div className="flex flex-row justify-between items-center w-full">
          <input name="startDate" type="date" placeholder="Start Date" value={companyToEdit?.startDate || undefined}/>
          {(!isWorking || companyToEdit?.endDate) && (
            <input name="endDate" type="date" placeholder="End Date" value={companyToEdit?.endDate || undefined}/>
          )}
        </div>
        <div className="flex flex-row gap-x-2 items-center">
          <input
            type="checkbox"
            defaultChecked={isWorking}
            id="isWorking"
            name="isWorking"
            onChange={() => setIsWorking(!isWorking)}
            value={companyToEdit?.isWorking || ""}
          />
          <label htmlFor="isWorking">Currently Working?</label>
        </div>
        <Input name="techStack" placeHolder="Set of Technologies" />
        <div className="bg-[#E4E4E4] flex flex-col gap-y-4 p-4 rounded-xl">
          <p>Add summery point about your trole in the company</p>
          {skills &&
            skills.map((skill) => (
              <div
                key={skill.id}
                className="flex flex-row justify-between w-full items-center bg-white rounded-md px-1 py-2"
              >
                <input
                  name="skills"
                  type="text"
                  placeholder={skill.name}
                  className="placeholder:text-black w-full outline-none"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setSkills((prev) => {
                      const arr = prev.filter((item) => {
                        return item.id !== skill.id;
                      });
                      return arr;
                    });
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.155 13.7578L18.8877 11.7378C19.1109 11.4684 19.2344 11.1075 19.2317 10.733C19.2289 10.3584 19.1 10.0001 18.8728 9.73521C18.6456 9.47035 18.3383 9.3201 18.017 9.31685C17.6957 9.31359 17.3861 9.45759 17.155 9.71781L15.4224 11.7378L13.6897 9.71781C13.5766 9.58137 13.4414 9.47254 13.2919 9.39767C13.1424 9.3228 12.9816 9.28339 12.8189 9.28174C12.6562 9.28009 12.4949 9.31624 12.3443 9.38807C12.1937 9.4599 12.0568 9.56597 11.9418 9.70011C11.8267 9.83424 11.7358 9.99374 11.6741 10.1693C11.6125 10.3449 11.5815 10.533 11.5829 10.7227C11.5843 10.9124 11.6182 11.0998 11.6824 11.2741C11.7466 11.4484 11.8399 11.606 11.957 11.7378L13.6897 13.7578L11.957 15.7778C11.8399 15.9096 11.7466 16.0672 11.6824 16.2415C11.6182 16.4158 11.5843 16.6033 11.5829 16.793C11.5815 16.9826 11.6125 17.1708 11.6741 17.3463C11.7358 17.5219 11.8267 17.6814 11.9418 17.8155C12.0568 17.9497 12.1937 18.0557 12.3443 18.1276C12.4949 18.1994 12.6562 18.2355 12.8189 18.2339C12.9816 18.2322 13.1424 18.1928 13.2919 18.118C13.4414 18.0431 13.5766 17.9343 13.6897 17.7978L15.4224 15.7778L17.155 17.7978C17.2681 17.9343 17.4033 18.0431 17.5528 18.118C17.7023 18.1928 17.8631 18.2322 18.0258 18.2339C18.1885 18.2355 18.3499 18.1994 18.5004 18.1276C18.651 18.0557 18.7879 17.9497 18.9029 17.8155C19.018 17.6814 19.109 17.5219 19.1706 17.3463C19.2322 17.1708 19.2632 16.9826 19.2618 16.793C19.2604 16.6033 19.2266 16.4158 19.1623 16.2415C19.0981 16.0672 19.0048 15.9096 18.8877 15.7778L17.155 13.7578ZM9.08469 3.75781H21.5492C22.1992 3.75781 22.8226 4.05883 23.2822 4.59465C23.7418 5.13047 24 5.85719 24 6.61496V20.9007C24 21.6584 23.7418 22.3852 23.2822 22.921C22.8226 23.4568 22.1992 23.7578 21.5492 23.7578H9.08469C8.43477 23.7577 7.81151 23.4565 7.35201 22.9207L0.358774 14.7678C0.129051 14.4999 0 14.1366 0 13.7578C0 13.379 0.129051 13.0157 0.358774 12.7478L7.35201 4.59496C7.81151 4.0591 8.43477 3.75797 9.08469 3.75781Z"
                      fill="#2E8CFA"
                    />
                  </svg>
                </button>
              </div>
            ))}
          <div className="flex flex-row justify-between w-full items-center bg-white rounded-md px-1 py-2">
            <input
              type="text"
              placeholder="Add a New Skill"
              className="placeholder:text-black w-full outline-none"
            />
            <button onClick={handleAddSkill}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_55_697"
                  maskUnits="userSpaceOnUse"
                  x="1"
                  y="1"
                  width="23"
                  height="23"
                >
                  <path
                    d="M20.3125 3.125H4.6875C3.82456 3.125 3.125 3.82456 3.125 4.6875V20.3125C3.125 21.1754 3.82456 21.875 4.6875 21.875H20.3125C21.1754 21.875 21.875 21.1754 21.875 20.3125V4.6875C21.875 3.82456 21.1754 3.125 20.3125 3.125Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 8.33334V16.6667M8.33331 12.5H16.6666"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_55_697)">
                  <path d="M0 0H25V25H0V0Z" fill="#2E8CFA" />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <label
            htmlFor="logo"
            className="font-medium bg-[#2E8CFA] text-white px-2 py-1 rounded-md text-[12px] "
          >
            Upload Company Logo
          </label>
          <input
            id="logo"
            name="logo"
            type="file"
            hidden
            onChange={(e) => handleAddLogo(e)}
          />
          {!image ? (
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
          ) : (
            <img
              className="w-[57px] h-[54px] rounded-lg"
              src={image}
              alt="Company Logo"
            />
          )}
        </div>
        <Button
          style_type="primary"
          text="Update Information"
          type="submit"
          fullWidth
        />
      </form>

      <form className="flex flex-col gap-y-8 bg-white py-[24px] px-8 rounded-3xl w-1/3 mx-auto justify-center items-center">
        <p>Edit your Existing Experiences</p>
        {companies &&
          companies.map((company) => (
            <div
              key={company.id}
              className="flex flex-row justify-between items-center w-full"
            >
              {/* Edit Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCompanyToEdit(company);
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.292 13.36L6.815 18.116L0.5 20L2.292 13.36ZM12.705 2.41204L17.227 7.16704L7.266 17.64L2.743 12.886L12.705 2.41204ZM16.142 0.348037L19.118 3.47704C19.925 4.32504 19.204 5.09004 19.204 5.09004L17.683 6.69004L13.159 1.93304L14.68 0.334037L14.7 0.315037C14.819 0.203037 15.475 -0.352963 16.142 0.348037Z"
                    fill="#2E8CFA"
                  />
                </svg>
              </button>
              <Input value={company.company} />
              {/* Delete Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCompanies((prev) => {
                    return prev.filter((item) => item.id !== company.id);
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
          ))}
      </form>
    </div>
  );
}
