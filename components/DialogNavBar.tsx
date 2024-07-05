"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  BookOpen,
  Braces,
  Camera,
  CircleUserRound,
  Code,
  Component,
  FileText,
  GanttChart,
  Github,
  Home,
  Instagram,
  InstagramIcon,
  Layers3,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { FaUpwork } from "react-icons/fa6";

const DialogNavBar = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger onClick={() => setDialogOpen(true)}>
        <div className="rounded-full bg-accent p-4">
          <Component className="size-6" />
        </div>
      </DialogTrigger>
      <DialogContent className="px-4 py-4">
        <DialogHeader>
          {/* <span className="mt-4 mb-4 block font-bold text-muted-foreground">
            Connect
          </span> */}
          <DialogDescription>
            <nav className="">
              <span className="mt-4 mb-4 block font-bold text-muted-foreground">
                Explore
              </span>
              <div className="space-y-2">
                <NavLink
                  label="Home"
                  href="/"
                  icon={<Home />}
                  onClick={() => setDialogOpen(false)}
                />
                <NavLink
                  label="Projects"
                  href="/projects"
                  icon={<Code />}
                  onClick={() => setDialogOpen(false)}
                />
                <NavLink
                  label="Blogs"
                  href="/blogs"
                  icon={<FileText />}
                  onClick={() => setDialogOpen(false)}
                />
                <NavLink
                  label="Books"
                  href="/books"
                  icon={<BookOpen />}
                  onClick={() => setDialogOpen(false)}
                />
              </div>
              <span className="mt-4 mb-4 block font-bold text-muted-foreground">
                Connect
              </span>
              <div className="space-y-2">
                <ExternalNavSocialLink
                  label="Instagram"
                  href="https://www.instagram.com/_rahulgupta321_/"
                  icon={<InstagramIcon />}
                />
                <ExternalNavSocialLink
                  label="Twitter"
                  href="https://x.com/rg5353070"
                  icon={<Twitter />}
                />
                <ExternalNavSocialLink
                  label="Github"
                  href="https://github.com/Rahulg321"
                  icon={<Github />}
                />
                <ExternalNavSocialLink
                  label="Linkedin"
                  href="https://www.linkedin.com/in/rahul-gupta-86194a213/"
                  icon={<Linkedin />}
                />
                <ExternalNavSocialLink
                  label="Upwork"
                  href="https://www.upwork.com/freelancers/~0150bea88458ba05de"
                  icon={<Layers3 />}
                />
                <ExternalNavSocialLink
                  label="Read.cv"
                  href="https://read.cv/rg5353070"
                  icon={<Braces />}
                />
              </div>
            </nav>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogNavBar;

export function NavLink({
  label,
  href,
  icon,
  onClick,
}: {
  label: string;
  href: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-foreground hover:bg-muted flex items-start  gap-2 px-4 py-3 rounded-md"
      onClick={onClick}
    >
      <div className="w-[0.5rem] h-[0.5rem]">{icon}</div>
      <span className="font-bold ml-4">{label}</span>
    </Link>
  );
}

export function ExternalNavSocialLink({
  label,
  href,
  icon,
  onClick,
}: {
  label: string;
  href: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className="text-muted-foreground transition-all duration-200 ease-in-out hover:text-foreground hover:bg-muted flex items-start  gap-2 px-4 py-2 rounded-md"
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-[0.5rem] h-[0.5rem]">{icon}</div>
      <span className="font-bold ml-4">{label}</span>
    </Link>
  );
}
