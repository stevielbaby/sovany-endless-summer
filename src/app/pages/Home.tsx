import { motion } from 'motion/react';
import { Link } from 'react-router';
import bottleImage from '../../imports/C33FE85E-97D1-4E55-B439-8CF056393BE8-1.PNG';
import collage2 from '../../imports/collage_2.jpg';
import poolsideImage from '../../../images/Golden hour poolside refreshment spread.png';
import collectionImage from '../../../images/Sparkling organic fruit drinks collection.png';

const ease = [0.22, 1, 0.36, 1] as const;

const chapters = [
  {
    to: '/worldview',
    label: 'The Worldview',
    subtitle: 'Philosophy',
    desc: 'Why Endless Summer is bigger than a campaign, and the cultural gap the brand was built to fill.',
    num: '01',
  },
  {
    to: '/activations',
    label: 'The Activations',
    subtitle: 'The Platform',
    desc: 'Monthly chapters. Curated moments. A demand engine disguised as the best party of the summer.',
    num: '02',
  },
  {
    to: '/brand',
    label: 'The Product',
    subtitle: 'Brand & Product',
    desc: 'Organic. Real fruit. Gluten-free. A genuinely superior sparkling beverage with four distinct flavors.',
    num: '03',
  },
  {
    to: '/investment',
    label: 'The Opportunity',
    subtitle: 'Investment',
    desc: 'A $1.5M raise at an inflection point. Under-realized today. Built for revaluation tomorrow.',
    num: '04',
  },
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center bg-gradient-to-br from-[#FAF8F3] via-[#FFF9EF] to-[#F5EBD9] overflow-hidden">
        {/* Ambient glow */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.06 }}
          transition={{ duration: 2, ease }}
          className="absolute top-1/4 right-1/3 w-[700px] h-[700px] rounded-full bg-[#D4A574] blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-12 w-full py-20 sm:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Left: Copy */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="font-['Outfit'] text-[10px] tracking-[0.35em] text-[#D4A574] uppercase mb-8"
              >
                Sovány — Endless Summer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease }}
                className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl leading-[1.0] text-[#2B2520] mb-10"
              >
                Endless Summer<br />
                <em className="not-italic text-[#D4A574]">is not a campaign.</em><br />
                It is a worldview.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="font-['Outfit'] text-lg sm:text-xl leading-relaxed text-[#6B5A47] max-w-lg mb-10"
              >
                Sovány is the fuel. The brand that restores the great moment — in culture, commerce, and for the investors positioned early enough to see it.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/worldview"
                  className="inline-flex items-center gap-3 font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#FAF8F3] bg-[#2B2520] px-7 py-4 hover:bg-[#D4A574] transition-colors duration-300"
                >
                  Explore the Worldview
                </Link>
                <Link
                  to="/investment"
                  className="inline-flex items-center gap-3 font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#2B2520] border border-[#2B2520]/30 px-7 py-4 hover:border-[#D4A574] hover:text-[#D4A574] transition-colors duration-300"
                >
                  Investment Thesis
                </Link>
              </motion.div>
            </div>

            {/* Right: Product */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.3, ease }}
              className="relative flex justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.1, 0.06] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-[#D4A574] rounded-full blur-3xl"
              />
              <img
                src={bottleImage}
                alt="Sovány premium glass bottle"
                className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-['Outfit'] text-[9px] tracking-[0.3em] text-[#8B7355] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-14 bg-gradient-to-b from-transparent via-[#D4A574] to-transparent"
          />
        </motion.div>
      </section>

      {/* Manifesto Band */}
      <section className="py-20 md:py-28 bg-[#2B2520] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease }}
            className="text-center"
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#D4A574] to-transparent mx-auto mb-12" />
            <p className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-[#FAF8F3] leading-[1.2] italic max-w-4xl mx-auto">
              "We believe in restoring the great moment. The ones people talk about long after the summer ends."
            </p>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#D4A574] to-transparent mx-auto mt-12" />
          </motion.div>
        </div>
      </section>

      {/* Chapter Cards */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="mb-14"
          >
            <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-4">
              The World We're Building
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight">
              Four chapters.<br />One story.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D4A574]/15">
            {chapters.map((ch, idx) => (
              <motion.div
                key={ch.to}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease }}
              >
                <Link
                  to={ch.to}
                  className="group flex flex-col justify-between p-8 sm:p-10 bg-white hover:bg-[#FAF8F3] transition-colors duration-400 h-full min-h-[220px]"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="font-['Outfit'] text-[9px] tracking-[0.3em] text-[#D4A574] uppercase mb-1.5">
                        {ch.subtitle}
                      </p>
                      <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#2B2520] group-hover:text-[#D4A574] transition-colors duration-300">
                        {ch.label}
                      </h3>
                    </div>
                    <span className="font-['Playfair_Display'] text-5xl text-[#D4A574]/10 leading-none">
                      {ch.num}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47] max-w-xs">
                      {ch.desc}
                    </p>
                    <span className="font-['Outfit'] text-xs text-[#D4A574] tracking-wider ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      Explore →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Spread */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease }}
            className="overflow-hidden h-72 sm:h-96 md:h-[500px]"
          >
            <img
              src={collage2}
              alt="Sovány golden hour lifestyle moment"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="overflow-hidden h-72 sm:h-96 md:h-[500px]"
          >
            <img
              src={poolsideImage}
              alt="Sovány poolside summer spread"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, ease }}
            >
              <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-5">
                Cinematic on the surface. Disciplined underneath.
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight mb-8">
                Built for two audiences simultaneously.
              </h2>
              <div className="space-y-5 font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                <p>
                  The public sees a brand world — aspirational, alive, alive with moments worth collecting. The investor sees a demand engine tied directly to cultural credibility, media value, and retail pull.
                </p>
                <p>
                  That duality is the architecture. Both layers are real. Both layers are intentional. Both layers are what makes Sovány worth understanding at depth.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#D4A574]/20 pt-10">
                {[
                  { label: 'Honest', sub: 'Authentic. Never over-branded.' },
                  { label: 'Laid Back', sub: 'Savoring every moment.' },
                  { label: 'Sophisticated', sub: 'Classic style, fresh angle.' },
                ].map(p => (
                  <div key={p.label}>
                    <p className="font-['Outfit'] text-[10px] tracking-[0.2em] text-[#D4A574] uppercase mb-2">
                      {p.label}
                    </p>
                    <p className="font-['Outfit'] text-xs text-[#8B7355] leading-relaxed">
                      {p.sub}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
              className="overflow-hidden rounded-sm shadow-xl"
            >
              <img
                src={collectionImage}
                alt="Sovány sparkling beverages collection"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investor Bridge */}
      <section className="py-20 md:py-28 px-4 sm:px-12 bg-gradient-to-br from-[#2B2520] to-[#3D342E]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease }}
          >
            <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-8">
              The Investor Story
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl text-[#FAF8F3] leading-[1.1] mb-8">
              Under-realized today.<br />
              Built for revaluation.
            </h2>
            <p className="font-['Outfit'] text-lg text-[#C9B8A0] max-w-2xl mx-auto leading-relaxed mb-12">
              Sovány is not broken. It is at an inflection point. The platform is ready. The demand engine is defined. The capital raise is the unlock — not the rescue.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/culture-engine"
                className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#FAF8F3] border border-[#D4A574]/40 px-8 py-4 hover:bg-[#D4A574] hover:border-[#D4A574] hover:text-[#2B2520] transition-all duration-300"
              >
                Culture Engine
              </Link>
              <Link
                to="/investment"
                className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#2B2520] bg-[#D4A574] px-8 py-4 hover:bg-[#FAF8F3] transition-colors duration-300"
              >
                Investment Thesis →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
