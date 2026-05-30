/**
 * ═══════════════════════════════════════════════════════════════
 *  CONFIGURACIÓN GLOBAL DE REVEAL.JS
 *  Curso Deep Reinforcement Learning — Josue Hernandez Pavon
 *
 *  Todos los archivos HTML de slides incluyen este script con:
 *    <script src="../assets/js/reveal-config.js"></script>
 *
 *  Aquí centralizamos los parámetros de comportamiento de la
 *  presentación: transiciones, atajos de teclado, proporciones,
 *  etc. Si quieres cambiar algo global (p.ej. el tipo de
 *  transición entre slides), edita este archivo una sola vez.
 * ═══════════════════════════════════════════════════════════════
 */

// Esperamos a que Reveal.js esté disponible antes de inicializar.
// Esto evita errores si el script se carga antes que la librería.
document.addEventListener("DOMContentLoaded", function () {

  Reveal.initialize({

    // ── Proporciones y escala ──────────────────────────────────
    // 1200×700 da una relación ~17:10 que funciona bien tanto en
    // proyectores (16:9) como en monitores y tablets.
    width:    1200,
    height:   700,
    margin:   0.04,     // margen exterior como fracción del tamaño
    minScale: 0.2,      // zoom mínimo para pantallas pequeñas
    maxScale: 2.0,      // zoom máximo para pantallas grandes

    // ── Navegación ────────────────────────────────────────────
    controls:         true,    // mostrar flechas de navegación
    controlsTutorial: false,   // no mostrar el tooltip "usa las flechas"
    progress:         true,    // barra de progreso en la parte inferior
    slideNumber:      'c/t',   // formato: "slide actual / total"
    hash:             true,    // URL cambia con el número de slide
    keyboard:         true,    // navegación con teclado activada
    overview:         true,    // vista general con Escape o O
    touch:            true,    // swipe en dispositivos táctiles

    // ── Comportamiento ────────────────────────────────────────
    center:       false,   // NO centrar slides verticalmente (usamos height:100%)
    loop:         false,   // no volver al inicio al llegar al final
    shuffle:      false,   // mantener el orden de las slides
    fragments:    true,    // activar animaciones de fragmentos (aparición)
    embedded:     false,   // false = presentación standalone (no embebida en otra página)
    help:         true,    // mostrar ayuda con tecla '?'
    mouseWheel:   false,   // scroll con rueda del mouse NO avanza slides

    // ── Auto-reproducción ─────────────────────────────────────
    autoSlide:          0,     // 0 = desactivado; un número en ms lo activaría
    autoSlideStoppable: true,  // el usuario puede pausar el auto-avance
    autoPlayMedia:      false, // los videos/audio no se reproducen solos

    // ── Rendimiento ───────────────────────────────────────────
    // viewDistance: cuántas slides cargamos en memoria antes/después de la actual.
    // En móvil usamos un número menor para ahorrar recursos.
    viewDistance:       3,
    mobileViewDistance: 2,

    // ── Transiciones ─────────────────────────────────────────
    // 'fade' es la más limpia para contenido denso con texto y código.
    // Otras opciones: 'slide', 'convex', 'concave', 'zoom', 'none'.
    transition:           'fade',
    transitionSpeed:      'fast',     // 'default' | 'fast' | 'slow'
    backgroundTransition: 'fade',

    // ── Plugins (si se agregan en el futuro) ──────────────────
    // Para activar plugins como notas del presentador o búsqueda,
    // descomenta las líneas correspondientes y asegúrate de haber
    // incluido el script del plugin en el HTML.
    plugins: [
      // RevealNotes,    // notas del presentador (vista del instructor)
      // RevealSearch,   // búsqueda de texto con Ctrl+Shift+F
      // RevealZoom,     // zoom en elementos con Alt+clic
    ],

  });

  // ── Atajo personalizado: tecla 'G' abre el glosario ─────────
  // Si en el futuro queremos un glosario flotante, lo activamos aquí.
  // Por ahora solo está preparado como hook.
  Reveal.addKeyBinding({ keyCode: 71, key: 'G', description: 'Abrir glosario' }, function () {
    // placeholder: en el futuro podría mostrar un modal con el glosario completo
    console.info('[Curso Deep RL] Atajo G presionado — glosario pendiente de implementar.');
  });

  // ── Log de inicio (útil para depuración en desarrollo) ──────
  Reveal.on('ready', function (event) {
    console.info(
      '%c[Curso Deep RL] Presentación lista. Slide ' + (event.indexh + 1) + ' de ' + Reveal.getTotalSlides(),
      'color: #22d3ee; font-family: monospace;'
    );
  });

});
