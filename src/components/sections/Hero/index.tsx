import Image from 'next/image';
import './Hero.css';

interface HeroProps {
  tag: string;
  headline: string;
  subline: string;
  imageSrc: string;
  imageAlt: string;
}

export function HeroSection({ tag, headline, subline, imageSrc, imageAlt }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__tag">{tag}</p>
          <div className="hero__heading">
            <h1 className="hero__title">{headline}</h1>
            <p className="hero__subline">{subline}</p>
          </div>
        </div>
        <div className="hero__image">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="523px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
