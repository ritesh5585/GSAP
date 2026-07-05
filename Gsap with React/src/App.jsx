import React, { useEffect } from "react";
import gsap from "gsap";

export default function App() {
  useEffect(() => {
    gsap.set(".box1", {
      // x: -200,
    });

    gsap.to(".box1", {
      x: 1200,
      duration: 1,
      delay: 0.5,
      ease: "powder2.out(0.7)",
      repeat: 5,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="box">
      <span className="box1">R</span>
      <span className="box1">I</span>
      <span className="box1">T</span>
      <span className="box1">E</span>
      <span className="box1">S</span>
      <span className="box1">H</span>
    </div>
  );
}
