"use client";
import { useEffect } from "react";

export default function useScrollAnimation(ref) {
  useEffect(() => {
    if (!ref || !ref.current) return;

    const element = ref.current;

    // Start hidden
    element.style.opacity = 0;
    element.style.transform = "translateY(300px)";
    element.style.transition = "all 0.8s ease-out";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = 1;
            element.style.transform = "translateY(0)";
            observer.unobserve(element); // animate once
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    // Cleanup
    return () => observer.disconnect();
  }, [ref]);
}