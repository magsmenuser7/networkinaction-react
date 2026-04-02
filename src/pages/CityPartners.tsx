import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const partnerTiers = [
  {
    name: 'Founding Partner',
    featured: true,
    benefits: [
      'Logo placement on all NIA Guntur materials and website',
      'Speaking opportunity at quarterly events',
      'Exclusive networking sessions with NIA leadership',
      'Priority access to all NIA business opportunities',
    ],
  },
  {
    name: 'Community Partner',
    featured: false,
    benefits: [
      'Logo on NIA Guntur website and select materials',
      'Recognition at monthly meetings',
      'Access to member directory',
      'Quarterly partnership review meetings',
    ],
  },
  {
    name: 'Associate Partner',
    featured: false,
    benefits: [
      'Logo on NIA Guntur website',
      'Mention in monthly newsletters',
      'Access to partnership opportunities',
      'Annual partnership review',
    ],
  },
];

export default function CityPartners() {
  const [formData, setFormData] = useState({
    organization_name: '',
    contact_person: '',
    mobile: '',
    partner_tier: '',
    business_description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('partner_inquiries')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        organization_name: '',
        contact_person: '',
        mobile: '',
        partner_tier: '',
        business_description: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="min-h-[50vh] flex flex-col justify-center px-6 lg:px-12 py-30">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="mb-6">
            <Link to="/" className="text-sm text-nia-gray hover:text-nia-orange">
              Home
            </Link>
            <span className="text-nia-gray mx-2">/</span>
            <span className="text-sm text-nia-white">City Partners</span>
          </div>

          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-nia-white mb-6">
              City Partners
            </h1>
            <p className="text-lg font-light text-nia-gray max-w-3xl leading-relaxed-custom">
              The businesses and institutions helping build Guntur's most powerful
              network.
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
                  What Is A City Partner
                </p>
              </div>
            </div>

            <AnimatedSection className="lg:col-span-9 space-y-6">
              <p className="text-lg font-light text-nia-white leading-relaxed-custom">
                City Partners are businesses and institutions that understand the
                value of being connected to Guntur's most ambitious business
                community. They support the growth of NIA Guntur and, in return,
                gain access to a curated network of decision-makers, business
                owners, and growth-focused professionals.
              </p>
              <p className="text-lg font-light text-nia-white leading-relaxed-custom">
                This is not a sponsorship. This is a strategic partnership. City
                Partners are aligned with the mission of NIA — to build a
                community where serious business owners help each other succeed.
              </p>
              <p className="text-lg font-light text-nia-white leading-relaxed-custom">
                With Amaravathi rising and Guntur positioned at the center of one
                of India's most exciting development stories, City Partners are
                positioning themselves to be known, trusted, and top-of-mind when
                NIA members need their services.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12 bg-nia-dark">
        <div className="max-w-[1440px] mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-nia-white mb-16 text-center">
              Partnership Tiers
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTiers.map((tier, index) => (
              <AnimatedSection key={tier.name} delay={index * 0.1}>
                <div
                  className={`bg-nia-black p-8 h-full flex flex-col ${
                    tier.featured ? 'border-2 border-nia-orange' : 'border border-nia-border'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-nia-white mb-6">
                    {tier.name}
                  </h3>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm font-light text-nia-gray flex items-start">
                        <span className="text-nia-orange mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => {
                      const form = document.getElementById('partner-form');
                      form?.scrollIntoView({ behavior: 'smooth' });
                      setFormData((prev) => ({ ...prev, partner_tier: tier.name }));
                    }}
                    variant={tier.featured ? 'filled' : 'ghost'}
                  >
                    Partner with Us
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12">
        <div className="max-w-[1440px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-nia-white mb-8">
              Current Partners
            </h2>
            <div className="bg-nia-darker border border-nia-border p-16">
              <p className="text-xl font-medium text-nia-white mb-4">
                Founding Partner spots are open.
              </p>
              <p className="text-lg font-light text-nia-gray mb-8">
                April 3 is the first opportunity.
              </p>
              <Button
                onClick={() => {
                  const form = document.getElementById('partner-form');
                  form?.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="filled"
              >
                Become a Founding Partner
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="partner-form" className="py-30 px-6 lg:px-12 bg-nia-darker">
        <div className="max-w-[560px] mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-nia-white mb-8 text-center">
              Partner Inquiry
            </h2>

            {submitStatus === 'success' && (
              <div className="bg-nia-orange/20 border border-nia-orange p-4 mb-8 text-center">
                <p className="text-nia-white font-medium">
                  Thank you! We'll review your inquiry and be in touch within 24
                  hours.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-900/20 border border-red-500 p-4 mb-8 text-center">
                <p className="text-nia-white font-medium">
                  Something went wrong. Please try again.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="organization_name"
                  value={formData.organization_name}
                  onChange={handleChange}
                  placeholder="Organization Name"
                  required
                  className="w-full bg-nia-black border border-nia-border px-6 py-4 text-nia-white placeholder-nia-gray focus:border-nia-orange focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="contact_person"
                  value={formData.contact_person}
                  onChange={handleChange}
                  placeholder="Contact Person"
                  required
                  className="w-full bg-nia-black border border-nia-border px-6 py-4 text-nia-white placeholder-nia-gray focus:border-nia-orange focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                  required
                  className="w-full bg-nia-black border border-nia-border px-6 py-4 text-nia-white placeholder-nia-gray focus:border-nia-orange focus:outline-none transition-colors"
                />
              </div>

              <div>
                <select
                  name="partner_tier"
                  value={formData.partner_tier}
                  onChange={handleChange}
                  required
                  className="w-full bg-nia-black border border-nia-border px-6 py-4 text-nia-white focus:border-nia-orange focus:outline-none transition-colors"
                >
                  <option value="">Partner Tier Interest</option>
                  <option value="Founding Partner">Founding Partner</option>
                  <option value="Community Partner">Community Partner</option>
                  <option value="Associate Partner">Associate Partner</option>
                </select>
              </div>

              <div>
                <textarea
                  name="business_description"
                  value={formData.business_description}
                  onChange={handleChange}
                  placeholder="One-line about your business"
                  rows={3}
                  className="w-full bg-nia-black border border-nia-border px-6 py-4 text-nia-white placeholder-nia-gray focus:border-nia-orange focus:outline-none transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="filled"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Apply to Partner'}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
