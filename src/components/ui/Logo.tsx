import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

export default function Logo({
  className,
  imageClassName = "h-9",
  priority = false,
}: {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      className={clsx(
        "inline-flex items-center gap-2.5 font-display font-medium tracking-tight text-off-white",
        className
      )}
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={34}
        height={40}
        className={clsx("w-auto object-contain", imageClassName)}
        priority={priority}
      />
      Essentially<span className="text-gold-400">Yao</span>
    </Link>
  );
}
