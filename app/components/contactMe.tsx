import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function ContactMe() {
  return (
    <div className="h-screen relative flex flex-col justify-center items-center md:flex-row p-2 md:p-10 max-w-7xl mx-auto">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact me
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#00C6CF]/70">{`Let's Talk`}</span>
        </h4>
        <div className="flex flex-col mx-auto px-5 space-y-5 items-start">
            <div className="flex justify-center items-center space-x-5">
                <PhoneIcon className="text-[#00C6CF] h-7 animate-pulse"/>
                <p>+923045296525</p>
            </div>
            <div className="flex justify-center items-center space-x-5">
                <EnvelopeIcon className="text-[#00C6CF] h-7 animate-pulse"/>
                <a href="mailto:mohammadmoaid@gmail.com">mohammadmoaid@gmail.com</a>
            </div>
            <div className="flex justify-center items-center space-x-5">
                <MapPinIcon className="text-[#00C6CF] h-7 animate-pulse"/>
                <p className="capitalize">islamabad, pakistan</p>
            </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto px-5" action="">
            {/* <div className="flex space-x-2 w-screen"> */}
            <div className="grid grid-cols-2 gap-x-2">
                <input className="contactInput" type="text" placeholder="Name" required/>
                <input className="contactInput" type="email" placeholder="Email" required/>
            </div>
            <input className="contactInput" type="text" placeholder="Subject" required/>
            <textarea className="contactInput resize-none" placeholder="Your Message" required/>
            <button className="bg-[#00C6CF] py-5 px-10 rounded-md text-white font-bold">Submit</button>
        </form>
      </div>
    </div>
  );
}
