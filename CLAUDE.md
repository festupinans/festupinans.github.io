# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro 6 SSR portfolio site (Node.js via `@astrojs/netlify`) for Francisco Estupiñán — XR developer. Deployed via GitHub Actions on push to `main`.

## Commands

```sh
npm run dev      # dev server at localhost:4321
npm run build    # production build → dist/
npm run preview  # preview production build
npm run astro -- --help  # CLI tools (add, check, etc.)
```

## Architecture

### Page Structure
- `src/layouts/Layout.astro` — root HTML shell. Global styles, fonts (Inter), scrollbar, selection colors (accent: `#ff3914`).
- `src/pages/index.astro` — single page composition. Imports all sections in order (SobreMi → Servicios → Experiencia → Educacion → Proyectos → Contacto). `ThreeScene` renders fixed background behind all content. `AiAgent` is commented out.

### Section Components
Each lives in `src/components/` and is self-contained (Astro + scoped styles + inline `<script>`).

### 3D Background (`ThreeScene.astro`)
- Three.js with `BufferGeometry` + `Points` particle system (not Mesh)
- Particles sampled from 10 geometries via `MeshSurfaceSampler`
- Post-processing: `UnrealBloomPass` via `EffectComposer`
- GSAP for explode/reassemble animation on click
- Mouse repulsion effect via raycasting in local space
- Groups rotate independently; main group tilts toward mouse
- OrbitControls for zoom/rotate
- Loads `/models/Susan.glb` as additional shape target

### AI Agent (currently disabled/commented)
- `AiAgent.astro` — grid layout: `AiCore3D` (left) + `AiChat` (right)
- `AiCore3D.astro` — 3D orb/animation
- `AiChat.astro` — chat UI (React/Preact or vanilla)
- `aiSpeech.ts` — Web Speech API wrappers: `createSpeechRecognition`, `createSpeechSynth`
- `src/pages/api/ai-chat.ts` — API endpoint (SSR, no prerender). Proxies to OpenRouter. Requires `OPENROUTER_API_KEY` or `IA_API_KEY` env var.

### Data Layer
- `src/data/` — `.ts` files exporting typed data: `experiencias.ts`, `empresas.ts`, `tecnologias.ts`, `redes.ts`, `proyectos.ts`
- `src/data/ai-knowledge.txt` — system prompt for AI chat (loaded as raw asset)

### NavBar (`NavBar.astro`)
- Fixed header, backdrop blur
- Scroll spy → `active` class on nav links
- Mobile: hamburger → slide-in drawer with overlay
- Smooth scroll to sections (offset: 70px for navbar height)

## Env Variables

| Variable | Description |
|---|---|
| `OPENROUTER_API_KEY` | API key for AI chat endpoint |
| `IA_API_KEY` | Alias for the same |

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) deploys on push to `main` via Netlify. Build output in `dist/`.
