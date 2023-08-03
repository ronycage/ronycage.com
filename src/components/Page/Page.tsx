"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

import { MENU } from "@config/app.config";
import "./Page.scss";

type IPage = {
  children: React.ReactNode;
  title: string;
};

const Page: React.FC<IPage> = ({ children, title }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobile, setMobile] = useState<boolean>(false);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  // useEffect(() => {
  //   window.addEventListener("resize", handleWindowSizeChange);
  //   return () => {
  //     window.removeEventListener("resize", handleWindowSizeChange);
  //   };
  // }, [width]);

  useEffect(
    function mount() {
      window.addEventListener("resize", handleWindowSizeChange);

      return function unMount() {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    },
    [width]
  );

  return (
    <div className={width <= 1040 ? "Page mobile" : "Page"}>
      <main className="content">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="children">{children}</div>
      </main>
      <Sidebar
        title={MENU.title}
        entries={MENU.entries}
        socials={MENU.socials}
        copyright={MENU.copyright}
      />
    </div>
  );
};

export default Page;
