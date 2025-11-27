import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    let el = null;
    const container = viewerRef.current;
    if (!container) return;

    const scriptSrc =
      "https://unpkg.com/@splinetool/viewer@1.12.4/build/spline-viewer.js";

      const createViewer = () => {
      // avoid creating duplicate viewers inside the same container
      if (container.querySelector("spline-viewer")) return;
      el = document.createElement("spline-viewer");
      el.setAttribute(
        "url",
        "https://prod.spline.design/u9VYONEnQyu7Svfo/scene.splinecode"
      );
      el.style.width = "100%";
      el.style.height = "100%";
      el.style.transformOrigin = "center top";
      // default scale; will be adjusted responsively
      el.style.transform = "scale(1.15)";
      // ensure the element itself doesn't cause overflow
      el.style.display = "block";
      el.style.maxWidth = "100%";
      container.appendChild(el);
    };

    const applyScale = () => {
      try {
        const v = container.querySelector("spline-viewer");
        if (!v) return;
        const w = window.innerWidth;
        // Larger on mobile, moderate on tablet, modest on desktop to avoid overlap
        let scale = 1.05; // desktop default
        if (w < 640) scale = 1.15; // mobile: make it noticeably larger
        else if (w < 1024) scale = 1.1; // tablet
        v.style.transform = `scale(${scale})`;
      } catch (e) {}
    };

    // If the script is already in the document, reuse it
    let existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existingScript) {
      if (customElements.get("spline-viewer")) {
        createViewer();
        applyScale();
      } else {
        existingScript.addEventListener(
          "load",
          () => {
            createViewer();
            applyScale();
          },
          { once: true }
        );
      }
    } else {
      if (customElements.get("spline-viewer")) {
        createViewer();
        applyScale();
      } else {
        const s = document.createElement("script");
        s.type = "module";
        s.src = scriptSrc;
        s.addEventListener(
          "load",
          () => {
            createViewer();
            applyScale();
          },
          { once: true }
        );
        document.head.appendChild(s);
      }
    }

    // update scale on resize
    window.addEventListener("resize", applyScale);

    return () => {
      try {
        window.removeEventListener("resize", applyScale);
        if (el && container.contains(el)) container.removeChild(el);
      } catch (e) {}
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto overflow-x-hidden`}>
      <div
        className={`absolute inset-0 top-[170px] z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Defaa</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            software enginner student. <br className='sm:block hidden'/> 
            even i don't really know who am i actually
          </p>
        </div>
      </div>

      <div className='absolute left-0 right-0 flex justify-center items-start top-[260px] sm:top-[300px] lg:top-[320px] z-0 pointer-events-auto overflow-hidden'>
        <div ref={viewerRef} className='w-full max-w-7xl h-[520px] sm:h-[480px] lg:h-[560px] mx-auto overflow-hidden' />
      </div>
    </section>
  );
};

export default Hero;
