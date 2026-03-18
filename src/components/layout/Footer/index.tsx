import Image from 'next/image';
import { DividerSection } from '@/components/sections';
import './Footer.css';

interface SocialLink {
  icon: string;
  alt: string;
  href: string;
}

interface LegalLink {
  label: string;
  href: string;
}

interface FooterProps {
  address: string;
  socials: SocialLink[];
  copyright: string;
  legalLinks: LegalLink[];
}

export function Footer({ address, socials, copyright, legalLinks }: FooterProps) {
  return (
    <footer className="footer">
      <DividerSection height={100} />
      <div className="footer__inner">
        <div className="footer__main">
          <div className="footer__bg">
            <Image src="/images/footer/bg.png" alt="" fill sizes="1180px" />
          </div>
          <div className="footer__container">
            <div className="footer__content">
              <p className="footer__address">{address}</p>
              <div className="footer__socials">
                {socials.map((social) => (
                  <a key={social.alt} href={social.href} className="footer__social-link" aria-label={social.alt}>
                    <Image src={social.icon} alt={social.alt} width={20} height={20} />
                  </a>
                ))}
              </div>
            </div>
            <div className="footer__bar">
              <p className="footer__copyright">{copyright}</p>
              <div className="footer__legal">
                {legalLinks.map((link) => (
                  <a key={link.label} href={link.href} className="footer__legal-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
