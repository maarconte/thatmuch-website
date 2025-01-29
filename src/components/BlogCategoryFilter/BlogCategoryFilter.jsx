import "./BlogCategoryFilter.scss";

import React, { useEffect, useState } from "react";

import PostCard from "../PostCard/PostCard";

const BlogCategoryFilter = ({ posts, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    setFilteredPosts(
      selectedCategory
        ? posts.filter((post) =>
            post.categories.nodes.some((cat) => cat.name === selectedCategory)
          )
        : posts
    );
  }, [selectedCategory]);

  return (
    <div className="BlogCategoryFilter">
      <h2 className="DividerTitle">Catégories</h2>
      <div className="BlogCategoryFilter_list">
        {/* All Posts Button */}
        <button
          className={`BlogCategoryFilter_list_button ${
            !selectedCategory && "active"
          }`}
          onClick={() => setSelectedCategory("")}
        >
          Tous les articles
        </button>

        {/* Category Buttons */}
        {categories.map((category) => (
          <button
            key={category}
            className={`BlogCategoryFilter_list_button ${
              selectedCategory === category && "active"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="PostsGrid">
        {filteredPosts.slice(0, 8).map((post, index) => (
          <div key={index}>
            <PostCard
              title={post.title}
              category={post?.categories?.nodes[0]}
              url={`/blog/${post.slug}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCategoryFilter;
