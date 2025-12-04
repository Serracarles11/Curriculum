// src/components/BasicTransitionShowcase.tsx
'use client';

import React from 'react';
import styles from '../styles/basicTransition.module.css'; // 👈 ruta al CSS module

const BasicTransitionShowcase: React.FC = () => {
  return (
    <section className="relative mx-auto mt-24 max-w-5xl px-6">
      {/* Cabecera en tu estilo */}
      <header className="mb-6 flex items-baseline justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400/70">
            Experimento visual
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-sky-100">
            Basic Transition
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            Un pequeño efecto inspirado en el sandbox de transición básica,
            integrado en el mismo estilo que el resto de la página.
          </p>
        </div>
      </header>

      {/* Contenedor que usa el CSS module del sandbox */}
      <div className={`${styles.container} rounded-[2rem] border border-sky-500/20 bg-slate-950/70 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)] backdrop-blur-md`}>
        {/* Ejemplo de estructura; adapta las clases según tu CSS */}
        <div className={styles.panel}>
          <div className={styles.box}>
            <span className={styles.label}>Estado A</span>
          </div>
          <div className={styles.box}>
            <span className={styles.label}>Estado B</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicTransitionShowcase;
