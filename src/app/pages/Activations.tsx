import { motion } from 'motion/react';
import { Link } from 'react-router';
import collage1 from '../../imports/collage_1.jpg';
import actionImage from '../../../images/Sparkling Sovány fruit beverages in action.png';
import soireeImage from '../../../images/Sovány drinks at an elegant soirée.png';

const ease = [0.22, 1, 0.36, 1] as const;

const formats = [
  {
    icon: '◆',
    title: 'Hospitality Experiences',
    desc: 'Curated venue partnerships. VIP dinners. Exclusive poolside series. The brand becomes the host, not the sponsor.',
  },
  {
    icon: '◇',
    title: 'Lifestyle Moments',
    desc: 'Sunset gatherings. Golden hour events. Intimate editorial productions that feel personal, not promotional.',
  },
  {
    icon: '◈',
    title: 'Creator Integration',
    desc: 'Selective influencer embeds who become genuine participants, not paid promoters. The content is authentic because the experience was real.',
  },
  {
    icon: '◉',
    title: 'Sampling & Discovery',
    desc: 'Strategic trial moments at high-reach touchpoints. Retail support events. The first sip is a production, not a giveaway.',
  },
];

const months = [
  { month: 'Jan – Feb', theme: 'The Warmup', tone: 'Quiet prestige. Early adopters only.' },
  { month: 'Mar – Apr', theme: 'The Rise', tone: 'Creator seeding. Editorial launches.' },
  { month: 'May', theme: 'Opening Chapter', tone: 'First major activation. Poolside debut.' },
  { month: 'June', theme: 'Solstice', tone: 'Peak cultural moment. Press events.' },
  { month: 'July', theme: 'The Height', tone: 'Flagship events. VIP experiences.' },
  { month: 'Aug', theme: 'Golden Hour', tone: 'Aspirational imagery season. UGC peaks.' },
  { month: 'Sept', theme: 'The Exhale', tone: 'Transition moment. Extended brand halo.' },
  { month: 'Oct – Dec', theme: 'The Archive', tone: 'Content recirculation. Next season seeds.' },
];

