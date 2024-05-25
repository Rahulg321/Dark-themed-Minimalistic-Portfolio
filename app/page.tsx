import BlogCard from "@/components/BlogCard";
import BookCard from "@/components/BookCard";
import ImageGallery from "@/components/ImageGallery";
import NewsletterComp from "@/components/NewsletterComp";
import Profile from "@/components/Profile";
import ProjectCard from "@/components/ProjectCard";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Profile />
      <div className="mb-12">
        <h2 className="mb-8">hey, I'm Rahul 👋</h2>
        <p className="text-muted-foreground">
          I'm a frontend developer, optimist, and community builder. I currently
          work as the VP of Product at Vercel, where I help teach the Next.js
          logomarkNext.js community, an open-source web framework built with
          React.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="mb-6">Featured Projects 💻</h2>
        <div className="space-y-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <span className="text-muted-foreground underline text-base underline-offset-4 text-right block my-4">
          All Projects
        </span>
      </div>

      <div className="mb-12">
        <h2 className="mb-4">Featured Posts ✒️</h2>
        <div className="space-y-6">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <span className="text-muted-foreground underline text-base underline-offset-4 text-right block mt-12">
          All Posts
        </span>
      </div>

      <div className="mb-12">
        <h2 className="mb-4">Favorite Books 📖</h2>
        <div className="space-y-6">
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
        <span className="text-muted-foreground underline text-base underline-offset-4 text-right block mt-12">
          All Books
        </span>
      </div>

      <div className="mb-12">
        <h2 className="mb-4">My Goals ✈️</h2>
        <ImageGallery />
      </div>

      <NewsletterComp />
    </>
  );
}
