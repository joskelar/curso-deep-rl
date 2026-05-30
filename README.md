# 🤖 Aprendizaje por Refuerzo Profundo
### Curso en español para jóvenes 

> Adaptación del [DRL Course de Hugging Face 🤗](https://huggingface.co/learn/deep-rl-course/) al español, pensada para estudiantes sin experiencia previa en Python ni Machine Learning. Mismos objetivos técnicos y prácticos que el curso original, con explicaciones más completas, ejemplos visuales y lenguaje accesible.


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



---

## 📋 Pre-requisitos para los estudiantes

Este curso no asume ningún conocimiento previo. Sin embargo, para los capítulos con código (hands-on), los estudiantes necesitarán una cuenta gratuita en [Google](https://accounts.google.com) (para usar Colab) y en [Hugging Face](https://huggingface.co/join) (para subir sus modelos). Ambas son gratuitas y toman menos de 5 minutos en crear.

---

## 🤝 Créditos

Este curso es una adaptación pedagógica al español del trabajo original de Hugging Face. El contenido teórico base, los entornos de práctica base, y los notebooks de referencia pertenecen al [curso original](https://huggingface.co/learn/deep-rl-course/), disponible bajo licencia de Hugging Face. Esta adaptación es de carácter educativo.

---

*Última actualización: Mayo 2026*
