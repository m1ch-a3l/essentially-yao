import FadeIn from "@/components/ui/FadeIn";

export default function ProcessSteps({
  steps,
}: {
  steps: { step: string; title: string; description: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
      {steps.map((item, i) => (
        <FadeIn key={item.step} delay={i * 0.08} className="relative lg:px-6">
          {i < steps.length - 1 && (
            <span className="pointer-events-none absolute top-6 left-full hidden w-6 border-t border-dashed border-gold-400/40 lg:block" />
          )}
          <span className="font-display text-4xl text-gold-500/60">{item.step}</span>
          <h3 className="mt-4 font-display text-lg font-medium text-navy-950">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-charcoal-500">
            {item.description}
          </p>
        </FadeIn>
      ))}
    </div>
  );
}
