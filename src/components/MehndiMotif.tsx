type MehndiMotifProps = {
  className?: string;
};

/** Decorative henna-inspired vine / paisley motif */
export function MehndiMotif({ className = "" }: MehndiMotifProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="28" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="60" cy="60" r="16" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <path
        d="M60 22c8 10 14 18 14 28a14 14 0 1 1-28 0c0-10 6-18 14-28Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M60 98c-8-10-14-18-14-28a14 14 0 1 1 28 0c0 10-6 18-14 28Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M22 60c10-8 18-14 28-14a14 14 0 1 1 0 28c-10 0-18-6-28-14Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M98 60c-10 8-18 14-28 14a14 14 0 1 1 0-28c10 0 18 6 28 14Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="60" cy="60" r="3.5" fill="currentColor" />
      <path
        d="M60 8v10M60 102v10M8 60h10M102 60h10"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

export function MehndiCorner({ className = "" }: MehndiMotifProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 72C8 40 20 20 52 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M18 68c4-18 14-30 34-38"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="52" cy="12" r="3" fill="currentColor" />
      <path
        d="M40 28c6 2 10 6 12 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M28 48c4-2 8-2 12 0"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}
