# 📊 Progreso del Curso

Registro manual del estado de cada capítulo. Actualiza este archivo cada vez que completes o modifiques un capítulo.

## Leyenda de estados

| Símbolo | Significado |
|---|---|
| ✅ Listo | Slide terminada, revisada y lista para usar en clase |
| 🔄 En progreso | Slide siendo desarrollada actualmente |
| ⏳ Pendiente | Aún no iniciada |
| 🔁 Revisión | Slide lista pero con feedback pendiente de aplicar |

---

## Etapa 1 — Núcleo

| Capítulo | Título corto | Estado | Fecha | Notas |
|---|---|---|---|---|
| 1.1 + 1.2 | ¿Qué es RL? + Recompensas | ✅ Listo | Mayo 2026 | Primera versión. Pendiente: mover CSS a theme.css en próxima iteración |
| 1.3 + 1.4 | Exploración vs. Explotación + Políticas y Valores | ✅ Listo | Mayo 2026 | Incluye ε-greedy animado, mapa de valor con cuadrícula, comparativa V(s) vs Q(s,a) |
| 1.5 + 1.6 | LunarLander Hands-On + Huggy | ✅ Listo | Mayo 2026 | Guía visual paso a paso con terminal CSS, diagrama del entorno, barras de progreso por episodio, anatomía de Huggy |
| 2.1–2.4 | Q-table + Bellman + MC vs TD + Q-Learning completo | ✅ Listo | Mayo 2026 | Q-table interactiva, cadena Bellman animada, comparativa MC vs TD, pseudocódigo con colores semánticos, ejemplo numérico completo |
| 2.5 + 2.6 | FrozenLake + Taxi Hands-on | ✅ Listo | Mayo 2026 | Q-table heatmap CSS, copos animados, cuadrícula FrozenLake con flechas, mundo Taxi ASCII coloreado, comparativa completa |

## Etapa 2 — Intermedio

| Capítulo | Título corto | Estado | Fecha | Notas |
|---|---|---|---|---|
| 3.1 + 3.2 | Problema de escala + DQN completo | ✅ Listo | Mayo 2026 | Pixel art animado de Atari, diagrama CNN multi-capa, vaquero🤠/vaca🐄 para Target Network, Double DQN flow |
| 3.3 + 3.4 | Preprocesamiento + Demo Space Invaders | ✅ Listo | Mayo 2026 | Pong simulation CSS, pipeline completo con barras de tamaño, frame stack visual, escena Space Invaders animada, Q-value bar chart, log de entrenamiento, behaviours emergentes |
| 4.1 + 4.2 | Métodos de política + Intuición REINFORCE | ✅ Listo | Mayo 2026 | Colina animada para ascenso de gradiente, aspiradora con aliasing perceptual, barras de probabilidad dinámicas, rueda continua de ángulos, tabla comparativa completa |
| 4.3 | REINFORCE Hands-on CartPole + PixelCopter | ✅ Listo | Mayo 2026 | CartPole/PixelCopter animados en CSS, bug educativo de act(), diagrama de retornos hacia atrás, barras de progreso del entrenamiento |
| 5.1 | Unity ML-Agents: RL en 3D | ✅ Listo | Mayo 2026 | Escena Unity con raycast CSS, Academia/Agente/Cerebro, SnowballTarget animado, Pirámides con curiosidad intrínseca, comparativa vs Gymnasium |
| 5.2 | SnowballTarget Hands-on | ✅ Listo | Mayo 2026 | Setup Miniconda/ML-Agents, YAML PPO, multi-agent visual, checkpoints timeline, copos animados, Hub display |
| 5.3 | Pirámides RND + Cierre del Curso | ✅ Listo | Mayo 2026 | Diagrama RND técnico, recompensa intrínseca vs extrínseca, YAML con max_steps, confetti de celebración, timeline completo del curso, recursos para seguir |

## Etapa 3 — Avanzado

| Capítulo | Título corto | Estado | Fecha | Notas |
|---|---|---|---|---|
| 6.1–6.3 | Varianza + Actor-Critic + A2C con Panda | ✅ Listo | Mayo 2026 | Colinas comparativas animadas MC vs TD, diagrama Actor-Crítico con pulsos CSS, barras de ventaja, proceso A2C en 6 pasos, brazo Panda CSS |
| 7.1–7.3 | MARL + CTDE + Self-Play + ELO + SoccerTwos | ✅ Listo | Mayo 2026 | Campo de fútbol CSS animado, diagrama CTDE, 5 pasos self-play, gráfica ELO con barras, ejemplo numérico ELO completo, YAML SoccerTwos con sección self_play |
| 8.1–8.3 | Inestabilidad + PPO completo + CleanRL | ✅ Listo | Mayo 2026 | Acantilado animado CSS, línea numérica del ratio, tabla de 6 casos con animaciones, función objetivo LaTeX, bucle PPO 5 pasos, tabla comparativa A2C vs PPO, código CleanRL con clip |
| 8.4 | Demo VizDoom | ⏳ Pendiente | — | Demo guiada, solo Linux/Mac |
| 9.1 | Imitation Learning | ⏳ Pendiente | — | — |
| 9.2 | Tópicos avanzados | ⏳ Pendiente | — | Capítulo "mapa del horizonte", sin hands-on |
| 9.3 | Proyecto final | ⏳ Pendiente | — | Material original del curso |

---

## Tareas globales pendientes

- [ ] Refactorizar `capitulo_1_1_1_2.html` para usar `theme.css` externo en lugar de estilos embebidos
- [ ] Crear el primer notebook (`unidad_1_lunarlander.ipynb`) con instrucciones en español
- [ ] Agregar imágenes originales del curso de HF en `assets/static/hf_original/`
- [ ] Definir el flujo de feedback con los estudiantes (¿formulario? ¿GitHub issues?)
- [ ] Crear página de GitHub Pages cuando tengamos 3+ capítulos listos
