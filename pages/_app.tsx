import type { AppProps } from 'next/app';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Lenis from 'lenis';

import '@/styles/globals.css';

const App = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
    });

    let frame = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="min-h-screen bg-black"
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
