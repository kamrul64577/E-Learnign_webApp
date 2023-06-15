import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Courses</h2>
            <ul className="list-disc space-y-2 pl-4">
              <li>Web Development</li>
              <li>Data Science</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123, Main Street, City</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center text-gray-400">© 2023 Your E-Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

