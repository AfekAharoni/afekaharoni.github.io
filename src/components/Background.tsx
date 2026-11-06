import { useEffect, useRef } from "react";

/** Fixed page backdrop: drifting aurora blobs, a fading grid and a cursor-following spotlight. */
export default function Background() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        spotRef.current?.style.setProperty("--x", `${e.clientX}px`);
        spotRef.current?.style.setProperty("--y", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="bg" aria-hidden>
      <div className="bg-grid" />
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="bg-spot" ref={spotRef} />
      <div className="bg-noise" />
    </div>
  );
}
