import Image from 'next/image';
import { Button } from '@/components/ui';
import './Cta.css';

interface CtaAction {
  label: string;
  href: string;
  variant: 'primary' | 'tertiary';
}

interface CtaProps {
  headline: string;
  description: string;
  bgSrc: string;
  actions: CtaAction[];
}

export function CtaSection({ headline, description, bgSrc, actions }: CtaProps) {
  return (
    <section className="cta">
      <div className="cta__inner">
        <div className="cta__container">
          <div className="cta__bg">
            <Image src={bgSrc} alt="" fill sizes="1180px" />
          </div>
          <div className="cta__content">
            <div className="cta__text">
              <h2 className="cta__title">{headline}</h2>
              <p className="cta__description">{description}</p>
            </div>
            <div className="cta__actions">
              {actions.map((action) => (
                <Button key={action.label} variant={action.variant} size="lg" href={action.href}>
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
