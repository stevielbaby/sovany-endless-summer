import { motion } from 'motion/react';
import { Link } from 'react-router';

const ease = [0.22, 1, 0.36, 1] as const;

// Root images (spaces in filenames)
const img = (name: string) => `../../../images/${name}`;

// The full gallery — curated, varied sizes for a masonry feel
const gallery: { src: string; alt: string; span?: string }[] = [
  {
    src: img('Sparkling organic fruit drinks collection.png'),
    alt: 'Sovány sparkling organic fruit drinks collection',
    span: 'col-span-2 row-span-2',
  },
  {
    src: img('Golden hour poolside refreshment spread.png'),
    alt: 'Golden hour poolside refreshment spread',
  },
  {
    src: img('Sparkling Sovány fruit beverages in action.png'),
    alt: 'Sparkling Sovány fruit beverages in action',
  },
  {
    src: img('Sovány drinks at an elegant soirée.png'),
    alt: 'Sovány drinks at an elegant soirée',
    span: 'col-span-2',
  },
  {
    src: img('Fresh fruit flavors in vibrant settings.png'),
    alt: 'Fresh fruit flavors in vibrant settings',
    span: 'row-span-2',
  },
  {
    src: img('Sovány organic fruit sparkling beverages.png'),
    alt: 'Sovány organic fruit sparkling beverages',
  },
  {
    src: img('Tropical refreshment at sunset.png'),
    alt: 'Tropical refreshment at sunset',
  },
  {
    src: img('Sovány organic fruit beverages assortment.png'),
    alt: 'Sovány organic fruit beverages assortment',
    span: 'col-span-2',
  },
  {
    src: img('Sparkling Sovány beverages by candlelight.png'),
    alt: 'Sparkling Sovány beverages by candlelight',
    span: 'row-span-2',
  },
  {
    src: img('Sovány organic fruit sparkling beverages (1).png'),
    alt: 'Sovány organic fruit sparkling beverages',
  },
  {
    src: img('refreshing_summer_moments.png'),
    alt: 'Refreshing Sovány summer moments',
  },
];

// Simpler uniform grid items for the lower editorial strip
const editorial: { src: string; alt: string }[] = [
  {
    src: '../../imports/collage_1.jpg',
    alt: 'Sovány collage — summer world',
  },
  {
    src: '../../imports/collage_2.jpg',
    alt: 'Sovány collage — lifestyle',
  },
  {
    src: '../../imports/Refreshing_Sovány_moments_in_summer_settings.png',
    alt: 'Refreshing Sovány moments in summer settings',
  },
];

export default function Gallery() {
  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative py-28 md:py-40 px-4 sm:px-12 bg-gradient-to-br from-[#2B2520] to-[#1A1410] overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[#D4A574] blur-3xl pointer-events-none"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-['Outfit'] text-[10px] tracking-[0.35em] text-[#D4A574] uppercase mb-7"
          >
            Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl text-[#FAF8F3] leading-[1.05] mb-8"
          >
            The world of Sovány.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="font-['Outfit'] text-lg text-[#C9B8A0] max-w-2xl mx-auto leading-relaxed"
          >
            A living archive. Every image is a proof of feeling — that this brand already inhabits the world it wants to own.
          </motion.p>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-16 px-4 sm:px-12 bg-[#2B2520]">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-['Playfair_Display'] text-2xl sm:text-3xl italic text-[#E5DDD0] leading-relaxed">
            "Endless Summer is not a season you wait for. It is a standard you hold yourself to."
          </p>
          <footer className="mt-6 font-['Outfit'] text-[10px] tracking-[0.25em] text-[#D4A574] uppercase">
            Sovány — Brand Philosophy
          </footer>
        </motion.blockquote>
      </section>

      {/* Main Grid */}
      <section className="py-16 px-4 sm:px-8 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-3 space-y-3">
            {gallery.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: (idx % 3) * 0.05, ease }}
                className="break-inside-avoid overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover block group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#2B2520]/0 group-hover:bg-[#2B2520]/15 transition-colors duration-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Strip */}
      <section className="py-12 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-8 text-center"
          >
            Campaign Editorial
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {editorial.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: idx * 0.1, ease }}
                className="overflow-hidden group"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page Quote Band */}
      <section className="py-20 px-4 sm:px-12 bg-[#FAF8F3]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-['Playfair_Display'] text-2xl sm:text-3xl text-[#2B2520] italic leading-relaxed mb-5">
            "The images already exist. The culture already exists. We are not pitching a concept — we are showing you what it looks like."
          </p>
          <p className="font-['Outfit'] text-[10px] tracking-[0.25em] text-[#D4A574] uppercase">
            Sovány Activation Philosophy
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-4 sm:px-12 bg-gradient-to-br from-[#2B2520] to-[#3D342E]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease }}
          >
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#FAF8F3] leading-tight mb-6">
              There is more than imagery here.
            </h2>
            <p className="font-['Outfit'] text-lg text-[#C9B8A0] max-w-xl mx-auto leading-relaxed mb-10">
              Understanding how this visual world generates brand equity, demand, and enterprise value is the next step.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/culture-engine"
                className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#FAF8F3] bg-[#D4A574] px-8 py-4 hover:bg-[#C49060] transition-colors duration-300"
              >
                The Culture Engine →
              </Link>
              <Link
                to="/investment"
                className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#FAF8F3] border border-[#FAF8F3]/30 px-8 py-4 hover:border-[#D4A574] hover:text-[#D4A574] transition-all duration-300"
              >
                Investment Opportunity
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
