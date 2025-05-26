
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
}

const BlogPostCard = ({ title, excerpt, date, author, slug }: BlogPostProps) => (
  <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-2xl font-semibold text-deep-purple mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-3">By {author} on {date}</p>
    <p className="text-dark-navy leading-relaxed mb-4">{excerpt}</p>
    <Link to={`/blog/${slug}`} className="text-bright-gold hover:text-yellow-500 font-medium flex items-center">
      Read More <ArrowRight size={18} className="ml-1" />
    </Link>
  </div>
);

const BlogPage = () => {
  const posts = [
    { title: "Navigating Your First Hackathon", excerpt: "Tips and tricks for making the most out of your first hackathon experience, from team formation to project presentation.", date: "May 15, 2025", author: "DEMACOSSA Editorial", slug: "first-hackathon-guide" },
    { title: "The Future of AI in Nigeria", excerpt: "Exploring the potential impact of Artificial Intelligence on various sectors in Nigeria and what it means for students.", date: "May 5, 2025", author: "Guest Writer: Dr. Ifeanyi Eze", slug: "ai-in-nigeria" },
    { title: "Recap: DEMACOSSA Week 2025", excerpt: "A look back at the highlights and successes of our annual DEMACOSSA Week celebrations.", date: "April 28, 2025", author: "DEMACOSSA PRO", slug: "demacossa-week-2025-recap" },
  ];

  return (
    <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-10rem)]">
      <h1 className="text-4xl font-bold text-deep-purple mb-10 text-center">Blog & News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
      {/* Placeholder for pagination or categories */}
    </div>
  );
};

export default BlogPage;
