interface ThunderboltProps {
  x?: number;
  y?: number;
}

const BOLT_PATH =
  "M206 256 L178 306 L196 306 L188 340 L216 290 L198 290 Z";

export function Thunderbolt({ x = 0, y = 0 }: ThunderboltProps) {
  return (
    <g transform={`translate(${197 + x}, ${297 + y}) scale(2) translate(-197, -297)`}>
      <path
        d={BOLT_PATH}
        className="fill-yellow-200"
        opacity={0.8}
        filter="url(#boltGlow)"
        style={{ mixBlendMode: "screen" }}
      />
      <path d={BOLT_PATH} fill="url(#yellowGradient)" />
    </g>
  );
}
