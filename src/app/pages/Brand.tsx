import { motion } from 'motion/react';
import { Link } from 'react-router';
import bottleImage from '../../imports/C33FE85E-97D1-4E55-B439-8CF056393BE8-1.PNG';
import assortmentImage from '../../../images/Sovány organic fruit beverages assortment.png';
import freshFruitImage from '../../../images/Fresh fruit flavors in vibrant settings.png';
import collage1 from '../../imports/collage_1.jpg';

const ease = [0.22, 1, 0.36, 1] as const;

const flavors = [
  {
    name: 'Raspberry',
    tone: 'Bright. Bold. Unmistakably summer.',
    note: 'A clean, ripe raspberry that finishes without sweetness fatigue. The one people reach for twice.',
    hue: '#C25E74',
  },
  {
    name: 'Tangerine',
    tone: 'Warm. Citrus. Golden hour in a glass.',
    note: 'Fresh tangerine with the bright pop of real citrus oil. Pairs with sunlight and good company.',
    hue: '#E07B39',
  },
  {
    name: 'Green Apple',
    tone: 'Crisp. Unexpected. Quietly addictive.',
    note: 'Tart and refreshing with a complexity that rewards the second sip. The discovery flavor.',
    hue: '#6A9E4F',
  },
  {
    name: 'Pineapple',
    tone: 'Tropical. Effortless. Mood-changing.',
    note: 'Real pineapple warmth with sparkling lift. The flavor that makes any setting feel like vacation.',
    hue: '#D4A030',
  },
];

const credentials = [
  { label: 'Certified Organic', detail: 'USDA Organic certified. Real ingredients, full stop.' },
  { label: 'Gluten-Free', detail: 'The only certified organic and gluten-free entrant in the lifestyle sparkling category.' },
  { label: 'Real Fruit', detail: "The hint of color is not dye. It is fruit. What you see is what's inside." },
  { label: 'No Artificial Anything', detail: 'No artificial sweeteners, colors, flavors, or preservatives. Honest by formulation.' },
];

