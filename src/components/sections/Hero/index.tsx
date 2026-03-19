// 'use client' required for framer-motion animations
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import './Hero.css';

interface HeroCta {
  label: string;
  href: string;
}

interface HeroProps {
  tag: string;
  headline: string;
  subline: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Orange highlight badge above the tag */
  highlight?: string;
  /** Additional line below subline */
  supportingText?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  /** YouTube video ID — renders iframe instead of image when provided */
  videoId?: string;
  /** YouTube start time in seconds */
  videoStart?: number;
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

export function HeroSection({
  tag,
  headline,
  subline,
  imageSrc,
  imageAlt,
  highlight,
  supportingText,
  primaryCta,
  secondaryCta,
  videoId,
  videoStart,
}: HeroProps) {
  const tagWordCount = tag.split(' ').length;
  const headlineWordCount = headline.split(' ').length;
  const headlineDelay = 0.3 + tagWordCount * 0.08;
  const sublineDelay = headlineDelay + headlineWordCount * 0.08 + 0.15;
  const ctaDelay = sublineDelay + 0.3;

  const hasMedia = imageSrc || videoId;

  return (
    <section className="hero">
      <div className={`hero__container${hasMedia ? '' : ' hero__container--full'}`}>
        <div className="hero__content">
          {highlight && (
            <motion.p
              className="hero__highlight"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
            >
              {highlight}
            </motion.p>
          )}
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
            {supportingText && (
              <motion.p
                className="hero__supporting"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={sublineDelay + 0.15}
              >
                {supportingText}
              </motion.p>
            )}
          </div>
          {(primaryCta || secondaryCta) && (
            <motion.div
              className="hero__actions"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={ctaDelay}
            >
              {primaryCta && (
                <Button variant="primary" size="lg" href={primaryCta.href}>
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button variant="tertiary" size="lg" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              )}
            </motion.div>
          )}
        </div>
        {videoId && (
          <motion.div
            className="hero__media"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <iframe
              className="hero__video"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1${videoStart ? `&start=${videoStart}` : ''}`}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        )}
        {!videoId && imageSrc && (
          <motion.div
            className="hero__image"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <Image
              src={imageSrc}
              alt={imageAlt ?? ''}
              fill
              sizes="523px"
              priority
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}
