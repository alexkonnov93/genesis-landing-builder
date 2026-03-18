import Image from 'next/image';
import './Demo.css';

interface DemoProps {
  tag: string;
  headline: string;
  imageSrc: string;
  imageAlt: string;
  playLabel: string;
}

export function DemoSection({ tag, headline, imageSrc, imageAlt, playLabel }: DemoProps) {
  return (
    <section className="demo">
      <div className="demo__inner">
        <div className="demo__header">
          <p className="demo__tag">{tag}</p>
          <h2 className="demo__title">{headline}</h2>
        </div>
        <div className="demo__image-container">
          <Image
            className="demo__image"
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="1180px"
          />
          <button className="demo__play" type="button">
            <Image
              src="/images/demo/play-icon.svg"
              alt=""
              width={28}
              height={32}
              className="demo__play-icon"
            />
            <span className="demo__play-label">{playLabel}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
