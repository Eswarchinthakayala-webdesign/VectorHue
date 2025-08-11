import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} 
              
              <Link to="/">
              <span className='text-purple-300'> VectorHue.</span>
              </Link> All rights reserved.</p>
            <p>Empowering education through interactive learning and modern tools.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li><a href="/" className="hover:text-purple-400  hover:border-b-4 border-purple-400 pb-1 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-purple-400 hover:border-b-4 border-purple-400 pb-1  transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-purple-400  hover:border-b-4 border-purple-400 pb-1 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-center">
          <p>Designed with passion by Eswar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
