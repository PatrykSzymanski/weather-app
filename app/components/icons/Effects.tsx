export function Effects() {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        {/* Yellow gradient */}
        <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--color-yellow-400)" }} />
          <stop offset="100%" style={{ stopColor: "var(--color-amber-600)" }} />
        </linearGradient>

        {/* Yellow glow */}
        <radialGradient id="yellowGlow" cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            style={{ stopColor: "var(--color-yellow-100)", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "var(--color-yellow-300)", stopOpacity: 0 }}
          />
        </radialGradient>

        {/* Slate gradient */}
        <linearGradient id="slateGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--color-slate-300)" }} />
          <stop offset="100%" style={{ stopColor: "var(--color-slate-500)" }} />
        </linearGradient>

        {/* Moon bloom - soft gaussian blur for a shape-following halo */}
        <filter
          id="moonBloom"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur stdDeviation="18" />
        </filter>

        {/* Cloud gradient - light highlight on top, cooler gray below */}
        <linearGradient id="cloudGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--color-slate-50)" }} />
          <stop offset="55%" style={{ stopColor: "var(--color-slate-200)" }} />
          <stop offset="100%" style={{ stopColor: "var(--color-slate-400)" }} />
        </linearGradient>

        {/* Cloud depth - top highlight + soft inner bottom shadow for 3D volume */}
        <filter
          id="cloudDepth"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blurTop" />
          <feOffset in="blurTop" dx="0" dy="12" result="offsetTop" />
          <feComposite
            in="SourceGraphic"
            in2="offsetTop"
            operator="out"
            result="inverseTop"
          />
          <feFlood floodColor="white" floodOpacity="0.75" result="highlightColor" />
          <feComposite
            in="highlightColor"
            in2="inverseTop"
            operator="in"
            result="topHighlight"
          />

          <feGaussianBlur in="SourceAlpha" stdDeviation="14" result="blurBottom" />
          <feOffset in="blurBottom" dx="0" dy="-16" result="offsetBottom" />
          <feComposite
            in="SourceGraphic"
            in2="offsetBottom"
            operator="out"
            result="inverseBottom"
          />
          <feFlood floodColor="#0f172a" floodOpacity="0.35" result="shadowColor" />
          <feComposite
            in="shadowColor"
            in2="inverseBottom"
            operator="in"
            result="bottomShadow"
          />

          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="bottomShadow" />
            <feMergeNode in="topHighlight" />
          </feMerge>
        </filter>

        {/* Rain gradient - crisp droplet blue */}
        <linearGradient id="rainGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--color-sky-300)" }} />
          <stop offset="100%" style={{ stopColor: "var(--color-blue-600)" }} />
        </linearGradient>

        {/* Snow gradient - cool white with a blue hint */}
        <linearGradient id="snowGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--color-sky-50)" }} />
          <stop offset="100%" style={{ stopColor: "var(--color-sky-300)" }} />
        </linearGradient>

        {/* Bolt glow - tight electric bloom */}
        <filter id="boltGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>

        {/* White inner shadow*/}
        <filter
          id="whiteInnerShadow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="12" result="blur" />
          <feOffset dx="0" dy="10" result="offsetBlur" />
          <feComposite
            in="SourceGraphic"
            in2="offsetBlur"
            operator="out"
            result="inverse"
          />
          <feFlood
            style={{ floodColor: "white" }}
            floodOpacity="0.5"
            result="color"
          />
          <feComposite in="color" in2="inverse" operator="in" result="shadow" />
          <feComposite in="shadow" in2="SourceGraphic" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}
