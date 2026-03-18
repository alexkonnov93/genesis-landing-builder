import type { ComponentProps } from 'react';
import { Icon } from '@/components/ui/Icon';
import './Card.css';

type IconName = ComponentProps<typeof Icon>['name'];

interface CardProps {
  icon: IconName;
  title: string;
  description: string;
  className?: string;
}

export function Card({ icon, title, description, className }: CardProps) {
  return (
    <div className={`card${className ? ` ${className}` : ''}`}>
      <Icon name={icon} size={24} className="card__icon" />
      <div className="card__text">
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
      </div>
    </div>
  );
}
