import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { supabase } from '../lib/supabase';

export default function Join() {
  const [formData, setFormData] = useState({
    full_name: '',
    business: '',
    designation: '',
    mobile: '',
    city: 'Guntur',
    how_heard: '',
    expectations: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('membership_applications')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        full_name: '',
        business: '',
        designation: '',
        mobile: '',
        city: 'Guntur',
        how_heard: '',
        expectations: '',
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
        <div className="max-w-[1440px] mx-auto w-full text-center">
          <div className="mb-12">
            <Link to="/" className="text-sm text-nia-gray hover:text-nia-orange">
              Home
            </Link>
            <span className="text-nia-gray mx-2">/</span>
            <span className="text-sm text-nia-white">Join</span>
          </div>

          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-nia-white mb-6">
              Join the Room
            </h1>
            <p className="text-base md:text-lg font-light text-nia-gray max-w-2xl mx-auto leading-relaxed-custom">
              NIA Guntur is invite-curated. Tell us who you are and we'll be in
              touch within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12 bg-nia-dark">
        <div className="max-w-[560px] mx-auto">
          <AnimatedSection>
            {submitStatus === 'success' && (
              <div className="bg-nia-orange/20 border border-nia-orange p-6 mb-8 text-center">
                <h3 className="text-xl font-bold text-nia-white mb-2">
                  Thank You
                </h3>
                <p className="text-nia-white font-light">
                  We've received your application. You'll receive a personal call
                  from us within 24 hours.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-900/20 border border-red-500 p-6 mb-8 text-center">
                <p className="text-nia-white font-medium">
                  Something went wrong. Please try again or contact us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full bg-nia-black border border-nia-border px-6 py-4 text-nia-white placeholder-nia-gray focus:border-nia-orange focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Business"
                  required
                  className="w-full bg-nia-black border border-nia-border px-6 py-4 text-nia-white placeholder-nia-gray focus:border-nia-orange focus:outline-none transition-colors"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Designation"
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
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full bg-nia-black border border-nia-border px-6 py-4 text-nia-white placeholder-nia-gray focus:border-nia-orange focus:outline-none transition-colors"
                />
              </div>

              <div>
                <select
                  name="how_heard"
                  value={formData.how_heard}
                  onChange={handleChange}
                  className="w-full bg-nia-black border border-nia-border px-6 py-4 text-nia-white focus:border-nia-orange focus:outline-none transition-colors"
                >
                  <option value="">How did you hear about NIA?</option>
                  <option value="Friend/Colleague">Friend/Colleague</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Event">Event</option>
                  <option value="Website">Website</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <textarea
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleChange}
                  placeholder="What are you hoping to get from NIA Guntur? (Optional)"
                  rows={4}
                  className="w-full bg-nia-black border border-nia-border px-6 py-4 text-nia-white placeholder-nia-gray focus:border-nia-orange focus:outline-none transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="filled"
                className="w-full h-14"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Express My Interest'}
              </Button>

              <p className="text-sm text-center font-light text-nia-gray leading-relaxed-custom">
                This is not a payment or commitment. We review every application
                personally.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-30 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-nia-white mb-12 text-center">
              What Happens Next
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-extrabold text-nia-orange mb-4">
                  01
                </div>
                <h3 className="text-xl font-bold text-nia-white mb-3">
                  You Submit
                </h3>
                <p className="text-sm font-light text-nia-gray leading-relaxed-custom">
                  Fill out the form with your details and business information
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-extrabold text-nia-orange mb-4">
                  02
                </div>
                <h3 className="text-xl font-bold text-nia-white mb-3">
                  We Review Within 24 Hours
                </h3>
                <p className="text-sm font-light text-nia-gray leading-relaxed-custom">
                  Our team personally reviews every application
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-extrabold text-nia-orange mb-4">
                  03
                </div>
                <h3 className="text-xl font-bold text-nia-white mb-3">
                  You Receive a Personal Call
                </h3>
                <p className="text-sm font-light text-nia-gray leading-relaxed-custom">
                  We'll call to discuss next steps and answer your questions
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
