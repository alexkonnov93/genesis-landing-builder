import Image from 'next/image';
import './SocialProof.css';

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface SocialProofProps {
  label: string;
  logos: Logo[];
}

/* New component — no existing component handles a simple centered label + logo row
   without the heading/description structure of DeploymentsSection */
export function SocialProofSection({ label, logos }: SocialProofProps) {
  return (
    <section className="social-proof">
      <div className="social-proof__inner">
        <p className="social-proof__label">{label}</p>
        <div className="social-proof__logos">
          {logos.map((logo, i) => (
            <div key={i} className="social-proof__logo">
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
