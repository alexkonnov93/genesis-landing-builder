// 'use client' required for form interactivity
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui';
import './RegistrationForm.css';

interface RegistrationFormProps {
  headline: string;
  fields: string[];
  legalText?: string;
  /** Anchor ID for in-page links */
  anchorId?: string;
}

/* New component — no existing form component in the design system */
export function RegistrationFormSection({ headline, fields, legalText, anchorId }: RegistrationFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="registration" id={anchorId}>
      <div className="registration__inner">
        <div className="registration__container">
          <h2 className="registration__title">{headline}</h2>
          {submitted ? (
            <div className="registration__success">
              <p className="registration__success-text">You&apos;re registered! Check your email for confirmation.</p>
            </div>
          ) : (
            <form className="registration__form" onSubmit={handleSubmit}>
              <div className="registration__fields">
                {fields.map((field, i) => (
                  <div key={i} className="registration__field">
                    <label className="registration__label" htmlFor={`field-${i}`}>
                      {field}
                    </label>
                    <input
                      className="registration__input"
                      id={`field-${i}`}
                      type={field.toLowerCase().includes('email') ? 'email' : 'text'}
                      placeholder={field}
                      required
                    />
                  </div>
                ))}
              </div>
              {legalText && (
                <p className="registration__legal">{legalText}</p>
              )}
              <Button variant="primary" size="lg" type="submit">
                Register Now
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
