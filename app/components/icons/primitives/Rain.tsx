interface RainProps {
  x?: number;
  y?: number;
}

export function Rain({ x = 0, y = 0 }: RainProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <linearGradient id="rainGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {/* Left drop - medium, slightly delayed feel */}
      <path
        d="M142 284 C142 284 128 316 128 328 C128 336 134.3 342 142 342 C149.7 342 156 336 156 328 C156 316 142 284 142 284 Z"
        fill="url(#rainGrad)"
        opacity={0.85}
      />

      {/* Center drop - largest, leading */}
      <path
        d="M192 292 C192 292 174 332 174 348 C174 358 182.1 366 192 366 C201.9 366 210 358 210 348 C210 332 192 292 192 292 Z"
        fill="url(#rainGrad)"
      />

      {/* Right drop - small, trailing */}
      <path
        d="M238 290 C238 290 227 316 227 325 C227 331.6 232 337 238 337 C244 337 249 331.6 249 325 C249 316 238 290 238 290 Z"
        fill="url(#rainGrad)"
        opacity={0.7}
      />
    </g>
  );
}