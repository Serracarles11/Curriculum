// src/lib/smoothScroll.ts
'use client';

import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: any = null;

export function initSmoothScroll() {
  // evita crear Lenis dos veces
  if (lenisInstance) return lenisInstance;

  const lenis = new Lenis({
    lerp: 0.08,       // suavidad (0–1, cuanto más cerca de 0 más suave)
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // avisar a ScrollTrigger cuando haya scroll
  lenis.on('scroll', () => {
    ScrollTrigger.update();
  });

  lenisInstance = lenis;
  return lenis;
}
