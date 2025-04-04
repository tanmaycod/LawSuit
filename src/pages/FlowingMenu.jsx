import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * INTERACTIVE BACKGROUND
 * A new component that creates a dynamic, responsive background
 * that reacts to mouse movements for an extra layer of interactivity.
 */
function InteractiveBackground() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Animate background position relative to cursor for a subtle parallax effect.
      gsap.to(bgRef.current, {
        backgroundPosition: `${(e.clientX / window.innerWidth) * 100}% ${(e.clientY / window.innerHeight) * 100}%`,
        duration: 0.5,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none transition-all duration-500"
      style={{
        background: "radial-gradient(circle, #ff7e5f, #feb47b)",
        backgroundSize: "200% 200%",
      }}
    />
  );
}

/**
 * FLOWING MENU
 * The main component remains the same in its logic but now includes:
 * - A dynamic interactive background.
 * - A check for touch devices to disable the custom cursor.
 * - GSAP config for optimal performance.
 */
function FlowingMenu({ items = [] }) {
  const menuRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorSize = 50; // Default cursor size

  // Optimize GSAP performance by forcing 3D transforms.
  useEffect(() => {
    gsap.config({ force3D: true });
  }, []);

  // Custom cursor movement with GSAP quickTo.
  useEffect(() => {
    const cursor = cursorRef.current;
    
    // GSAP quickTo creates a highly performant method to animate transforms.
    const moveCursor = gsap.quickTo(cursor, "translate3d", {
      x: (value) => `${value - cursorSize / 2}px`,
      y: (value) => `${value - cursorSize / 2}px`,
      duration: 0.15,
      ease: "power3.out",
    });

    const onMouseMove = (e) => {
      moveCursor(e.clientX, e.clientY, 0);
    };

    // For touch devices, hide the custom cursor.
    if (window.matchMedia("(pointer: coarse)").matches) {
      gsap.set(cursor, { opacity: 0 });
    } else {
      window.addEventListener("mousemove", onMouseMove);
    }

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* INTERACTIVE DYNAMIC BACKGROUND */}
      <InteractiveBackground />

      {/* CUSTOM CURSOR */}
      <div
        ref={cursorRef}
        className="custom-cursor pointer-events-none fixed w-[50px] h-[50px] bg-white opacity-30 mix-blend-difference rounded-full z-50 will-change-transform transition-transform duration-200"
      />

      <nav ref={menuRef} className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} menuRef={menuRef} cursorRef={cursorRef} />
        ))}
      </nav>
    </div>
  );
}

/**
 * MENU ITEM
 * The individual menu item animations remain logically the same,
 * with a small addition: a rotation effect during hover for extra interactivity.
 */
function MenuItem({ link, text, image, menuRef, cursorRef }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationDefaults = { duration: 0.7, ease: "power4.out" };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    return mouseY < height / 2 ? "top" : "bottom";
  };

  const handleMouseEnter = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });

    gsap.to(itemRef.current, {
      scale: 1.08,
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(menuRef.current, {
      y: "-2vh",
      duration: 0.3,
      ease: "power2.out",
    });

    // Increase cursor size on hover.
    gsap.to(cursorRef.current, {
      scale: 1.5,
      duration: 0.3,
      ease: "power3.out",
    });

    // Add advanced parallax with a slight rotation for an extra dynamic effect.
    gsap.to(itemRef.current, {
      x: gsap.utils.random(-5, 5),
      y: gsap.utils.random(-5, 5),
      rotation: gsap.utils.random(-2, 2),
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (ev) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" });

    gsap.to(itemRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
      rotation: 0,
      x: 0,
      y: 0,
    });

    gsap.to(menuRef.current, {
      y: "0vh",
      duration: 0.3,
      ease: "power2.out",
    });

    // Reset cursor size.
    gsap.to(cursorRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="text-white uppercase font-normal text-[4vh] leading-[1.2] p-[1vh_1vw_0]">
        {text}
      </span>
      <div
        className="w-[200px] h-[7vh] my-[2em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
    </React.Fragment>
  ));

  return (
    <div
      className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff] transition-all duration-300 ease-out will-change-transform"
      ref={itemRef}
    >
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-black text-[4vh] hover:text-[#060606] focus:text-black focus-visible:text-[#060606] transition-all duration-200 ease-in-out"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-black translate-y-[101%] transition-all duration-500 ease-in-out"
        ref={marqueeRef}
      >
        <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
