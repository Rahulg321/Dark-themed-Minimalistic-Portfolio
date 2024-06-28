import React from "react";
import project from "@/public/project.webp";
import Image from "next/image";
import { FaLink } from "react-icons/fa6";
import { Content, ImageField, KeyTextField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const ProjectCard = ({ project }: { project: Content.ProjectDocument }) => {
  return (
    <PrismicNextLink field={project.data.project_link}>
      <div className="flex justify-between items-center hover:bg-muted transition-all duration-300 ease-in-out cursor-pointer rounded-lg p-4">
        <div className="flex flex-col md:flex-row gap-4">
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
        <div className="text-2xl hidden md:block dark:text-muted-foreground">
          <FaLink />
        </div>
      </div>
    </PrismicNextLink>
  );
};

export default ProjectCard;
