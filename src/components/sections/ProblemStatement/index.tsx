import './ProblemStatement.css';

interface ProblemStatementProps {
  headline: string;
  quotes: string[];
  callout: string;
}

/* New component — no existing component handles a blockquote + callout pattern */
export function ProblemStatementSection({ headline, quotes, callout }: ProblemStatementProps) {
  return (
    <section className="problem">
      <div className="problem__inner">
        <div className="problem__container">
          <h2 className="problem__title">{headline}</h2>
          <div className="problem__quotes">
            {quotes.map((quote, i) => (
              <blockquote key={i} className="problem__quote">
                {quote}
              </blockquote>
            ))}
          </div>
          <p className="problem__callout">{callout}</p>
        </div>
      </div>
    </section>
  );
}
