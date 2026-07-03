import React, { useEffect } from "react";
import gsap from "gsap";

export default function App() {
  useEffect(() => {
gsap.set(".box1",{
  x: -300
})

    gsap.to(".box1", {
      x: 1200,
      duration: 1,
      delay: 0.5,
      ease: "powder2.out(0.7)",
      repeat:5,
      stagger: 0.3
    });
  }, []);

  return (
    <div>
      <span className="box1"></span>
      <span className="box1"></span>
      <span className="box1"></span>
      <span className="box1"></span>
      <span className="box1"></span>
      <span className="box1"></span>
    </div>
  );
}
