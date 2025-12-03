// src/lib/gsapanimations.ts
'use client';
/// <reference lib="dom" />

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Anima el hero mientras haces scroll:
 * - pin del hero
 * - entra el nombre y el 3D
 * - luego cambia el 3D y atenúa el nombre
 */
export function setupHeroScroll(container) {
  if (!container) return { revert: () => {} };

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=2000',
        scrub: true,
        pin: true,
      },
    });

    // 0) Fade-in inicial del hero
    tl.from(container, {
      opacity: 0,
      y: 40,
      duration: 1,
      markers: true,
    });

    // 1) entra el nombre
    tl.from(
      '.hero-name',
      {
        x: -150,
        opacity: 0,
        duration: 1,
      },
      '<'
    );

    // 2) entra el bloque 3D
    tl.from(
      '.hero-3d',
      {
        x: 150,
        opacity: 0,
        scale: 0.7,
        duration: 1,
      },
      '<'
    );

    // 3) el 3D cambia un poco
    tl.to('.hero-3d', {
      scale: 0.85,
      borderRadius: '2rem',
      duration: 1,
    });

    // 4) el nombre se atenúa
    tl.to(
      '.hero-name',
      {
        opacity: 0.25,
        duration: 1,
      },
      '<'
    );
  }, container);

  return ctx;
}
