import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const componentRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    // A simple context to clean up GSAP animations easily when unmounting
    let ctx = gsap.context(() => {
      // 1. Basic Intro Animation (Topic: Tweens & Easing)
      gsap.to(".title", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.to(".subtitle", {
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        delay: 0.8,
      });

      // 2. Horizontal Scroll Animation (Topic: ScrollTrigger Pinning & Scrubbing)
      const panels = gsap.utils.toArray(".panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sliderRef.current,
          pin: true,
          scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          snap: 1 / (panels.length - 1), // Snap to the closest section
          end: () => "+=" + sliderRef.current.offsetWidth, // The scroll distance equals the width of the container
        },
      });
    }, componentRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={componentRef}>
      {/* Intro Section */}
      <section className="section intro-section">
        <h1 className="title">GSAP ScrollTrigger</h1>
        <p className="subtitle">
          Scroll down to explore the horizontal slide effect
        </p>
        <div className="scroll-indicator">Scroll &darr;</div>
      </section>

      {/* Horizontal Scroll Section */}
      <div className="horizontal-container" ref={sliderRef}>
        {/* Panel 1 */}
        <section className="panel">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
            alt="Mountains"
            className="panel-img"
          />
          <div className="panel-content">
            <h2>Section One</h2>
            <p>
              This is a beginner-friendly introduction to GSAP ScrollTrigger. As
              you scroll vertically, the content moves horizontally.
            </p>
          </div>
        </section>

        {/* Panel 2 */}
        <section className="panel">
          <img
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2052&auto=format&fit=crop"
            alt="Nature"
            className="panel-img"
          />
          <div className="panel-content">
            <h2>Section Two</h2>
            <p>
              We achieved this by pinning the main container and translating the
              panels across the X-axis using xPercent.
            </p>
          </div>
        </section>

        {/* Panel 3 */}
        <section className="panel">
          <img
            src="https://images.unsplash.com/photo-1470071131384-001b85755536?q=80&w=2078&auto=format&fit=crop"
            alt="Forest"
            className="panel-img"
          />
          <div className="panel-content">
            <h2>Section Three</h2>
            <p>
              You can also snap to sections, add easing, and much more. Keep
              scrolling to reach the end.
            </p>
          </div>
        </section>
      </div>

      {/* Outro Section */}
      <section className="section outro-section">
        <h1
          className="title"
          style={{
            opacity: 1,
            transform: "none",
            background: "linear-gradient(to right, #00f2fe, #4facfe)",
            WebkitBackgroundClip: "text",
          }}
        >
          You did it!
        </h1>
        <p className="subtitle" style={{ opacity: 1 }}>
          That's the power of GSAP ScrollTrigger.
        </p>
      </section>
    </div>
  );
}
