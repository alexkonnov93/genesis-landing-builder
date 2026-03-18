import Image from 'next/image';
import './ContentListing.css';

interface ContentItem {
  tag: string;
  title: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
}

interface ContentListingProps {
  headline: string;
  items: ContentItem[];
}

export function ContentListingSection({ headline, items }: ContentListingProps) {
  return (
    <section className="content-listing">
      <div className="content-listing__inner">
        <div className="content-listing__container">
          <div className="content-listing__header">
            <h2 className="content-listing__title">{headline}</h2>
          </div>
          <div className="content-listing__grid">
            {items.map((item, i) => (
              <article key={i} className="content-listing__card">
                <div className="content-listing__thumbnail">
                  {item.thumbnailSrc ? (
                    <Image
                      src={item.thumbnailSrc}
                      alt={item.thumbnailAlt ?? ''}
                      fill
                      sizes="380px"
                    />
                  ) : (
                    <span className="content-listing__thumbnail-placeholder">
                      Youtube thumbnail
                    </span>
                  )}
                </div>
                <div className="content-listing__card-text">
                  <p className="content-listing__card-tag">{item.tag}</p>
                  <p className="content-listing__card-title">{item.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
