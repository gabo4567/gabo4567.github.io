import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import l1 from '../assets/lotes/Captura de pantalla 2026-01-13 181113.png';
import l2 from '../assets/lotes/Captura de pantalla 2026-01-13 181156.png';
import l3 from '../assets/lotes/Captura de pantalla 2026-01-03 090744.png';
import l4 from '../assets/lotes/Captura de pantalla 2026-01-13 181313.png';
import l5 from '../assets/lotes/Captura de pantalla 2026-01-13 181650.png';

const lotesImages = [l1, l2, l3, l4, l5];
import e1 from '../assets/ecommerce/Captura de pantalla 2026-01-13 193039.png';
import e2 from '../assets/ecommerce/Captura de pantalla 2026-01-13 193111.png';
import e3 from '../assets/ecommerce/Captura de pantalla 2026-01-13 193301.png';
import e4 from '../assets/ecommerce/Captura de pantalla 2026-01-13 193319.png';
import e5 from '../assets/ecommerce/Captura de pantalla 2026-01-13 193518.png';

const ecommerceImages = [e1, e2, e3, e4, e5];
import c1 from '../assets/clinica/clinica1.jpg';
import c2 from '../assets/clinica/clinica2.jpg';
import c3 from '../assets/clinica/clinica3.jpg';
import c4 from '../assets/clinica/clinica4.jpg';
import c5 from '../assets/clinica/clinica5.jpg';

const clinicaImages = [c1, c2, c3, c4, c5];

function Projects() {
  return (
    <section>
      <h2>Proyectos</h2>

      <article>
        <h3>🌱 Sistema de Gestión de Lotes y Turnos para Productores de Tabaco (IPT)</h3>

        <p>Sistema desarrollado para el Instituto Provincial del Tabaco, destinado a la gestión integral de productores, lotes y turnos de atención.</p>

        <p>Incluye una aplicación web para administradores y una aplicación móvil para productores, permitiendo organizar información, registrar datos productivos y gestionar turnos de forma eficiente.</p>

        <p>🔗 Repositorio: <a href="https://github.com/gabo4567/sistema-lotes" target="_blank" rel="noopener noreferrer">https://github.com/gabo4567/sistema-lotes</a></p>

        <p><strong>Tecnologías:</strong> React, React Native, Firebase, JavaScript</p>

        <p><strong>Rol:</strong> Desarrollo full stack, modelado de datos, lógica de negocio, validaciones y diseño de interfaces.</p>

        <ProjectCarousel images={lotesImages} altPrefix="IPT captura" />
      </article>

      <hr />

      <article>
        <h3>🛒 E-commerce Integrador P4</h3>

        <p>Proyecto de e-commerce desarrollado como Trabajo Práctico Integrador de la materia Programación IV, combinando funcionalidades de gestión de usuarios, productos y pedidos con prácticas modernas de desarrollo full stack. Incluye autenticación con JWT y comunicación en tiempo real, además de estructura para microservicios de IA, despliegue con Docker y buenas prácticas de ingeniería.</p>

        <p>🔗 Repositorio: <a href="https://github.com/gabo4567/ecommerce-integrador-p4" target="_blank" rel="noopener noreferrer">https://github.com/gabo4567/ecommerce-integrador-p4</a></p>

        <p><strong>Tecnologías:</strong></p>
        <ul>
          <li>Backend Python / Django (REST API)</li>
          <li>FastAPI (microservicio IA)</li>
          <li>PostgreSQL, MongoDB</li>
          <li>Node.js / Express</li>
          <li>Socket.IO</li>
          <li>Firebase Realtime Database</li>
          <li>Docker, CI/CD (GitHub Actions)</li>
        </ul>

        <p><strong>Rol:</strong> Desarrollo de backend con Python/Django, integración de microservicios, diseño y despliegue de arquitectura modular, pruebas funcionales y puesta en marcha de servicios.</p>

        <ProjectCarousel images={ecommerceImages} altPrefix="E-commerce captura" />
      </article>

      <hr />

      <article>
        <h3>📱 Clínica Salud Total – Aplicación Mobile</h3>

        <p>Aplicación mobile nativa desarrollada en Kotlin con Android Studio para la gestión de turnos médicos de la clínica Salud Total.</p>

        <p>La app implementa una arquitectura MVVM, se conecta a una API RESTful externa mediante Retrofit, maneja autenticación con JWT y permite realizar operaciones CRUD completas sobre entidades del sistema.</p>

        <p>El proyecto aplica buenas prácticas de desarrollo mobile, incluyendo validaciones de formularios, manejo de estados y almacenamiento local de datos usando SharedPreferences.</p>

        <p>🔗 Repositorio: <a href="https://github.com/gabo4567/Clinica-ST-Mobile" target="_blank" rel="noopener noreferrer">https://github.com/gabo4567/Clinica-ST-Mobile</a></p>

        <p><strong>Tecnologías:</strong> Kotlin, Android Studio, MVVM, ViewBinding, Retrofit, Coroutines, SharedPreferences, RecyclerView</p>

        <p><strong>Rol:</strong> Desarrollo completo de la aplicación mobile, incluyendo arquitectura, interfaz de usuario, consumo de API REST, autenticación y funcionalidades CRUD.</p>

        <ProjectCarousel images={clinicaImages} altPrefix="Clínica captura" />
      </article>
    </section>
  )
}

export default Projects
