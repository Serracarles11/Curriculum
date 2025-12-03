'use client';

import { useEffect, useRef } from 'react';

import Shuffle from '@/components/ui/shadcn-io/shuffle';
import Particles from '@/components/Particles';
import Right3DColumn from '@/components/Right3DColumn';
import LogoLoop from '@/components/LogoLoop';
import { setupHeroScroll } from '@/src/lib/gsapanimations';
import { initSmoothScroll } from '@/src/lib/smothscroll';
import CurvedLoop from '../components/CurvedLoop';
import TextType from '../components/TextType';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import SplitText from '../components/SplitText';

type Skill = {
  title: string;
  description: string;
  tag?: string;
};

const skills: Skill[] = [
  {
    title: 'HTML',
    description: 'Maquetación semántica, accesible y preparada para SEO.',
    tag: 'Base',
  },
  {
    title: 'CSS / SCSS',
    description: 'Layouts modernos, animaciones suaves y diseño responsive.',
    tag: 'UI',
  },
  {
    title: 'JavaScript',
    description: 'Lógica de interacción, estados y experiencias dinámicas.',
    tag: 'Logic',
  },
  {
    title: 'React',
    description: 'Componentes reutilizables y interfaces reactivas.',
    tag: 'SPA',
  },
  {
    title: 'TypeScript',
    description: 'Tipado estricto para proyectos frontend escalables.',
    tag: 'DX',
  },
  {
    title: 'GSAP',
    description: 'Animaciones precisas integradas con la UI.',
    tag: 'Motion',
  },
  {
    title: 'Git / GitHub',
    description: 'Flujos de trabajo limpios y control de versiones.',
    tag: 'Team',
  },
  {
    title: 'UI / UX',
    description: 'Interfaces limpias centradas en la experiencia de usuario.',
    tag: 'UX',
  },
];

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

