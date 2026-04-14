import { motion } from 'motion/react';
import { Link } from 'react-router';
import agencyLogo from '../../../images/dushawne_logo.png';
import candlelightImage from '../../../images/Sparkling Sovány beverages by candlelight.png';
import poolsideImage from '../../../images/Golden hour poolside refreshment spread.png';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Leadership() {
  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative py-28 md:py-40 px-4 sm:px-12 bg-gradient-to-br from-[#2B2520] to-[#3D342E] overflow-hidden">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.06 }}
          transition={{ duration: 2, ease }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4A574] rounded-full blur-3xl pointer-events-none"
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-['Outfit'] text-[10px] tracking-[0.35em] text-[#D4A574] uppercase mb-8"
          >
            Leadership & Next Stage
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl text-[#FAF8F3] leading-[1.05] mb-8"
          >
            Next Stage.<br />Next Story.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="font-['Outfit'] text-xl text-[#C9B8A0] max-w-2xl leading-relaxed"
          >
            The dream was always bigger than the team that built it. Now the company is structured to grow into it.
          </motion.p>
        </div>
      </section>

      {/* Foundation: What Founders Built */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease }}
            className="mb-14"
          >
            <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-5">
              The Foundation
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight max-w-xl">
              What founder leadership has built is real and it matters.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-px">
              {[
                {
                  label: 'Product Excellence',
                  text: 'A genuinely superior sparkling beverage — organic, real-fruit, gluten-free — developed and refined through direct market feedback. The taste advantage is not marketing. It is formulation.',
                },
                {
                  label: 'Authentic Brand DNA',
                  text: 'The worldview, the visual language, the three-word doctrine — Honest, Laid Back, Sophisticated — none of it was designed by an agency. It emerged from the founders\' actual convictions about how life should feel.',
                },
                {
                  label: 'Early Market Validation',
                  text: 'Retail presence, repeat purchase evidence, and consumer enthusiasm that reflects genuine affinity, not manufactured hype. The product has earned its early believers.',
                },
                {
                  label: 'Distribution Relationships',
                  text: 'Ground-level channel work that most investors underestimate. The relationships built in early distribution are the foundation of the scale story, not an obstacle to it.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, delay: idx * 0.08, ease }}
                  className="bg-white p-6 sm:p-8 hover:bg-[#FFF9EF] transition-colors duration-300"
                >
                  <p className="font-['Outfit'] text-[10px] tracking-[0.25em] text-[#D4A574] uppercase mb-2">
                    {item.label}
                  </p>
                  <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47]">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
              className="overflow-hidden rounded-sm shadow-xl h-80 sm:h-[520px]"
            >
              <img
                src={candlelightImage}
                alt="Sovány — candlelight warmth"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Transition */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease }}
            className="text-center mb-16"
          >
            <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-5">
              The Transition
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight max-w-2xl mx-auto">
              The next phase requires a different skill set. That is not a problem. It is a plan.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, ease }}
              className="border-l-4 border-[#D4A574]/30 pl-8"
            >
              <h3 className="font-['Playfair_Display'] text-2xl text-[#2B2520] mb-4">
                Brand creation is not the same as growth execution.
              </h3>
              <div className="space-y-4 font-['Outfit'] text-sm leading-relaxed text-[#6B5A47]">
                <p>
                  Founders are typically great at creating the thing. The product conviction, the early experiments, the willingness to bet everything on an intuition. That is how Sovány got here.
                </p>
                <p>
                  Growth execution is a different discipline. It requires systems, infrastructure, and the kind of demand-creation capability that is built through operational experience, not passion alone.
                </p>
                <p>
                  Sovány's next stage requires both. The founder DNA provides the irreplaceable foundation. The incoming layer provides the execution infrastructure.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
            >
              <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-6">
                What This Phase Requires
              </p>
              <div className="space-y-4">
                {[
                  'Cultural marketing infrastructure and activation production capability',
                  'Strategic distribution expansion and retail chain management',
                  'Investor relations and financial narrative construction',
                  'Demand creation systems that compound across channels',
                  'Leadership bench depth to execute at scale without dependence on founders alone',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#D4A574] mt-0.5 flex-shrink-0">→</span>
                    <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47]">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advisory Structure */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease }}
              className="overflow-hidden rounded-sm shadow-xl h-72 sm:h-[400px]"
            >
              <img
                src={poolsideImage}
                alt="Sovány golden hour poolside"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
            >
              <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-6">
                Strategic Advisory Layer
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight mb-8">
                Incoming capabilities. Not replacement.
              </h2>
              <div className="space-y-5 font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                <p>
                  The incoming advisory and strategic leadership brings specific capabilities that complement what founders built — not a critique of it.
                </p>
                <p>
                  The relationship between founder vision and strategic growth execution is deliberately designed. The founder DNA defines the north star. The incoming layer builds the road.
                </p>
              </div>

              {/* Agency reference */}
              <div className="mt-10 pt-8 border-t border-[#D4A574]/20">
                <p className="font-['Outfit'] text-[10px] tracking-[0.25em] text-[#D4A574] uppercase mb-4">
                  Strategic Advisory
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-8 w-44">
                    <img
                      src={agencyLogo}
                      alt="Dushawne McKinley & Associates"
                      className="absolute left-0 w-[220px] max-w-none h-auto object-contain brightness-0 opacity-60"
                    />
                  </div>
                </div>
                <p className="font-['Outfit'] text-sm text-[#8B7355] mt-3 leading-relaxed">
                  Specialty marketing advisory. Cultural brand strategy, activation design, and demand creation infrastructure.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Together Section */}
      <section className="py-20 md:py-28 px-4 sm:px-12 bg-gradient-to-br from-[#2B2520] to-[#3D342E]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease }}
          >
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#D4A574] to-transparent mx-auto mb-12" />
            <p className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-[#FAF8F3] italic leading-[1.2] mb-8">
              "The dream was always bigger than the team that built it. Now the company is structured to grow into it."
            </p>
            <p className="font-['Outfit'] text-base text-[#8B7355] max-w-xl mx-auto leading-relaxed mb-12">
              Founder conviction. Strategic execution capability. Capital to compound both. That is the structure of the next stage.
            </p>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#D4A574] to-transparent mx-auto mb-12" />
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/investment"
                className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#2B2520] bg-[#D4A574] px-8 py-4 hover:bg-[#FAF8F3] transition-colors duration-300"
              >
                Investment Details →
              </Link>
              <Link
                to="/brand"
                className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#FAF8F3] border border-[#D4A574]/30 px-8 py-4 hover:border-[#D4A574] transition-colors duration-300"
              >
                See the Product
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
