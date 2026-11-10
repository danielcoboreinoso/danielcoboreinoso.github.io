---
name: Portfolio GitHub Pages
description: Crea y publica un portfolio web junior en GitHub Pages con HTML, CSS y JavaScript puro, paso a paso y sin frameworks
---

# Portfolio junior en GitHub Pages

Crea un portfolio de **una sola página** con HTML + CSS + JavaScript puro, sin
frameworks, sin npm y sin proceso de build, listo para publicarse en un
repositorio `usuario.github.io` con GitHub Pages.

## Reglas

- No uses frameworks, librerías CSS ni herramientas de build (nada de npm).
- Copia las plantillas de `templates/`; no escribas el sitio de cero.
- Todo el contenido visible de la web va en **español**.
- **Nunca inventes datos personales.** Si falta nombre, email, redes o
  proyectos reales, pregúntale al usuario antes de continuar.
- Mantén el estilo minimalista claro de la plantilla; solo cambia el color de
  acento si el usuario lo pide.

## Flujo

### 1. Preparar

Comprueba que estás en un repo de GitHub Pages
(`danielcoboreinoso.github.io` o similar) y que aún no existe un `index.html`
en la raíz. Si existe, pregunta antes de sobrescribir.

### 2. Copiar las plantillas

Copia estos archivos de `templates/` a la raíz del repo, respetando las
carpetas:

| Origen (dentro del skill)        | Destino en el repo |
| -------------------------------- | ------------------ |
| `templates/index.html`            | `index.html`       |
| `templates/css/styles.css`       | `css/styles.css`   |
| `templates/js/main.js`           | `js/main.js`       |

### 3. Rellenar los placeholders

Busca y sustituye en `index.html` todos los textos entre corchetes:

- `[Tu Nombre]` — en `<title>`, logo del nav, hero y footer.
- `[tu especialidad, p. ej. frontend]` — subtítulo del hero.
- `[tu-email@ejemplo.com]` — en el `mailto:` y en el texto visible.
- `[tu-usuario]` — URL de GitHub.
- `[tu-usuario-linkedin]` — URL de LinkedIn (borra el `<li>` si no usa LinkedIn).
- `[Nombre del proyecto]`, descripciones y `href` de Demo/Código de cada tarjeta.

### 4. Proyectos

Pídele al usuario 2-3 proyectos reales. Para cada uno, rellena una tarjeta
`<article class="card">` conservando la estructura: título, descripción
(qué hace + qué aprendiste), `<ul class="card__tags">` con las tecnologías
y los enlaces Demo/Código. Duplica o borra tarjetas según cuántos haya.

### 5. Personalizar

- Color de acento: solo cambia `--color-accent` y `--color-accent-hover`
  en `:root` de `css/styles.css`.
- Habilidades: edita los `<li>` de la lista `#habilidades`.

### 6. Publicar en GitHub Pages

1. Haz commit y push a `main`:

   ```sh
   git add .
   git commit -m "Añade portfolio"
   git push origin main
   ```

2. En GitHub: **Settings → Pages → Build and deployment**, elige
   **Deploy from a branch**, rama `main` y carpeta `/(root)`. Guarda.
3. Espera 1-2 minutos y verifica que `https://<usuario>.github.io` carga.

### 7. Checklist final

- [ ] `<html lang="es">` y `<title>` con el nombre.
- [ ] Meta description rellenada (sin corchetes).
- [ ] Favicon: opcional, un `favicon.ico` en la raíz.
- [ ] Queda **cero** `[corchetes]` sin sustituir en el HTML.
- [ ] Enlaces externos con `target="_blank" rel="noopener"`.
- [ ] Prueba responsive en DevTools (móvil ~375px y escritorio).
- [ ] Menú móvil abre, cierra y al pulsar un enlace se cierra.
- [ ] El año del footer se actualiza solo (JavaScript cargado).

## Errores comunes

- **404 al abrir la web**: espera 1-2 minutos tras activar Pages y comprueba
  que la rama y carpeta elegidas son `main` / `(root)`.
- **Los estilos no cargan**: las rutas deben ser relativas (`css/styles.css`),
  nunca absolutas (`/css/...`).
- **Después de editar, no se ve el cambio**: Pages hace caché; fuerza con
  Ctrl+F5 o espera unos minutos.
