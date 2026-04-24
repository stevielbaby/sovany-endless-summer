import { motion } from 'motion/react';
import { Link } from 'react-router';
import { advisoryBoard, managementTeam, type TeamMember } from '../data/sovanyPeople';

const ease = [0.22, 1, 0.36, 1] as const;

function PersonGrid({ members, startDelay = 0 }: { members: TeamMember[]; startDelay?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
      {members.map((person, idx) => (
        <motion.article
          key={person.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: startDelay + idx * 0.06, ease }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#D4A574]/10 hover:border-[#D4A574]/25 transition-colors duration-300"
        >
          <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl text-[#2B2520] mb-2">{person.name}</h3>
          <p className="font-['Outfit'] text-[10px] sm:text-[11px] tracking-[0.2em] text-[#D4A574] uppercase mb-4">
            {person.role}
          </p>
          <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47]">{person.bio}</p>
        </motion.article>
      ))}
    </div>
  );
}

export default function Partners() {
  return (
    <div className="overflow-x-hidden bg-[#FAF8F3]">
      <section className="py-16 sm:py-24 md:py-28 px-4 sm:px-12">
        <div className="max-w-5xl mx-auto text-center mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-['Outfit'] text-[10px] tracking-[0.35em] text-[#D4A574] uppercase mb-6"
          >
            People
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl text-[#2B2520] leading-tight mb-6"
          >
            Partners & team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease }}
            className="font-['Outfit'] text-base sm:text-lg text-[#6B5A47] max-w-2xl mx-auto leading-relaxed"
          >
            Management and advisors behind Sovány — operators on the shelf, discipline in the model, and strategic
            judgment for the next chapters.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto space-y-20 sm:space-y-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease }}
              className="text-center mb-10 sm:mb-12"
            >
              <p className="font-['Outfit'] text-[10px] tracking-[0.35em] text-[#D4A574]/90 uppercase mb-4">
                People
              </p>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-[#2B2520] leading-tight mb-4">
                Management team
              </h2>
              <p className="font-['Outfit'] text-sm sm:text-base text-[#6B5A47] max-w-2xl mx-auto leading-relaxed">
                The operators behind Sovány — execution on the shelf, discipline in the model, and the day-to-day
                leadership scaling the brand.
              </p>
            </motion.div>
            <PersonGrid members={managementTeam} />
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease }}
              className="text-center mb-10 sm:mb-12"
            >
              <p className="font-['Outfit'] text-[10px] tracking-[0.35em] text-[#D4A574]/90 uppercase mb-4">
                People
              </p>
              <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl text-[#2B2520] leading-tight mb-4">
                Advisory board
              </h2>
              <p className="font-['Outfit'] text-sm sm:text-base text-[#6B5A47] max-w-2xl mx-auto leading-relaxed">
                Advisors who bring category relationships, capital markets judgment, and operating experience at scale
                — complementing the management team on the next chapters.
              </p>
            </motion.div>
            <PersonGrid members={advisoryBoard} startDelay={0.05} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-6xl mx-auto mt-16 sm:mt-20 pt-12 border-t border-[#D4A574]/15 flex flex-wrap gap-4 justify-center"
        >
          <Link
            to="/leadership"
            className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#2B2520] border border-[#D4A574]/40 px-6 py-3 hover:border-[#D4A574] hover:bg-white transition-colors duration-300"
          >
            Leadership narrative →
          </Link>
          <Link
            to="/investment"
            className="inline-block font-['Outfit'] text-xs tracking-[0.2em] uppercase text-[#FAF8F3] bg-[#2B2520] px-6 py-3 hover:bg-[#3D342E] transition-colors duration-300"
          >
            Investment →
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
