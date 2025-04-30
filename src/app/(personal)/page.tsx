"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Evaly",
    description: "All-in-One Assessment Platform",
    website: "https://evaly.io",
    github: "https://github.com/fahreziadh/evaly",
    logo: "/evaly.webp",
    story: "/project/evaly",
    stack: ["Open-source", "Next.js", "Tailwindcss", "Supabase (PostgreSQL)", "Redis"],
    thumbnail: "/img/evaly.webp",
    year: "2024",
  },
  {
    name: "Typehere",
    description: "A Simple Open Source Form Builder",
    website: "https://typehere.fun",
    github: "https://github.com/fahreziadh/typehere",
    logo: "/typehere.webp",
    story: "/project/typehere",
    stack: ["Open-source", "Sveltekit", "Tailwindcss", "LibSQL(SQLite)", "Cloudflare"],
    thumbnail: "/img/typehere.webp",
    year: "2024",
  },
  {
    name: "Bikinsoal",
    website: "https://github.com/fahreziadh/bikinsoal",
    description: "Open-source quiz generator tool for teacher.",
    story: "/project/bikinsoal",
    thumbnail: "/img/bikinsoal.webp",
    stack: ["Open-source", "Next.js", "tRPC", "PlanetScale(MySQL)", "Tailwindcss", "Vercel"],
    year: "2023",
  },
  {
    name: "TiketApaSaja",
    website: "https://tiketapasaja.com",
    description: "Ticket Box Cooperation - Management Ticketing",
    story: "/project/tiketapasaja",
    stack: ["Nuxt", "Tailwindcss", "PostgeSQL", "PHP", "AlibabaCloud"],
    thumbnail: "/img/tiketapasaja.webp",
    year: "2023",
  },
  {
    name: "Konten.io",
    website: "https://konten.io",
    description: "Digital content buying and selling platform",
    story: "/project/konten-io",
    thumbnail: "/img/konten-io.webp",
    stack: ["Next.js", "PostgreSQL", "Tailwindcss", "Vercel"],
    year: "2022",
  },
  {
    name: "Gameqoo",
    website: "https://gameqoo.id",
    description: "Cloud Gaming Platform",
    story: "/project/gameqoo",
    thumbnail: "/img/gameqoo.webp",
    stack: ["Kotlin", "Java", ".NET"],
    year: "2020",
  },
];

const workExperience = [
  {
    company: "Dolami, Inc",
    position: "Software Engineer",
    startDate: "Oct 2024",
    endDate: "Present",
    url: "https://dolami.co/",
  },
  {
    company: "Nuon",
    position: "Software Engineer",
    startDate: "Sep 2022",
    endDate: "Oct 2024",
    url: "https://nuon.id/en",
  },
  {
    company: "Creative Station",
    position: "Frontend Engineer Consultant",
    startDate: "Nov 2022",
    endDate: "Sep 2023",
    url: "https://www.instagram.com/creativestation.co.id/?hl=en",
  },
  {
    company: "Gameqoo",
    position: "Software Engineer",
    startDate: "Aug 2018",
    endDate: "Jul 2022",
    url: "https://gameqoo.id/",
  },
];

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="container max-w-[680px] leading-relaxed antialiased pb-20">
      <Link href="/" className="font-medium">
        Fahrezi Adha
      </Link>
      <p className="opacity-70 font-medium">Software Engineer</p>
      <p className="mt-6 text-foreground/70">
        {
          "I'm a software engineer that's passionate about creating something people love. Currently at "
        }
        <Link
          href="https://dolami.co/"
          className="hover:text-[#1da1f2]"
          target="_blank"
        >
          Dolami, Inc.
        </Link>
        {" building "}
        <Link
          target="_blank"
          className="hover:text-[#1da1f2]"
          href="https://evaly.io"
        >
          Evaly
        </Link>{" "}
        and share every journey here. I also share about tech stuff on{" "}
        <Link
          href="https://twitter.com/fahreziadhaa"
          className="hover:text-[#1da1f2]"
          target="_blank"
        >
          My Twitter
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.youtube.com/@fahreziadha"
          className="hover:text-[#1da1f2]"
          target="_blank"
        >
          Youtube
        </Link>
        .
      </p>

      <p className="font-semibold mt-16">My Projects</p>
      <div className="mt-4 flex flex-col gap-8">
        {projects.map((project) => (
          <Link
            href={project.website}
            key={project.name}
            className="relative flex flex-col sm:flex-row gap-6 hover:bg-foreground/5 hover:border-foreground/10 border border-foreground/0 -m-2 p-2 transition-colors duration-100 rounded-md group"
          >
            <Image
              src={project.thumbnail}
              alt={project.name}
              width={600}
              height={600}
              className="rounded-[4px] aspect-[4/3] w-full sm:w-28 object-cover object-top border border-foreground/10 h-max"
            />
            <div className="grow">
              <div className="flex flex-row items-start justify-between w-full">
                <p>{project.name}</p>
                <div className="flex flex-row items-center gap-2">
                  <p className="text-xs opacity-50">{project.year}</p>
                </div>
              </div>
              <h2 className="opacity-70">{project.description}</h2>
              <h2 className="opacity-70 flex flex-row flex-wrap gap-1.5 text-xs mt-2 font-medium">
                {project.stack?.map((e) => (
                  <span
                    key={e}
                    className="px-1.5 py-0.5 bg-foreground/5 text-foreground/60"
                  >
                    {e}
                  </span>
                ))}
              </h2>
            </div>
          </Link>
        ))}
      </div>

      <p className="font-semibold mt-16">Work Experience</p>
      <div className="mt-4 flex flex-col divide-foreground/10">
        {workExperience.map((experience) => (
          <Link
            href={`${experience.url}`}
            key={experience.company}
            target="_blank"
            className="py-2 hover:bg-foreground/5 -mx-2 px-2"
          >
            <h1 className="flex flex-row justify-between">
              <span>{experience.company}</span>
              <span className="opacity-50 text-sm">
                {`${experience.startDate}`}{" "}
                {experience.endDate && `- ${experience.endDate}`}
              </span>
            </h1>
            <h2 className="opacity-70 text-sm">{experience.position}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
