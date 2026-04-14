import { motion } from 'motion/react';
import { Link } from 'react-router';
import freshFruitImage from '../../../images/Fresh fruit flavors in vibrant settings.png';
import sparklingImage from '../../../images/Sparkling Sovány fruit beverages in action.png';

const ease = [0.22, 1, 0.36, 1] as const;

const flywheelSteps = [
  {
    step: '01',
    label: 'Activate',
    sub: 'World-class cultural events',
    detail: 'Each activation is a high-production, curated experience that places Sovány at the center of a moment worth attending. The bar is always set by the event, not the brand mention.',
  },
  {
    step: '02',
    label: 'Capture',
    sub: 'Premium content production',
    detail: 'Film crews. Editorial photographers. Strategic seeding. Every event yields hours of premium content — the kind no advertising budget can manufacture.',
  },
  {
    step: '03',
    label: 'Amplify',
    sub: 'Creator and media distribution',
    detail: 'Authentic creators distribute content within their networks. Media outlets cover the events. The right guests bring their own audiences. Reach multiplies without paid media.',
  },
  {
    step: '04',
    label: 'Desire',
    sub: 'Brand myth and consumer pull',
    detail: 'Repeated exposure through aspirational contexts builds unaided awareness. Consumers begin seeking Sovány out — at retail, on menus, from their social graph.',
  },
  {
    step: '05',
    label: 'Demand',
    sub: 'Retail and channel momentum',
    detail: "Organic consumer pull creates the retail conversation. Buyers respond to brands with cultural gravity. Distribution negotiations shift in the brand's favor.",
  },
  {
    step: '06',
    label: 'Value',
    sub: 'Compounding enterprise worth',
    detail: 'Each cycle of the flywheel increases brand equity, distribution reach, and valuation evidence. The platform compounds — each chapter feeding the next.',
  },
];

export default function CultureEngine() {
  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative py-28 md:py-40 px-4 sm:px-12 bg-gradient-to-br from-[#2B2520] to-[#3D342E] overflow-hidden">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.06 }}
          transition={{ duration: 2, ease }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4A574] rounded-full blur-3xl pointer-events-none"
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-['Outfit'] text-[10px] tracking-[0.35em] text-[#D4A574] uppercase mb-8"
          >
            The Culture Engine
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl text-[#FAF8F3] leading-[1.05] mb-8"
          >
            Activations are not events.<br />
            <em className="not-italic text-[#D4A574]">They are value creation.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="font-['Outfit'] text-xl text-[#C9B8A0] max-w-2xl leading-relaxed"
          >
            This is where the brand world connects to the business logic. Each moment in the activation calendar feeds a six-step flywheel that converts culture into commerce.
          </motion.p>
        </div>
      </section>

      {/* The Flywheel */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease }}
            className="mb-16"
          >
            <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-5">
              The Flywheel
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight">
              Activate → Capture → Amplify<br />→ Desire → Demand → Value
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D4A574]/10">
            {flywheelSteps.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: (idx % 2) * 0.1, ease }}
                className="bg-white p-8 sm:p-10 hover:bg-[#FAF8F3] transition-colors duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <span className="font-['Playfair_Display'] text-5xl text-[#D4A574]/15 leading-none flex-shrink-0 group-hover:text-[#D4A574]/25 transition-colors duration-300">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-2xl text-[#2B2520] mb-1">{s.label}</h3>
                    <p className="font-['Outfit'] text-[10px] tracking-[0.2em] text-[#D4A574] uppercase mb-4">
                      {s.sub}
                    </p>
                    <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47]">{s.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Culture Is the Moat */}
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
                The Strategic Moat
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight mb-8">
                Culture is the most defensible position in CPG.
              </h2>
              <div className="space-y-5 font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                <p>
                  Distribution and pricing can be matched. Features and claims can be copied. Culture cannot. A brand that owns a cultural worldview has a position that money alone cannot purchase.
                </p>
                <p>
                  Sovány's advantage is not the recipe. It is the world the brand is building — the expectations it sets, the moments it governs, the stories it enables. That is the moat.
                </p>
              </div>
              <div className="mt-10 space-y-4 border-t border-[#D4A574]/20 pt-10">
                {[
                  'Organic cultural presence compounds with each activation',
                  'Creator relationships that feel authentic, not transactional',
                  'Retail buyers respond to brands consumers are already seeking',
                  'Press and media coverage earned, not purchased',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#D4A574] mt-1 flex-shrink-0">—</span>
                    <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47]">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
              className="overflow-hidden rounded-sm shadow-xl h-80 sm:h-[480px]"
            >
              <img
                src={freshFruitImage}
                alt="Sovány fresh fruit flavors in vibrant settings"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Math */}
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
              The Math Behind It
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#FAF8F3] leading-tight">
              Every activation is a multiplier.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#D4A574]/10">
            {[
              {
                stat: '1 event',
                result: 'Multiple content productions',
                context: 'Film, photography, social, PR — all from a single activation night',
              },
              {
                stat: 'Content',
                result: 'Organic reach at scale',
                context: 'Creator distribution and earned media amplify far beyond paid equivalents',
              },
              {
                stat: 'Cultural gravity',
                result: 'Retail and distribution pull',
                context: 'Consumer demand signals shift the buyer conversation from push to pull',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease }}
                className="bg-[#2B2520]/60 p-8 sm:p-10 text-center"
              >
                <p className="font-['Playfair_Display'] text-4xl text-[#D4A574] mb-2">{item.stat}</p>
                <p className="font-['Outfit'] text-[10px] tracking-[0.2em] text-[#D4A574]/60 uppercase mb-4">→</p>
                <p className="font-['Playfair_Display'] text-xl text-[#FAF8F3] mb-3">{item.result}</p>
                <p className="font-['Outfit'] text-xs leading-relaxed text-[#8B7355]">{item.context}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual + Bridge to Investment */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="overflow-hidden h-72 sm:h-80 md:h-[400px]">
            <motion.img
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }}
              src={sparklingImage}
              alt="Sovány sparkling beverages in action"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#FAF8F3] p-12 sm:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease }}
            >
              <p className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#2B2520] leading-tight mb-6 italic">
                "The platform is ready. The capital raise is the accelerant."
              </p>
              <p className="font-['Outfit'] text-base text-[#6B5A47] leading-relaxed mb-8">
                The Culture Engine is not theoretical. It is a structured playbook that requires the right level of capitalization to deploy at meaningful scale.
              </p>
              <Link
                to="/investment"
                className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#FAF8F3] bg-[#2B2520] px-8 py-4 hover:bg-[#D4A574] transition-colors duration-300"
              >
                The Investment Opportunity →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
