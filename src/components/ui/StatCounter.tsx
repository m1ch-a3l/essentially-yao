"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";

export default function StatCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.6,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const count = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = count.on("change", (latest) => {
      if (textRef.current) {
        textRef.current.textContent = Math.round(latest).toLocaleString();
      }
    });
    return unsubscribe;
  }, [count]);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, value, duration, count]);

  return (
    <span ref={containerRef}>
      {prefix}
      <span ref={textRef}>0</span>
      {suffix}
    </span>
  );
}
