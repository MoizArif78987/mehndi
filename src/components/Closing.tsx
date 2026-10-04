import { motion } from "framer-motion";
import { event } from "../data/event";
import { MehndiMotif } from "./MehndiMotif";
import { Sparkles } from "./Sparkles";
import "./Closing.css";

export function Closing() {
  return (
    <footer className="closing">
      <Sparkles count={34} />
      <div className="closing__inner">
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ rotate: [0, 12, -10, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <MehndiMotif className="closing__motif" />
          </motion.div>
        </motion.div>

        <motion.p
          className="closing__eyebrow"
          initial={{ opacity: 0, y: 14, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: "0.28em" }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          With love & laughter
        </motion.p>

        <motion.h2
          className="closing__name shimmer-text"
          initial={{ opacity: 0, y: 22, filter: "blur(10px)", scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {event.host}
        </motion.h2>

        <motion.p
          className="closing__date"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {event.dateDisplay} · {event.label}
        </motion.p>
      </div>
    </footer>
  );
}