// logos del carrusel
const techLogos = [
  { node: <SiReact />, title: 'React' },
  { node: <SiNextdotjs />, title: 'Next.js' },
  { node: <SiTypescript />, title: 'TypeScript' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS' },
];

export default function Page() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenis = initSmoothScroll();
    const ctx = setupHeroScroll(heroRef.current);

    return () => {
      ctx?.revert?.();
      lenis?.destroy?.();
    };
  }, []);

  return (
    <div className="relative min-h-[200vh] overflow-x-hidden">
      {/* Fondo de partículas fijo */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Particles
          className="h-full w-full"
          particleColors={['#F2F2F2', '#42628C']}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* HERO: Nombre + objeto 3D (pinned con ScrollTrigger) */}
      <section className="w-full min-h-screen h-[80%] grid place-items-center text-[#42628C]">
        <SplitText
          text={'SCROLL DOWN!'}
          className="text-8xl font-semibold text-center whitespace-pre-line"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <CurvedLoop
          marqueeText="Carles ✦ Serra ✦ Orvay ✦ FULL - STACK ✦"
          speed={2}
          curveAmount={500}
          direction="right"
          interactive={true}
          className="custom-text-style"
        />
      </section>

      <section className="relative z-10">
        <div
          ref={heroRef}
          className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 md:grid-cols-2 md:px-8"
        >
          {/* Columna izquierda: Nombre + rol + tagline */}
          <div className="hero-name justify-self-start rounded-[3rem] p-6 text-[#42628C]">
            <div className="space-y-4 text-left">
              <div>
                <TextType
                  text={['Carles Serra Orvay', 'FULLSTACK Developer']}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  style={{ fontSize: '5rem' }}
                />
              </div>

              {/* Subtítulo */}
              <p className="text-lg font-medium text-[#42628C]/90">Frontend Developer</p>

              {/* Tagline */}
              <p className="max-w-xl text-sm md:text-base text-[#42628C]/80">
                Fullstack Developer con foco en frontend. Diseño interfaces limpias,
                animadas y centradas en la experiencia de usuario y su comodidad.
              </p>
            </div>
          </div>

          {/* Columna derecha: objeto 3D */}
          <div className="hero-3d flex items-center justify-center w-full h-[26rem] md:h-[32rem] rounded-[2rem]">
            <Right3DColumn />
          </div>
        </div>
      </section>

      {/* Carrusel de logos tech (debajo del hero) */}
      <section className="relative z-10 mx-auto mt-10 max-w-3xl px-4 pb-10">
        <h2 className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#253C59]/80">
          Tech Stack Principal
        </h2>
        <div
          className="rounded-3xl p-4 text-[#253C59] w-full"
          style={{ height: '160px', position: 'relative', overflow: 'hidden' }}
        >
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={40}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            ariaLabel="Technology stack"
          />
        </div>
      </section>

      {/* SKILLS / TECH STACK */}
      <section className="relative mx-auto mt-24 max-w-5xl px-6 text-slate-100">
        {/* Título / Intro */}
        <header className="mb-8 flex items-baseline justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400/70">
              Stack principal
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-sky-100">
              Lo que uso para construir
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              Tecnologías que utilizo para crear interfaces limpias, animadas y
              centradas en la experiencia de usuario.
            </p>
          </div>

          <span className="hidden text-xs text-slate-500 md:inline">
            8 tecnologías · Frontend &amp; tooling
          </span>
        </header>

        {/* GRID 4x2 */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-2xl border border-sky-500/15 bg-slate-950/40 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.75)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-sky-400/60 hover:bg-slate-950/80"
            >
              {/* Glow espacial */}
              <div className="pointer-events-none absolute inset-px rounded-2xl bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.45),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <header className="relative z-10">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-sky-100">{skill.title}</h3>

                  {skill.tag && (
                    <span className="rounded-full border border-sky-400/40 bg-slate-950/70 px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-sky-200/80">
                      {skill.tag}
                    </span>
                  )}
                </div>
              </header>

              <p className="relative z-10 mt-2 text-xs leading-relaxed text-slate-300/85">
                {skill.description}
              </p>

              <footer className="relative z-10 mt-3 flex items-center justify-between text-[0.65rem] text-slate-400/80">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400/80 transition group-hover:bg-sky-300" />
                  {index < 4 ? 'Frontend' : 'Tooling'}
                </span>
                <span className="font-mono opacity-60">0{index + 1}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      {/* EDUCACIÓN */}
      <section
        id="education"
        className="relative z-10 mx-auto max-w-4xl px-4 pb-16 md:pb-24"
      >
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#253C59] md:text-3xl">
          Educación
        </h2>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white/60 p-5 shadow-sm shadow-slate-900/5">
            <h3 className="text-base font-semibold text-[#253C59]">
              Bachillerato – IES Algarb (Ibiza)
            </h3>
            <p className="mt-2 text-sm text-[#253C59]/85 md:text-sm">
              Formación general que me ayudó a desarrollar pensamiento crítico,
              organización y disciplina de estudio.
            </p>
          </div>

          <div className="rounded-2xl bg-white/60 p-5 shadow-sm shadow-slate-900/5">
            <h3 className="text-base font-semibold text-[#253C59]">
              Ciclo Formativo de Grado Superior – Desarrollo de Aplicaciones Web
              (DAW) – IFP
            </h3>
            <p className="mt-2 text-sm text-[#253C59]/85 md:text-sm">
              Formación técnica centrada en desarrollo web, tanto frontend como
              backend, bases de datos, despliegue y buenas prácticas. Aquí es donde
              empecé a tomármelo en serio como camino profesional.
            </p>
          </div>
        </div>
      </section>

      {/* LO QUE PUEDO APORTAR */}
      <section
        id="value"
        className="relative z-10 mx-auto max-w-4xl px-4 pb-16 md:pb-24"
      >
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#253C59] md:text-3xl">
          Lo que puedo aportar
        </h2>
        <p className="mb-6 text-sm text-[#253C59]/85 md:text-base">
          No busco vender servicios como freelance por ahora, pero sí aportar valor
          en equipos, proyectos y prácticas. Estas son algunas cosas en las que puedo
          ayudar:
        </p>

        <ul className="space-y-3 text-sm text-[#253C59]/90 md:text-base">
          <li>
            <span className="font-semibold">Interfaces modernas y claras:</span>{' '}
            maquetación con React, Next.js y Tailwind, cuidando tipografía, espaciado
            y jerarquía visual.
          </li>
          <li>
            <span className="font-semibold">Animaciones y microinteracciones:</span>{' '}
            uso de GSAP y animaciones en React para dar vida a la interfaz sin perder
            rendimiento.
          </li>
          <li>
            <span className="font-semibold">
              Experiencias interactivas y 3D ligeras:
            </span>{' '}
            integración de modelos con Three.js / React Three Fiber.
          </li>
          <li>
            <span className="font-semibold">Código mantenible:</span> componentes
            reutilizables, organización del proyecto y uso de TypeScript para evitar
            errores tontos.
          </li>
          <li>
            <span className="font-semibold">Ganas de aprender:</span> actitud
            proactiva, curiosidad y muchas ganas de seguir mejorando junto a gente
            con experiencia.
          </li>
        </ul>
      </section>

      {/* EXTRAS / HOBBIES + CV */}
      <section
        id="extras"
        className="relative z-10 mx-auto max-w-4xl px-4 pb-16 md:pb-24"
      >
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#253C59] md:text-3xl">
          Más sobre mí
        </h2>

        <p className="mb-4 text-sm text-[#253C59]/85 md:text-base">
          Además del desarrollo web, hay tres cosas que me acompañan casi siempre:
        </p>

        <ul className="mb-8 space-y-2 text-sm text-[#253C59]/90 md:text-base">
          <li>
            <span className="font-semibold">Fútbol</span> – tanto jugar como
            seguirlo, me ayuda a desconectar y a trabajar en equipo.
          </li>
          <li>
            <span className="font-semibold">Gimnasio</span> – me gusta entrenar y
            cuidar la parte física, para equilibrar tantas horas de pantalla.
          </li>
          <li>
            <span className="font-semibold">Videojuegos</span> – me inspiran a nivel
            visual y de diseño de experiencias, y muchas veces me dan ideas para
            interfaces y animaciones.
          </li>
        </ul>

        <div className="flex flex-wrap gap-4">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#253C59] px-6 py-2 text-sm font-medium text-slate-50 shadow-md shadow-slate-900/30 transition hover:bg-[#1a2a3f]"
          >
            Descargar CV en PDF
          </a>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-4xl px-4 pb-24 md:pb-32"
      >
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#253C59] md:text-3xl">
          ¿Hablamos?
        </h2>

        <p className="mb-6 text-sm text-[#253C59]/85 md:text-base">
          Si quieres contarme tu idea, hablar sobre una posible colaboración,
          prácticas o simplemente comentar sobre desarrollo web, estaré encantado de
          leerte.
        </p>

        {/* Datos directos */}
        <div className="mb-8 space-y-1 text-sm text-[#253C59]/90 md:text-base">
          <p>
            <span className="font-semibold">Email:</span>{' '}
            <a
              href="mailto:Carlesserra685@gmail.com"
              className="underline decoration-[#42628C]/60 underline-offset-4 hover:text-[#42628C]"
            >
              Carlesserra685@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold">GitHub:</span>{' '}
            <a
              href="https://github.com/Serracarles11"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#42628C]/60 underline-offset-4 hover:text-[#42628C]"
            >
              github.com/Serracarles11
            </a>
          </p>
          <p>
            <span className="font-semibold">LinkedIn:</span>{' '}
            <a
              href="https://www.linkedin.com/in/carles-serra-orvay-197a21366/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#42628C]/60 underline-offset-4 hover:text-[#42628C]"
            >
              linkedin.com/in/carles-serra-orvay-197a21366
            </a>
          </p>
        </div>

        {/* Formulario simple */}
        <form className="space-y-4 rounded-2xl bg-white/60 p-6 shadow-sm shadow-slate-900/10">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-[#253C59]/80">
              Nombre
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-300/70 bg-white px-3 py-2 text-sm outline-none ring-[#42628C]/30 focus:ring"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-[#253C59]/80">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-xl border border-slate-300/70 bg-white px-3 py-2 text-sm outline-none ring-[#42628C]/30 focus:ring"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-[#253C59]/80">
              Mensaje
            </label>
            <textarea
              className="min-h-[120px] w-full rounded-xl border border-slate-300/70 bg-white px-3 py-2 text-sm outline-none ring-[#42628C]/30 focus:ring"
              placeholder="Cuéntame en qué estás pensando..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-[#253C59] px-6 py-2 text-sm font-medium text-slate-50 shadow-md shadow-slate-900/30 transition hover:bg-[#1a2a3f]"
          >
            Enviar mensaje
          </button>
        </form>
      </section>
    </div>
  );
}
