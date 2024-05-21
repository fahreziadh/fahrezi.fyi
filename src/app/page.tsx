import Link from "next/link";

const projects = [
  {
    name: "Evaly",
    description: "An Exam, Assessment, and Evaluation Platform",
    url: "/projects/evaly",
  },
  {
    name: "Typehere",
    description: "A Simple Open Source Form Builder",
    url: "/projects/typehere",
  },
];

export default function Home() {
  return (
    <main className="container max-w-[680px] pt-14  leading-relaxed antialiased">
      <Link href="/" className="font-medium">
        Fahrezi Adha
      </Link>
      <p className="opacity-70 font-medium">Frontend Engineer</p>
      <h1 className="mt-16 font-medium">Hello 👋</h1>
      <p className="mt-6 opacity-70">
        {"i'm"} Frontend Engineer that passionate about creating captivating web
        experiences. Currently at Nuon, building evaly.io and share every
        journey here.
      </p>

      <p className="font-medium mt-20">Projects</p>
      <div className="mt-4 flex flex-col gap-2">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.url}
            className="-mx-3 px-3 py-2 hover:bg-white/5 rounded-md"
          >
            <h1>{project.name}</h1>
            <h2 className="opacity-70">{project.description}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
