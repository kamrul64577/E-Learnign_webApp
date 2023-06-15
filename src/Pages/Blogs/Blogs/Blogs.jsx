import React from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      author: 'John Doe',
      date: 'June 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      title: 'Dolor Sit Amet',
      author: 'Jane Smith',
      date: 'June 5, 2023',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">By {post.author} - {post.date}</p>
              <p className="text-gray-800">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
