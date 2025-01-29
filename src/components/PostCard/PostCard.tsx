import "./PostCard.scss";

import React from "react";

type PostCardProps = {
  title: string;
  category: {
    slug: string;
    name: string;
  };
  url: string;
};

export default function PostCard({ title, category, url }: PostCardProps) {
  const imageUrl = `/images/blogPlaceholders/blog-placeholder-${
    category?.slug
  }--0${Math.floor(Math.random() * 4) + 1}.png`;
  return (
    <article className="PostCard">
      <a href={url}>
        <img
          src={imageUrl}
          alt={`Catégorie ${category?.name} - Thatmuch blog`}
          className="mb-4"
        />
      </a>

      <span className={`tag tag--${category?.slug}`}>{category?.name}</span>
      <h3 className="font-normal mt-4">
        <a href={url}>{title}</a>
      </h3>
    </article>
  );
}
