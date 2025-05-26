import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, Users, CalendarDays, MessageSquare, Home, Info, Briefcase, Award, FileText, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming Button from shadcn/ui

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Info },
    { name: 'Programs', path: '/programs', icon: Award },
    { name: 'Events', path: '/events', icon: CalendarDays },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Resources', path: '/resources', icon: FileText },
  ];

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img src="/lovable-uploads/8bb1429c-4875-49fc-80bb-aad4ea71b4ea.png" alt="DEMACOSSA Logo" className="h-12 mr-3" />
              <span className="font-poppins font-bold text-2xl text-rich-gold hover:text-white transition-colors">
                DEMACOSSA
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:bg-primary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="outline"
                className="text-primary bg-rich-gold hover:bg-rich-gold/90 hover:text-primary border-rich-gold"
                asChild
              >
                <Link to="/member-portal">Member Portal</Link>
              </Button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-rich-gold border-rich-gold hover:bg-rich-gold hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-primary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
             <Button
                variant="default"
                className="w-full text-primary bg-rich-gold hover:bg-rich-gold/90 mt-2"
                asChild
              >
                <Link to="/member-portal" onClick={() => setIsOpen(false)}>Member Portal</Link>
              </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
