"use client";
import { MouseEvent, useState } from "react";
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

  async function hitApi(e: MouseEvent) {
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
      <div className="flex flex-col items-center relative justify-center w-full h-[550px]">
        <Image
        fill={true}
        alt='Image'
        src={`https://picsum.photos/1920/500/?random${new Date().getTime()}`}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-center items-center">
          <ul className='text-black font-semibold flex flex-row flex-wrap gap-5 mt-5 px-2'>
            {menuItems.map((item) => (
              <l
                key={item.id}
                onClick={() => handleMenueClick(item.id)}
                className={`group py-1 px-5 hover:text-[#2E8CFA] ${item.status == true ? 'bg-slate-300' : ''} hover:cursor-pointer transition-all ease-in-out duration-300 flex flex-row items-center justify-between border border-[#D8D8D8] rounded-md`}
              >
                {item.text}
              </l>
            ))}
            
          </ul>
        </div>
        <div className="">
          <RenderForms menueStatus={ menuItems } />
        </div>
      </div>
    </div>
  );
}
