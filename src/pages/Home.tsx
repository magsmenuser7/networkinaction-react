import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const pillars = [
  {
    number: '01',
    name: 'Community',
    description: 'An elite network of business leaders driven by collective success',
  },
  {
    number: '02',
    name: 'Collaboration',
    description: 'Build purposeful partnerships that unlock shared opportunities',
  },
  {
    number: '03',
    name: 'Coaching',
    description: 'Expert business coaches to help you grow',
  },
  {
    number: '04',
    name: 'Referrals',
    description: 'Trusted business from verified, connected members',
  },
  {
    number: '05',
    name: 'Resources',
    description: 'NIA App & University, collaborations with multiple companies',
  },
  {
    number: '06',
    name: 'Revenue',
    description: 'Watch your revenue rise as your network and knowledge grow',
  },
];

const shifts = [
  {
    number: '01',
    title: 'Capital City Rising',
    description:
      'Amaravathi is being built as the new capital. Infrastructure, institutions, and investments are flowing in.',
  },
  {
    number: '02',
    title: 'New Institutions',
    description:
      'Government offices, universities, and corporate headquarters are establishing presence in the region.',
  },
  {
    number: '03',
    title: 'Global Attention',
    description:
      'International investors and businesses are watching Guntur as a gateway to the new capital ecosystem.',
  },
  {
    number: '04',
    title: 'Business Window Opening',
    description:
      'The next 24 months will define who becomes the established players in this emerging market.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-nia-white">
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-7xl lg:text-[88px] font-extrabold text-nia-black mb-8 py-8">
            The Right Room Changes Everything
          </h1>

          <img
            src="/logo_nia_guntu.png"
            alt="NIA Guntur"
            className="w-[180px] mx-auto mb-8"
          />

          <p className="text-lg md:text-xl font-light text-nia-orange tracking-widest uppercase mb-6">
            Network In Action - Guntur
          </p>

          <p className="text-base md:text-lg font-light text-nia-gray max-w-[580px] mx-auto mb-12 leading-relaxed-custom">
            A curated community of elite business owners building Guntur's future
            as Amaravathi rises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/join" variant="filled">
              Join NIA Guntur
            </Button>
            <Button to="/nia-guntur" variant="ghost">
              Explore the Movement
            </Button>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12"
        >
          <ChevronDown className="text-nia-orange" size={32} />
        </motion.div>
      </section>

      <section className="bg-nia-darker py-8 border-y border-nia-border">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: '100+', label: 'Business Owners' },
              { stat: 'April 3, 2025', label: 'Launch' },
              { stat: 'Guntur × Amaravathi', label: '' },
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center py-6 ${
                  index < 2 ? 'md:border-r border-nia-orange' : ''
                }`}
              >
                <div className="text-3xl font-bold text-nia-black mb-2">
                  {item.stat}
                </div>
                {item.label && (
                  <div className="text-xs font-light text-nia-gray uppercase tracking-ultra-wide">
                    {item.label}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="py-30 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-nia-black mb-6">
                This is not a networking event. This is a movement.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="font-light text-nia-gray leading-relaxed-custom">
                Network In Action is not about collecting business cards or making
                small talk. It's about being in the room with people who are
                building real businesses, solving real problems, and creating real
                value.
              </p>
              <p className="font-light text-nia-gray leading-relaxed-custom">
                This is the Guntur chapter - launched at the exact moment when
                Amaravathi is rising and the business landscape of this region is
                being rewritten.
              </p>
              <p className="font-light text-nia-gray leading-relaxed-custom">
                If you're serious about your business and understand that the right
                network is not a luxury but a necessity, this is your room.
              </p>
              <Link
                to="/nia-guntur"
                className="inline-block text-nia-orange font-medium hover:underline"
              >
                Discover NIA Guntur →
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-30 px-6">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-nia-black mb-12 text-center">
            Built on Six Pillars
          </h2>
          <div className="overflow-x-auto">
            <div className="flex gap-6 pb-6" style={{ minWidth: 'max-content' }}>
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.number}
                  whileHover={{ borderColor: '#E87722', backgroundColor: '#FAFAFA' }}
                  className="bg-nia-white border-2 border-nia-border min-w-[320px] p-8 transition-all"
                >
                  <div className="text-5xl font-extrabold text-nia-orange mb-4">
                    {pillar.number}
                  </div>
                  <h3 className="text-xl font-bold text-nia-black mb-3">
                    {pillar.name}
                  </h3>
                  <p className="text-sm font-light text-nia-gray leading-relaxed-custom">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="py-30 px-6 lg:px-12 bg-nia-dark relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[180px] font-extrabold text-nia-gray pointer-events-none select-none"
          style={{ opacity: 0.04 }}
        >
          AMARAVATHI
        </div>

        <AnimatedSection className="max-w-[1440px] mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-nia-black mb-16 text-center">
            The Amaravathi Moment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {shifts.map((shift) => (
              <div key={shift.number} className="p-8 bg-nia-white border border-nia-border">
                <div className="text-4xl font-extrabold text-nia-orange mb-4">
                  {shift.number}
                </div>
                <h3 className="text-xl font-bold text-nia-black mb-3">
                  {shift.title}
                </h3>
                <p className="text-sm font-light text-nia-gray leading-relaxed-custom">
                  {shift.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <AnimatedSection className="py-30 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-nia-black mb-8">
            Our City Partners
          </h2>
          <p className="text-nia-gray mb-8 font-light">
            Founding Partner spots are open. April 3 is the first opportunity.
          </p>
          <Link
            to="/city-partners"
            className="inline-block text-nia-orange font-medium hover:underline"
          >
            Become a City Partner →
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-30 px-6 lg:px-12 bg-nia-darker">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-nia-black mb-12 text-center">
            Meet the Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sandeep N',
                role: 'Brand Strategist',
                description:
                  'Building brands and businesses that matter. Co-host of NIA Guntur.',
                path: '/sandeep-n',
              },
              {
                name: 'Vinod T',
                role: 'Business Leader',
                description:
                  'Driving business growth and community impact. Co-host of NIA Guntur.',
                path: '/vinod-t',
              },
            ].map((founder) => (
              <Link
                key={founder.name}
                to={founder.path}
                className="group"
              >
                <motion.div
                  whileHover={{ borderColor: '#E87722', backgroundColor: '#FFFFFF' }}
                  className="bg-nia-white border-2 border-nia-border p-8 transition-all"
                >
                  <h3 className="text-2xl font-bold text-nia-black mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-sm font-light text-nia-orange mb-4">
                    {founder.role}
                  </p>
                  <p className="text-sm font-light text-nia-gray leading-relaxed-custom mb-4">
                    {founder.description}
                  </p>
                  <span className="text-nia-orange group-hover:underline">
                    Learn more →
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="py-30 px-6 lg:px-12 bg-nia-white relative overflow-hidden border-t border-nia-border">
        <div
          className="absolute top-0 left-0 text-[200px] font-extrabold text-nia-orange pointer-events-none select-none"
          style={{ opacity: 0.08 }}
        >
          NIA
        </div>

        <AnimatedSection className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-nia-black mb-8">
            Ready to be in the room?
          </h2>
          <p className="text-lg font-light text-nia-gray mb-12">
            Express your interest and we'll reach out within 24 hours.
          </p>
          <Button to="/join" variant="filled">
            Join NIA Guntur
          </Button>
        </AnimatedSection>
      </section>
    </div>
  );
}
