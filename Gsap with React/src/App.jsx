import React, { useEffect } from "react";
import gsap from "gsap";

export default function App() {
  useEffect(() => {
    gsap.set(".box1", {
      // x: -200,
    });

    // gsap.to(".box1", {
    //   x: 800,
    //   duration: 1,
    //   delay: 0.5,
    //   ease: "powder2.out(0.7)",
    //   repeat: 5,
    //   stagger: {
    //     each: 0.1,
    //     from: "center"
    //   },
    // });

    gsap.from("h1 span", {
      yPercent: 100,
      delay: 1,
      opacity: 0,
      duration: 0.7,
      ease: "expo.in",
      repeat: 5,
      stagger: {
        each: 0.08,
        from: "start",
      },
    });
  }, []);

  return (
    <div className="box">
      <div className="box1">
        <h1>
          <span className="box1">R</span>
          <span className="box1">I</span>
          <span className="box1">T</span>
          <span className="box1">E</span>
          <span className="box1">S</span>
          <span className="box1">H</span>
        </h1>
      </div>
    </div>
  );
}
