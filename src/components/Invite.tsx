import { motion } from "framer-motion";
import { event } from "../data/event";
import { MehndiMotif } from "./MehndiMotif";
import { Sparkles } from "./Sparkles";
import "./Invite.css";

export function Invite() {
  return (
    <section className="section invite" id="invite" aria-labelledby="invite-heading">
      <Sparkles count={24} />
      <div className="section-inner invite__inner">
        <motion.div
          className="invite__intro"
          initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -8, 0], y: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <MehndiMotif className="invite__motif" />
          </motion.div>
          <p className="section-label">Celebration</p>
          <h2 id="invite-heading" className="section-title shimmer-text">
            A night of colour & joy
          </h2>
          <p className="section-copy">
            Join {event.host} for an evening of henna, music, and festivity as we welcome the
            wedding celebrations.
          </p>
        </motion.div>

        <motion.div
          className="invite__date-block"
          initial={{ opacity: 0, scale: 0.92, y: 28 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        >
          <motion.span
            className="marigold-line invite__line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.p
            className="invite__day"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {event.day}
          </motion.p>
          <motion.p
            className="invite__date shimmer-text"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.22 }}
          >
            {event.dateDisplay}
          </motion.p>
          <motion.span
            className="marigold-line invite__line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
