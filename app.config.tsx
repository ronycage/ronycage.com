import CSS from "csstype";
import Link from "next/link";

import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export interface IMENU {
  title: string;
  entries: {
    text: string;
    href: string;
  }[];
  socials: {
    text: string;
    icon: React.ReactNode;
    href: string;
    style?: CSS.Properties;
  }[];
  copyright: JSX.Element;
}

// Sidebar config
export const MENU: IMENU = {
  title: "RONYCAGE",
  entries: [
    {
      text: "About Me",
      href: "/",
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "Web Projects",
      href: "/web",
    },
    {
      text: "Music Projects",
      href: "/music",
    },
    {
      text: "Contact me",
      href: "/contact",
    },
  ],
  socials: [
    {
      text: "Steam",
      icon: <FaSteam />,
      href: "https://steamcommunity.com/id/ronycage",
      style: { fontSize: "1.3rem" },
    },
    {
      text: "Youtube",
      icon: <FaYoutube />,
      href: "https://youtube.com/@ronycage",
    },
    {
      text: "GitHub",
      icon: <AiFillGithub />,
      href: "https://github.com/ronycage",
    },
    {
      text: "Discord",
      icon: <FaDiscord />,
      href: "https://discord.com/users/989507291554414713",
    },
    {
      text: "Telegram",
      icon: <FaTelegramPlane />,
      href: "https://t.me/ronycage",
      style: { fontSize: "1.3rem" },
    },
  ],
  copyright: (
    <>
      © 2023 Rony Cage <Link href="/test">(License)</Link>
    </>
  ),
};

// Markdown location)
export const markdownFolder = "./data/markdowns/";
