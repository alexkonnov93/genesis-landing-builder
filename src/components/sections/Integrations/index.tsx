import Image from 'next/image';
import './Integrations.css';

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
  opacity?: 'dim' | 'faded';
}

interface IntegrationsProps {
  tag: string;
  bgSrc: string;
  logos: Logo[];
}

export function IntegrationsSection({ tag, bgSrc, logos }: IntegrationsProps) {
  return (
    <section className="integrations">
      <Image
        className="integrations__bg"
        src={bgSrc}
        alt=""
        fill
        sizes="100vw"
      />
      <div className="integrations__inner">
        <p className="integrations__tag">{tag}</p>
        <div className="integrations__logos">
          {logos.map((logo) => {
            const modifier = logo.opacity === 'dim'
              ? ' integrations__logo--dim'
              : logo.opacity === 'faded'
                ? ' integrations__logo--faded'
                : '';
            return (
              <div key={logo.alt} className={`integrations__logo${modifier}`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
