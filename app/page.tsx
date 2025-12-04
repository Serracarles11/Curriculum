'use client';

import { useEffect, useRef } from 'react';
import ShapeBlur from '../components/ShapeBlur'; // 👈 ajusta la ruta si está en otra carpeta

import Shuffle from '@/components/ui/shadcn-io/shuffle';
import Particles from '@/components/Particles';
import Right3DColumn from '@/components/Right3DColumn';
import LogoLoop from '@/components/LogoLoop';
import { setupHeroScroll } from '@/src/lib/gsapanimations';
import { initSmoothScroll } from '@/src/lib/smothscroll';
import CurvedLoop from '../components/CurvedLoop';
import TextType from '../components/TextType';
import BasicTransitionShowcase from '../components/BasicTransitionShowcase';
import Image from 'next/image';




type Project = {
  title: string;
  description: string;
  tech: string[];
  year?: string;
  role?: string;
  liveUrl?: string;
  githubUrl?: string;
};

// 🔧 Añade aquí tus proyectos (cambia estos ejemplos por los tuyos)
const projects: Project[] = [
  {
    title: 'Aplicacion Tigres en Peligro de extincion',
    description:
      'Aplicacion creada sobre los tigres en peligro de extincion.',
    tech: ['Next.js', 'React', 'TypeScript', 'GSAP', 'Tailwind CSS'],
    year: '2025',
    role: 'Proyecto personal',
    liveUrl: 'https://aplicacion-animales.vercel.app/', 
    githubUrl: 'https://github.com/Serracarles11/aplicacionAnimales.git', 
  },
  {
    title: 'Proyecto Clase',
    description:
      'Esta web es la parte que me tocaba hacer a mi del proyexto web, la cual trataba en una pagina dond ela gente podia ver y subir videos, todo linkado con supabase.',
    tech: ['Next', 'TypeScript', 'Supabase', 'Shadcn'],
    year: '2025',
    role: 'Proyecto académico',
    liveUrl: 'https://proyecto-clase-beta.vercel.app/',
    githubUrl: 'https://github.com/Serracarles11/proyecto-clase.git',
  },

];

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
          particleColors={['#F2F2F2', '#E5F4FF']}
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
      <section className="w-full min-h-screen h-[80%] grid place-items-center text-[#E5F4FF]">
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
          <div className="hero-name justify-self-start rounded-[3rem] p-6 text-[#E5F4FF]">
            <div className="space-y-4 text-left">
              <div>
                <TextType 
                  text={["Carles Serra Orvay", "FullStack", "Developer"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  style={{ fontSize: "5em" }}

                />
              </div>


              {/* Tagline */}
              <p className="max-w-xl text-sm md:text-base text-[#E5F4FF]/80">
                Soy Carles Serra Orvay, y me encanta todo lo relacionado con la programacion web y de su diseño.
              </p>
            </div>
          </div>

          {/* Columna derecha: objeto 3D */}
          <div className="hero-3d flex items-center justify-center w-full h-[26rem] md:h-[32rem] rounded-[2rem]">
            <Right3DColumn />
          </div>
        </div>
                <h2 className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#E5F4FF]/80">
          Tech Stack Principal
        </h2>
        <div
          className="rounded-3xl p-4 text-[#E5F4FF] w-full relative z-10 mx-auto mt-10 max-w-3xl px-4 pb-10"
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

      {/* Carrusel de logos tech (debajo del hero) */}
      <section className="">

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


            {/* PROYECTOS */}
            {/* PROYECTOS */}
      <section
        id="projects"
        className="relative mx-auto mt-24 max-w-5xl px-6 text-slate-100"
      >
        {/* Título / Intro */}
        <header className="mb-8 flex items-baseline justify-between gap-4">
          <div>
            <p className="text-xl font-semibold uppercase tracking-[0.35em] text-sky-400/70">
              Mis Proyectos
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-sky-100">
              
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              Algunos proyectos donde he aplicado animaciones, UI limpia y lógica
              frontend para crear experiencias interactivas.
            </p>
          </div>

        </header>

        {/* TIMELINE */}
        <div className="relative mt-6">
          {/* Línea vertical del timeline */}
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-sky-500/60 via-sky-500/10 to-transparent" />

          <div className="space-y-6 pl-10">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-sky-500/20 bg-slate-950/70 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.75)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1.5 hover:border-sky-400/70 hover:bg-slate-950/95"
              >
                {/* Punto del timeline */}
                <div className="absolute -left-[0.625rem] top-7 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_0_6px_rgba(56,189,248,0.35)] transition group-hover:bg-sky-300" />

                {/* Glow suave */}
                <div className="pointer-events-none absolute inset-0 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-40 bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.4),transparent_55%)]" />

                <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center">
                  {/* Info principal */}
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.18em] text-sky-300/70">
                      <span>
                        {project.year ?? `0${index + 1}`}
                      </span>
                      <span className="h-[1px] flex-1 bg-sky-500/30" />
                      <span>{project.role ?? 'Proyecto'}</span>
                    </div>

                    <h3 className="text-base font-semibold text-sky-100">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-300/90">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech + enlaces */}
                  <div className="flex flex-col items-start gap-3 md:items-end md:text-right">
                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-sky-500/35 bg-slate-950/90 px-2.5 py-0.5 text-[0.65rem] font-medium text-sky-100/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Botones de links */}
                    <div className="flex flex-wrap gap-2">
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full bg-sky-500/90 px-3 py-1 text-[0.7rem] font-medium text-slate-950 shadow-md shadow-sky-900/40 transition hover:bg-sky-400"
                        >
                          <span>Ver Web</span>
                        </a>
                      )}

                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-sky-500/60 bg-slate-950/80 px-3 py-1 text-[0.7rem] font-medium text-sky-100 transition hover:bg-slate-900 hover:border-sky-400"
                        >
                          <span>GitHub</span>
                          <span className="text-xs">★</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contact"
        className="relative z-10 mx-auto max-w-6xl px-4 pb-24 md:pb-32"
      >
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Columna izquierda: texto + redes + formulario */}
          <div>
            <h2 className="mb-4 mt-12 text-2xl font-semibold tracking-tight text-[#E5F4FF] md:text-3xl">
              ¿Hablamos?
            </h2>

            <p className="mb-6 text-sm text-[#E5F4FF]/75 md:text-base">
              Si quieres contarme tu idea, hablar sobre una posible colaboración,
              prácticas o simplemente comentar sobre desarrollo web, estaré encantado
              de leerte.
            </p>

            {/* Redes / datos directos */}
            <div className="mb-8 space-y-3 text-sm text-[#E5F4FF]/90 md:text-base">
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span className="font-semibold">Email:</span>{' '}
                <a
                  href="mailto:Carlesserra685@gmail.com"
                  className="underline decoration-sky-300/70 underline-offset-4 hover:text-sky-300"
                >
                  Carlesserra685@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span className="font-semibold">GitHub:</span>{' '}
                <a
                  href="https://github.com/Serracarles11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-sky-300/70 underline-offset-4 hover:text-sky-300"
                >
                  github.com/Serracarles11
                </a>
              </p>

              <p className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span className="font-semibold">LinkedIn:</span>{' '}
                <a
                  href="https://www.linkedin.com/in/carles-serra-orvay-197a21366/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-sky-300/70 underline-offset-4 hover:text-sky-300"
                >
                  linkedin.com/in/carles-serra-orvay-197a21366
                </a>
              </p>
            </div>

            {/* Formulario que abre Gmail / cliente de correo */}
            <form
              action="mailto:Carlesserra685@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-4 rounded-2xl border border-sky-500/20 bg-slate-950/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)] backdrop-blur-md"
            >
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/80">
                  Nombre
                </label>
                <input
                  type="text"
                  name="Nombre"
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-sky-400/30 placeholder:text-slate-400 focus:border-sky-400 focus:ring"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/80">
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-sky-400/30 placeholder:text-slate-400 focus:border-sky-400 focus:ring"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/80">
                  Asunto
                </label>
                <input
                  type="text"
                  name="Asunto"
                  className="w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-sky-400/30 placeholder:text-slate-400 focus:border-sky-400 focus:ring"
                  placeholder="Sobre qué te gustaría hablar"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/80">
                  Mensaje
                </label>
                <textarea
                  name="Mensaje"
                  className="min-h-[120px] w-full rounded-xl border border-slate-700/70 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-sky-400/30 placeholder:text-slate-400 focus:border-sky-400 focus:ring"
                  placeholder="Cuéntame en qué estás pensando..."
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-sky-500 px-6 py-2 text-sm font-medium text-slate-50 shadow-md shadow-sky-900/40 transition hover:bg-sky-400"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Columna derecha: imagen personal */}
          <div className="mt-8 flex justify-center md:mt-16">
            <div className="relative w-full max-w-sm">
              {/* Glow exterior */}
              <div
                className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sky-400/60 via-slate-900/60 to-sky-600/60 opacity-70 blur-xl"
                aria-hidden="true"
              />
              {/* Card con la foto */}
              <div className="relative overflow-hidden rounded-[2rem] border border-sky-500/40 bg-slate-950/90 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
                <Image
                  src="/PHOTO-2024-05-17-18-53-18.JPG"
                  alt="Carles Serra Orvay"
                  width={600}
                  height={700}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4">
                  <p className="text-sm font-semibold text-sky-50">
                    Carles Serra Orvay
                  </p>
                  <p className="text-xs text-sky-200/80">
                    FullStack Developer · React · Next.js
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
