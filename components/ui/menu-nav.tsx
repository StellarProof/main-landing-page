"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

export function MenuNav() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
        gsap.defaults({ ease: "main", duration: 0.7 });
      }
    } catch (e) {
      console.warn("CustomEase failed to load, falling back to default.", e);
      gsap.defaults({ ease: "power2.out", duration: 0.7 });
    }
    const ctx = gsap.context(() => {
      const menuEl = containerRef.current!.querySelector(".menu-content");
      const bgPanelEls = containerRef.current!.querySelectorAll(".backdrop-layer");
      if (menuEl) gsap.set(menuEl, { xPercent: 120 });
      if (bgPanelEls.length) gsap.set(bgPanelEls, { xPercent: 101 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Menu Open/Close Animation Effect
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper");
      const menu = containerRef.current!.querySelector(".menu-content");
      const overlay = containerRef.current!.querySelector(".overlay");
      const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer");
      const menuLinks = containerRef.current!.querySelectorAll(".nav-link");
      const fadeTargets = containerRef.current!.querySelectorAll("[data-menu-fade]");

      const menuButton = containerRef.current!.querySelector(".nav-close-btn");
      const menuButtonTexts = menuButton?.querySelectorAll("p") ?? [];

      const tl = gsap.timeline();

      if (isMenuOpen) {
        if (navWrap) navWrap.setAttribute("data-nav", "open");

        tl.set(navWrap, { display: "block" })
          .set(menu, { xPercent: 0 }, "<")
          .fromTo(menuButtonTexts, { yPercent: 0 }, { yPercent: -100, stagger: 0.2 })
          .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
          .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
          .fromTo(menuLinks, { yPercent: 140, rotate: 10 }, { yPercent: 0, rotate: 0, stagger: 0.05 }, "<+=0.35");

        if (fadeTargets.length) {
          tl.fromTo(fadeTargets, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" }, "<+=0.2");
        }
      } else {
        if (navWrap) navWrap.setAttribute("data-nav", "closed");

        tl.to(overlay, { autoAlpha: 0 })
          .to(menu, { xPercent: 120 }, "<")
          .to(menuButtonTexts, { yPercent: 0 }, "<")
          .set(navWrap, { display: "none" });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div ref={containerRef}>
      <style>{`
        .site-header-wrapper { position: fixed; inset-inline: 0; top: 0; z-index: 60; }
        .header { padding: 1.25rem 1.5rem; }
        @media (min-width: 640px) { .header { padding: 1.5rem 2.5rem; } }
        .is--full { display: flex; width: 100%; }
        .nav-row { display: flex; align-items: center; justify-content: space-between; width: 100%; }
        .nav-logo-row { display: block; width: 132px; height: auto; }
        .nav-row__right { display: flex; align-items: center; gap: 1.25rem; }
        .nav-close-btn {
          display: flex; align-items: center; gap: 0.6rem;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.18);
          padding: 0.5rem 1.1rem; border-radius: 9999px; color: #fff; cursor: pointer;
        }
        .nav-close-btn:hover { border-color: rgba(6,182,212,0.6); }
        .menu-button-text { position: relative; height: 1.1em; width: 3.4em; overflow: hidden; }
        .menu-button-text p { position: absolute; inset: 0; margin: 0; font-size: 0.85rem; white-space: nowrap; }
        .menu-button-text p:last-child { transform: translateY(100%); }

        .nav-overlay-wrapper { position: fixed; inset: 0; z-index: 50; display: none; }
        .overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(6px); cursor: pointer; opacity: 0; visibility: hidden; }
        .menu-content {
          position: absolute; top: 0; right: 0; height: 100%; width: 100%; max-width: 34rem;
          overflow: hidden;
        }
        .menu-bg { position: absolute; inset: 0; }
        .backdrop-layer { position: absolute; inset: 0; background: #0a0a0a; }
        .backdrop-layer.first { background: #121212; }
        .backdrop-layer.second { background: #0c0c0c; }

        .menu-content-wrapper { position: relative; z-index: 1; height: 100%; display: flex; align-items: center; padding: 2rem; }
        @media (min-width: 640px) { .menu-content-wrapper { padding: 3rem; } }
        .menu-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.25rem; }
        .menu-list-item { overflow: hidden; }
        .nav-link { position: relative; display: block; padding: 0.6rem 0; text-decoration: none; }
        .nav-link-text { margin: 0; font-size: clamp(1.75rem, 5vw, 2.75rem); font-weight: 600; color: #fff; }
        .nav-link:hover .nav-link-text { color: #06B6D4; }
      `}</style>

      <div className="site-header-wrapper">
        <header className="header">
          <div className="is--full">
            <nav className="nav-row">
              <a href="/" aria-label="home" className="nav-logo-row">
                <img src="/StellarProof-logo.svg" alt="StellarProof" className="h-auto w-full" />
              </a>
              <div className="nav-row__right">
                <button className="nav-close-btn" onClick={toggleMenu}>
                  <div className="menu-button-text">
                    <p>Menu</p>
                    <p>Close</p>
                  </div>
                </button>
              </div>
            </nav>
          </div>
        </header>
      </div>

      <section className="fullscreen-menu-container">
        <div data-nav="closed" className="nav-overlay-wrapper">
          <div className="overlay" onClick={closeMenu}></div>
          <nav className="menu-content">
            <div className="menu-bg">
              <div className="backdrop-layer first"></div>
              <div className="backdrop-layer second"></div>
              <div className="backdrop-layer"></div>
            </div>

            <div className="menu-content-wrapper">
              <ul className="menu-list">
                <li className="menu-list-item">
                  <a href="/docs" className="nav-link">
                    <p className="nav-link-text">Docs</p>
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="#whitepaper" className="nav-link">
                    <p className="nav-link-text">Whitepaper</p>
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="#waitlist" className="nav-link" onClick={closeMenu}>
                    <p className="nav-link-text">Waitlist</p>
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="#" className="nav-link">
                    <p className="nav-link-text" data-menu-fade>
                      Blog
                    </p>
                  </a>
                </li>
                <li className="menu-list-item">
                  <a href="mailto:stellarprooforg@gmail.com" className="nav-link">
                    <p className="nav-link-text">Contact us</p>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
