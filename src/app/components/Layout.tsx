import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import agencyLogo from '../../../images/dushawne_logo.png';

const brandLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/worldview', label: 'Worldview', end: false },
  { to: '/activations', label: 'Activations', end: false },
  { to: '/brand', label: 'Brand', end: false },
  { to: '/gallery', label: 'Gallery', end: false },
];

const investorLinks = [
  { to: '/culture-engine', label: 'Culture Engine' },
  { to: '/investment', label: 'Investment' },
  { to: '/leadership', label: 'Leadership' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF8F3]/96 backdrop-blur-md shadow-sm'
            : 'bg-[#FAF8F3]'
        } border-b border-[#D4A574]/20`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-6">
          {/* Wordmark */}
          <Link to="/" className="flex-shrink-0 group">
            <span className="font-['Playfair_Display'] text-lg sm:text-xl tracking-[0.25em] text-[#2B2520] font-bold uppercase group-hover:text-[#D4A574] transition-colors duration-300">
              Sovány
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {brandLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 font-['Outfit'] text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                    isActive
                      ? 'text-[#2B2520] after:absolute after:bottom-0 after:left-3.5 after:right-3.5 after:h-px after:bg-[#D4A574]'
                      : 'text-[#8B7355] hover:text-[#2B2520]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="h-4 w-px bg-[#D4A574]/30 mx-3" aria-hidden />

            <span className="font-['Outfit'] text-[9px] tracking-[0.2em] text-[#D4A574]/60 uppercase mr-1">
              Investor
            </span>

            {investorLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-3 py-2 font-['Outfit'] text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                    isActive ? 'text-[#D4A574]' : 'text-[#8B7355] hover:text-[#D4A574]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 -mr-2 text-[#2B2520] hover:text-[#D4A574] transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span
                className={`block h-px bg-current origin-center transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-[6px]' : ''
                }`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${
                  menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`block h-px bg-current origin-center transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden border-t border-[#D4A574]/15 bg-[#FAF8F3] overflow-hidden"
            >
              <div className="px-6 py-6 space-y-1">
                <p className="font-['Outfit'] text-[9px] tracking-[0.25em] text-[#D4A574]/70 uppercase mb-3">
                  Brand World
                </p>
                {brandLinks.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      `block py-2.5 font-['Outfit'] text-sm tracking-[0.1em] uppercase transition-colors ${
                        isActive
                          ? 'text-[#2B2520] font-semibold'
                          : 'text-[#8B7355]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                <div className="h-px bg-[#D4A574]/15 my-4" />

                <p className="font-['Outfit'] text-[9px] tracking-[0.25em] text-[#D4A574]/70 uppercase mb-3">
                  Investor Story
                </p>
                {investorLinks.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `block py-2.5 font-['Outfit'] text-sm tracking-[0.1em] uppercase transition-colors ${
                        isActive ? 'text-[#D4A574] font-semibold' : 'text-[#8B7355]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Content */}
      <main className="pt-16 sm:pt-20 min-h-screen bg-[#FAF8F3]">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-12 bg-gradient-to-br from-[#2B2520] to-[#3D342E] border-t border-[#D4A574]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-10">
            {/* Brand */}
            <div>
              <span className="font-['Playfair_Display'] text-2xl tracking-[0.25em] text-[#FAF8F3] font-bold uppercase block mb-2">
                Sovány
              </span>
              <p className="font-['Outfit'] text-xs text-[#8B7355] tracking-wider leading-relaxed">
                Endless Summer is not a campaign.<br />It is a worldview.
              </p>
            </div>

            {/* Site Map */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-1">
              <div>
                <p className="font-['Outfit'] text-[9px] tracking-[0.25em] text-[#D4A574]/60 uppercase mb-3">
                  Brand World
                </p>
                {brandLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block py-1 font-['Outfit'] text-xs tracking-wider text-[#8B7355] hover:text-[#D4A574] uppercase transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div>
                <p className="font-['Outfit'] text-[9px] tracking-[0.25em] text-[#D4A574]/60 uppercase mb-3">
                  Investor Story
                </p>
                {investorLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block py-1 font-['Outfit'] text-xs tracking-wider text-[#8B7355] hover:text-[#D4A574] uppercase transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Agency */}
            <div className="flex flex-col items-start md:items-end">
              <div className="relative h-8 w-44 mb-3">
                <img
                  src={agencyLogo}
                  alt="Dushawne McKinley & Associates"
                  className="absolute left-0 md:right-0 md:left-auto w-[220px] max-w-none h-auto object-contain brightness-0 invert opacity-45"
                />
              </div>
              <p className="font-['Outfit'] text-[10px] tracking-wider text-[#6B5A47]">
                Confidential · Strategic Advisory · © 2026
              </p>
            </div>
          </div>

          <div className="border-t border-[#D4A574]/10 pt-6 flex justify-between items-center">
            <p className="font-['Outfit'] text-[10px] tracking-wider text-[#6B5A47]">
              Sovány — Organic Sparkling Beverages
            </p>
            <p className="font-['Outfit'] text-[10px] tracking-wider text-[#6B5A47]">
              Georgia, USA
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
