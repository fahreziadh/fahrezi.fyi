import Link from "next/link";

const projects = [
  {
    name: "Evaly",
    description: "All-in-One Assessment Platform",
    website: "https://evaly.io",
    logo: "/evaly.webp",
    story: "/project/evaly",
  },
  {
    name: "Typehere",
    description: "A Simple Open Source Form Builder",
    website: "https://typehere.fun",
    logo: "/typehere.webp",
  },
  {
    name: "TiketApaSaja",
    website: "https://tiketapasaja.com",
    description: "Ticket Box Cooperation - Management Ticketing",
  },
  {
    name: "Bikinsoal",
    website: "https://github.com/fahreziadh/bikinsoal",
    description: "Open-source quiz generator tool for teacher.",
  },
  {
    name: "Konten.io",
    website: "https://konten.io",
    description: "Digital content buying and selling platform",
  }
];

const workExperience = [
  {
    company: "Nuon",
    position: "Frontend Engineer",
    startDate: "2023",
    endDate: "Present",
  },
  {
    company: "Creative Station",
    position: "Frontend Engineer",
    startDate: "2023",
  },
  {
    company: "Gameqoo",
    position: "Android Engineer",
    startDate: "2019",
    endDate: "2023",
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
        {"I'm"} a frontend engineer that passionate about creating captivating
        web experiences. Currently at{" "}
        <Link href="https://nuon.id/" className="underline" target="_blank">
          Nuon
        </Link>
        , building{" "}
        <Link target="_blank" className="underline" href="https://evaly.io">
          evaly.io
        </Link>{" "}
        and share every journey here.
      </p>

      <p className="font-medium mt-20">Projects</p>
      <div className="mt-4 flex flex-col">
        {projects.map((project) => (
          <Link
            href={project.website}
            key={project.name}
            target="_blank"
            className="-mx-4 p-4 hover:bg-foreground/5 rounded-md"
          >
            <h1>{project.name}</h1>
            <h2 className="opacity-70">{project.description}</h2>
          </Link>
        ))}
      </div>

      <p className="font-medium mt-20">Work Experience</p>
      <div className="mt-4 flex flex-col divide-foreground/10">
        {workExperience.map((experience) => (
          <div key={experience.company} className="py-4">
            <h1 className="flex flex-row justify-between">
              <span>{experience.company}</span>
              <span className="opacity-50">
                {`${experience.startDate}`}{" "}
                {experience.endDate && `- ${experience.endDate}`}
              </span>
            </h1>
            <h2 className="opacity-70">{experience.position}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
