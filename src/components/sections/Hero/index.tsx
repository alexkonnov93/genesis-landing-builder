// 'use client' required for framer-motion animations
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import './Hero.css';

interface HeroProps {
  tag: string;
  headline: string;
  subline: string;
  imageSrc: string;
  imageAlt: string;
}

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 1.2, ease, delay },
  }),
};

function AnimatedWords({
  text,
  className,
  as: Tag = 'p',
  baseDelay = 0,
}: {
  text: string;
  className?: string;
  as?: 'h1' | 'p' | 'span';
  baseDelay?: number;
}) {
  const words = text.split(' ');

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="hero__animated-word"
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.4,
            delay: baseDelay + i * 0.08,
            ease,
          }}
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

export function HeroSection({ tag, headline, subline, imageSrc, imageAlt }: HeroProps) {
  const tagWordCount = tag.split(' ').length;
  const headlineWordCount = headline.split(' ').length;
  const headlineDelay = 0.3 + tagWordCount * 0.08;
  const sublineDelay = headlineDelay + headlineWordCount * 0.08 + 0.15;

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <AnimatedWords
            text={tag}
            className="hero__tag"
            baseDelay={0.3}
          />
          <div className="hero__heading">
            <AnimatedWords
              text={headline}
              className="hero__title"
              as="h1"
              baseDelay={headlineDelay}
            />
            <motion.p
              className="hero__subline"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={sublineDelay}
            >
              {subline}
            </motion.p>
          </div>
        </div>
        <motion.div
          className="hero__image"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="523px"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
