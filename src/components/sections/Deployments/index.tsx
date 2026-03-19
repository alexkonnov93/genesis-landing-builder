// 'use client' required for framer-motion animations
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import './Deployments.css';

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface DeploymentsProps {
  tag: string;
  headline: string;
  description?: string;
  logos: Logo[];
}

const ease = [0.25, 0.1, 0.25, 1] as const;

const logoVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.6, ease, delay: 0.15 + i * 0.12 },
  }),
};

export function DeploymentsSection({ tag, headline, description, logos }: DeploymentsProps) {
  return (
    <section className="deployments">
      <div className="deployments__inner">
        <div className="deployments__header">
          <p className="deployments__tag">{tag}</p>
          <div className="deployments__text">
            <h2 className="deployments__heading">{headline}</h2>
            {description && <p className="deployments__description">{description}</p>}
          </div>
        </div>
        <div className="deployments__logos">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.alt}
              className="deployments__logo"
              variants={logoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={i}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
