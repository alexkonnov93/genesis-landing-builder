import Image from 'next/image';
import { Button } from '@/components/ui';
import './NavBar.css';

interface NavLink {
  label: string;
  href: string;
}

interface NavAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'tertiary' | 'ghost';
}

interface NavBarProps {
  links: NavLink[];
  actions: NavAction[];
}

export function NavBar({ links, actions }: NavBarProps) {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a href="/" className="navbar__logo">
          <Image
            src="/images/logo-computing.svg"
            alt="Genesis Computing"
            width={149}
            height={54}
            priority
          />
        </a>
        <div className="navbar__links">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="navbar__actions">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            size="sm"
            href={action.href}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}
