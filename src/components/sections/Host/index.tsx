import './Host.css';

interface HostProps {
  eyebrow: string;
  headline: string;
  name: string;
  title: string;
  bio: string;
}

/* New component — no existing bio/profile section in the design system */
export function HostSection({ eyebrow, headline, name, title, bio }: HostProps) {
  return (
    <section className="host">
      <div className="host__inner">
        <div className="host__container">
          <div className="host__header">
            <p className="host__eyebrow">{eyebrow}</p>
            <h2 className="host__headline">{headline}</h2>
          </div>
          <div className="host__profile">
            <div className="host__info">
              <p className="host__name">{name}</p>
              <p className="host__title">{title}</p>
            </div>
            <div className="host__bio">
              {bio.split('\n\n').map((paragraph, i) => (
                <p key={i} className="host__bio-text">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
