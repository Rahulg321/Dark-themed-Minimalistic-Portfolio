import Image from "next/image";
import React from "react";
import profile from "@/public/rahulFrontPic.jpg";
import { ModeToggle } from "./theme-toggle";

const Profile = () => {
  return (
    <div className="mb-12 flex flex-col-reverse gap-6 md:flex-row md:justify-between md:items-center">
      <div className="flex gap-2">
        <div className="relative  w-16 h-16">
          <Image
            src={profile}
            alt="profile"
            fill={true}
            className="border-2 border-black dark:border-gray-300 rounded-full"
          />
        </div>

        <div>
          <h3>Rahul Gupta</h3>
          <p>Software Engineer</p>
        </div>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Profile;
