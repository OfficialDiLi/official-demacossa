
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Zap, Volume2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="text-dark-navy"> {/* text-dark-navy uses var(--foreground) which is correct */}
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32 relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-rich-gold opacity-10 rounded-full -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-rich-gold opacity-10 rounded-tl-full translate-x-1/4 translate-y-1/4"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-extrabold mb-6 opacity-0 animate-fade-in leading-tight">
            Welcome to <span className="text-rich-gold">DEMACOSSA BUILD</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your central portal for academic excellence, innovation, and community in Mathematics & Computer Science.
          </p>
          <div className="space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 flex flex-col sm:flex-row justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-rich-gold text-primary hover:bg-rich-gold/90 hover:text-primary font-semibold text-lg px-8 py-3 transition-transform hover:scale-105" asChild>
              <Link to="/member-portal">Join Us <Users className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="text-rich-gold border-rich-gold hover:bg-rich-gold hover:text-primary font-semibold text-lg px-8 py-3 transition-transform hover:scale-105" asChild>
              <Link to="/resources">Explore Resources <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-soft-cream"> {/* bg-soft-cream uses var(--background) which is correct */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-6">Our Core Purpose</h2>
              <p className="text-lg mb-4 leading-relaxed">
                DEMACOSSA is dedicated to creating a supportive and stimulating environment where students can excel academically, develop professionally, and connect meaningfully.
              </p>
              <p className="text-lg leading-relaxed">
                We strive to be the catalyst for innovation and leadership within the fields of Mathematics and Computer Science at our university and beyond.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <Zap size={32} className="text-rich-gold mb-3" />
                    <h3 className="text-xl font-poppins font-semibold text-primary mb-2">Mission</h3>
                    <p className="text-sm leading-relaxed">To empower students with knowledge, skills, and opportunities for holistic development.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <Users size={32} className="text-rich-gold mb-3" />
                    <h3 className="text-xl font-poppins font-semibold text-primary mb-2">Vision</h3>
                    <p className="text-sm leading-relaxed">To be a beacon of academic excellence and innovation, fostering future leaders.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 md:py-24 bg-gray-100"> {/* bg-gray-100 is a default tailwind color, can be kept or changed to a theme color like muted if desired */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-12 text-center">
            Latest Announcements
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Announcement Cards */}
            {[
              { title: "Upcoming Workshop: AI Ethics", date: "2025-06-15", summary: "Join us for an insightful workshop on the ethical implications of Artificial Intelligence. Limited seats available!" },
              { title: "Call for Volunteers: Tech Fair", date: "2025-06-10", summary: "We're looking for enthusiastic volunteers for our annual Tech Fair. Sign up to help make it a success." },
              { title: "New Mentorship Program Launched", date: "2025-06-01", summary: "Our revamped mentorship program is now live! Connect with experienced alumni and industry professionals." },
            ].map((announcement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="flex items-center text-rich-gold mb-3">
                  <Volume2 size={24} className="mr-2"/>
                  <h3 className="text-xl font-poppins font-semibold text-primary">{announcement.title}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-3">Posted: {announcement.date}</p>
                <p className="text-dark-navy leading-relaxed mb-4 flex-grow">{announcement.summary}</p>
                <Button variant="link" className="text-rich-gold hover:text-rich-gold/90 p-0 self-start" asChild>
                  <Link to="/blog">Read More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
             <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/blog">View All Announcements</Link>
             </Button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
