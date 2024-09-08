"use client"
import React, { useEffect, useState } from 'react';
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogApi from "@/services/blog";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts = await blogApi.getBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Erro ao buscar os posts do blog:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Confira o nosso blog"
          paragraph="Fique de olho em nossas postagens educativas/informativas do projeto Entre Mundos"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogPosts.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