export default function Activations() {
  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative py-28 md:py-40 px-4 sm:px-12 bg-[#FAF8F3] overflow-hidden">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.04 }}
          transition={{ duration: 2, ease }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#D4A574] rounded-full blur-3xl pointer-events-none"
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-['Outfit'] text-[10px] tracking-[0.35em] text-[#D4A574] uppercase mb-8"
          >
            The Activation Platform
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl text-[#2B2520] leading-[1.05] mb-8"
          >
            This is not<br />event marketing.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="font-['Outfit'] text-xl text-[#6B5A47] max-w-2xl leading-relaxed"
          >
            This is world-building. Every activation is a chapter in an ongoing brand narrative — one that produces content, creates desire, and builds demand at the same time.
          </motion.p>
        </div>
      </section>

      {/* Full-width visual */}
      <section className="h-72 sm:h-96 md:h-[480px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="w-full h-full"
        >
          <img
            src={collage1}
            alt="Sovány activation — glass bottle collection"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Chapter Structure */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease }}
            className="mb-14"
          >
            <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-5">
              Annual Chapter Structure
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight max-w-xl">
              Twelve months. One continuous story arc.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#D4A574]/10">
            {months.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.08, ease }}
                className="bg-[#FAF8F3] p-6 sm:p-8 hover:bg-white transition-colors duration-300"
              >
                <p className="font-['Outfit'] text-[9px] tracking-[0.25em] text-[#D4A574] uppercase mb-3">
                  {m.month}
                </p>
                <h3 className="font-['Playfair_Display'] text-xl text-[#2B2520] mb-2">{m.theme}</h3>
                <p className="font-['Outfit'] text-xs leading-relaxed text-[#8B7355]">{m.tone}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-gradient-to-br from-[#2B2520] to-[#3D342E]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease }}
            className="mb-14"
          >
            <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-5">
              Activation Formats
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#FAF8F3] leading-tight">
              Four formats.<br />Infinite moments.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {formats.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease }}
                className="border border-[#D4A574]/20 p-8 sm:p-10 hover:border-[#D4A574]/50 transition-colors duration-400 group"
              >
                <span className="text-[#D4A574] text-xl mb-4 block">{f.icon}</span>
                <h3 className="font-['Playfair_Display'] text-2xl text-[#FAF8F3] mb-3 group-hover:text-[#D4A574] transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="font-['Outfit'] text-sm leading-relaxed text-[#C9B8A0]">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Capture */}
      <section className="py-20 md:py-32 px-4 sm:px-12 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease }}
              className="overflow-hidden rounded-sm shadow-xl h-80 sm:h-[460px]"
            >
              <img
                src={actionImage}
                alt="Sovány beverages in action at an event"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
            >
              <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-6">
                Content Capture Philosophy
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight mb-8">
                Every event is a content production.
              </h2>
              <div className="space-y-6 font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                <p>
                  The activation is the set. The guests are the cast. The brand team oversees the production. What emerges is not advertising — it is documentation of a world people actually want to inhabit.
                </p>
                <p>
                  Film, photography, social moments, press coverage, organic UGC — all of it originates from the same root event. One great night can produce months of compelling, authentic content.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#D4A574]/20 pt-10">
                {[
                  { label: 'Film', sub: 'Documentary-style brand films from each chapter' },
                  { label: 'Photo', sub: 'Editorial-grade imagery for all channels' },
                  { label: 'Social', sub: 'Native content designed for organic amplification' },
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
          </div>
        </div>
      </section>

      {/* The Story Arc */}
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
              The Story Arc
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#2B2520] leading-tight max-w-2xl mx-auto">
              Each activation builds on the last. Nothing stands alone.
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#D4A574]/20 hidden md:block" />

            {[
              {
                phase: 'Seed',
                text: 'Introduce the brand into high-value environments at low volume. Create the myth before the market.',
                side: 'left',
              },
              {
                phase: 'Grow',
                text: 'Monthly activations build momentum. Content compounds. Awareness expands. The story earns its audience.',
                side: 'right',
              },
              {
                phase: 'Peak',
                text: 'Flagship summer events. Peak cultural presence. The brand becomes the word-of-mouth.',
                side: 'left',
              },
              {
                phase: 'Archive',
                text: 'The year becomes a canon. Content assets become evergreen. The mythology is set for the next chapter.',
                side: 'right',
              },
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: phase.side === 'left' ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, delay: idx * 0.1, ease }}
                className={`flex ${phase.side === 'right' ? 'md:justify-end' : ''} mb-10`}
              >
                <div className="md:max-w-[44%] p-8 bg-[#FAF8F3] hover:bg-[#FFF9EF] transition-colors duration-300">
                  <p className="font-['Outfit'] text-[10px] tracking-[0.3em] text-[#D4A574] uppercase mb-3">
                    Phase
                  </p>
                  <h3 className="font-['Playfair_Display'] text-3xl text-[#2B2520] mb-3">{phase.phase}</h3>
                  <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47]">{phase.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to Culture Engine */}
      <section
        className="relative py-24 px-4 sm:px-12 overflow-hidden"
        style={{ backgroundImage: `url(${soireeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#2B2520]/75" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease }}
          >
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl text-[#FAF8F3] leading-tight mb-6">
              Activations create more than moments.
            </h2>
            <p className="font-['Outfit'] text-lg text-[#C9B8A0] max-w-xl mx-auto leading-relaxed mb-10">
              They create a demand engine. See how the Culture Engine connects activation to enterprise value.
            </p>
            <Link
              to="/culture-engine"
              className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#2B2520] bg-[#D4A574] px-8 py-4 hover:bg-[#FAF8F3] transition-colors duration-300"
            >
              The Culture Engine →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
