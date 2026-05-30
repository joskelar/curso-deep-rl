# 🤖 Aprendizaje por Refuerzo Profundo
### Curso en español para jóvenes de 13–16 años

> Adaptación del [Deep Reinforcement Learning Course de Hugging Face 🤗](https://huggingface.co/learn/deep-rl-course/) al español, pensada para estudiantes sin experiencia previa en Python ni Machine Learning. Mismos objetivos técnicos y prácticos que el curso original, con explicaciones más completas, ejemplos visuales y lenguaje accesible.

**Autor:** Jose Miguel Lara Rangel  
**Basado en:** Thomas Simonini, Omar Sanseviero, Sayak Paul, Edward Beeching (Hugging Face)

---

## 🗺️ Navegar el curso

Abre [`index.html`](./index.html) en tu navegador para ver el índice completo con el estado de cada capítulo.  
O entra directamente a cualquier slide desde la carpeta [`slides/`](./slides/).

---

## 📂 Estructura del repositorio

```
curso-deep-rl/
│
├── index.html                        ← Página de inicio: índice navegable de todos los capítulos
├── README.md                         ← Este archivo
│
├── slides/                           ← Presentaciones HTML (una por capítulo)
│   ├── capitulo_1_1_1_2.html         ✅ Cap 1.1 + 1.2: ¿Qué es RL? + Recompensas
│   └── ...                           (se irán agregando)
│
├── notebooks/                        ← Notebooks de Google Colab (.ipynb)
│   └── ...                           (se irán agregando junto a cada capítulo hands-on)
│
├── assets/
│   ├── css/
│   │   └── theme.css                 ← Sistema de diseño completo del curso (colores, fuentes, componentes)
│   ├── js/
│   │   └── reveal-config.js          ← Configuración global de Reveal.js (transiciones, atajos)
│   ├── static/
│   │   ├── diagrams/                 ← Diagramas originales creados para el curso
│   │   ├── hf_original/              ← Imágenes del curso original de HuggingFace
│   │   └── gifs/                     ← Animaciones y GIFs
│   └── template.html                 ← Plantilla base para crear nuevos capítulos
│
└── docs/
    ├── progreso.md                   ← Estado de avance por capítulo
    └── notas_editoriales.md          ← Decisiones de diseño y feedback recibido
```

---

## 🎯 Objetivo del curso

Al terminar este curso, el estudiante será capaz de:

- Explicar qué es el Aprendizaje por Refuerzo y en qué se diferencia de otros paradigmas de Machine Learning.
- Implementar Q-Learning desde cero con NumPy y entrenar agentes en entornos clásicos (FrozenLake, Taxi).
- Usar Stable-Baselines3 para entrenar agentes con algoritmos modernos (PPO, A2C, DQN).
- Entender la arquitectura de redes neuronales aplicadas a RL (Deep Q-Networks, Actor-Critic).
- Entrenar agentes en entornos visuales 3D con Unity ML-Agents (Huggy, SnowballTarget, SoccerTwos).
- Subir modelos entrenados al Hugging Face Hub y compartirlos con la comunidad.

Estos son exactamente los mismos objetivos del curso original de Hugging Face, sin excepción.

---

## 🗂️ Índice de capítulos

### Etapa 1 — Núcleo del Aprendizaje por Refuerzo

| Capítulo | Título | Unidad HF | Estado |
|---|---|---|---|
| 1.1 + 1.2 | ¿Qué es RL? · Recompensas y el Objetivo | Unit 1 | ✅ Listo |
| 1.3 | El Dilema: Exploración vs. Explotación | Unit 1 | ⏳ Pendiente |
| 1.4 | Políticas y Valores: Cómo Decide el Agente | Unit 1 | ⏳ Pendiente |
| 1.5 | ¡Manos a la obra! LunarLander 🌕 | Unit 1 Hands-on | ⏳ Pendiente |
| 1.6 | Huggy el Perro: RL en 3D 🐶 | Bonus Unit 1 | ⏳ Pendiente |
| 2.1 | Tablas de Valor: La Idea detrás de Q-Learning | Unit 2 | ⏳ Pendiente |
| 2.2 | La Ecuación de Bellman: Aprender del Futuro | Unit 2 | ⏳ Pendiente |
| 2.3 | Monte Carlo vs. Diferencias Temporales | Unit 2 | ⏳ Pendiente |
| 2.4 | Q-Learning: El Algoritmo Completo | Unit 2 | ⏳ Pendiente |
| 2.5 | ¡Manos a la obra! Q-Learning en FrozenLake ❄️ | Unit 2 Hands-on | ⏳ Pendiente |
| 2.6 | ¡Reto! Q-Learning en Taxi 🚖 | Unit 2 Hands-on | ⏳ Pendiente |

### Etapa 2 — Intermedio: Redes Neuronales al Rescate

| Capítulo | Título | Unidad HF | Estado |
|---|---|---|---|
| 3.1 | El Problema de Escala: Por Qué las Tablas No Alcanzan | Unit 3 | ⏳ Pendiente |
| 3.2 | Deep Q-Network (DQN) | Unit 3 | ⏳ Pendiente |
| 3.3 | Preprocesamiento de Imágenes y Frame Stacking | Unit 3 | ⏳ Pendiente |
| 3.4 | Demo: DQN Jugando Space Invaders 👾 | Unit 3 Hands-on | ⏳ Pendiente |
| 4.1 | Métodos de Política: Aprender a Actuar Directamente | Unit 4 | ⏳ Pendiente |
| 4.2 | Gradiente de la Política: La Intuición de REINFORCE | Unit 4 | ⏳ Pendiente |
| 4.3 | ¡Manos a la obra! REINFORCE en CartPole | Unit 4 Hands-on | ⏳ Pendiente |
| 5.1 | Unity ML-Agents: RL en Entornos 3D | Unit 5 | ⏳ Pendiente |
| 5.2 | ¡Manos a la obra! El Oso Julien y las Bolas de Nieve 🐻 | Unit 5 Hands-on | ⏳ Pendiente |
| 5.3 | Curiosidad Intrínseca: Explorar Sin Recompensas | Unit 5 (Opcional) | ⏳ Pendiente |

### Etapa 3 — Avanzado: Algoritmos de Estado del Arte

| Capítulo | Título | Unidad HF | Estado |
|---|---|---|---|
| 6.1 | El Problema de la Varianza en REINFORCE | Unit 6 | ⏳ Pendiente |
| 6.2 | Actor-Critic (A2C): Lo Mejor de Ambos Mundos | Unit 6 | ⏳ Pendiente |
| 6.3 | ¡Manos a la obra! A2C con el Brazo Robótico Panda 🦾 | Unit 6 Hands-on | ⏳ Pendiente |
| 7.1 | Multi-Agent RL: Varios Agentes en el Mismo Mundo | Unit 7 | ⏳ Pendiente |
| 7.2 | Self-Play: Aprender Compitiendo Contra Uno Mismo | Unit 7 | ⏳ Pendiente |
| 7.3 | Demo: SoccerTwos ⚽ — Fútbol de Agentes | Unit 7 Hands-on | ⏳ Pendiente |
| 8.1 | El Problema de los Pasos Grandes: Inestabilidad | Unit 8 | ⏳ Pendiente |
| 8.2 | PPO: Proximal Policy Optimization | Unit 8 Part 1 | ⏳ Pendiente |
| 8.3 | ¡Manos a la obra! PPO desde Cero con CleanRL | Unit 8 Part 1 Hands-on | ⏳ Pendiente |
| 8.4 | PPO Escalado: Entrenando en VizDoom 🎮 | Unit 8 Part 2 | ⏳ Pendiente |
| 9.1 | Aprendizaje por Imitación: Aprender Viendo a un Experto | Bonus Unit 5 | ⏳ Pendiente |
| 9.2 | Tópicos Avanzados: Lo que Viene Después | Bonus Unit 3 | ⏳ Pendiente |
| 9.3 | Proyecto Final: Tu Propio Agente, Tu Propio Entorno | Original | ⏳ Pendiente |

---

## 🛠️ Cómo usar este repositorio

### Ver las slides (sin instalar nada)

Descarga o clona el repositorio y abre cualquier archivo `.html` directamente en tu navegador. Las slides usan [Reveal.js](https://revealjs.com/) y funcionan sin servidor ni instalaciones. Las fórmulas matemáticas se renderizan con MathJax de forma automática.

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/curso-deep-rl.git
cd curso-deep-rl

# Abrir el índice (en Mac)
open index.html

# Abrir el índice (en Windows)
start index.html
```

### Navegar entre slides

| Tecla | Acción |
|---|---|
| `→` o `Espacio` | Siguiente slide |
| `←` | Slide anterior |
| `Esc` | Vista general de todas las slides |
| `F` | Pantalla completa |
| `?` | Ayuda con todos los atajos |

### Editar slides existentes

Abre el archivo `.html` correspondiente en [VS Code](https://code.visualstudio.com/) e instala la extensión **Live Preview** para ver los cambios en tiempo real mientras editas. Todo el contenido de cada slide está claramente separado del código de estilos — busca el texto que quieres cambiar directamente.

Si necesitas cambiar el diseño visual de **todos los capítulos a la vez** (colores, fuentes, espaciados), edita únicamente `assets/css/theme.css`. Ese archivo es la única fuente de verdad del sistema de diseño del curso.

### Crear un nuevo capítulo

Copia la plantilla base, renómbrala con el número del capítulo nuevo, y reemplaza el contenido entre los comentarios `<!-- SLIDES START -->` y `<!-- SLIDES END -->`.

```bash
cp assets/template.html slides/capitulo_X_Y.html
```

La plantilla ya incluye los imports correctos de CSS, JS y MathJax, y documenta en comentarios cómo usar cada componente visual (cards, fórmulas, diagramas, imágenes, fragmentos animados).

---

## 🎨 Sistema de diseño

El tema visual del curso está inspirado en interfaces de software aeroespacial y sistemas de control: fondo casi negro (`#04060f`), gradiente **Azul (`#3b82f6`) → Violeta (`#a855f7`)** como paleta principal, tipografía **Outfit** para display y **JetBrains Mono** para código y etiquetas técnicas.

Los componentes reutilizables más importantes que están disponibles en `theme.css` son los siguientes: tarjetas con código de color por tipo (`card`, `card-cyan`, `card-violet`, `card-gold`), cajas de idea clave (`key-idea`), bloques de fórmula matemática (`math-block`), diagramas de flujo agente↔entorno (`diagram-row`, `dbox`), secuencias de pasos numerados (`step-row`), tablas de comparación (`compare-grid`), glosarios (`gloss-row`), y layouts de columnas (`cols2`, `cols3`).

---

## 📋 Pre-requisitos para los estudiantes

Este curso no asume ningún conocimiento previo. Sin embargo, para los capítulos con código (hands-on), los estudiantes necesitarán una cuenta gratuita en [Google](https://accounts.google.com) (para usar Colab) y en [Hugging Face](https://huggingface.co/join) (para subir sus modelos). Ambas son gratuitas y toman menos de 5 minutos en crear.

---

## 🤝 Créditos

Este curso es una adaptación pedagógica al español del trabajo original de:

- **Thomas Simonini** — Autor principal del Deep RL Course de Hugging Face
- **Omar Sanseviero** — Co-autor
- **Sayak Paul** — Co-autor  
- **Edward Beeching** — Unit 8 Part 2 (Sample-Factory / VizDoom)
- **Ivan-267** — Bonus Unit 5 (Godot RL / Imitation Learning)

El contenido teórico, los entornos de práctica, los notebooks de referencia y los objetivos de aprendizaje pertenecen al [curso original](https://huggingface.co/learn/deep-rl-course/), disponible bajo licencia de Hugging Face. Esta adaptación es de carácter educativo y sin fines comerciales.

---

*Última actualización: Mayo 2026*
