import Image from 'next/image';
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
  description: string;
  logos: Logo[];
}

export function DeploymentsSection({ tag, headline, description, logos }: DeploymentsProps) {
  return (
    <section className="deployments">
      <div className="deployments__inner">
        <div className="deployments__header">
          <p className="deployments__tag">{tag}</p>
          <div className="deployments__text">
            <h2 className="deployments__heading">{headline}</h2>
            <p className="deployments__description">{description}</p>
          </div>
        </div>
        <div className="deployments__logos">
          {logos.map((logo) => (
            <div key={logo.alt} className="deployments__logo">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
