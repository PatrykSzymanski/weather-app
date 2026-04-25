interface ThunderboltProps {
  x?: number;
  y?: number;
}

const BOLT_PATH =
  "M206 256 L178 306 L196 306 L188 340 L216 290 L198 290 Z";
const BOLT_DRAW_PATH = "M206 256 L178 306 L196 306 L188 340 L216 290 L198 290";

export function Thunderbolt({ x = 0, y = 0 }: ThunderboltProps) {
  return (
    <g transform={`translate(${197 + x}, ${297 + y}) scale(2) translate(-197, -297)`}>
      <path
        d={BOLT_PATH}
        className="animate-storm-glow fill-yellow-100"
        filter="url(#boltGlow)"
        style={{
          mixBlendMode: "screen",
          transformBox: "fill-box",
          transformOrigin: "center",
        }}
      />
      <path
        d={BOLT_PATH}
        className="animate-storm-fill"
        fill="url(#yellowGradient)"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <path
        d={BOLT_DRAW_PATH}
        className="animate-storm-draw"
        fill="none"
        stroke="var(--color-yellow-100)"
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1}
        filter="url(#boltGlow)"
      />
      <g
        className="animate-storm-spark"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <circle cx={180} cy={306} r={3} className="fill-yellow-100" />
        <circle cx={216} cy={290} r={2.5} className="fill-yellow-100" />
      </g>
    </g>
  );
}
