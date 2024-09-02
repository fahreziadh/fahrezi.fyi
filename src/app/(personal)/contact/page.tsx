"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";
import { sendNotificationEmail } from "./action";

const socialMedia = [
  {
    name: "Twitter/X",
    username: "@fahreziadhaa",
    url: "https://twitter.com/fahreziadhaa",
  },
  {
    name: "Github",
    username: "@fahreziadh",
    url: "https://github.com/fahreziadh",
  },
  {
    name: "Linkedin",
    username: "@fahrezi",
    url: "https://www.linkedin.com/in/fahrezi/",
  },
  {
    name: "Email",
    username: "fahreziadh@gmail.com",
    url: "mailto:fahreziadh@gmail.com",
    hoverMessage: "Click to copy",
  },
];

const links = [
  {
    name: "",
  },
];

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    email: "",
    message: "",
  });

  return (
    <div className="container max-w-[680px]">
      <p className="font-medium mt-10 mb-4">Social Media</p>
      <div className="grid sm:grid-cols-2 gap-2">
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
            className="p-4 hover:opacity-70 group border border-foreground/5 rounded-md"
          >
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
          </Link>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          sendNotificationEmail(message.email, message.message)
            .then(() => {
              setMessage({
                email: "",
                message: "",
              });
              toast.success(
                "Message sent successfully, I will definitely read it and reply to you soon.",
                {
                  position: "bottom-center",
                }
              );
            })
            .catch((e) => {
              toast.error(e.message);
            })
            .finally(() => {
              setLoading(false);
            });
        }}
        className="flex flex-col gap-4 mt-14 border-t pt-10 border-foreground/5"
      >
        <p className="mb-4">Hi 👋 If you need anything, send me a message.</p>
        <input
          value={message.email}
          onChange={(e) => {
            setMessage({ ...message, email: e.target.value });
          }}
          type="email"
          required
          placeholder="Your Email"
          className="w-full h-10 px-4 bg-none border border-foreground/5 rounded-md"
        />
        <textarea
          value={message.message}
          onChange={(e) => {
            setMessage({ ...message, message: e.target.value });
          }}
          required
          placeholder="Your message"
          className="w-full p-4 bg-none border border-foreground/5 rounded-md"
        />
        <button
          disabled={loading}
          className="text-sm font-semibold rounded-lg w-max bg-foreground hover:bg-foreground/80 text-background h-10 px-4 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Page;
