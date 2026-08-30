export function ToothMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="tm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path
        d="M13.5 4c-4.6 0-7.5 3.4-7.5 8 0 3.7 1.3 6.1 2.4 9.9.9 3.3 1 6.8 2.1 10.6.7 2.4 1.7 3.5 3 3.5 1.6 0 2.2-1.6 3-5.2.6-2.6 1-4.7 3.5-4.7s2.9 2.1 3.5 4.7c.8 3.6 1.4 5.2 3 5.2 1.3 0 2.3-1.1 3-3.5 1.1-3.8 1.2-7.3 2.1-10.6C33.7 18.1 35 15.7 35 12c0-4.6-2.9-8-7.5-8-2.9 0-4.7 1.6-7.5 1.6S16.4 4 13.5 4Z"
        fill="url(#tm-g)"
      />
    </svg>
  );
}
