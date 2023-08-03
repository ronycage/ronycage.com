import React from "react";
import "./Card.scss";
// import { Url } from "next/dist/shared/lib/router/router";
// import Link from "next/link";
import Markdown from "markdown-to-jsx";

type ICard = {
  children: React.ReactNode;
};

const Card: React.FC<ICard> = ({ children }) => {
  return <div className="Card">{children}</div>;
};

export default Card;
