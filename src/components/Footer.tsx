import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-8 py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} DQウォーク ニュース. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
