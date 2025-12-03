# Repository Guidelines

## Project Structure & Module Organization
- `app/page.tsx`: Pagina principal del curriculum; usa estructura semantica clara (`header`, `main`, `section`, `nav`, `footer`).
- `app/globals.css`: Estilos globales y utilidades responsive; centraliza variables de color, tipografia y espaciado.
- `components/`: Piezas reutilizables (navegacion, particulas, carruseles); evita duplicar logica o estilos.
- `public/`: Imagenes y archivos estaticos; optimiza peso antes de añadirlos.

## Build, Test, and Development Commands
- `npm install`: Instala dependencias (usa npm para respetar `package-lock.json`).
- `npm run dev`: Servidor local con recarga en http://localhost:3000 para revisar diseño y accesibilidad.
- `npm run build`: Comprueba el bundle de produccion; ejecútalo antes de publicar cambios.
- `npm run lint`: Revisa estilo y errores comunes; corrige advertencias antes del PR.

## Coding Style & Naming Conventions
- HTML/CSS/JS sin frameworks pesados: prioriza semantica, CSS moderno (flex/grid, clamp, custom properties) y JS ligero.
- Indentacion de 2 espacios; importa librerias antes de rutas locales; elimina codigo muerto y props sin uso.
- CSS: clases en `kebab-case` y uso de tokens globales; evita estilos inline salvo casos puntuales.
- Componentes/archivos: `PascalCase` para componentes, `useThing.ts` para hooks, utilidades en `camelCase`.
- Animaciones y efectos: respeta `prefers-reduced-motion`; usa transiciones simples y tiempos cortos para mantener el diseño limpio.

## Testing Guidelines
- No hay suite automatizada: realiza smoke tests tras cambios visuales y valida el layout entre 320px y escritorio.
- Ejecuta `npm run build` como guardia de regresiones; documenta pruebas manuales clave (teclado, lector de pantalla).
- Si añades tests, colocalos junto al modulo (`component.test.tsx`) y describe el comportamiento esperado.

## Commit & Pull Request Guidelines
- Mensajes cortos en imperativo (`feat: mejora hero`, `fix: foco en navbar`); agrupa cambios relacionados.
- Explica siempre los cambios importantes: que problema resuelven, por que la solucion es ligera/semantica y que impacto tiene en accesibilidad.
- Incluye capturas o GIFs antes/despues para variaciones de UI y anota comandos ejecutados (lint/build).
- Asegura que no añades dependencias pesadas sin justificarlo y que el contenido mantiene contraste, jerarquia de titulos y foco visible.

## Accesibilidad y Semantica
- Mantén jerarquia de encabezados (unico `h1`), `nav` con `aria-label`, y `alt`/`aria-label` en imagenes o iconos interactivos.
- Garantiza navegacion por teclado (orden logico, focos visibles) y contrastes AA; evita texto incrustado en imagenes.
- Evita usar `<div>` para elementos interactivos; prefiere `<button>`, `<a>`, `<form>` y roles adecuados.
