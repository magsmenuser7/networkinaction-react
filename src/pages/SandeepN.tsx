import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { ExternalLink } from 'lucide-react';

export default function SandeepN() {
  return (
    <div className="min-h-screen pt-20">
      <section className="min-h-[80vh] flex flex-col justify-center px-6 lg:px-12 py-30 relative">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="mb-6">
            <Link to="/" className="text-sm text-nia-gray hover:text-nia-orange">
              Home
            </Link>
            <span className="text-nia-gray mx-2">/</span>
            <span className="text-sm text-nia-white">Sandeep N</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-nia-white">
                  SANDEEP
                </h1>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-nia-white">
                  N.
                </h1>
                <p className="text-base md:text-lg font-light text-nia-orange tracking-widest uppercase pt-6">
                  Brand Strategist. Founder. NIA Guntur Co-Host.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-nia-darker border border-nia-border p-2 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-extrabold text-nia-orange/20 mb-4">
                    SN
                  </div>
                  <p className="text-sm text-nia-gray font-light">Photo Coming Soon</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12 bg-nia-dark">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <AnimatedSection className="text-center p-8 bg-nia-black border border-nia-border">
              <div className="text-3xl font-bold text-nia-orange mb-2">15+</div>
              <p className="text-sm font-light text-nia-gray">
                Years in Brand Strategy
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="text-center p-8 bg-nia-black border border-nia-border">
              <div className="text-lg font-bold text-nia-orange mb-2">Founder</div>
              <p className="text-sm font-light text-nia-gray">
                Magsmen Strategy Consultants
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="text-center p-8 bg-nia-black border border-nia-border">
              <div className="text-lg font-bold text-nia-orange mb-2">Co-Host</div>
              <p className="text-sm font-light text-nia-gray">NIA Guntur</p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection className="space-y-6">
              <p className="text-lg font-light text-nia-white leading-relaxed-custom">
                Sandeep N has spent over 15 years helping businesses understand
                what makes them matter. Not just what they sell, but why they
                exist, who they serve, and how they show up in the world.
              </p>
              <p className="text-lg font-light text-nia-white leading-relaxed-custom">
                As the founder of Magsmen Strategy Consultants, he has worked
                with businesses across industries - from startups finding their
                voice to established brands repositioning for growth. His
                approach is simple: clarity before creativity, strategy before
                execution, and truth before everything.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="space-y-6">
              <p className="text-lg font-light text-nia-white leading-relaxed-custom">
                What he sees in Guntur right now is not just opportunity - it's
                responsibility. As Amaravathi rises and the business landscape
                shifts, the business owners who position themselves strategically
                will define the next decade. That's why NIA Guntur exists.
              </p>
              <p className="text-lg font-light text-nia-white leading-relaxed-custom">
                Sandeep co-hosts NIA Guntur not to network, but to build - a
                community of serious business owners who understand that success
                is earned through strategy, execution, and the right people in
                the room.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <div className="border-t border-nia-orange pt-12">
              <h2 className="text-2xl font-bold text-nia-white mb-4">
                Magsmen Strategy Consultants
              </h2>
              <p className="text-base font-light text-nia-gray leading-relaxed-custom mb-6 max-w-3xl">
                A brand strategy consultancy that helps businesses find clarity,
                build positioning, and create communication that works. Focused
                on substance over style, and strategy over shortcuts.
              </p>
              <a
                href="https://magsmen.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-nia-orange hover:underline"
              >
                Visit Magsmen <ExternalLink size={16} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12 bg-nia-darker">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-nia-white mb-12 text-center">
              Get In Touch
            </h2>
            <div className="text-center space-y-6">
              <div>
                <p className="text-lg font-light text-nia-gray mb-2">Phone</p>
                <a
                  href="tel:+919999999999"
                  className="text-3xl font-bold text-nia-white hover:text-nia-orange transition-colors"
                >
                  +91 99999 99999
                </a>
              </div>
              <div>
                <p className="text-lg font-light text-nia-gray mb-2">Email</p>
                <a
                  href="mailto:sandeep@niainaction.in"
                  className="text-xl text-nia-orange hover:underline"
                >
                  sandeep@niainaction.in
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
