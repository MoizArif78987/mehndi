import { motion } from "framer-motion";
import { event } from "../data/event";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { MehndiMotif } from "./MehndiMotif";
import "./Invite.css";

export function Invite() {
  return (
    <section className="section invite" id="invite" aria-labelledby="invite-heading">
      <div className="section-inner invite__inner">
        <motion.div
          className="invite__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <MehndiMotif className="invite__motif" />
          <p className="section-label">Celebration</p>
          <h2 id="invite-heading" className="section-title">
            A night of colour & joy
          </h2>
          <p className="section-copy">
            Join {event.host} for an evening of henna, music, and festivity as we welcome the
            wedding celebrations.
          </p>
        </motion.div>

        <motion.div
          className="invite__date-block"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
        >
          <motion.span
            className="marigold-line invite__line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="invite__day">{event.day}</p>
          <p className="invite__date">{event.dateDisplay}</p>
          <motion.span
            className="marigold-line invite__line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          />
        </motion.div>

        <div className="invite__gallery">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImagePlaceholder
              src={event.images.portrait}
              alt={event.host}
              label="Portrait photo"
              aspect="4 / 5"
              className="invite__photo"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <ImagePlaceholder
              src={event.images.mehndi}
              alt="Mehndi atmosphere"
              label="Mehndi photo"
              aspect="4 / 5"
              className="invite__photo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
