interface SnowflakeProps {
  x?: number;
  y?: number;
}

function Flake({
  cx,
  cy,
  size,
  opacity = 1,
}: {
  cx: number;
  cy: number;
  size: number;
  opacity?: number;
}) {
  const arm = size * 0.95;
  const branch = size * 0.35;
  const angles = [0, 60, 120, 180, 240, 300];

  return (
    <g opacity={opacity}>
      <circle cx={cx} cy={cy} r={size * 0.18} fill="url(#snowGrad)" />
      {angles.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const bStart = 0.55;
        const bx = cx + arm * bStart * cos;
        const by = cy + arm * bStart * sin;

        return (
          <g key={deg}>
            <line
              x1={cx}
              y1={cy}
              x2={cx + arm * cos}
              y2={cy + arm * sin}
              stroke="url(#snowGrad)"
              strokeWidth={size * 0.12}
              strokeLinecap="round"
            />
            <line
              x1={bx}
              y1={by}
              x2={bx + branch * Math.cos(((deg + 35) * Math.PI) / 180)}
              y2={by + branch * Math.sin(((deg + 35) * Math.PI) / 180)}
              stroke="url(#snowGrad)"
              strokeWidth={size * 0.09}
              strokeLinecap="round"
            />
            <line
              x1={bx}
              y1={by}
              x2={bx + branch * Math.cos(((deg - 35) * Math.PI) / 180)}
              y2={by + branch * Math.sin(((deg - 35) * Math.PI) / 180)}
              stroke="url(#snowGrad)"
              strokeWidth={size * 0.09}
              strokeLinecap="round"
            />
          </g>
        );
      })}
    </g>
  );
}

export function Snowflake({ x = 0, y = 0 }: SnowflakeProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="snowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>
      </defs>

      <Flake cx={120} cy={320} size={52} opacity={0.85} />
      <Flake cx={240} cy={340} size={48} />
      <Flake cx={180} cy={290} size={36} opacity={0.7} />
    </g>
  );
}
