import * as Icons from 'pixelarticons/react';

type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  size?: 24 | 48 | 72 | 96;
  className?: string;
}

export function Icon({ name, size = 24, className }: IconProps) {
  const Glyph = Icons[name];
  return <Glyph width={size} height={size} className={className} />;
}
