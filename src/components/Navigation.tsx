import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    // { name: 'Home', path: '/' },
    // { name: 'NIA Guntur', path: '/nia-guntur' },
    // { name: 'City Partners', path: '/city-partners' },
    // { name: 'Event', path: '/event' },
    // { name: 'Join', path: '/join' },
  ];

  const founderLinks = [
    { name: 'Sandeep N', path: '#' }, 
    // /sandeep-n
    { name: 'Vinod T', path: '#' },
    // /vinod-t
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-nia-white transition-all duration-300 ${
          isScrolled ? 'border-b border-nia-border shadow-sm' : ''
        }`}
      >
        <div className="max-w-[] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img
                src="/logo_nia_guntu.png"
                alt="NIA Guntur"
                className="h-36"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold text-sm tracking-wide transition-colors relative ${
                    isActive(link.path)
                      ? 'text-nia-orange'
                      : 'text-nia-black hover:text-nia-orange'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-nia-orange" />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              {founderLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-light text-sm text-nia-gray hover:text-nia-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-nia-black p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-nia-white lg:hidden"
            style={{ paddingTop: '80px' }}
          >
            <div className="flex flex-col h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`h-12 flex items-center px-6 font-semibold border-l-2 transition-colors ${
                    isActive(link.path)
                      ? 'border-nia-orange text-nia-orange bg-nia-darker'
                      : 'border-transparent text-nia-black hover:border-nia-orange hover:text-nia-orange'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 border-t border-nia-border">
                {founderLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="h-12 flex items-center px-6 font-light text-nia-gray hover:text-nia-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
