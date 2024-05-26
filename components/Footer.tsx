import React from "react";
import { FaDiscord } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12">
      <div className="flex justify-center gap-4">
        <SocialMediaLink icon={<FaDiscord />} link={""} />
        <SocialMediaLink icon={<FaGithub />} link={""} />
        <SocialMediaLink icon={<FaXTwitter />} link={""} />
        <SocialMediaLink icon={<FaLinkedin />} link={""} />
        <SocialMediaLink icon={<FaInstagram />} link={""} />
      </div>
      <div className="mt-8">
        <span className="text-center flex items-center text-muted-foreground justify-center">
          Inspired by
        </span>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-2 text-muted-foreground">
          <InspiredText text="Lee Robinson" textLink={""} />{" "}
          <InspiredText text="Hosna Qasmei" textLink={""} />
          <InspiredText text="Julien Thibeaut" textLink={""} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function SocialMediaLink({ icon, link }: { icon: any; link: string }) {
  return (
    <Link
      href={link}
      className="text-2xl text-muted-foreground transition duration-300 ease-in-out hover:text-gray-200"
    >
      {icon}
    </Link>
  );
}

function InspiredText({ text, textLink }: { text: string; textLink: string }) {
  return (
    <Link
      href={textLink}
      className="ml-1 hover:text-gray-300 transition duration-300 hover:underline ease-in-out underline-offset-2"
    >
      {text}
    </Link>
  );
}
