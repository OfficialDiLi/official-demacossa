
import React from 'react';
import { Download, FileText, Briefcase, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ResourceItemProps {
  title: string;
  description: string;
  type: string;
  link: string;
  icon: LucideIcon;
}

const ResourceItem = ({ title, description, type, link, icon: Icon }: ResourceItemProps) => (
  <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
    <div>
      <div className="flex items-center mb-3">
        <Icon size={24} className="mr-3 text-bright-gold" />
        <h3 className="text-xl font-semibold text-deep-purple">{title}</h3>
      </div>
      <p className="text-sm text-gray-500 mb-1">Type: {type}</p>
      <p className="text-dark-navy leading-relaxed mb-4">{description}</p>
    </div>
    <Button asChild className="bg-deep-purple text-primary-foreground hover:bg-purple-800 w-full sm:w-auto self-start">
      <a href={link} download={type === "Downloadable Guide"} target="_blank" rel="noopener noreferrer">
        <Download size={18} className="mr-2" /> {type === "Downloadable Guide" ? "Download" : "Access Link"}
      </a>
    </Button>
  </div>
);

const ResourcesPage = () => {
  const resources = [
    { title: "Effective Resume Writing Guide", description: "A comprehensive guide to crafting a compelling resume that stands out to recruiters.", type: "Downloadable Guide", link: "#", icon: FileText },
    { title: "Internship Opportunities Portal", description: "Curated list of internship openings relevant to Math & CS students. Updated weekly.", type: "Internship Leads", link: "#", icon: Briefcase },
    { title: "Research Paper Template (LaTeX)", description: "Standard LaTeX template for research papers and academic projects.", type: "Downloadable Guide", link: "#", icon: FileText },
    { title: "Awesome Open Source Projects", description: "A curated list of beginner-friendly open source projects to contribute to.", type: "External Link", link: "https://github.com/sindresorhus/awesome", icon: LinkIcon },
  ];
  return (
    <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-10rem)]">
      <h1 className="text-4xl font-bold text-deep-purple mb-10 text-center">Student Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <ResourceItem key={index} {...resource} />
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
