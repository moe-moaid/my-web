"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import developerImage from "../public/assets/9d logo.jpeg";
import music from "../public/assets/mackie-project.png";
import coco from "../public/assets/coco-project.png";
import converter from "../public/assets/converter-project.png";
import chat from "../public/assets/chat-project.png";

type Props = {};

export default function Project({}: Props) {
  const projects = [
    {
      project: "Music Platform",
      discription: "During COVID times, a client wanted to make a project just like \"The Voice\" but online, where contesters can upload thier music vides after creating a profile, then people vote for them, winners go to next round, untill 5 contesters reach final round where they will be hosted live on the platform and the final winner will get ticket to x country and get to meet international singers, the platform has an admin panel too, via which the admin can monitor votes, reveniew generated and number of artists, the admin has full control on blocking/restricting artists in case of violation, also for people to cast vote they will have to pay x ammount and that will be reflected on the adshboard, my task was to make the frontend only using any technology I preffer, so I chose to work with Bootstrap and Javascript as I have mastery on Bootstrap so I didn't want to wast time learning Tailwind CSS or any other stuff"

    },
    {
      project: "File Converter",
      discription: "At 9D Technologies, I was assigned a task to build a file converter to convert file formats from pdf to other formats like word, image, xls, cls, compress pdf, split pdf, etcetra, the backend was built by the backend team and I integrated the API to the frontend which was a react based, with bootstrap and css, I can't say it was challenging but I learnt a lot of things regarding allowing users to download files from servers and grant them access to view their files before downloading them. It is fully responsive too, from full HD screens to 350px screens"

    },
    {
      project: "COCOLEMON",
      discription: "At 9D Technologies, I was assigned a task to build a platform to host all kids games created by the company and deployed on Google Play, to have one single place to let users download from, CMS was created by me along with API, frontend was also created by me using Next.js for the frontend and simple Bootstrap for the CMS, there are functionalities to filter based on category, age, and device type e.g Android or IOS, the user can view all previous versions, comments, ratings which are fetched directly from Google Play and can download the latest version via a click of a button, one ethical issue faced us building this project was if we can really scrape data from Google Play, or we should have our own database to fetch the data from, the dicition is still not made and it's under process, stay tuned ;)"
    },
    {
      project: "Customer Support Chat",
      discription: "This MERN project was assigned to me at 9D Technologies, the company had a product for females \"Period Tracker\" for which they needed a customer support portal, I created the API using express.js and MongoDB, users are stored with their email, username, dp url, and the chats are stored based on the usernames, for frontend I used Next.js, and for socket connection I used Socket.io. The mobile application developer signs the user in with google account and sends me the info needed to be stored and I create a private room for the user to start chatting with the admin, the user can only chat with the admin, but the admin can chat with all users available. one main issue I faced in this project is how to handle the different scenarios with the least amount of communication with the database to minimize server traffic coast, so I created an 'end chat' button for the admin to end the chat, it does nothing more than saving the chat to the databse, but then what happens to users who are chatting for the first time? and what happens to users who chatted before and want to caht again? how to fetch their data from both the DB and the socket server? at the end I created a unifide data structure for both DB data and socket live data and checked if messages exist in database fetch them then concatinate the messages from the live socket, otherwise fetch the messages from the live socket, this is extreamly summerized snippet of one problem faced me during this project, I learnt a lot and enjoyed building this project as it was my first time interacting with sockets"
    }
  ];
  return (
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1.5}}
       className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
          Projects
        </h3>
          <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00C6CF]/80">
        {projects.map((project, i) => (
          <div
          
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-20 lg:p-40 h-screen overflow-y-scroll"
          >
            <motion.div
            initial={{
              y: -300,
              opacity: 0
            }}
            whileInView={{
              y: 0,
              opacity: 1
            }}
            transition={{duration: 1.5}}
            // viewport={{once: true}}
            >
              {project.project === 'Music Platform' && <Image className="max-w-100 max-h-[375px]" src={music} alt="music platform" height={375} width={666}/>}
              {project.project === 'File Converter' && <Image src={converter} alt="music platform" height={375} width={666}/>}
              {project.project === 'COCOLEMON' && <Image src={coco} alt="music platform" height={375} width={666}/>}
              {project.project === 'Customer Support Chat' && <Image src={chat} alt="music platform" height={375} width={666}/>}
              
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#00C6CF]/70">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.project}
              </h4>
              <p className="text-lg text-justify md:text-left">
                {project.discription}
              </p>
            </div>
          </div>
        ))}
        </div>
      <div className="w-full absolute top-[30%] bg-[#00C6CF]/10 left-0 h-[500px] -skew-y-12"></div>
      </motion.div>
  );
}
