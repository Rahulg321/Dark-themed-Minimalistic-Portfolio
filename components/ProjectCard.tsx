import React from "react";
import project from "@/public/project.webp";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="flex gap-4">
      <div>
        <Image src={project} alt="project" width={50} height={50} />
      </div>
      <div>
        <p className="block">Dark Alpha Capital</p>
        <p className="text-muted-foreground block">
          Manage your side Projects in one Place
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
