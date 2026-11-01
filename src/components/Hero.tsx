import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { event } from "../data/event";
import { MehndiCorner, MehndiMotif } from "./MehndiMotif";
import { Sparkles } from "./Sparkles";
import "./Hero.css";

const springSoft = { stiffness: 70, damping: 26, mass: 0.55, restDelta: 0.001 };

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const progress = useSpring(scrollYProgress, springSoft);
  const opacity = useTransform(progress, [0, 0.85], [1, 0.15]);

  return (
    <header className="hero" ref={ref}>
      <motion.div className="hero__veil" aria-hidden="true" style={{ opacity }} />
      <Sparkles count={50} />

      <motion.div
        className="hero__corner hero__corner--tl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <MehndiCorner />
      </motion.div>
      <motion.div
        className="hero__corner hero__corner--tr"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <MehndiCorner />
      </motion.div>
      <motion.div
        className="hero__corner hero__corner--bl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <MehndiCorner />
      </motion.div>
      <motion.div
        className="hero__corner hero__corner--br"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <MehndiCorner />
      </motion.div>

      <motion.div className="hero__content" style={{ opacity }}>
        <motion.div
          className="hero__motif-wrap"
          initial={{ opacity: 0, scale: 0.7, rotate: -24 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ rotate: [0, 8, -6, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <MehndiMotif className="hero__motif" />
          </motion.div>
        </motion.div>

        <motion.p
          className="hero__event shimmer-text shimmer-text--light"
          initial={{ opacity: 0, y: 18, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.32em" }}
          transition={{ duration: 0.95, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {event.label} Night
        </motion.p>

        <motion.p
          className="hero__hosts"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {event.hosts}
        </motion.p>

        <motion.p
          className="hero__invite"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {event.inviteLine}
        </motion.p>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.15, delay: 1.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {event.son}
        </motion.h1>

        <motion.a
          href="#invite"
          className="hero__cta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 2.05, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, letterSpacing: "0.28em" }}
          whileTap={{ scale: 0.97 }}
        >
          Open invite
        </motion.a>
      </motion.div>
    </header>
  );
}
