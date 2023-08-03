"use client";
import { AiOutlineClose } from "react-icons/ai";
import React, { CSSProperties, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IMENU } from "@config/app.config";
import "./Sidebar.scss";

const Sidebar: React.FC<IMENU> = ({ title, entries, socials, copyright }) => {
  const currentRoute = usePathname();
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  return (
    <div>
      <button className="closeBtn" onClick={() => setMobile((prev) => !prev)}>
        X
      </button>
      <nav className={isMobile ? "Sidebar active" : "Sidebar"}>
        <div>
          <h4 className="title">{title}</h4>
        </div>

        <ul>
          {entries.map((i) => (
            <li key={i.href}>
              <a
                href={i.href}
                className={currentRoute == i.href ? "option active" : "option"}
              >
                {i.text}
              </a>
            </li>
          ))}
        </ul>

        <div className="footer">
          <div className="socials">
            {socials.map((i) => (
              <Link style={i.style} key={i.href} href={i.href}>
                {i.icon}
              </Link>
            ))}
          </div>
          <p className="copyright">{copyright}</p>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
