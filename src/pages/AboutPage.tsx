
import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-10rem)]">
      <h1 className="text-4xl font-bold text-deep-purple mb-8 text-center">About DEMACOSSA</h1>
      <div className="bg-white shadow-xl rounded-lg p-8 text-dark-navy">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-deep-purple mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To foster a vibrant community of mathematics and computer science students, providing them with opportunities for academic growth, professional development, and social engagement. We aim to bridge the gap between theory and practice, preparing our members for successful careers and impactful contributions to society.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-deep-purple mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            To be a leading student association recognized for excellence in promoting mathematical and computational sciences, nurturing innovative thinkers, and developing future leaders in technology and academia.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold text-deep-purple mb-6 text-center">Meet the Executives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for executive cards */}
            {[
              { name: "Dr. Ada Lovelace", title: "Patron", img: "/placeholder.svg" },
              { name: "Chukwudi Okoro", title: "President", img: "/placeholder.svg" },
              { name: "Aisha Bello", title: "Vice President", img: "/placeholder.svg" },
              { name: "Emeka Nwosu", title: "General Secretary", img: "/placeholder.svg" },
              { name: "Fatima Aliyu", title: "Treasurer", img: "/placeholder.svg" },
              { name: "Bolu Adebayo", title: "PRO", img: "/placeholder.svg" },
            ].map((exec, index) => (
              <div key={index} className="bg-soft-cream p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <img src={exec.img} alt={exec.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover bg-gray-300"/>
                <h3 className="text-xl font-semibold text-deep-purple">{exec.name}</h3>
                <p className="text-md text-bright-gold">{exec.title}</p>
                <p className="text-sm mt-2">A brief bio about {exec.name}, highlighting their role and passion for DEMACOSSA.</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
