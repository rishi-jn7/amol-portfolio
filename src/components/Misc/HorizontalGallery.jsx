import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, animate } from "motion/react";

export function HorizontalGallery() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [bounds, setBounds] = useState({ min: 0, max: 0 });

  // Target x (instant) → spring → rendered x
  const x = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 140, damping: 28, mass: 0.6 });

  // Measure track / viewport to compute drag + wheel bounds
  useLayoutEffect(() => {
    const measure = () => {
      if (!viewportRef.current || !trackRef.current) return;
      const vw = viewportRef.current.clientWidth;
      const tw = trackRef.current.scrollWidth;
      setBounds({ min: -(tw - vw), max: 0 });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Wheel → horizontal scroll with damped settle
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    let controls = null;
    let target = x.get();

    const onWheel = (e) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      target = Math.min(bounds.max, Math.max(bounds.min, (controls ? target : x.get()) - delta));
      controls?.stop();
      controls = animate(x, target, {
        type: "spring",
        stiffness: 160,
        damping: 30,
        mass: 0.5,
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [bounds, x]);

  return (
    <div
      ref={viewportRef}
      className="overflow-hidden"
    >
      <motion.div
        ref={trackRef}
        style={{ x: smoothX }}
        drag="x"
        dragConstraints={{ left: bounds.min, right: bounds.max }}
        dragElastic={0}
        dragMomentum
        dragTransition={{
          power: 0.35,
          timeConstant: 380,
          // bounceStiffness: 220,
          // bounceDamping: 28,
        }}
        onDragStart={() => {
          // Sync the target motion value with current rendered position so spring doesn't fight drag
          x.set(smoothX.get());
        }}
        onDrag={(_, info) => {
          x.set(Math.min(bounds.max, Math.max(bounds.min, x.get() + info.delta.x)));
        }}
        className="d-flex gap-4 px-4 carousel-track"
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-secondary flex-shrink-0 carousel-card"
          />
        ))}

        draggable={false}
      </motion.div>
    </div>
  );
  // return (
  //   <div
  //     ref={viewportRef}
  //     className="fixed inset-0 overflow-hidden bg-background touch-none"
  //   >
  //     <motion.div
  //       ref={trackRef}
  //       style={{ x: smoothX }}
  //       drag="x"
  //       dragConstraints={{ left: bounds.min, right: bounds.max }}
  //       dragElastic={0.08}
  //       dragMomentum
  //       dragTransition={{
  //         power: 0.35,
  //         timeConstant: 380,
  //         bounceStiffness: 220,
  //         bounceDamping: 28,
  //       }}
  //       onDragStart={() => {
  //         // Sync the target motion value with current rendered position so spring doesn't fight drag
  //         x.set(smoothX.get());
  //       }}
  //       onDrag={(_, info) => {
  //         x.set(Math.min(bounds.max, Math.max(bounds.min, x.get() + info.delta.x)));
  //       }}
  //       className="flex h-full items-center gap-8 md:gap-16 px-[10vw] cursor-grab active:cursor-grabbing will-change-transform"
  //     >
  //       {projects.map((p, i) => (
  //         <article
  //           key={p.id}
  //           className="relative shrink-0 w-[78vw] md:w-[62vw] lg:w-[54vw] max-w-[1100px]"
  //         >
  //           <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-secondary">
  //             <img
  //               src={p.image}
  //               alt={p.title}
  //               width={1600}
  //               height={1024}
  //               loading={i === 0 ? "eager" : "lazy"}
  //               className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
  //             />
  //           </div>
  //         </article>
  //       ))}
  //   draggable={false}



  //     </motion.div>
  //   </div>
  // );
}