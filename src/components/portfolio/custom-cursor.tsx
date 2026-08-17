import { useEffect, useRef } from "react";

const interactiveSelector = "a, button, input, textarea, select, [role='button']";

export default function CustomCursor() {
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("custom-cursor-active");

    const target = { x: -100, y: -100 };
    const current = { x: -100, y: -100 };
    let frame = 0;
    let hasMoved = false;

    const renderRing = () => {
      current.x += (target.x - current.x) * 0.16;
      current.y += (target.y - current.y) * 0.16;
      ring.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(renderRing);
    };

    const handlePointerMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;

      if (!hasMoved) {
        current.x = event.clientX;
        current.y = event.clientY;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        hasMoved = true;
      }

      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;

      const overInteractive =
        event.target instanceof Element && event.target.closest(interactiveSelector);
      ring.style.width = overInteractive ? "46px" : "32px";
      ring.style.height = overInteractive ? "46px" : "32px";
    };

    const hideCursor = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      hasMoved = false;
    };

    const showCursor = () => {
      if (hasMoved) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("mouseleave", hideCursor);
    document.documentElement.addEventListener("mouseenter", showCursor);
    frame = window.requestAnimationFrame(renderRing);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
      document.documentElement.removeEventListener("mouseenter", showCursor);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <span ref={dotRef} aria-hidden="true" className="custom-cursor-dot" />
      <span ref={ringRef} aria-hidden="true" className="custom-cursor-ring" />
    </>
  );
}
