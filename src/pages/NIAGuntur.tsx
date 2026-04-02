import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const detailedPillars = [
  {
    number: '01',
    name: 'Community',
    description:
      'An elite network of business leaders who understand that collective success is more powerful than individual achievement. Every member is vetted, every business is verified, and every connection is intentional.',
  },
  {
    number: '02',
    name: 'Collaboration',
    description:
      'Real partnerships that create real value. This is not about leads or referrals alone - it is about building strategic alliances that unlock opportunities neither party could access alone.',
  },
  {
    number: '03',
    name: 'Coaching',
    description:
      'Monthly coaching sessions with expert business coaches who have built, scaled, and sold businesses. Practical insights, accountability, and frameworks that work in the real world.',
  },
  {
    number: '04',
    name: 'Referrals',
    description:
      'Trusted business from people you trust. When a referral comes from an NIA member, it carries weight. Your reputation is on the line, and so is theirs. That is how trust is built.',
  },
  {
    number: '05',
    name: 'Resources',
    description:
      'Access to the NIA App, NIA University, and collaborations with companies that provide real business tools. From CRM to accounting to marketing automation - resources that save time and money.',
  },
  {
    number: '06',
    name: 'Revenue',
    description:
      'The ultimate measure. Members report measurable revenue growth within the first year. Not because of magic, but because of better networks, better knowledge, and better execution.',
  },
];

const whoThisIsFor = [
  'You own a business that generates revenue and employs people',
  'You understand that growth requires investment - in people, systems, and networks',
  'You are willing to give before you take, and you value long-term relationships over short-term wins',
  'You see the Amaravathi opportunity and want to be positioned before the crowd arrives',
  'You are committed to showing up, engaging fully, and contributing to the success of others',
];

export default function NIAGuntur() {
  return (
    <div className="min-h-screen pt-20">
      <section className="min-h-[50vh] flex flex-col justify-center px-6 lg:px-12 py-30">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="mb-6">
            <Link to="/" className="text-sm text-nia-gray hover:text-nia-orange">
              Home
            </Link>
            <span className="text-nia-gray mx-2">/</span>
            <span className="text-sm text-nia-white">NIA Guntur</span>
          </div>

          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-nia-white mb-6">
              NIA Guntur
            </h1>
            <p className="text-lg md:text-xl font-light text-nia-orange tracking-widest uppercase">
              Network In Action - Guntur Chapter
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-3">
              <div className="sticky top-32">
                <p className="text-nia-orange font-semibold uppercase tracking-ultra-wide text-sm">
                  What We Are
                </p>
              </div>
            </div>

            <AnimatedSection className="lg:col-span-9 space-y-6">
              <p className="text-lg font-light text-nia-white leading-relaxed-custom">
                Network In Action is not a networking group. It's not a
                breakfast club. It's not a chamber of commerce. It's a curated
                community of business owners who have decided that isolation is
                expensive and connection is currency.
              </p>
              <p className="text-lg font-light text-nia-white leading-relaxed-custom">
                The Guntur chapter is being launched at the most strategic moment
                in the city's history. Amaravathi is rising. Infrastructure is
                being built. Institutions are moving in. Global attention is
                turning to this region. And the business owners who position
                themselves now will define the next decade.
              </p>
              <p className="text-lg font-light text-nia-white leading-relaxed-custom">
                This is not for everyone. This is for the serious, the committed,
                and the growth-oriented. If you're looking for casual networking,
                this is not your room. If you're building something real and want
                to be surrounded by people doing the same - this is exactly where
                you need to be.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12 bg-nia-dark">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-nia-white mb-20 text-center">
              The Six Pillars
            </h2>
          </AnimatedSection>

          <div className="space-y-20">
            {detailedPillars.map((pillar, index) => (
              <AnimatedSection
                key={pillar.number}
                delay={index * 0.1}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20 border-b border-nia-orange ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                <div className={index % 2 === 0 ? '' : 'lg:col-start-2'}>
                  <div
                    className="text-8xl md:text-9xl font-extrabold text-nia-orange mb-6"
                    style={{ opacity: 0.3 }}
                  >
                    {pillar.number}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-nia-white mb-6">
                    {pillar.name}
                  </h3>
                </div>

                <div className={index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <p className="text-base font-light text-nia-gray leading-relaxed-custom">
                    {pillar.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <blockquote className="text-2xl md:text-3xl font-semibold text-nia-white text-center leading-tight mb-8">
              "When Guntur is placed on the global map - and it will be - NIA
              members will not be spectators. They will be the builders, the
              investors, and the brands that define this city."
            </blockquote>
            <p className="text-sm font-light text-nia-orange text-center tracking-widest uppercase">
              - NIA Guntur Founding Vision
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12 bg-nia-darker">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-nia-white mb-16">
              Who This Is For
            </h2>

            <div className="space-y-12">
              {whoThisIsFor.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="flex gap-8 items-start">
                    <div className="text-4xl md:text-5xl font-extrabold text-nia-orange">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <p className="text-lg font-bold text-nia-white pt-2">
                      {item}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-nia-white mb-12 text-center">
              How It Works
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl font-extrabold text-nia-orange mb-4">
                  01
                </div>
                <h3 className="text-xl font-bold text-nia-white mb-2">
                  Express Interest
                </h3>
                <p className="text-sm font-light text-nia-gray">
                  Fill out the form
                </p>
              </div>

              <div className="hidden md:block text-nia-orange text-3xl">→</div>

              <div className="text-center">
                <div className="text-5xl font-extrabold text-nia-orange mb-4">
                  02
                </div>
                <h3 className="text-xl font-bold text-nia-white mb-2">
                  We Review
                </h3>
                <p className="text-sm font-light text-nia-gray">
                  Within 24 hours
                </p>
              </div>

              <div className="hidden md:block text-nia-orange text-3xl">→</div>

              <div className="text-center">
                <div className="text-5xl font-extrabold text-nia-orange mb-4">
                  03
                </div>
                <h3 className="text-xl font-bold text-nia-white mb-2">
                  You're In the Room
                </h3>
                <p className="text-sm font-light text-nia-gray">
                  Join the network
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button to="/join" variant="filled">
                Begin Here
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
