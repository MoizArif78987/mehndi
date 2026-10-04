import { motion } from "framer-motion";
import { Hero } from "./components/Hero";
import { Invite } from "./components/Invite";
import { Closing } from "./components/Closing";
import { PageIntro } from "./components/PageIntro";
import { Sparkles } from "./components/Sparkles";
import { SmoothScroll } from "./components/SmoothScroll";

export default function App() {
  return (
    <>
      <SmoothScroll />
      <PageIntro label="Mehndi" />
      <Sparkles count={32} className="sparkles--fixed" />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Hero />
        <Invite />
        <Closing />
      </motion.main>
    </>
  );
}
