"use client";
import Link from "next/link";
import { toast } from "sonner";
import { Github, Linkedin, Mail, Twitter, Youtube } from "lucide-react";

export const dynamic = "force-static";

const socialMedia = [
  {
    name: "Twitter/X",
    username: "@fahreziadhaa",
    url: "https://twitter.com/fahreziadhaa",
    icon: Twitter,
  },
  {
    name: "Github",
    username: "@fahreziadh",
    url: "https://github.com/fahreziadh",
    icon: Github,
  },
  {
    name: "Linkedin",
    username: "@fahrezi",
    url: "https://www.linkedin.com/in/fahrezi/",
    icon: Linkedin,
  },
  {
    name: "Youtube",
    username: "@fahreziadh",
    url: "https://www.youtube.com/@fahreziadha",
    icon: Youtube,
  },
  {
    name: "Email",
    username: "fahreziadh@gmail.com",
    url: "mailto:fahreziadh@gmail.com",
    hoverMessage: "Click to copy",
    icon: Mail,
  },
];

const Page = () => {
  return (
    <div className="container max-w-[680px]">
      <p className="mb-4">
        Feel free to reach out to me through any of these platforms for
        inquiries, collaborations, or just to say hello.
      </p>
      <div className="grid sm:grid-cols-1 gap-4">
        {socialMedia.map((item) => (
          <Link
            href={item.hoverMessage ? "#" : item.url}
            key={item.name}
            onClick={() => {
              if (item.hoverMessage) {
                toast.success("Copied to clipboard");
                navigator.clipboard.writeText(item.username);
              }
            }}
            className="px-4 py-2 hover:opacity-70 group border border-foreground/10 rounded-lg items-center flex flex-row gap-4"
          >
            <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center">
              <item.icon className="stroke-foreground" size={20} />
            </div>
            <div className="grow">
              <div className="text-sm opacity-70">{item.username}</div>
              <div>
                {item.name}{" "}
                {item.hoverMessage ? (
                  <span className="group-hover:opacity-100 opacity-0">
                    ({item.hoverMessage})
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
