import React, { useEffect, useRef } from "react";
import "./Blog.css";
import blog1 from "../Assests/blog1.jpeg";
import blog2 from "../Assests/blog2.jpeg";
import blog3 from "../Assests/blog3.jpeg";
import blog4 from "../Assests/blog4.jpeg";
import blog5 from "../Assests/blog5.jpeg";
import profileIcon from "../Assests/profile_icon.png";

// Custom scroll animation hook
function useScrollAnimation() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // Animate once only
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return refs;
}

const Blog = () => {
  const refs = useScrollAnimation();

  const blogs = [
    {
      id: 1,
      title: "Future of Digital Marketing with AI",
      description:
        "From mobile apps to web apps, we make business come alive across the globe for multiple domains",
      author: "Bhaumik Prajapati",
      date: "01.03.23",
      readTime: "3 minute read",
      image: blog1,
    },
    {
      id: 2,
      title: "Future of Digital Marketing with AI",
      description:
        "From mobile apps to web apps, we make business come alive across the globe for multiple domains",
      author: "Bhaumik Prajapati",
      date: "01.03.23",
      readTime: "3 minute read",
      image: blog2,
    },
    {
      id: 3,
      title: "Future of Digital Marketing with AI",
      description:
        "From mobile apps to web apps, we make business come alive across the globe for multiple domains",
      author: "Bhaumik Prajapati",
      date: "01.03.23",
      readTime: "3 minute read",
      image: blog3,
    },
    {
      id: 4,
      title: "Future of Digital Marketing with AI",
      description:
        "From mobile apps to web apps, we make business come alive across the globe for multiple domains",
      author: "Bhaumik Prajapati",
      date: "01.03.23",
      readTime: "3 minute read",
      image: blog4,
    },
    {
      id: 5,
      title: "Future of Digital Marketing with AI",
      description:
        "From mobile apps to web apps, we make business come alive across the globe for multiple domains",
      author: "Bhaumik Prajapati",
      date: "01.03.23",
      readTime: "3 minute read",
      image: blog5,
    },
  ];

  const BlogCard = ({ blog, variant }) => (
    <div className={`blog-card ${variant}`}>
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <div className="blog-content">
        <p className="blog-category">Blog</p>
        <h3 className="blog-heading">{blog.title}</h3>
        <p className="blog-description">{blog.description}</p>
        <div className="blog-footer">
          <img src={profileIcon} alt={blog.author} className="author-img" />
          <div>
            <p className="author-name">{blog.author}</p>
            <p className="blog-meta">
              {blog.date} • {blog.readTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const ExploreProjectsCard = () => (
    <section ref={(el) => (refs.current[3] = el)} className="explore-section fade-right">
      <div className="explore-card">
        <h2 className="explore-title">Checkout our recent projects</h2>
        <p className="explore-description">
          From mobile apps to web apps, we make business come alive across the
          globe for multiple domains
        </p>
        <button className="explore-button">Explore our projects</button>
      </div>
    </section>
  );

  return (
    <section className="blog-wrapper">
      <div ref={(el) => (refs.current[0] = el)} className="blog-container fade-up">
        <h2 className="blog-title">Blog</h2>

        {/* Featured Section: First two blogs highlighted */}
        <div className="blog-featured">
          <div className="blog-featured-left">
            <BlogCard blog={blogs[0]} variant="large" />
          </div>
          <div className="blog-featured-right">
            <BlogCard blog={blogs[1]} variant="small" />
          </div>
        </div>
      </div>

      {/* Grid Section: Remaining blogs displayed in a grid */}
      <div ref={(el) => (refs.current[1] = el)} className="blog-grid fade-left">
        {blogs.slice(2).map((blog) => (
          <BlogCard key={blog.id} blog={blog} variant="grid" />
        ))}
      </div>

      {/* Explore Projects CTA */}
      <div ref={(el) => (refs.current[2] = el)}>
        <ExploreProjectsCard />
      </div>
    </section>
  );
};

export default Blog;
