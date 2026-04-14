import { motion } from 'motion/react';
import { Link } from 'react-router';
import sunsetImage from '../../../images/Tropical refreshment at sunset.png';
import soireeImage from '../../../images/Sovány drinks at an elegant soirée.png';
import candlelightImage from '../../../images/Sparkling Sovány beverages by candlelight.png';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Worldview() {
  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative py-28 md:py-40 px-4 sm:px-12 bg-gradient-to-br from-[#2B2520] to-[#3D342E] overflow-hidden">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2, ease }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4A574] rounded-full blur-3xl"
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-['Outfit'] text-[10px] tracking-[0.35em] text-[#D4A574] uppercase mb-8"
          >
            The Worldview
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl text-[#FAF8F3] leading-[1.05] mb-8"
          >
            What is<br />Endless Summer?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="font-['Outfit'] text-xl text-[#C9B8A0] max-w-2xl leading-relaxed"
          >
            It is not a season. It is not a campaign. It is the conviction that great moments still happen — and that the right brand can be their fuel.
          </motion.p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, ease }}
            >
              <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-6">
                The Definition
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight mb-8">
                A state of mind.<br />Not a forecast.
              </h2>
              <div className="space-y-5 font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                <p>
                  Endless Summer is the belief that aspirational living is not reserved for a few weeks in July. It is a posture. A way of moving through the world that prizes genuine experience over performance.
                </p>
                <p>
                  The people who live this worldview are not chasing luxury for status. They are chasing the feeling that this moment — right now — is exactly where they want to be.
                </p>
                <p className="text-[#8B7355] italic border-l-2 border-[#D4A574] pl-5">
                  Sovány is made for the people who already live this way — and for the ones who want to.
                </p>
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
                src={sunsetImage}
                alt="Tropical refreshment at sunset"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Cultural Gap */}
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
              The Cultural Gap
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight mb-6 max-w-3xl mx-auto">
              Aspirational culture used to create real-world gravity.
            </h2>
            <p className="font-['Outfit'] text-lg text-[#6B5A47] max-w-2xl mx-auto leading-relaxed">
              Then it went flat. Oversaturated feeds. Performative moments. Brands chasing virality instead of meaning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D4A574]/10">
            {[
              {
                label: 'What Was Lost',
                text: 'The era of the iconic summer moment — the poolside photograph that defined a season, the gathering that became the story everyone told that fall. Those moments had cultural weight.',
              },
              {
                label: 'What Happened',
                text: 'Content volume replaced cultural depth. Brands optimized for impressions instead of meaning. The aspirational became hollow. The great moment became rare again — but by accident, not design.',
              },
              {
                label: 'What Sovány Restores',
                text: 'A brand that invests in the moment itself. That treats each activation as a cultural production, not a marketing spend. That earns presence by creating something genuinely worth showing up for.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease }}
                className="bg-[#FAF8F3] p-8 sm:p-10"
              >
                <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-4">
                  {item.label}
                </p>
                <p className="font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Moments Matter */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gradient-to-br from-[#2B2520] to-[#3D342E] p-12 sm:p-16 md:p-20 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, ease }}
            >
              <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-6">
                Why These Moments Matter
              </p>
              <p className="font-['Playfair_Display'] text-3xl sm:text-4xl text-[#FAF8F3] leading-[1.2] mb-8">
                People still want larger-than-life experiences.
              </p>
              <div className="space-y-5 font-['Outfit'] text-base leading-relaxed text-[#C9B8A0]">
                <p>
                  Post-pandemic culture has sharpened the appetite for real, physical, shared experiences. The great moment is not nostalgia — it is the direction consumer desire is moving.
                </p>
                <p>
                  A brand that provides genuine cultural fuel for those moments does not just benefit from demand. It becomes the demand. It becomes the reason you were there.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="overflow-hidden h-80 sm:h-auto"
          >
            <img
              src={soireeImage}
              alt="Sovány at an elegant event"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Emotional Doctrine */}
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
              The Emotional Doctrine
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight max-w-xl">
              Three words that govern everything Sovány does.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                word: 'Honest',
                detail: "Real ingredients. Visible truth. Sovány never hides what is inside. The product earns the brand's credibility every single time.",
                sub: 'Authentic and honest. Never overly branded. Never over-engineered.',
              },
              {
                word: 'Laid Back',
                detail: 'The brand does not try hard. It does not chase trends. It creates genuine experiences that people want to be part of — and then lets the story spread organically.',
                sub: 'Savoring the moment. Encouraging play. Refusing urgency.',
              },
              {
                word: 'Sophisticated',
                detail: 'There is a certain panache at the heart of everything Sovány makes. A fresh take on classic style — elegant without being exclusionary, intentional without being precious.',
                sub: 'Classic sensibility. Modern execution. Unmistakable presence.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease }}
                className="bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-400"
              >
                <h3 className="font-['Playfair_Display'] text-3xl text-[#2B2520] mb-4">{item.word}</h3>
                <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47] mb-5">{item.detail}</p>
                <p className="font-['Outfit'] text-xs tracking-wider text-[#8B7355] italic">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Manifesto */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="overflow-hidden h-72 sm:h-96 md:h-[520px] relative"
        >
          <img
            src={candlelightImage}
            alt="Sovány by candlelight — warmth and sophistication"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B2520]/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
            <p className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-[#FAF8F3] leading-[1.1] italic max-w-3xl">
              "The aesthetic is warmth. The feeling is arrival. The brand is Sovány."
            </p>
          </div>
        </motion.div>
      </section>

      {/* Bridge to Activations */}
      <section className="py-20 md:py-28 px-4 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease }}
          >
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight mb-6">
              A worldview becomes real<br />through activation.
            </h2>
            <p className="font-['Outfit'] text-lg text-[#6B5A47] max-w-xl mx-auto leading-relaxed mb-10">
              The Endless Summer platform is how this philosophy becomes events, content, demand, and ultimately, enterprise value.
            </p>
            <Link
              to="/activations"
              className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#FAF8F3] bg-[#2B2520] px-8 py-4 hover:bg-[#D4A574] transition-colors duration-300"
            >
              See the Activation Platform →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
