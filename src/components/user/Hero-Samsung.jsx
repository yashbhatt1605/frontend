import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="cx-hero">
    <div className="cx-hero-content text-white">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <div className="cx-eyebrow">CarXpress · The art of driving</div>
        <h1 className="cx-hero-title">
          Engineered for <span>the extraordinary.</span>
        </h1>
        <p className="cx-hero-copy">
          Discover exceptional cars and performance motorcycles, selected for those who see every journey as an experience.
        </p>
        <div className="cx-hero-actions">
          <Link to="/cars" className="cx-btn cx-btn-primary">Explore the collection <span aria-hidden="true">↗</span></Link>
          <Link to="/bikes" className="cx-btn cx-btn-outline">Discover motorcycles</Link>
        </div>
        <div className="cx-hero-meta">
          <div><strong>01</strong><span>Curated vehicles</span></div>
          <div><strong>02</strong><span>Iconic performance</span></div>
          <div><strong>03</strong><span>Made for the drive</span></div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
