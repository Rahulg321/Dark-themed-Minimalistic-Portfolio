import BlogCard from "@/components/BlogCard";
import BookCard from "@/components/BookCard";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import NewsletterComp from "@/components/NewsletterComp";
import Profile from "@/components/Profile";
import ProjectCard from "@/components/ProjectCard";
import { ModeToggle } from "@/components/theme-toggle";
import { createClient } from "@/prismicio";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const client = createClient();
  const featuredProjects = await client.getAllByType("project", {
    limit: 3,
  });

  const featuredblogposts = await client.getAllByType("blogpost", {
    limit: 3,
  });

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
        <p className="text-muted-foreground">
          I'm fine-tuning my freelancing business, sharing more online, and
          leveling up my design skills. I enjoy crafting components and
          experiments for my lab.
        </p>
        <p className="text-muted-foreground">
          If you'd like to collaborate, feel free to send me an email.
        </p>
      </div>

      <div className="mb-12">
        <h3 className="mb-8">Featured Projects 💻</h3>
        <div className="">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="text-muted-foreground underline text-base underline-offset-4 text-right block my-4"
        >
          All Projects
        </Link>
      </div>

      <div className="mb-12">
        <h3 className="mb-8">Featured Blogs ✒️</h3>
        <div className="">
          {featuredblogposts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <Link
          href="/blogs"
          className="text-muted-foreground underline text-base underline-offset-4 text-right block mt-12"
        >
          All Blogs
        </Link>
      </div>

      <div className="mb-12">
        <h3 className="mb-8">Favorite Books 📖</h3>
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
        <h3 className="mb-8">My Goals ✈️</h3>
        <ImageGallery />
      </div>

      <div className="mb-12">
        <h3 className="mb-8">Connect</h3>
        <p className="text-muted-foreground">
          Connect with me on Twitter, view my code and open-source projects on
          Github, explore my Read.cv profile, or email me directly
          atjulien.thibeaut@gmail.com.
        </p>
      </div>

      <NewsletterComp />

      <Footer />
    </>
  );
}
