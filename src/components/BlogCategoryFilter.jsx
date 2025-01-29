import React, { useEffect, useState } from "react";

import PostCard from "./PostCard";

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
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <h2>Catégories</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {/* All Posts Button */}
        <button
          className={`px-4 py-2 rounded-lg ${
            !selectedCategory ? "bg-blue-600" : "bg-blue-200"
          }`}
          onClick={() => setSelectedCategory("")}
        >
          Tous les articles
        </button>

        {/* Category Buttons */}
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category ? "bg-blue-600 " : "bg-blue-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="PostsGrid">
        {filteredPosts.slice(0, 8).map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            category={post?.categories?.nodes[0]}
            url={`/blog/${post.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCategoryFilter;
