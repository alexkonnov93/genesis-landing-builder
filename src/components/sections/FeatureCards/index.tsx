import Image from 'next/image';
import type { ComponentProps } from 'react';
import { Card } from '@/components/ui';
import './FeatureCards.css';

type CardProps = ComponentProps<typeof Card>;

interface FeatureCardsProps {
  tag: string;
  headline: string;
  description: string;
  bgSrc: string;
  cards: Omit<CardProps, 'className'>[];
}

export function FeatureCardsSection({ tag, headline, description, bgSrc, cards }: FeatureCardsProps) {
  return (
    <section className="feature-cards">
      <div className="feature-cards__inner">
        <div className="feature-cards__container">
          <div className="feature-cards__header">
            <div className="feature-cards__bg">
              <Image src={bgSrc} alt="" fill sizes="1180px" />
            </div>
            <div className="feature-cards__text">
              <p className="feature-cards__tag">{tag}</p>
              <div className="feature-cards__heading">
                <h2 className="feature-cards__title">{headline}</h2>
                <p className="feature-cards__description">{description}</p>
              </div>
            </div>
          </div>
          <div className="feature-cards__grid">
            {cards.map((card) => (
              <Card key={card.title} {...card} className="feature-cards__card" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
