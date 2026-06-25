import React, { useEffect } from "react";
import gsap from "gsap";

export default function App() {
  useEffect(() => {
gsap.set(".box1",{
  x: -300
})

    gsap.to(".box1", {
      x: 1200,
      duration: 1.3,
      delay: 0.5,
      ease: "powder2.inOut(0.7)",
      repeat:5
    });
  }, []);

  return (
    <div>
      <span className="box1"></span>
    </div>
  );
}
