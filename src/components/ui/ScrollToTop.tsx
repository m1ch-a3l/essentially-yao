"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { clsx } from "clsx";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
      className={clsx(
        "fixed right-6 bottom-6 z-40 flex size-11 items-center justify-center rounded-full border border-off-white/15 bg-navy-950 text-off-white shadow-lg shadow-navy-950/20 transition-all duration-300 hover:border-gold-400 hover:text-gold-400 sm:right-10 sm:bottom-10",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="size-5" strokeWidth={1.75} />
    </button>
  );
}
