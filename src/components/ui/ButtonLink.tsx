import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary";
  arrow?: boolean;
};

export function ButtonLink({
  variant = "primary",
  arrow = true,
  className = "",
  children,
  ...props
}: Props) {
  return (
    <a
      className={`group button ${variant === "primary" ? "button-primary" : "button-secondary"} ${className}`}
      {...props}
    >
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
        >
          ↗
        </span>
      )}
    </a>
  );
}
