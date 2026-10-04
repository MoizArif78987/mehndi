import { motion } from "framer-motion";
import { event } from "../data/event";
import { MehndiMotif } from "./MehndiMotif";
import "./Closing.css";

export function Closing() {
  return (
    <footer className="closing">
      <div className="closing__inner">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <MehndiMotif className="closing__motif" />
        </motion.div>

        <motion.p
          className="closing__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          With love & laughter
        </motion.p>

        <motion.h2
          className="closing__name"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {event.host}
        </motion.h2>

        <motion.p
          className="closing__date"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          {event.dateDisplay} · {event.label}
        </motion.p>
      </div>
    </footer>
  );
}
