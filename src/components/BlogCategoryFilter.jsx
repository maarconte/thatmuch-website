import React, { useState } from "react";

import PostCard from "@/components/post-card.astro";

const BlogCategoryFilter = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Extract unique categories
  const categories = [
    ...new Set(
      posts.flatMap((post) =>
        post.categories.nodes.map((category) => category.name)
      )
    ),
  ];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory
    ? posts.filter((post) =>
        post.categories.nodes.some(
          (category) => category.name === selectedCategory
        )
      )
    : posts;

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-6">
        {/* All Posts Button */}
        <button
          className={`px-4 py-2 rounded-lg ${
            !selectedCategory ? "bg-blue-600 text-white" : "bg-blue-200"
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          Tous les articles
        </button>

        {/* Category Buttons */}
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-blue-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div class="PostsGrid">
        {filteredPosts.slice(0, 8).map((post) => (
          <PostCard
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
