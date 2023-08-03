import React from "react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import "./CardPreview.scss";
import Markdown from "markdown-to-jsx";

type ICardPreview = {
  title: string;
  date: string;
  href: Url;
  desc: string;
};

const CardPreview: React.FC<ICardPreview> = ({ title, date, href, desc }) => {
  return (
    <div className="CardPreview">
      <div>
        <h2 className="title">
          <Link href={href}>{title}</Link>
        </h2>
        <p className="date">{date}</p>
      </div>
      <p>{desc}</p>
      <Link href={href}>
        <button className="readBtn">Read more</button>
      </Link>
    </div>
  );
};

export default CardPreview;
