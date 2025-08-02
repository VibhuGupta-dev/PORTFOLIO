import React from 'react';
import { motion } from 'framer-motion';
import './whyus.css';

const WhyUs = () => {
  const rightHeadings = [
    "We move fast, build lean, and deliver a working MVP in under a month so you can start validating, not waiting.",
    "We focus on building core features and validating the market early to avoid wasting months on assumptions.",
    "Turn your concepts into functional MVPs quickly with a focus on scalability and user feedback.",
    "We iterate fast based on real feedback, building products that actually solve problems."
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }
    }
  };

  return (
    <section id="whyus" className="section">
      <div className="whyus-content">
        <motion.h2
          className="heading"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Move at Startup Speed
        </motion.h2>

        <motion.h5
          className="heading2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Build fast. Test smart. Launch lean.
        </motion.h5>

        <div className="content">
          {/* LEFT TEXT BOX */}
          <motion.div
            className="left-box"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className='p1'>
              We've helped early-stage founders take ideas to launch in record time. Our process is focused on building what matters, cutting the fluff, and getting your product into the hands of users — fast.
            </p>
            <p className='p1'>
              Whether you're validating a new idea or scaling a prototype, we bring design, tech, and product thinking together to help you move fast and stay lean.
            </p>
            <p className='p1'>
              ~ vibhu gupta
            </p>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            className="right"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
          >
            {rightHeadings.map((text, index) => (
              <motion.div
                key={index}
                className="right-box"
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 16px 36px rgba(0,0,0,0.12)',
                }}
              >
                {text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
