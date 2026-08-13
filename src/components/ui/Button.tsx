import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "outline-light" | "link" | "link-light";

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-wide uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

const variants: Record<Variant, string> = {
  primary:
    "rounded-md bg-gold-400 px-8 py-4 text-navy-950 shadow-sm shadow-navy-950/10 hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-lg hover:shadow-navy-950/15",
  outline:
    "rounded-md border border-navy-900/25 px-8 py-4 text-navy-900 hover:-translate-y-0.5 hover:border-navy-900 hover:bg-navy-900 hover:text-off-white hover:shadow-lg hover:shadow-navy-950/10",
  "outline-light":
    "rounded-md border border-off-white/30 px-8 py-4 text-off-white hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950 hover:shadow-lg hover:shadow-navy-950/20",
  link: "text-navy-900 hover:text-gold-600",
  "link-light": "text-off-white hover:text-gold-300",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className, children, showArrow, ...rest } = props;
  const classes = clsx(base, variants[variant], className);
  const arrow = showArrow ?? variant.startsWith("link");
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
