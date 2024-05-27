import ProjectCard from "@/components/ProjectCard";
import BlogCardSkeleton from "@/components/skeletons/BlogCardSkeleton";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { Suspense } from "react";
import { FaArrowLeft } from "react-icons/fa6";

/**
 * Props for `ProjectIndex`.
 */
export type ProjectIndexProps = SliceComponentProps<Content.ProjectIndexSlice>;

/**
 * Component for "ProjectIndex" Slices.
 */
const ProjectIndex = ({ slice }: ProjectIndexProps): JSX.Element => {
  const client = createClient();
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="space-y-4"
    >
      <Link
        href="/"
        className="text-muted-foreground flex items-center gap-2 mb-4"
      >
        <FaArrowLeft />
        Go Back
      </Link>

      <h1 className="">All Projects</h1>

      <Suspense
        fallback={
          <>
            <div className="space-y-4">
              <BlogCardSkeleton />
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </div>
          </>
        }
      >
        <FetchProjects />
      </Suspense>
    </section>
  );
};

export default ProjectIndex;

async function FetchProjects() {
  const client = createClient();
  const projects = await client.getAllByType("project");
  return (
    <div>
      {projects.map((e) => {
        return <ProjectCard project={e} key={e.id} />;
      })}
    </div>
  );
}
