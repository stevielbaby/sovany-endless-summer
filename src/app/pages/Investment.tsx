import { motion } from 'motion/react';
import { Link } from 'react-router';
import sparklingImage from '../../../images/Sovány organic fruit sparkling beverages.png';
import sparkling2Image from '../../../images/Sovány organic fruit sparkling beverages (1).png';

const ease = [0.22, 1, 0.36, 1] as const;

const capitalDeployment = [
  {
    category: 'Sales & Marketing Infrastructure',
    amount: '$480K',
    pct: 32,
    detail: 'Activation platform buildout, event production, creator partnerships, PR, and demand creation campaigns.',
  },
  {
    category: 'Packaging & Product',
    amount: '$300K',
    pct: 20,
    detail: 'Premium packaging upgrades including glass bottle line, label refresh, and seasonal limited-edition SKUs.',
  },
  {
    category: 'Inventory & Fulfillment',
    amount: '$375K',
    pct: 25,
    detail: 'Working capital for expanded inventory to support distribution growth without stockout risk.',
  },
  {
    category: 'Trade Spend & Distribution',
    amount: '$225K',
    pct: 15,
    detail: 'Retail trade support, slotting, sampling programs, and channel development at key accounts.',
  },
  {
    category: 'Innovation Pipeline',
    amount: '$120K',
    pct: 8,
    detail: 'New flavor development, format exploration, and R&D for next-stage product architecture.',
  },
];

export default function Investment() {
  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative py-28 md:py-40 px-4 sm:px-12 bg-[#FAF8F3] overflow-hidden">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2, ease }}
          className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#D4A574] rounded-full blur-3xl pointer-events-none"
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-['Outfit'] text-[10px] tracking-[0.35em] text-[#D4A574] uppercase mb-8"
          >
            Investment Opportunity
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl text-[#2B2520] leading-[1.05] mb-8"
          >
            The Inflection Point.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="font-['Outfit'] text-xl text-[#6B5A47] max-w-2xl leading-relaxed"
          >
            Under-realized, not broken. At a moment where the right capital does not rescue a business — it unlocks one.
          </motion.p>
        </div>
      </section>

      {/* The Opportunity */}
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
                The Opportunity
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight mb-8">
                What the market does not yet see.
              </h2>
              <div className="space-y-5 font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                <p>
                  Sovány holds a rare combination: a genuinely differentiated product with organic certification, real fruit ingredients, and gluten-free positioning in a market still searching for the credible lifestyle entrant.
                </p>
                <p>
                  The brand DNA is intact. The product proof is real. The consumer proposition is defensible. What has been missing is the infrastructure to convert those advantages into the cultural gravity and distribution scale that forces the market's hand.
                </p>
                <p className="text-[#8B7355] italic border-l-2 border-[#D4A574] pl-5">
                  That is the gap this raise closes. Nothing more, nothing less.
                </p>
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
                src={sparklingImage}
                alt="Sovány organic fruit sparkling beverages"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Raise */}
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
              The Raise
            </p>
            <div className="font-['Playfair_Display'] text-7xl sm:text-8xl text-[#2B2520] mb-4">$1.5M</div>
            <p className="font-['Outfit'] text-lg text-[#6B5A47] max-w-xl mx-auto">
              A targeted raise structured to fund 18 months of meaningful platform execution and measurable market expansion.
            </p>
          </motion.div>

          <div className="space-y-px">
            {capitalDeployment.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: idx * 0.08, ease }}
                className="bg-white p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center hover:bg-[#FFF9EF] transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-20">
                  <p className="font-['Playfair_Display'] text-2xl text-[#D4A574]">{item.amount}</p>
                  <p className="font-['Outfit'] text-[9px] tracking-wider text-[#8B7355]">{item.pct}%</p>
                </div>
                <div className="flex-1">
                  <h3 className="font-['Outfit'] text-sm tracking-wider text-[#2B2520] font-semibold uppercase mb-1">
                    {item.category}
                  </h3>
                  <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47]">{item.detail}</p>
                </div>
                <div className="w-full sm:w-32 h-1.5 bg-[#D4A574]/10 rounded-full flex-shrink-0">
                  <div
                    className="h-full bg-[#D4A574] rounded-full"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revaluation Logic */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-gradient-to-br from-[#2B2520] to-[#3D342E]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease }}
            className="mb-16"
          >
            <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-5">
              The Revaluation Story
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#FAF8F3] leading-tight max-w-2xl">
              Current state vs. next-stage state.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D4A574]/10">
            <div className="bg-[#2B2520]/40 p-8 sm:p-10">
              <p className="font-['Outfit'] text-[10px] tracking-[0.2em] text-[#8B7355] uppercase mb-6">
                Today
              </p>
              <div className="space-y-4">
                {[
                  'Premium product with limited marketing infrastructure',
                  'Authentic brand DNA — under-amplified',
                  'Retail presence without the cultural gravity to pull demand',
                  'Founder-led operations optimized for product quality',
                  'Valuation reflects execution stage, not strategic ceiling',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#8B7355] mt-1 flex-shrink-0 text-xs">○</span>
                    <p className="font-['Outfit'] text-sm leading-relaxed text-[#C9B8A0]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#D4A574]/10 p-8 sm:p-10 border border-[#D4A574]/20">
              <p className="font-['Outfit'] text-[10px] tracking-[0.2em] text-[#D4A574] uppercase mb-6">
                Post-Raise
              </p>
              <div className="space-y-4">
                {[
                  'Fully deployed activation platform creating monthly cultural events',
                  'Premium content flywheel generating organic reach at scale',
                  'Retail pull narrative supported by earned consumer demand',
                  'Expanded leadership and operational infrastructure',
                  'Valuation evidence compounds with each activation cycle',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#D4A574] mt-1 flex-shrink-0 text-xs">●</span>
                    <p className="font-['Outfit'] text-sm leading-relaxed text-[#E5DDD0]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease }}
              className="overflow-hidden rounded-sm shadow-xl"
            >
              <img
                src={sparkling2Image}
                alt="Sovány organic sparkling beverages collection"
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
                Why Now
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight mb-8">
                The white space is closing.
              </h2>
              <div className="space-y-5 font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                <p>
                  The organic sparkling beverage category is growing. The lifestyle-led brand positioning that Sovány occupies is increasingly contested. The window to establish cultural authority in this space is finite.
                </p>
                <p>
                  First movers in cultural brand positioning at this stage tend to become the category reference. Followers tend to be followers indefinitely.
                </p>
                <p>
                  The activation platform is built. The worldview is defined. The product proof is real. The capital raise is the last input before the compounding begins.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-4 sm:px-12 bg-[#FAF8F3] border-t border-[#D4A574]/15">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease }}
          >
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight mb-6">
              Ready to learn more?
            </h2>
            <p className="font-['Outfit'] text-lg text-[#6B5A47] max-w-xl mx-auto leading-relaxed mb-10">
              Qualified investors are invited to review the full deck and arrange a principal conversation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:invest@sovany.com"
                className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#FAF8F3] bg-[#2B2520] px-8 py-4 hover:bg-[#D4A574] transition-colors duration-300"
              >
                Request the Deck
              </a>
              <Link
                to="/leadership"
                className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#2B2520] border border-[#2B2520]/30 px-8 py-4 hover:border-[#D4A574] hover:text-[#D4A574] transition-all duration-300"
              >
                Meet the Leadership →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
