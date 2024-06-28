import BlogCard from "@/components/BlogCard";
import BookCard from "@/components/BookCard";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import NewsletterComp from "@/components/NewsletterComp";
import Profile from "@/components/Profile";
import ProjectCard from "@/components/ProjectCard";
import { ModeToggle } from "@/components/theme-toggle";
import { createClient } from "@/prismicio";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const client = createClient();
  //wrap the fetch calls in a promise.all to avoid blocking the page
  const [featuredProjects, featuredblogposts, featuredbooks] =
    await Promise.all([
      client.getAllByType("project", {
        limit: 3,
      }),
      client.getAllByType("blogpost", {
        limit: 3,
      }),
      client.getAllByType("book", {
        limit: 2,
      }),
    ]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@id": "#main-author",
      "@type": "Person",
      name: "Rahul Gupta",
      url: new URL("https://rahulguptadev.in"),
    },
    hasPart: [
      {
        "@type": "Article",
        headline: "Introduction:Meet Rahul Gupta",
        url: "https://rahulguptadev.in/blogs/introduction-meet-rahul-gupta",
        datePublished: "2024-05-28T16:00:00Z",
        author: { "@id": "#main-author" },
      },
    ],
    description: "A frontend developer, optimist, and community builder.",
    image: "https://rahulguptadev.in/favicon.ico",
    dateCreated: "2024-05-28T16:00:00Z",
    dateModified: "2024-05-28T16:00:00Z",
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <Profile />
      <div className="mb-12">
        <h2 className="mb-8">hey, I am Rahul 👋</h2>
        <p className="text-muted-foreground">
          I am a frontend developer, optimist, and community builder. I
          currently specialize in building marketing websites for companies
          using Next.js and Prismic. With two years of coding experience, I am
          now a full-time freelancer actively seeking job opportunities.
        </p>

        <p className="text-muted-foreground">
          I am fine-tuning my freelancing business, sharing more online, and
          leveling up my design skills. I enjoy crafting components and
          experimenting new things.
        </p>
        <p className="text-muted-foreground">
          If you would like to collaborate, feel free to send me an{" "}
          <Link
            href="mailto:rg5353070@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-black dark:text-white"
          >
            email
          </Link>
          .
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
        <div className="">
          {featuredbooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <Link
          href="/books"
          className="text-muted-foreground underline text-base underline-offset-4 text-right block mt-12"
        >
          Books I have read
        </Link>
      </div>

      <div className="mb-12">
        <h3 className="mb-8">Gallery 📷</h3>
        <ImageGallery />
      </div>

      <div className="mb-12">
        <h3 className="mb-8">Connect</h3>
        <p className="text-muted-foreground">
          Connect with me on{" "}
          <Link
            href={"https://x.com/rg5353070"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline dark:text-white"
          >
            Twitter
          </Link>
          , view my code and open-source projects on{" "}
          <Link
            href={"https://github.com/Rahulg321"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline dark:text-white"
          >
            Github
          </Link>
          , explore my{" "}
          <Link
            href={"https://read.cv/rg5353070"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline dark:text-white"
          >
            Read.cv
          </Link>
          profile
        </p>
        <span className="block mb-2 text-muted-foreground">
          Email me at{" "}
          <div className="font-bold inline text-black dark:text-white">
            rg5353070@gmail.com
          </div>
        </span>
      </div>

      <NewsletterComp />

      <Footer />
    </>
  );
}
