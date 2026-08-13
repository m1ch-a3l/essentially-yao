import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function SidePhoto({
  image,
  className = "lg:col-span-5",
}: {
  image: { src: string; alt: string };
  className?: string;
}) {
  return (
    <FadeIn className={`relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg shadow-navy-950/[0.08] ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 rounded-lg border border-gold-400/20" />
    </FadeIn>
  );
}
