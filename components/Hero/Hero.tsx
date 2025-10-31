import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export interface HeroProps {
  title: string;
  subtitle: string;
  videoUrl: string;
  ctas: Array<{ label: string; href: string }>;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, videoUrl, ctas }) => {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center gap-8 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="space-y-6 px-4">
          <motion.p
            className="text-sm uppercase tracking-[0.6em] text-blue-500"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Smart Living 2030
          </motion.p>
          <motion.h1
            className="text-4xl font-bold md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-gray-100 md:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {ctas.map((cta) => (
            <motion.a
              key={cta.label}
              href={cta.href}
              className="rounded-full border border-white/50 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cta.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDownIcon className="h-8 w-8" aria-hidden="true" />
        <span className="sr-only">Cuộn xuống</span>
      </motion.div>
    </section>
  );
};
