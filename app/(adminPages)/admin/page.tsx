"use client";
import React, { useState} from "react";
import AdminLayout from "../layout";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ListItem } from "@/typings";
import RenderForms from "@/app/components/renderForms";
import Image from "next/image";

type Props = {};

export default function AdminPage({}: Props) {
  const [title, setTitel] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const formData = new FormData();

  async function hitApi(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    formData.append("title", title);
    formData.append("description", message);
    if (file) {
      formData.append("aboutImage", file);
    }

    try {
      const response = await fetch(
        "http://localhost/my-web-api/public/api/postabout",
        {
          method: "POST",
          body: formData,
          headers: {
            Content_type: "multipart/form-data",
          },
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.code === 200) {
        } else {
        }
      } else {
      }
    } catch (err: any) {
    }
  }

  async function getApi() {
    const url = "http://localhost/my-web-api/public/api/getabout";
    // const url = "http://172.16.150.109//cPanel-API-Simple-PHP/getallemail.php"
    try {
      await fetch(url, {
        method: "GET",
        headers: {
          Content_type: "application/json",
        },
      }).then((data) => {
        data.json().then((response) => {
          if (response.code === 200) {
          } else {
          }
        });
      });
    } catch (err: any) {
    }
  }


const [menuItems, setMenuItems] = useState<ListItem[]>([
    {id: 1, status: false, text: 'Contact Info', component: "ContactForm"},
    {id: 2, status: false, text: 'Hero Section', component: "HeroForm"},
    {id: 3, status: false, text: 'About Section', component: "AboutForm"},
    {id: 4, status: false, text: 'Experience Section', component: "ExperienceForm"},
    {id: 5, status: false, text: 'Skills Section', component: "SkillsForm"},
    {id: 6, status: false, text: 'Project Section', component: "ProjectsForm"},
    {id: 7, status: false, text: 'techs', component: "TechsForm"},
  ]) 

  const handleMenueClick = (itemId:number) => {
    const updatedItems = menuItems.map((item) =>
      item.id === itemId ? { ...item, status: !item.status } : { ...item, status: false });
    setMenuItems(updatedItems)
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <Image
        width={1920}
        height={360}
        alt='Image'
        src={`https://picsum.photos/1920/360/?random${new Date().getTime()}`}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-center items-center">
          <ul className='text-black font-semibold flex flex-row space-x-5 mt-5'>
            {/* <li className="flex flex-row justify-center p-2 border border-b capitalize">start editing your content</li> */}
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => handleMenueClick(item.id)}
                className={`group py-1 px-5 hover:text-[#2E8CFA] hover:font-bold ${item.status == true ? 'bg-slate-300' : ''} hover:cursor-pointer transition-all ease-in-out duration-300 flex flex-row items-center justify-between border border-[#D8D8D8] rounded-md`}
              >
                {item.text}
              {/* <ChevronRightIcon className='h-7 group-hover:translate-x-3 transition-all ease-in-out duration-300'/> */}
              </li>
            ))}
            
          </ul>
        </div>
        <div className="">
          <RenderForms menueStatus={ menuItems } />
        </div>
      </div>
    <div className="flex flex-col max-w-7xl justify-center items-center mx-auto">
      <form className="flex flex-col space-y-5">
        <input
          onChange={(e) => setTitel(e.target.value)}
          className="contactInput"
          name="title"
          type="text"
          placeholder="title"
          required
        />
        <input
          onChange={(e) => setMessage(e.target.value)}
          className="contactInput"
          name="description"
          type="text"
          placeholder="about you"
          required
        />
        <input
          onChange={(e) => {
            const selectedFile = (e.target.files as FileList)[0];
            setFile(selectedFile);
          }}
          id="aboutImageInput"
          className="contactInput"
          name="aboutImage"
          type="file"
          required
        />
        <button
          className="bg-blue-500 rounded-md p-2 font-semibold text-white/80"
          onClick={hitApi}
        >
          Enter Value
        </button>
        <button
          className="bg-blue-500 rounded-md p-2 mt-5 font-semibold text-white/80"
          onClick={getApi}
        >
          get data
        </button>
      </form>
    </div>
    </div>
  );
}
