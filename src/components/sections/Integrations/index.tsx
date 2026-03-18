// 'use client' required for CSS marquee animation with duplicated children
'use client';

import Image from 'next/image';
import './Integrations.css';

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface IntegrationsProps {
  tag: string;
  logos: Logo[];
}

export function IntegrationsSection({ tag, logos }: IntegrationsProps) {
  return (
    <section className="integrations">
      <div className="integrations__inner">
        <p className="integrations__tag">{tag}</p>
        <div className="integrations__track">
          <div className="integrations__logos">
            {logos.map((logo) => (
              <div key={logo.alt} className="integrations__logo">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {logos.map((logo, i) => (
              <div key={`dup-${i}`} className="integrations__logo" aria-hidden="true">
                <Image
                  src={logo.src}
                  alt=""
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
