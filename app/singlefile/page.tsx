"use client";
import { addContactInfo } from '@/actions/aboutSectionActions';
import { MouseEvent, useState } from 'react'

type Props = {}

export default function Page({}: Props) {
  const [position, setPosition] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [start_date, setStart_date] = useState<string>('');
  const [end_date, setEnd_date] = useState<string>('');
  const [technologies, setTechnologies] = useState<string>('');
  const [summery, setSummery] = useState<string>('');
  const [exp_Image, setExp_Image] = useState<File | null>(null);
  const [currently_working, setCurrently_working] = useState<boolean>();
  const formData = new FormData();
  
  async function addContactInfo (e: MouseEvent) {
    e.preventDefault()
    formData.append('position', position);
    formData.append('company', company);
    formData.append('start_date', start_date);
    formData.append('end_date', end_date);
    formData.append('currently_working', currently_working == true? "1" : "0" );
    formData.append('technologies', technologies);
    formData.append('summery', summery);
    if (exp_Image) {
      formData.append('exp_Image', exp_Image);
    }

    const response = await fetch("http://localhost/my-web-api/public/api/postexp", {
      method: "POST",
      body: await formData,
      headers: {
      Content_type: "multipart/form-data",
      },
    });
      const responseData = await response.json();
  }

  async function getApi () {
    const url = "http://localhost/my-web-api/public/api/getabout"
    // const url = "http://172.16.150.109//cPanel-API-Simple-PHP/getallemail.php" 2000-03-26
    try {
        await fetch(url, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
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
  
  return (
    <div className='flex flex-col max-w-7xl justify-center items-center mx-auto'>
      <form className='flex flex-col space-y-5 w-2/6'>
        <input onChange={(e) => setPosition(e.target.value)} className='p-2 rounded-sm bg-gray-500/50 outline-none' name='position' type="text" placeholder='position' required/>
        <input onChange={(e) => setCompany(e.target.value)} className='p-2 rounded-sm bg-gray-500/50 outline-none' name='company' type="text" placeholder='company' required/>
        <input onChange={(e) => setStart_date(e.target.value)} className='p-2 rounded-sm bg-gray-500/50 outline-none' name='start_date' type="text" placeholder='start_date' required/>
        <input onChange={(e) => setEnd_date(e.target.value)} className={`p-2 rounded-sm bg-gray-500/50 outline-none ${currently_working ? 'hover:cursor-not-allowed' : ""}`} name='end_date' type="text" placeholder='end_date' required disabled={currently_working}/>
        <div className="flex flex-row space-x-2">
          <input onChange={(e) => setCurrently_working(e.target.checked)} id='currently_working' type="checkbox" name='currently_working'/>
          <label htmlFor="currently_working">currently working?</label>
        </div>
        <input onChange={(e) =>{
            const selectedFile = (e.target.files as FileList)[0];
            setExp_Image(selectedFile);

        }} className='p-2 rounded-sm bg-gray-500/50 outline-none' name='exp_Image' type="file" placeholder='exp_Image' required/>
        <input onChange={(e) => setSummery(e.target.value)} className='p-2 rounded-sm bg-gray-500/50 outline-none' name='summery' type="text" placeholder='summery' required/>
        <input onChange={(e) => setTechnologies(e.target.value)} className='p-2 rounded-sm bg-gray-500/50 outline-none' name='technologies' type="text" placeholder='technologies' required/>
        <button className='bg-blue-500 rounded-md p-2 font-semibold text-white/80' onClick={addContactInfo}>Enter Value</button>
      </form>
    </div>
  )
}