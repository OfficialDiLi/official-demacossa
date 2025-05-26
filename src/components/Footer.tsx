
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-navy text-soft-cream py-12"> {/* These are already using theme variables correctly */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-poppins font-semibold text-rich-gold mb-4">DEMACOSSA</h3>
            <p className="text-sm">
              Department of Mathematics & Computer Science Students Association.
              Empowering students, fostering innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-poppins font-semibold text-rich-gold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-rich-gold transition-colors">About Us</Link></li>
              <li><Link to="/events" className="hover:text-rich-gold transition-colors">Events</Link></li>
              <li><Link to="/blog" className="hover:text-rich-gold transition-colors">Blog</Link></li>
              <li><Link to="/resources" className="hover:text-rich-gold transition-colors">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-poppins font-semibold text-rich-gold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-rich-gold transition-colors"><Facebook size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-rich-gold transition-colors"><Twitter size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-rich-gold transition-colors"><Linkedin size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-rich-gold transition-colors"><Instagram size={24} /></a>
            </div>
            <p className="text-sm mt-4">Email: <a href="mailto:info@demacossauni.org" className="hover:text-rich-gold transition-colors">info@demacossauni.org</a></p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm"> {/* border-gray-700 can be changed to border-border for theme consistency if needed */}
          <p>&copy; {currentYear} DEMACOSSA. All rights reserved.</p>
          <p>Designed with <span className="text-rich-gold">&hearts;</span> by Lovable</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
