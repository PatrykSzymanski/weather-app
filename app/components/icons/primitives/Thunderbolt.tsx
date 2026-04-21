interface ThunderboltProps {
  x?: number;
  y?: number;
}

export function Thunderbolt({ x = 0, y = 0 }: ThunderboltProps) {
  return (
    <path
      transform={`translate(${x}, ${y})`}
      style={{ transformOrigin: "center" }}
      d="M205 265 L188 295 L200 295 L180 330 L210 300 L198 300 L215 270 Z"
      className="fill-yellow-400"
    />
  );
}
