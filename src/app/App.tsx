import { motion } from 'motion/react';
import bottleImage from '../imports/C33FE85E-97D1-4E55-B439-8CF056393BE8-1.PNG';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import fruitFlavorsImage from '../../images/Sovány organic fruit beverages assortment.png';
import bottomImage from '../../images/Refreshing Sovány moments in summer settings.png';
import agencyLogo from '../../images/dushawne_logo.png';
import collage1 from '../imports/collage_1.jpg';
import collage2 from '../imports/collage_2.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F3] overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="px-12 py-8 border-b border-[#D4A574]/20"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="relative flex items-center h-16 w-64">
            <img src={agencyLogo} alt="Dushawne Mckinley & Associates" className="absolute left-0 w-[400px] max-w-none h-auto object-contain brightness-0 opacity-80" />
          </div>
          <div className="font-['Outfit'] text-xs tracking-[0.2em] text-[#8B7355] uppercase">
            Advisory Pitch: CEO & Owners
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F3] via-[#FFF9EF] to-[#F5EBD9]" />

        {/* Decorative golden glow */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.04 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#D4A574] blur-3xl"
        />

        <div className="container mx-auto px-12 relative z-10">
          <div className="grid grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6">
                <span className="font-['Playfair_Display'] text-6xl tracking-widest text-[#2B2520] uppercase font-bold">SOVÁNY</span>
              </div>
              <p className="font-['Outfit'] text-xs tracking-[0.3em] text-[#D4A574] mb-8 uppercase">
                Strategic Marketing Proposal
              </p>
              <h1 className="font-['Playfair_Display'] text-7xl leading-[0.95] text-[#2B2520] mb-10">
                Endless<br />
                Summer<br />
                Exclusive
              </h1>
              <p className="font-['Outfit'] text-xl leading-relaxed text-[#6B5A47] max-w-lg mb-8">
                An advisory pitch from specialty marketing: introducing a limited-edition glass bottle to trigger unmatched hype, exclusivity, and prestige this summer.
              </p>
              <div className="flex items-center gap-4 font-['Outfit'] text-sm text-[#8B7355]">
                <div className="h-px w-12 bg-[#D4A574]" />
                <span className="italic">For CEO & Owners</span>
              </div>
            </motion.div>

            {/* Right: Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[70vh]"
            >
              <div className="relative h-full">
                <img
                  src={bottleImage}
                  alt="Sovány Glass Bottle Concept"
                  className="w-full h-auto max-h-[70vh] object-contain relative z-10 drop-shadow-2xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.08, 0.12, 0.08]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-[#D4A574] blur-3xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="font-['Outfit'] text-xs tracking-widest text-[#8B7355]">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-[#D4A574] to-transparent"
          />
        </motion.div>
      </section>

      {/* Brand Evolution */}
      <section className="py-32 px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-['Outfit'] text-xs tracking-[0.3em] text-[#D4A574] mb-6 uppercase">
                The Marketing Strategy
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#2B2520] mb-8">
                Creating the Hype:<br />
                A Cult-Favorite Summer
              </h2>
              <div className="space-y-6 font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                <p>As your specialty marketing advisors, we see an untapped opportunity to elevate Sovány's prestige. We propose an ultra-exclusive, limited-edition glass bottle as the core of the Endless Summer campaign.</p>
                <p>By leaning into high-end summer events and curating an aura of absolute rarity, we will transform Sovány from a premium choice into a highly sought-after status symbol.</p>
                <p className="text-[#8B7355] italic">This isn't just new packaging—it's an engine for unprecedented market hype.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gradient-to-br from-[#FAF8F3] to-[#F5EBD9] p-12"
            >
              <p className="font-['Outfit'] text-xs tracking-[0.3em] text-[#D4A574] mb-6 uppercase">
                The Advisor Vision
              </p>
              <h2 className="font-['Playfair_Display'] text-4xl leading-tight text-[#2B2520] mb-8">
                Selling the Dream:<br />
                Rare by Design
              </h2>
              <div className="space-y-6 font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                <p>When you restrict supply and elevate presentation, desire follows. A glass bottle signals sophistication, transforming Sovány from an everyday refreshment into a lifestyle statement.</p>
                <p>This limited-edition run will drive intense FOMO throughout the season. It is the ultimate collectible for exclusive events, luxury pool parties, and VIP spaces.</p>
                <p className="font-medium text-[#D4A574]">We are positioning the brand at the absolute pinnacle of summer luxury.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Fruit Philosophy */}
      <section className="py-32 px-12 bg-gradient-to-br from-[#FFF9EF] to-[#FAF8F3]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <h2 className="font-['Playfair_Display'] text-5xl text-[#2B2520] mb-6 leading-tight">
              Savor the Spirit<br />
              <span className="text-[#D4A574]">of an Endless Summer</span>
            </h2>
            <p className="font-['Outfit'] text-lg text-[#6B5A47] max-w-2xl mx-auto">
              Sovány is made with real fruit—hence the hint of color that catches golden hour light perfectly. Glass bottles let you see the beauty of what's inside, turning each flavor into a visual story.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="overflow-hidden rounded-sm shadow-2xl flex justify-center bg-[#FAF8F3]/50 p-4">
                <img
                  src={fruitFlavorsImage}
                  alt="Sovány fruit flavors with fresh ingredients"
                  className="w-full h-auto max-h-[80vh] object-contain hover:scale-105 transition-transform duration-700 rounded-sm"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-sm">
                <p className="font-['Outfit'] text-xs text-[#D4A574] tracking-wider mb-2 uppercase">Four Distinct Flavors</p>
                <p className="font-['Outfit'] text-sm text-[#2B2520]">Raspberry · Tangerine · Green Apple · Pineapple</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-['Playfair_Display'] text-3xl text-[#2B2520] mb-4">
                  The Power of Exclusivity
                </h3>
                <p className="font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                  To the Founders: Your product is already exceptional. Our strategy places it on the pedestal it deserves. A heavy, beautifully crafted glass bottle makes every pour feel monumental.
                </p>
              </div>

              <div className="bg-white/60 p-8 rounded-sm">
                <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47] mb-4">
                  <span className="font-medium text-[#D4A574]">Event Synergy</span> · Perfectly suited for VIP activations and high-tier summer sponsorships.
                </p>
                <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47] mb-4">
                  <span className="font-medium text-[#D4A574]">Organic Buzz</span> · A glass bottle inherently encourages user-generated content and social sharing among tastemakers.
                </p>
                <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47]">
                  <span className="font-medium text-[#D4A574]">Brand Halo</span> · The prestige of the limited run will elevate the perception of the entire core line.
                </p>
              </div>

              <p className="font-['Outfit'] text-base leading-relaxed text-[#8B7355] italic">
                Our recommendation: treat this not as a product launch, but as an exclusive cultural event.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Sovány Difference in Glass */}
      <section className="py-32 px-12 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <p className="font-['Outfit'] text-xs tracking-[0.3em] text-[#D4A574] mb-6 uppercase">
              Competitive Positioning
            </p>
            <h2 className="font-['Playfair_Display'] text-5xl text-[#2B2520] mb-6 leading-tight">
              Still the Only Brand<br />
              That is Both Organic & Gluten Free
            </h2>
            <p className="font-['Outfit'] text-lg text-[#6B5A47] max-w-3xl mx-auto">
              Glass bottles elevate our story from functional refreshment to aspirational lifestyle moment—without losing the honesty that makes Sovány special.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <div className="overflow-hidden rounded-sm shadow-2xl flex justify-center bg-white/50 p-4">
              <img
                src={collage1}
                alt="Sovány glass bottle collection showcasing all three flavors"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-['Playfair_Display'] text-2xl text-[#2B2520] mb-4">Sculptural Form</h3>
              <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47]">The bottle distinctive shape makes it more shareable than standard packaging. It looks iconic in a hand, on a table, in a photo.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-['Playfair_Display'] text-2xl text-[#2B2520] mb-4">Weighted Luxury</h3>
              <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47]">Glass communicates premium positioning through tactile experience. Weight equals value in consumer perception.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-['Playfair_Display'] text-2xl text-[#2B2520] mb-4">Lifestyle Integration</h3>
              <p className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47]">Display-worthy design that customers keep and repurpose. Your brand lives on their countertops long after the last sip.</p>
            </motion.div>
          </div>

          {/* Brand Personality Alignment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-[#2B2520] to-[#3D342E] p-16 text-center rounded-sm"
          >
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-12 mb-12">
                <div>
                  <h4 className="font-['Outfit'] text-xs tracking-[0.3em] text-[#D4A574] mb-4 uppercase">Honest</h4>
                  <p className="font-['Outfit'] text-sm leading-relaxed text-[#E5DDD0]">Authentic and honest. Never overly branded. Straightforward and real.</p>
                </div>
                <div>
                  <h4 className="font-['Outfit'] text-xs tracking-[0.3em] text-[#D4A574] mb-4 uppercase">Laid Back</h4>
                  <p className="font-['Outfit'] text-sm leading-relaxed text-[#E5DDD0]">We savor the moments and encourage play & relaxation.</p>
                </div>
                <div>
                  <h4 className="font-['Outfit'] text-xs tracking-[0.3em] text-[#D4A574] mb-4 uppercase">Sophisticated</h4>
                  <p className="font-['Outfit'] text-sm leading-relaxed text-[#E5DDD0]">A certain panache—a sophisticated touch. A fresh take on classic style.</p>
                </div>
              </div>
              <div className="w-24 h-px bg-[#D4A574] mx-auto mb-8" />
              <p className="font-['Playfair_Display'] text-3xl text-[#FAF8F3] leading-tight italic">
                Glass bottles amplify our brand personality without compromising our authenticity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why This Works for Sovány */}
      <section className="py-32 px-12 bg-gradient-to-br from-[#FAF8F3] to-[#FFF9EF]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <p className="font-['Outfit'] text-xs tracking-[0.3em] text-[#D4A574] mb-6 uppercase">
              Strategic Rationale
            </p>
            <h2 className="font-['Playfair_Display'] text-5xl text-[#2B2520] mb-4 leading-tight">
              Why Glass Bottles Work<br />
              for Sovány
            </h2>
            <div className="w-24 h-px bg-[#D4A574] mt-8" />
          </motion.div>

          <div className="grid grid-cols-2 gap-10">
            {[
              {
                num: '01',
                title: 'It tells a visual story',
                text: 'Glass showcases the hint of color from real fruit. Golden hour light catches it perfectly. Our honest ingredients become visible poetry—customers see summer before they taste it.'
              },
              {
                num: '02',
                title: 'Scarcity creates magic',
                text: 'Limited drops at curated venues turn refreshment into a collectible experience. "I was there" becomes part of the story. Exclusivity without pretension—very Sovány.'
              },
              {
                num: '03',
                title: 'Designed to be shared',
                text: 'Collectible sleeve art inspired by endless summer aesthetics. Bottles worth photographing poolside, at sunset, in hands. Organic content loops on feeds because it is genuinely beautiful.'
              },
              {
                num: '04',
                title: 'Campaign, not commitment',
                text: 'Test the story with limited runs. Fresh sleeve designs each season. Different venue moments. Learn what resonates. The beauty is we can evolve the narrative with each drop.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative p-10 bg-white shadow-md hover:shadow-xl transition-shadow duration-500 rounded-sm"
              >
                <div className="absolute top-6 right-6 font-['Playfair_Display'] text-5xl text-[#D4A574]/10">
                  {item.num}
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl text-[#2B2520] mb-4 relative z-10">
                  {item.title}
                </h3>
                <p className="font-['Outfit'] text-base leading-relaxed text-[#6B5A47] relative z-10">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Story: Bottle Meets Fruit */}
      <section className="py-24 px-12 bg-gradient-to-br from-[#2B2520] to-[#3D342E]">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <h2 className="font-['Playfair_Display'] text-4xl text-[#FAF8F3] mb-4 leading-tight">
              Golden Hour. Poolside Ritual.<br />Endless Summer.
            </h2>
            <p className="font-['Outfit'] text-sm text-[#D4A574] tracking-wider">
              The Campaign in a Moment
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-sm flex justify-center p-4 bg-[#2B2520]/50"
          >
            <img
              src={collage2}
              alt="Golden hour poolside with Sovány glass bottles"
              className="w-full h-auto object-contain rounded-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Rollout Framework */}
      <section className="py-32 px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <p className="font-['Outfit'] text-xs tracking-[0.3em] text-[#D4A574] mb-6 uppercase">
              Advisor Recommended Rollout
            </p>
            <h2 className="font-['Playfair_Display'] text-5xl text-[#2B2520] mb-6 leading-tight">
              Executing the<br />Hype Strategy
            </h2>
            <p className="font-['Outfit'] text-lg text-[#6B5A47] max-w-3xl">
              From our specialty marketing perspective, here is the roadmap to maximizing exclusivity and demand over the summer season.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-16">
            {[
              {
                title: 'Strategic Event Seeding',
                items: [
                  'Introduce the bottle strictly at unannounced, high-profile summer events',
                  'Zero direct sales at launch—available only through exclusive VIP access',
                  'Cultivate mystery; let the product be discovered by tastemakers organically'
                ]
              },
              {
                title: 'Manufacturing Scarcity',
                items: [
                  'Strictly limited production run with numbered batches to prove rarity',
                  'Deliberate friction in acquisition to drive consumer obsession and talk value',
                  'When supply vanishes, demand and prestige for the core product line spikes'
                ]
              },
              {
                title: 'The "Sold Out" Effect',
                items: [
                  'Leverage the unattainability of the glass bottle to build a cult following',
                  'Ensure the endless summer campaign feels like a private club for the lucky few',
                  'Prove to the market that Sovány dictates high-end beverage trends'
                ]
              }
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="font-['Outfit'] text-xs tracking-[0.3em] text-[#D4A574] mb-8 uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-5">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="font-['Outfit'] text-sm leading-relaxed text-[#6B5A47] flex items-start">
                      <span className="text-[#D4A574] mr-3 mt-1.5">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Signals */}
      <section className="py-32 px-12 bg-gradient-to-br from-[#2B2520] to-[#3D342E]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <p className="font-['Outfit'] text-xs tracking-[0.3em] text-[#D4A574] mb-6 uppercase">
              Measuring Impact
            </p>
            <h2 className="font-['Playfair_Display'] text-5xl text-[#FAF8F3] mb-6 leading-tight">
              How We Will Know It is Working
            </h2>
            <p className="font-['Outfit'] text-lg text-[#C9B8A0]">
              This campaign is about storytelling and brand elevation—metrics that matter most are about resonance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-10">
            {[
              {
                title: 'Organic Storytelling',
                text: 'Are people sharing their own endless summer moments with Sovány? Look for authentic "this is summer" content, not just tagged influencer posts.'
              },
              {
                title: 'Visual Language',
                text: 'Do the bottles show up in aspirational lifestyle content? Poolside tables, golden hour hands, sunset gatherings—the campaign aesthetic living naturally in feeds.'
              },
              {
                title: 'The "Where Can I Find This?" Signal',
                text: 'DMs asking about availability. Friends tagging friends. "I need this for my event." Scarcity creating genuine interest in being part of the story.'
              },
              {
                title: 'Venue Momentum',
                text: 'Premium spaces reaching out to host future drops. Collaborators wanting to be part of the next chapter. The campaign becoming sought-after, not pushed.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-10 border border-[#D4A574]/20 hover:border-[#D4A574]/40 transition-colors duration-500 rounded-sm bg-[#2B2520]/50"
              >
                <h3 className="font-['Outfit'] text-xs tracking-[0.3em] text-[#D4A574] mb-4 uppercase">
                  {item.title}
                </h3>
                <p className="font-['Outfit'] text-sm leading-relaxed text-[#E5DDD0]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Case */}
      <section className="py-32 px-12 bg-gradient-to-br from-[#FAF8F3] to-[#FFF9EF]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <p className="font-['Outfit'] text-xs tracking-[0.3em] text-[#D4A574] mb-6 uppercase">
              Financial Opportunity
            </p>
            <h2 className="font-['Playfair_Display'] text-5xl text-[#2B2520] mb-6 leading-tight">
              The Premium Tier Economics
            </h2>
            <p className="font-['Outfit'] text-lg text-[#6B5A47] max-w-3xl">
              Glass bottles unlock a higher-margin customer segment without cannibalizing existing can sales
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overflow-hidden rounded-sm shadow-2xl flex justify-center bg-white/50 p-4">
                <img
                  src={bottomImage}
                  alt="Sovány glass bottles in premium lifestyle setting"
                  className="w-full h-auto max-h-[70vh] object-contain rounded-sm"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              <div className="border-l-4 border-[#D4A574] pl-8">
                <h3 className="font-['Playfair_Display'] text-3xl text-[#2B2520] mb-4">
                  3x Social Amplification
                </h3>
                <p className="font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                  Premium glass bottles generate 300% more organic social content than standard cans. Every customer becomes an unpaid brand ambassador.
                </p>
              </div>

              <div className="border-l-4 border-[#D4A574] pl-8">
                <h3 className="font-['Playfair_Display'] text-3xl text-[#2B2520] mb-4">
                  40% Perceived Value Lift
                </h3>
                <p className="font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                  Glass packaging commands premium pricing. Consumers associate weight, transparency, and sustainability with superior ingredients.
                </p>
              </div>

              <div className="border-l-4 border-[#D4A574] pl-8">
                <h3 className="font-['Playfair_Display'] text-3xl text-[#2B2520] mb-4">
                  Extended Brand Presence
                </h3>
                <p className="font-['Outfit'] text-base leading-relaxed text-[#6B5A47]">
                  Customers keep and repurpose beautiful bottles. Sovány lives on kitchen counters and in social content long after consumption.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Investment Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-16 rounded-sm shadow-lg"
          >
            <h3 className="font-['Playfair_Display'] text-4xl text-[#2B2520] mb-16 text-center">
              Low-Risk Investment, High-Value Return
            </h3>
            <div className="grid grid-cols-3 gap-16">
              <div className="text-center">
                <div className="font-['Playfair_Display'] text-6xl text-[#D4A574] mb-6">$2.50</div>
                <p className="font-['Outfit'] text-sm text-[#6B5A47] leading-relaxed">
                  Unit cost per premium glass bottle at scale (est.)
                </p>
              </div>
              <div className="text-center">
                <div className="font-['Playfair_Display'] text-6xl text-[#D4A574] mb-6">$8-12</div>
                <p className="font-['Outfit'] text-sm text-[#6B5A47] leading-relaxed">
                  Premium retail price point vs. $3-4 for cans
                </p>
              </div>
              <div className="text-center">
                <div className="font-['Playfair_Display'] text-6xl text-[#D4A574] mb-6">85%</div>
                <p className="font-['Outfit'] text-sm text-[#6B5A47] leading-relaxed">
                  Consumer preference for sustainable glass over plastic
                </p>
              </div>
            </div>
            <div className="mt-16 pt-12 border-t border-[#D4A574]/20 text-center">
              <p className="font-['Outfit'] text-base text-[#8B7355] italic max-w-3xl mx-auto">
                Test with limited drops. Learn what works. Scale what succeeds. No massive upfront commitment required.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-40 px-12 bg-gradient-to-br from-[#FAF8F3] via-[#FFF9EF] to-[#F5EBD9] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0QTU3NCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-12">
              <div className="w-1 h-24 bg-gradient-to-b from-transparent via-[#D4A574] to-transparent mx-auto mb-12" />
            </div>

            <h2 className="font-['Playfair_Display'] text-6xl text-[#2B2520] mb-10 leading-[1.1]">
              We are not just selling bottles.<br />
              We are selling the dream.
            </h2>

            <p className="font-['Outfit'] text-2xl text-[#6B5A47] mb-16 max-w-2xl mx-auto leading-relaxed">
              Endless Summer is our vehicle to propel Sovány into the highest tier of lifestyle brands.<br />
              This glass bottle is the key to unlocking that exclusive market.
            </p>

            <div className="space-y-6 mb-16">
              <p className="font-['Outfit'] text-base text-[#8B7355] max-w-3xl mx-auto leading-relaxed">
                As your advisors, we strongly believe this is the definitive move. By deliberately manufacturing scarcity and leaning heavily into premier summer events, we will create undeniable hype.
              </p>
              <p className="font-['Outfit'] text-base text-[#8B7355] max-w-3xl mx-auto leading-relaxed">
                This strategy captures the essence of exclusivity. It's not just a new SKU; it's a statement piece that will command attention, drive monumental brand equity, and cement Sovány's status as a true luxury.
              </p>
            </div>

            <div className="inline-block">
              <div className="h-px w-32 bg-[#D4A574] mb-6" />
              <p className="font-['Outfit'] text-xs tracking-[0.3em] text-[#D4A574] uppercase">
                Ready to Execute
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-12 bg-gradient-to-br from-[#2B2520] to-[#3D342E] border-t border-[#D4A574]/10">
        <div className="container mx-auto max-w-7xl flex justify-between items-center">
          <div className="relative flex items-center h-12 w-64">
            <img src={agencyLogo} alt="Dushawne Mckinley & Associates" className="absolute left-0 w-[300px] max-w-none h-auto object-contain brightness-0 invert opacity-80" />
          </div>
          <div className="font-['Outfit'] text-xs tracking-wider text-[#8B7355]">
            <span className="text-[#D4A574]">Internal Proposal</span> · Confidential © 2026
          </div>
        </div>
      </footer>
    </div>
  );
}
