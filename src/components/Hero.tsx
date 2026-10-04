import { motion } from "framer-motion";
import { event } from "../data/event";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { MehndiCorner, MehndiMotif } from "./MehndiMotif";
import "./Hero.css";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__media">
        <ImagePlaceholder
          src={event.images.hero}
          alt="Mehndi celebration"
          label="Hero photo coming soon"
          className="hero__placeholder"
        />
      </div>

      <div className="hero__veil" aria-hidden="true" />

      <MehndiCorner className="hero__corner hero__corner--tl" />
      <MehndiCorner className="hero__corner hero__corner--tr" />
      <MehndiCorner className="hero__corner hero__corner--bl" />
      <MehndiCorner className="hero__corner hero__corner--br" />

      <div className="hero__content">
        <motion.div
          className="hero__motif-wrap"
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <MehndiMotif className="hero__motif" />
        </motion.div>

        <motion.p
          className="hero__event"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {event.label} Night
        </motion.p>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {event.host}
        </motion.h1>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {event.tagline}
        </motion.p>

        <motion.a
          href="#invite"
          className="hero__cta"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          Open invite
        </motion.a>
      </div>
    </header>
  );
}
