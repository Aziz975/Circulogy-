import { useEffect, useRef, useState } from "react";

/**
 * Adds the section to the viewport-entry queue once, then stops observing.
 * Returns [ref, isVisible] — spread the ref onto the element you want revealed.
 */
export function useReveal({ threshold = 0.14, rootMargin = "0px 0px -40px 0px" } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}
