import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

export default function VinodT() {
  return (
    <div className="min-h-screen pt-20">
      <section className="min-h-[80vh] flex flex-col justify-center px-6 lg:px-12 py-30 relative">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="mb-6">
            <Link to="/" className="text-sm text-nia-gray hover:text-nia-orange">
              Home
            </Link>
            <span className="text-nia-gray mx-2">/</span>
            <span className="text-sm text-nia-white">Vinod T</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-nia-white">
                  VINOD
                </h1>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-nia-white">
                  T.
                </h1>
                <p className="text-base md:text-lg font-light text-nia-orange tracking-widest uppercase pt-6">
                  Business Leader. Entrepreneur. NIA Guntur Co-Host.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-nia-darker border border-nia-border p-2 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-extrabold text-nia-orange/20 mb-4">
                    VT
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
              <div className="text-3xl font-bold text-nia-orange mb-2">20+</div>
              <p className="text-sm font-light text-nia-gray">
                Years in Business
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="text-center p-8 bg-nia-black border border-nia-border">
              <div className="text-lg font-bold text-nia-orange mb-2">
                Entrepreneur
              </div>
              <p className="text-sm font-light text-nia-gray">
                Multiple Ventures
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
                Vinod T has built, scaled, and led businesses across multiple
                industries. His journey has been defined by one principle:
                business growth is not about luck - it's about systems, people,
                and relentless execution.
              </p>
              <p className="text-lg font-light text-nia-white leading-relaxed-custom">
                With over two decades of entrepreneurial experience, Vinod
                understands what it takes to survive the tough years, scale
                during growth, and position for long-term success. He has seen
                markets shift, opportunities emerge, and watched how the right
                network can change everything.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="space-y-6">
              <p className="text-lg font-light text-nia-white leading-relaxed-custom">
                What drives him now is not just building his own ventures, but
                creating an ecosystem where serious business owners can connect,
                collaborate, and grow together. Guntur is at a turning point, and
                Vinod sees NIA as the platform that will bring the right people
                into the same room.
              </p>
              <p className="text-lg font-light text-nia-white leading-relaxed-custom">
                As co-host of NIA Guntur, Vinod is committed to building a
                network that's not about surface-level connections, but about
                real partnerships, real opportunities, and real impact on the
                business landscape of this region.
              </p>
            </AnimatedSection>
          </div>
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
                  href="mailto:vinod@niainaction.in"
                  className="text-xl text-nia-orange hover:underline"
                >
                  vinod@niainaction.in
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
