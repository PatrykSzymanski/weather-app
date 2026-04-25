interface RainProps {
  x?: number;
  y?: number;
}

export function Rain({ x = 0, y = 0 }: RainProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <g
        className="animate-fall"
        style={{
          animationDelay: "-0.2s",
          animationDuration: "calc(var(--animation-duration) / 5.333)",
          transformBox: "fill-box",
          transformOrigin: "center",
        }}
      >
        {/* Drop 1 — far left, small, high */}
        <path
          d="M130 280 C130 280 120 304 120 313 C120 318.5 124.5 323 130 323 C135.5 323 140 318.5 140 313 C140 304 130 280 130 280 Z"
          fill="url(#rainGradient)"
          opacity={0.65}
        />
      </g>

      <g
        className="animate-fall"
        style={{
          animationDelay: "-0.55s",
          animationDuration: "calc(var(--animation-duration) / 4.444)",
          transformBox: "fill-box",
          transformOrigin: "center",
        }}
      >
        {/* Drop 2 — left-center, large, leading */}
        <path
          d="M170 288 C170 288 153 326 153 341 C153 350.4 160.6 358 170 358 C179.4 358 187 350.4 187 341 C187 326 170 288 170 288 Z"
          fill="url(#rainGradient)"
          opacity={0.95}
        />
      </g>

      <g
        className="animate-fall"
        style={{
          animationDelay: "-0.05s",
          animationDuration: "calc(var(--animation-duration) / 5)",
          transformBox: "fill-box",
          transformOrigin: "center",
        }}
      >
        {/* Drop 3 — right-center, medium */}
        <path
          d="M214 296 C214 296 201 324 201 335 C201 342.2 206.8 348 214 348 C221.2 348 227 342.2 227 335 C227 324 214 296 214 296 Z"
          fill="url(#rainGradient)"
          opacity={0.85}
        />
      </g>

      <g
        className="animate-fall"
        style={{
          animationDelay: "-0.35s",
          animationDuration: "calc(var(--animation-duration) / 5.714)",
          transformBox: "fill-box",
          transformOrigin: "center",
        }}
      >
        {/* Drop 4 — far right, smallest, trailing */}
        <path
          d="M252 292 C252 292 243 312 243 320 C243 325 247 329 252 329 C257 329 261 325 261 320 C261 312 252 292 252 292 Z"
          fill="url(#rainGradient)"
          opacity={0.7}
        />
      </g>
    </g>
  );
}
