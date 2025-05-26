
import React from 'react';
import { Briefcase, Users, Search, MessageSquare } from 'lucide-react';

const ProgramCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-bright-gold text-deep-purple">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-semibold text-deep-purple mb-2">{title}</h3>
    <p className="text-dark-navy leading-relaxed">{description}</p>
  </div>
);

const ProgramsPage = () => {
  const programs = [
    { title: "Career Guidance", description: "Workshops, seminars, and one-on-one sessions to help students navigate their career paths in tech and mathematics.", icon: Briefcase },
    { title: "Mentorship Program", description: "Connecting students with experienced professionals and alumni for guidance and support.", icon: Users },
    { title: "Research Support", description: "Resources and support for students interested in pursuing research projects and academic publications.", icon: Search },
    { title: "Outreach Events", description: "Engaging with local schools and communities to promote STEM education and inspire the next generation.", icon: MessageSquare },
  ];

  return (
    <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-10rem)]">
      <h1 className="text-4xl font-bold text-deep-purple mb-10 text-center">Our Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <ProgramCard key={index} title={program.title} description={program.description} icon={program.icon} />
        ))}
      </div>
    </div>
  );
};

export default ProgramsPage;
