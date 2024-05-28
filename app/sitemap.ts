import { createClient } from "@/prismicio";
import { MetadataRoute } from "next";

export default async function sitemap() {
  const client = createClient();
  const baseUrl = "https://rahulguptadev.in";
  const blogs = await client.getAllByType("blogpost");
  const projects = await client.getAllByType("project");

  const blogsURLS =
    blogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.uid}`,
      lastModified: new Date(),
    })) ?? [];

  const projectsURLS =
    projects.map((project) => ({
      url: `${baseUrl}/projects/${project.data.title}`,
      lastModified: new Date(),
    })) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/books`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },

    ...blogsURLS,
    ...projectsURLS,
  ];
}
