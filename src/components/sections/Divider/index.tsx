import './Divider.css';

interface DividerProps {
  height?: number;
}

export function DividerSection({ height = 60 }: DividerProps) {
  return (
    <div className="divider">
      <div className="divider__inner" style={{ height }} />
    </div>
  );
}
