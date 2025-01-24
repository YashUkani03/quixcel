import React from 'react';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "5 Digital Marketing Trends You Need to Know in 2024",
    excerpt: "Stay ahead of the curve with these emerging digital marketing trends that are shaping the industry...",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "How to Generate High-Quality Leads Without Breaking the Bank",
    excerpt: "Discover cost-effective strategies to attract and convert qualified leads for your business...",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Why Outsourcing Marketing is the Best Decision You'll Make This Year",
    excerpt: "Learn how outsourcing your marketing efforts can save time, money, and drive better results...",
    author: "Emily Rodriguez",
    date: "March 8, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export function BlogPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Marketing Insights</h1>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Stay updated with the latest trends, strategies, and insights in digital marketing.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 hover:text-purple-600 transition">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <button className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition flex items-center gap-2 mx-auto">
            Load More Articles <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}