import Image from "next/image";
import React from "react";
import profile from "@/public/rahulFrontPic.jpg";
import { ModeToggle } from "./theme-toggle";

const Profile = () => {
  return (
    <div className="mb-12 flex flex-col-reverse gap-6 md:flex-row md:justify-between md:items-center">
      <div className="flex gap-4 items-center">
        <div className="hidden md:block relative w-[10rem] h-[10rem]">
          <Image
            src={profile}
            alt="profile"
            fill={true}
            className="border-2 object-cover border-black dark:border-gray-300 rounded-full"
          />
        </div>

        <div>
          <h3>Rahul Gupta</h3>
          <p>Software Engineer</p>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Profile;
