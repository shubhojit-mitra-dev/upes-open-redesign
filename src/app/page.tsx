"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Loading from "@/components/Loading";
import Content from "@/components/Content";

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const followRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef<HTMLParagraphElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const titleLinesRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const logoRef = useRef<HTMLDivElement | null>(null); // New ref for the logo

  useEffect(() => {
    // Ensure initial styles are set correctly
    gsap.set(followRef.current, { width: "0%", height: "2px", left: "0" });
    gsap.set(progressBarRef.current, { width: "0%", opacity: 1, left: "0" });
    gsap.set(countRef.current, { opacity: 1 });
    gsap.set(logoRef.current, { opacity: 1 }); // Set initial opacity for the logo
    gsap.set(contentRef.current, { width: "0%" });
    titleLinesRef.current.forEach((line) => {
      if (line) gsap.set(line, { opacity: 0, display: "none" });
    });

    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        } else {
          clearInterval(count);
          revealAnimation();
          return 100;
        }
      });
    }, 25);

    return () => clearInterval(count); // Cleanup interval on unmount
  }, []);

  const revealAnimation = () => {
    const t1 = gsap.timeline({
      onComplete: () => console.log("Animation completed"),
    });

    t1.to(progressBarRef.current, { width: "100%", ease: "expo.inOut", duration: 1.2 })
      .to([countRef.current, logoRef.current], { opacity: 0, duration: 0.3 }, "-=0.5") // Fade out counter and logo
      .to(progressBarRef.current, { height: "100%", ease: "expo.inOut", duration: 0.7 })
      .set(progressBarRef.current, { backgroundColor: "#25c302" })
      .to(progressBarRef.current, {
        width: "0%",
        x: "100%",
        ease: "expo.inOut",
        duration: 0.7,
      })
      .to(contentRef.current, {
        width: "100%",
        ease: "expo.inOut",
        duration: 0.7,
      })
      .set(titleLinesRef.current, { display: "block" })
      .to(titleLinesRef.current, {
        opacity: 1,
        stagger: 0.15,
        ease: "expo.inOut",
        duration: 0.6,
      });
  };

  return (
    <div className="w-screen h-screen bg-black relative text-black overflow-hidden">
      <Loading
        counter={counter}
        followRef={followRef}
        progressBarRef={progressBarRef}
        countRef={countRef}
        logoRef={logoRef} // Pass the logoRef
      />
      <Content contentRef={contentRef} titleLinesRef={titleLinesRef} />
    </div>
  );
};

export default App;