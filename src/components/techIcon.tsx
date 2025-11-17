import type { ElementType } from "react";

export const Techicon = ({ component }: { component: ElementType }) => {
  const Component = component;
  return (
    <span className="relative inline-flex items-center justify-center">
      <Component className="size-10 fill-tech-gradient" />
      <svg
        aria-hidden
        focusable="false"
        className="pointer-events-none absolute size-0"
      >
        <defs>
          <linearGradient id="tech-icon-gradient">
            <stop offset="0%" stopColor="rgb(110 231 183)" />
            <stop offset="100%" stopColor="rgb(56 189 248)" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};
