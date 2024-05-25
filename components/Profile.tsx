import Image from "next/image";
import React from "react";
import profile from "@/public/profile.png";
import { ModeToggle } from "./theme-toggle";

const Profile = () => {
  return (
    <div className="mb-12 flex justify-between items-center">
      <div className="flex gap-2">
        <div className="relative  w-16 h-16">
          <Image
            src={profile}
            alt="profile"
            fill={true}
            className="border-2 border-gray-300 rounded-full"
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
