
import React from 'react';
import { CalendarDays, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const EventCard = ({ title, date, time, location, description }: EventCardProps) => (
  <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
    <div>
      <h3 className="text-2xl font-semibold text-deep-purple mb-3">{title}</h3>
      <div className="flex items-center text-dark-navy mb-2">
        <CalendarDays size={18} className="mr-2 text-bright-gold" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-dark-navy mb-2">
        <Clock size={18} className="mr-2 text-bright-gold" />
        <span>{time}</span>
      </div>
      <div className="flex items-center text-dark-navy mb-4">
        <MapPin size={18} className="mr-2 text-bright-gold" />
        <span>{location}</span>
      </div>
      <p className="text-dark-navy leading-relaxed mb-4">{description}</p>
    </div>
    <Button className="bg-bright-gold text-deep-purple hover:bg-yellow-500 w-full sm:w-auto self-start">
      RSVP / Register
    </Button>
  </div>
);

const EventsPage = () => {
  const upcomingEvents = [
    { title: "Annual Tech Symposium", date: "October 26, 2025", time: "10:00 AM - 4:00 PM", location: "University Auditorium", description: "Join us for a day of insightful talks, workshops, and networking with industry leaders." },
    { title: "Coding Bootcamp Kickoff", date: "November 5, 2025", time: "6:00 PM - 8:00 PM", location: "CS Department, Lab 3", description: "An introductory session for our intensive coding bootcamp. All skill levels welcome!" },
    { title: "Mathematics Colloquium", date: "November 12, 2025", time: "2:00 PM - 3:30 PM", location: "Math Faculty Hall", description: "Guest lecture by Prof. E. Noether on modern algebraic topology." },
  ];

  return (
    <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-10rem)]">
      <h1 className="text-4xl font-bold text-deep-purple mb-10 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {upcomingEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
