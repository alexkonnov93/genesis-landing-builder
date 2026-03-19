// 'use client' required for interactive tab switching state
'use client';

import { useState } from 'react';
import './TabbedContent.css';

interface Tab {
  title: string;
  description: string;
}

interface TabbedContentProps {
  headline: string;
  tabs: Tab[];
}

/* New component — no existing tabbed/toggle component in the design system */
export function TabbedContentSection({ headline, tabs }: TabbedContentProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="tabbed">
      <div className="tabbed__inner">
        <div className="tabbed__container">
          <h2 className="tabbed__title">{headline}</h2>
          <div className="tabbed__tabs">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`tabbed__tab${i === activeTab ? ' tabbed__tab--active' : ''}`}
                type="button"
                onClick={() => setActiveTab(i)}
              >
                <span className="tabbed__tab-number">0{i + 1}</span>
                <span className="tabbed__tab-title">{tab.title}</span>
              </button>
            ))}
          </div>
          <div className="tabbed__panel">
            <p className="tabbed__panel-title">{tabs[activeTab].title}</p>
            <p className="tabbed__panel-description">{tabs[activeTab].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
