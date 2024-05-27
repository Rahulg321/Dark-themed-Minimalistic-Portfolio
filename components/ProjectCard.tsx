import React from "react";
import project from "@/public/project.webp";
import Image from "next/image";
import { FaLink } from "react-icons/fa6";
import { Content, ImageField, KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Content.ProjectDocument }) => {
  return (
    <Link href={`/projects/${project.uid}`}>
      <div className="flex justify-between items-center hover:bg-neutral-900 cursor-pointer rounded-lg p-4">
        <div className="flex gap-4">
          <div>
            <PrismicNextImage
              field={project.data.featured_image}
              width={50}
              height={50}
            />
          </div>
          <div>
            <p className="block">{project.data.title}</p>
            <p className="text-muted-foreground block">
              {project.data.description}
            </p>
          </div>
        </div>
        <div className="text-2xl dark:text-muted-foreground">
          <FaLink />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
