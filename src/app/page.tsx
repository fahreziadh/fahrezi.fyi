import Link from "next/link";

const projects = [
  {
    name: "Evaly",
    description: "An Exam, Assessment, and Evaluation Platform",
    url: "https://evaly.io",
  },
  {
    name: "Typehere",
    description: "A Simple Open Source Form Builder",
    url: "https://typehere.fun",
  },
  {
    name: "TiketApaSaja",
    url:"https://tiketapasaja.com",
    description: "Ticket Box Cooperation - Management Ticketing",
  }
];

export default function Home() {
  return (
    <main className="container max-w-[680px] pt-14  leading-relaxed antialiased">
      <Link href="/" className="font-medium">
        Fahrezi Adha
      </Link>
      <p className="opacity-70 font-medium">Frontend Engineer</p>
      <p className="mt-6 opacity-70">
        {"i'm"} Frontend Engineer that passionate about creating captivating web
        experiences. Currently at{" "}
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
            key={project.name}
            href={project.url}
            target="_blank"
            className="-mx-4 px-4 py-4 hover:bg-zinc-950/5 rounded-md transition-all ease-in-out"
          >
            <h1 className="font-medium">{project.name}</h1>
            <h2 className="opacity-70">{project.description}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
