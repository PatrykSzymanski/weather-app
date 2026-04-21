interface SunProps {
    x?: number;
    y?: number;
  }
  
  export function Sun({ x = 0, y = 0 }: SunProps) {
    return (
      <circle cx={192 + x} cy={192 + y} r="104" className="fill-amber-500" />
    );
  }