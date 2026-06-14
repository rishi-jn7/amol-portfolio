import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, animate } from "motion/react";

function Landing() {
    const viewportRef = useRef(null);
    const trackRef = useRef(null);

    const [bounds, setBounds] = useState({
        min: 0,
        max: 0,
    });

    // Instant target position
    const x = useMotionValue(0);

    // Smooth damped version of x
    const smoothX = useSpring(x, {
        stiffness: 110,
        damping: 18,
        mass: 1,
    });

    // Calculate drag bounds
    useLayoutEffect(() => {
        const measure = () => {
            if (!viewportRef.current || !trackRef.current) return;

            const viewportWidth = viewportRef.current.clientWidth;
            const trackWidth = trackRef.current.scrollWidth;

            setBounds({
                min: -(trackWidth - viewportWidth),
                max: 0,
            });
        };

        measure();

        window.addEventListener("resize", measure);

        return () => window.removeEventListener("resize", measure);
    }, []);

    // Mouse wheel scrolling
    useEffect(() => {
        const el = viewportRef.current;

        if (!el) return;

        let controls = null;
        let target = x.get();

        const onWheel = (e) => {
            e.preventDefault();

            const delta =
                Math.abs(e.deltaX) > Math.abs(e.deltaY)
                    ? e.deltaX
                    : e.deltaY;

            target = Math.min(
                bounds.max,
                Math.max(bounds.min, target - delta * 2)
            );

            controls?.stop();

            controls = animate(x, target, {
                type: "inertia",
                stiffness: 160,
                damping: 30,
                mass: 0.5,
            });
        };

        el.addEventListener("wheel", onWheel, {
            passive: false,
        });

        return () => el.removeEventListener("wheel", onWheel);
    }, [bounds, x]);

    return (
        <div className="vh-100 d-flex flex-column justify-content-center gap-5 overflow-hidden">

            {/* Header */}
            <div
                className="d-flex justify-content-between align-items-center mx-auto w-100 px-4"
                style={{ maxWidth: "900px" }}
            >
                <div>
                    <img src="src/assets/Wordmark.svg" alt="" height={100} />
                </div>

                <div>About</div>
            </div>

            {/* Carousel */}
            <div
                ref={viewportRef}
                className="overflow-hidden"
            >
                <motion.div
                    ref={trackRef}
                    style={{ x }}
                    drag="x"
                    dragConstraints={{
                        left: bounds.min,
                        right: bounds.max,
                    }}
                    dragElastic={0}
                    dragMomentum
                    dragTransition={{
                        power: 0.35,
                        timeConstant: 380,
                        // bounceStiffness: 220,
                        // bounceDamping: 30,
                    }}
                    className="d-flex gap-4 px-4 carousel-track"
                >
                    <img
                        src="src/assets/projects/Home.png"
                        alt=""
                        className="flex-shrink-0 carousel-card"
                    />

                    <img
                        src="src/assets/projects/Asset5.png"
                        alt=""
                        className="flex-shrink-0"
                        style={{
                            maxWidth: "300px",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />

                    <img
                        src="src/assets/projects/Asset5.png"
                        alt=""
                        className="flex-shrink-0"
                        style={{
                            maxWidth: "300px",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                    <img
                        src="src/assets/projects/Asset5.png"
                        alt=""
                        className="flex-shrink-0"
                        style={{
                            maxWidth: "300px",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                    <img
                        src="src/assets/projects/Asset5.png"
                        alt=""
                        className="flex-shrink-0"
                        style={{
                            maxWidth: "300px",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                    <img
                        src="src/assets/projects/Asset5.png"
                        alt=""
                        className="flex-shrink-0"
                        style={{
                            maxWidth: "300px",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                    <img
                        src="src/assets/projects/Asset5.png"
                        alt=""
                        className="flex-shrink-0"
                        style={{
                            maxWidth: "300px",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />
                    <img
                        src="src/assets/projects/Asset5.png"
                        alt=""
                        className="flex-shrink-0"
                        style={{
                            maxWidth: "300px",
                            height: "auto",
                            objectFit: "contain",
                        }}
                    />

                </motion.div>
            </div>
        </div>
    );
}

export default Landing;