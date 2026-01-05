# Portafolio Personal – Juan Gabriel Pared 💼👨‍💻

Repositorio de mi **portafolio personal estático**, donde presento mis proyectos académicos y profesionales, mis habilidades técnicas y mi información de contacto. Desarrollado con **React + Vite** y desplegado en **GitHub Pages**.

---

## 📌 Propósito

Mostrar de manera clara y profesional:

- Mis proyectos web y móviles.
- Tecnologías que manejo.
- Experiencia y habilidades como **Full Stack Developer**.
- Formas de contacto.

---

## 🛠️ Stack Tecnológico

**Frontend:**  
- React (JSX, componentes funcionales)  
- CSS modularizado (index.css, App.css, TopBanner.css)  

**Tooling / Build:**  
- Vite (dev server, HMR, build optimizado)  
- @vitejs/plugin-react  

**CI/QA:**  
- ESLint (@eslint/js + plugins)  

**Deploy:**  
- GitHub Pages (gh-pages)  

**IDE / Tipos:**  
- @types/react, @types/react-dom

---

## 📂 Estructura del Proyecto

├── public/ # Archivos estáticos (favicon, assets)
├── src/ # Código fuente de la app React
│ ├── assets/ # Imágenes y recursos
│ ├── components/ # Componentes UI reutilizables
│ │ ├── Header.jsx
│ │ ├── TopBanner.jsx + TopBanner.css
│ │ ├── About.jsx
│ │ ├── Projects.jsx
│ │ ├── Technologies.jsx
│ │ └── Contact.jsx
│ ├── App.jsx # Componente raíz que arma todas las secciones
│ ├── main.jsx # Punto de entrada de la app
│ ├── index.css # Estilos globales
│ └── App.css # Estilos específicos
├── index.html # HTML raíz que monta React
├── package.json # Scripts y dependencias
├── vite.config.js # Configuración de Vite
├── eslint.config.js # Reglas ESLint
└── README.md # Documentación

---

## ⚡ Funcionalidades

- **SPA ligera y navegable:** scroll suave entre secciones desde el header.  
- **Sección de Proyectos:** descripción, tecnologías, rol y enlace a cada repositorio.  
- **Sección de Tecnologías:** muestra visual de skills y stack.  
- **Contacto:** información de contacto y llamado a la acción.  
- **Responsive Design:** adaptado a dispositivos móviles y desktop.

---

## 🚀 Scripts útiles

**Desarrollo local:**
```
npm install
npm run dev
```

**Build producción**:
```
npm run build
```

**Previsualizar build**:
```
npm run preview
```

**Desplegar a GitHub Pages**:
```
npm run deploy
```

El script deploy publica la carpeta dist/ a GitHub Pages usando gh-pages. El homepage está definido como: https://gabo4567.github.io.

---

## 🏗️ Arquitectura y Flujo
1- SPA React organizada en componentes funcionales y reutilizables.

2- Comunicación entre componentes vía props.

3- Build y bundling optimizados con Vite.

4- ESLint configurado para mantener consistencia de código.

5- Despliegue automatizado con gh-pages.

---

## 🔧 Buenas Prácticas
- Accesibilidad: verificar roles ARIA y contraste.

- SEO básico: meta tags y Open Graph en index.html.

- Performance: imágenes optimizadas (webp, responsive).

- Mantenimiento: considerar mover datos de proyectos a src/data/projects.json para fácil edición.

- Tests: pruebas end-to-end ligeras opcionales (Playwright, snapshots visuales).

- CI/CD: GitHub Actions opcionales para lint y build antes de deploy.

---

## 💡 Mejoras Futuras
- Formulario de contacto con backend o EmailJS.

- Automatizar deploy con GitHub Actions (build → deploy).

- Mejorar SEO y optimización de assets.

---

## 🔗 Enlaces
GitHub Pages: https://gabo4567.github.io

Repositorios de proyectos: sección Projects en la web del portafolio.

Portafolio personal de Juan Gabriel Pared – Full Stack Developer 👨‍💻
