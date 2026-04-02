import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { MapPin } from 'lucide-react';

const eventDate = new Date('2025-04-03T18:00:00').getTime();

const agenda = [
  {
    time: '6:00 PM',
    activity: 'Registration & Networking',
    description: 'Meet fellow business owners. Build connections.',
    presenter: '',
  },
  {
    time: '6:30 PM',
    activity: 'Welcome & Introduction',
    description: 'What NIA is, why it matters, and why now.',
    presenter: 'Sandeep N & Vinod T',
  },
  {
    time: '7:00 PM',
    activity: 'Panel Discussion',
    description: 'Four business archetypes. One conversation on growth.',
    presenter: 'Doctor / Lawyer / Auditor / Brand Owner',
  },
  {
    time: '7:45 PM',
    activity: 'Q&A & Open Discussion',
    description: 'Your questions. Real answers.',
    presenter: '',
  },
  {
    time: '8:15 PM',
    activity: 'Networking & Closing',
    description: 'Continue the conversation.',
    presenter: '',
  },
];

const archetypes = [
  {
    role: 'Doctor',
    description: 'Healthcare professional bringing the voice of service businesses',
  },
  {
    role: 'Lawyer',
    description: 'Legal professional representing advisory and professional services',
  },
  {
    role: 'Auditor',
    description: 'Financial professional sharing insights on business systems and compliance',
  },
  {
    role: 'Brand Owner',
    description: 'Entrepreneur representing product businesses and brand building',
  },
];

export default function Event() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 py-30">
        <div className="max-w-[1440px] mx-auto w-full text-center">
          <div className="mb-12">
            <Link to="/" className="text-sm text-nia-gray hover:text-nia-orange">
              Home
            </Link>
            <span className="text-nia-gray mx-2">/</span>
            <span className="text-sm text-nia-white">Event</span>
          </div>

          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-12 max-w-4xl mx-auto">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' },
              ].map((item) => (
                <div key={item.label} className="bg-nia-darker border border-nia-border p-6">
                  <div className="text-4xl md:text-6xl font-semibold text-nia-white mb-2">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm font-light text-nia-gray uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nia-white mb-6">
              Network In Action - Guntur Launch
            </h1>

            <div className="text-lg md:text-xl font-light text-nia-gray mb-12 space-y-2">
              <p>April 3, 2025</p>
              <p>ITC Welcomhotel, Guntur</p>
              <p>6:00 PM onwards</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12 bg-nia-dark">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-nia-white mb-16 text-center">
              Event Agenda
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-1">
            {agenda.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-nia-black border border-nia-border p-6 md:p-8 hover:border-nia-orange transition-colors group cursor-pointer">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="md:col-span-1">
                      <p className="text-lg md:text-xl font-bold text-nia-orange">
                        {item.time}
                      </p>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-lg md:text-xl font-bold text-nia-white mb-2">
                        {item.activity}
                      </h3>
                      <p className="text-sm font-light text-nia-gray mb-2">
                        {item.description}
                      </p>
                      {item.presenter && (
                        <p className="text-sm font-light text-nia-orange italic">
                          {item.presenter}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-nia-white mb-8 text-center">
              The Panel
            </h2>
            <p className="text-lg font-light text-nia-gray text-center mb-16 max-w-3xl mx-auto">
              Four business archetypes. One fireside conversation about growth,
              challenges, and what it takes to build in Guntur today.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {archetypes.map((archetype, index) => (
              <AnimatedSection key={archetype.role} delay={index * 0.1}>
                <div className="bg-nia-black border border-nia-orange p-6 h-full">
                  <h3 className="text-xl font-bold text-nia-orange mb-3">
                    {archetype.role}
                  </h3>
                  <p className="text-sm font-light text-nia-gray leading-relaxed-custom">
                    {archetype.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12 bg-nia-darker">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-nia-white mb-6">
                  Venue
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-nia-orange mt-1" size={20} />
                    <div>
                      <p className="text-xl font-bold text-nia-white mb-2">
                        ITC Welcomhotel
                      </p>
                      <p className="text-base font-light text-nia-gray leading-relaxed-custom">
                        Guntur, Andhra Pradesh
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-6 py-3 bg-nia-black border border-nia-white text-nia-white hover:border-nia-orange hover:text-nia-orange transition-colors"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="bg-nia-black border border-nia-border aspect-video flex items-center justify-center">
                <p className="text-nia-gray font-light">Map Embed</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-nia-white mb-6">
              Secure Your Seat
            </h2>
            <p className="text-lg font-light text-nia-gray mb-12 leading-relaxed-custom">
              Attendance is by invitation only. Express your interest and we'll
              confirm your spot.
            </p>
            <Button to="/join" variant="filled">
              Express Your Interest
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
