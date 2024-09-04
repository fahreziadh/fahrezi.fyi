"use client"
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    // Check if URL contains a hash (#) and scroll to the target element
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth',block:"start" });
      }
    }
  }, []);

  return (
    <div className="container max-w-[680px] prose prose-zinc dark:prose-invert">
      <p>
      Currently active as a Software Engineer for 4 years. Working on projects related to Web development, such as Frontend & Backend Development, Infrastructure, etc. My daily usage stack is: Javascript/Typescript, Next.js, React.js, Tailwind, Postgres, Node.js, GraphQl, AWS, Docker & Redis.
      </p>
      <hr className="my-6 border-foreground/5" />
      <h2 id="nuon" className="font-medium text-xl mb-1 tracking-tighter">Nuon</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Software Engineer
      </p>
      <p>
        I joined <a href="https://nuon.id/">Nuon</a> in October 2022 as a
        Software Engineer, where I was responsible for building the platform's
        frontend and backend. I worked on the following projects:
      </p>
      <ul>
        <li>
          Built a high-performance ticketing system that handle 20k MAU and
          scaling to 100k users during peak events using Nuxt.js, Tailwind CSS,
          and Laravel. Achieved 100% SEO score (Lighthouse).
        </li>
        <li>
          Led the adoption of Nuxt.js as the new frontend stack, training the
          team and establishing best practices to improve development
          efficiency.
        </li>
        <li>
          Optimized site load times to 600% by implementing static pages and
          content caching with Redis, resulting in faster and enhanced platform
          stability during high-traffic events.
        </li>
      </ul>
      <p>
        Since joining Nuon, I have been working on several projects, including{" "}
        <a target="_blank" href="https://tiketapasaja.com/home">
          TiketApaSaja
        </a>{" "}
        &{" "}
        <a target="_blank" href="https://app.gameqoo.id/">
          Gameqoo
        </a>
        .
      </p>
      <hr className="my-6 border-foreground/5" />

      <h2 id="creative-station" className="font-medium text-xl mb-1 tracking-tighter">
        Creative Station
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Frontend Engineer Consultant
      </p>

      <p>
        I helped the team as a Consultant at{" "}
        <a
          href="https://www.instagram.com/creativestation.co.id/?hl=en"
          target="_blank"
        >
          Creative Station
        </a>{" "}
        in 2022 to build the frontend of their landing page & learning
        management system (LMS).
      </p>

      <ul>
        <li>
          Developed e-learning platform with 40k MAU, featuring student and
          teacher dashboards, and a landing page that increased conversion rates
          by 120%. Built with Next.js, React, and React-Query.
        </li>
        <li>
          Boost engineering team’s productivity to 200% and improve code quality
          by Implemented a monorepo architecture and expanded testing practices.
        </li>
        <li>
          Implementing a CI/CD pipeline with GitHub Actions, Docker, and
          Kubernetes to deploy the platform to production.
        </li>
      </ul>
      <hr className="my-6 border-foreground/5" />

      <h2 id="gameqoo" className="font-medium text-xl mb-1 tracking-tighter">Gameqoo</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
        Software Engineer
      </p>

      <p>
        I joined <a href="https://nuon.id/">Nuon</a> in 2018 as Intern, then
        switched to Full-time in 2019 as a Software Engineer. I build an Android
        Application that allows users to play AAA games with cloud gaming using
        Android TV (STB), Mobile App, and Web App.
      </p>

      <ul>
        <li>
          Spearheaded development and launch of cloud gaming interface Android
          application for 2 million set-top box devices using Kotlin, securing
          $50k in initial revenue.
        </li>
        <li>
          Led a team of 3 engineers, shipping multiple features and creating
          reusable component libraries that boosted development efficiency
          across teams.
        </li>
        <li>
          Optimized AWS S3 storage infrastructure and implemented robust
          firewall solutions, reducing storage costs by 90% and enhancing system
          security.
        </li>
      </ul>
    </div>
  );
};

export default Page;
