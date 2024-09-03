import Image from "next/image";
import Link from "next/link";
import { Tweet } from "react-tweet";

const projects = [
  {
    name: "Evaly",
    description: "All-in-One Assessment Platform",
    website: "https://evaly.io",
    logo: "/evaly.webp",
    story: "/project/evaly",
    stack: [
      "Next.js",
      "Tailwindcss",
      "ElysiaJs",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Redis",
    ],
    thumbnail: "/img/evaly.png",
    year: "2024",
  },
  {
    name: "Typehere",
    description: "A Simple Open Source Form Builder",
    website: "https://typehere.fun",
    logo: "/typehere.webp",
    story: "/project/typehere",
    stack: ["Sveltekit", "Tailwindcss", "LibSQL(SQLite)", "Cloudflare"],
    thumbnail: "/img/typehere.webp",
    year: "2024",
  },
  {
    name: "Bikinsoal",
    website: "https://github.com/fahreziadh/bikinsoal",
    description: "Open-source quiz generator tool for teacher.",
    story: "/project/bikinsoal",
    thumbnail: "/img/bikinsoal.webp",
    stack: ["Next.js", "tRPC", "PlanetScale(MySQL)", "Tailwindcss", "Vercel"],
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
    company: "Nuon",
    position: "Software Engineer",
    startDate: "Sep 2022",
    endDate: "Present",
  },
  {
    company: "Creative Station",
    position: "Frontend Engineer Consultant",
    startDate: "Nov 2022",
    endDate: "Sep 2023",
  },
  {
    company: "Gameqoo",
    position: "Software Engineer",
    startDate: "Aug 2018",
    endDate: "Jul 2022",
  },
];

export const dynamic = "force-static";

export default async function Home() {
  return (
    <main className="container max-w-[680px] leading-relaxed antialiased pb-20">
      <Link href="/" className="font-medium">
        Fahrezi Adha
      </Link>
      <p className="opacity-70 font-medium">Frontend Engineer</p>
      <p className="mt-6 opacity-70">
        {"I'm"} a software engineer that passionate about creating something people love. Currently at{" "}
        <Link href="https://nuon.id/" className="underline" target="_blank">
          Nuon
        </Link>
        , building{" "}
        <Link target="_blank" className="underline" href="https://evaly.io">
          evaly.io
        </Link>{" "}
        and share every journey here.
      </p>

      <p className="font-medium mt-20">Work Experience</p>
      <div className="mt-4 flex flex-col divide-foreground/10">
        {workExperience.map((experience) => (
          <div key={experience.company} className="py-4 hover:bg-foreground/5 -mx-4 px-4 rounded-md">
            <h1 className="flex flex-row justify-between">
              <span>{experience.company}</span>
              <span className="opacity-50 text-sm">
                {`${experience.startDate}`}{" "}
                {experience.endDate && `- ${experience.endDate}`}
              </span>
            </h1>
            <h2 className="opacity-70">{experience.position}</h2>
          </div>
        ))}
      </div>

      <p className="font-medium mt-20">Projects</p>
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            href={project.website}
            key={project.name}
            className="relative hover:bg-foreground/5 hover:border-foreground/10 border border-foreground/0 rounded-lg -m-3 p-3 transition-colors duration-100"
          >
            <Image
              src={project.thumbnail}
              alt={project.name}
              width={400}
              height={300}
              className="aspect-[16/9] object-cover rounded-lg border border-foreground/5 shadow-sm w-full min-h-[200px] min-w-full"
            />
            <div className="mt-4 flex flex-row items-start justify-between w-full">
              <p>{project.name}</p>
              <p className="text-xs opacity-50">{project.year}</p>
            </div>
            <h2 className="opacity-70">{project.description}</h2>
            <h2 className="opacity-70 flex flex-row flex-wrap gap-1.5 text-xs mt-2 font-medium">
              {project.stack?.map((e) => (
                <span key={e} className="px-2 py-1 rounded-lg bg-foreground/5">
                  {e}
                </span>
              ))}
            </h2>
          </Link>
        ))}
      </div>

    </main>
  );
}
