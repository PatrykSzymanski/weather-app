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
  const arm = size * 0.5;
  const branch = size * 0.13;
  const branchStart = 0.68;
  const strokeWidth = Math.max(2, size * 0.09);
  const arms = [0, 60, 120, 180, 240, 300];

  return (
    <g opacity={opacity} stroke="url(#snowGradient)" strokeLinecap="round">
      {arms.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const bx = cx + arm * branchStart * cos;
        const by = cy + arm * branchStart * sin;

        return (
          <g key={deg}>
            <line
              x1={cx}
              y1={cy}
              x2={cx + arm * cos}
              y2={cy + arm * sin}
              strokeWidth={strokeWidth}
            />
            <line
              x1={bx}
              y1={by}
              x2={bx + branch * Math.cos(((deg + 42) * Math.PI) / 180)}
              y2={by + branch * Math.sin(((deg + 42) * Math.PI) / 180)}
              strokeWidth={strokeWidth * 0.82}
            />
            <line
              x1={bx}
              y1={by}
              x2={bx + branch * Math.cos(((deg - 42) * Math.PI) / 180)}
              y2={by + branch * Math.sin(((deg - 42) * Math.PI) / 180)}
              strokeWidth={strokeWidth * 0.82}
            />
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={size * 0.1} fill="url(#snowGradient)" />
      <circle cx={cx} cy={cy} r={size * 0.045} fill="white" opacity={0.5} />
    </g>
  );
}

export function Snowflake({ x = 0, y = 0 }: SnowflakeProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <g
        className="animate-fall"
        style={{
          animationDelay: "-0.4s",
          animationDuration: "calc(var(--animation-duration) / 2.222)",
          transformBox: "fill-box",
          transformOrigin: "center",
        }}
      >
        <Flake cx={120} cy={320} size={55} opacity={0.85} />
      </g>
      <g
        className="animate-fall"
        style={{
          animationDelay: "-1.1s",
          animationDuration: "calc(var(--animation-duration) / 1.818)",
          transformBox: "fill-box",
          transformOrigin: "center",
        }}
      >
        <Flake cx={240} cy={340} size={52} />
      </g>
      <g
        className="animate-fall"
        style={{
          animationDelay: "-0.8s",
          animationDuration: "calc(var(--animation-duration) / 2.5)",
          transformBox: "fill-box",
          transformOrigin: "center",
        }}
      >
        <Flake cx={180} cy={290} size={39} opacity={0.7} />
      </g>
    </g>
  );
}
