import { clsx } from "clsx";
import type { ReactNode } from "react";

export default function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <Tag className={clsx("mx-auto w-full max-w-7xl px-6 lg:px-10", className)}>
      {children}
    </Tag>
  );
}