export default function Brand() {
  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative py-28 md:py-40 px-4 sm:px-12 bg-[#FAF8F3] overflow-hidden">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2, ease }}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4A574] rounded-full blur-3xl pointer-events-none"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="font-['Outfit'] text-[10px] tracking-[0.35em] text-[#D4A574] uppercase mb-8"
              >
                Brand & Product
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease }}
                className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl text-[#2B2520] leading-[1.05] mb-8"
              >
                Real.<br />Organic.<br />Alive.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease }}
                className="font-['Outfit'] text-xl text-[#6B5A47] max-w-lg leading-relaxed"
              >
                Sovány is not a mood board with a beverage attached. It is a genuinely superior product — organic sparkling water made with real fruit — that happens to have a great story to match.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease }}
              className="relative flex justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.09, 0.05] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 bg-[#D4A574] rounded-full blur-3xl"
              />
              <img
                src={bottleImage}
                alt="Sovány premium glass bottle"
                className="relative z-10 w-full max-w-xs sm:max-w-sm h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Image + Ingredients */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, ease }}
              className="overflow-hidden rounded-sm shadow-xl"
            >
              <img
                src={assortmentImage}
                alt="Sovány organic fruit beverages assortment"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
            >
              <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-6">
                The Product
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight mb-8">
                Organic sparkling beverages. Made with real fruit.
              </h2>
              <div className="space-y-5 font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                <p>
                  Sovány is an organic sparkling beverage line built on a simple, honest premise: that what goes into the bottle should be the story — not the packaging, not the influencer, not the campaign.
                </p>
                <p>
                  The hint of color in every can and bottle is not artificial. It is fruit. The flavor comes from real ingredients. The carbonation is clean. Nothing is hidden.
                </p>
                <p>
                  That honesty is the product's greatest competitive advantage — and the reason the brand story holds up under scrutiny.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flavors */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease }}
            className="text-center mb-16"
          >
            <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-5">
              Four Distinct Flavors
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight">
              Every one is a reason to come back.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D4A574]/10">
            {flavors.map((flavor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: (idx % 2) * 0.1, ease }}
                className="bg-white p-8 sm:p-10 group hover:bg-[#FFF9EF] transition-colors duration-300"
              >
                <div
                  className="w-10 h-10 rounded-full mb-6 opacity-80"
                  style={{ backgroundColor: flavor.hue }}
                />
                <h3 className="font-['Playfair_Display'] text-3xl text-[#2B2520] mb-2 group-hover:text-[#D4A574] transition-colors duration-300">
                  {flavor.name}
                </h3>
                <p className="font-['Outfit'] text-[10px] tracking-[0.2em] text-[#D4A574] uppercase mb-5">
                  {flavor.tone}
                </p>
                <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47]">{flavor.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-gradient-to-br from-[#2B2520] to-[#3D342E]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease }}
            className="text-center mb-16"
          >
            <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-5">
              The Credentials
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#FAF8F3] leading-tight max-w-2xl mx-auto">
              Still the only brand that is both organic and gluten-free.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D4A574]/10">
            {credentials.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: idx * 0.08, ease }}
                className="bg-[#2B2520]/50 p-8 sm:p-10 hover:bg-[#2B2520]/70 transition-colors duration-300"
              >
                <p className="font-['Outfit'] text-[10px] tracking-[0.25em] text-[#D4A574] uppercase mb-3">
                  {c.label}
                </p>
                <p className="font-['Outfit'] text-sm leading-relaxed text-[#C9B8A0]">{c.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Glass Bottle Vision */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, ease }}
            >
              <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-6">
                The Packaging Vision
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight mb-8">
                Glass makes the invisible visible.
              </h2>
              <div className="space-y-5 font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                <p>
                  The glass bottle is not just a packaging upgrade. It is the physical expression of the brand's honesty. When the liquid is real fruit-infused and beautiful, transparency is the most compelling packaging decision available.
                </p>
                <p>
                  Light catches the natural color. The weight signals quality before the first sip. The bottle itself becomes word-of-mouth — carried, photographed, kept.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#D4A574]/20 pt-10">
                {[
                  { label: 'Sculptural', sub: 'Iconic in the hand and on camera' },
                  { label: 'Weighted', sub: 'Premium tactile experience' },
                  { label: 'Collectible', sub: 'Display-worthy. Worth keeping.' },
                ].map(item => (
                  <div key={item.label}>
                    <p className="font-['Outfit'] text-[10px] tracking-[0.2em] text-[#D4A574] uppercase mb-2">
                      {item.label}
                    </p>
                    <p className="font-['Outfit'] text-xs text-[#8B7355] leading-relaxed">{item.sub}</p>
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
                src={freshFruitImage}
                alt="Sovány fresh fruit flavors — real ingredients"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottle Full-Width */}
      <section className="overflow-hidden h-72 sm:h-96 md:h-[480px]">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          src={collage1}
          alt="Sovány glass bottle collection"
          className="w-full h-full object-cover"
        />
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 px-4 sm:px-12 bg-[#FAF8F3]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease }}
          >
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight mb-6">
              The product earns the brand story.
            </h2>
            <p className="font-['Outfit'] text-lg text-[#6B5A47] max-w-xl mx-auto leading-relaxed mb-10">
              See how the brand is activated — and understand why the platform creates more than great events.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/activations"
                className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#FAF8F3] bg-[#2B2520] px-8 py-4 hover:bg-[#D4A574] transition-colors duration-300"
              >
                See the Activations
              </Link>
              <Link
                to="/gallery"
                className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#2B2520] border border-[#2B2520]/30 px-8 py-4 hover:border-[#D4A574] hover:text-[#D4A574] transition-all duration-300"
              >
                Enter the Gallery →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
