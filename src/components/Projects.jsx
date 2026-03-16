import { useMemo, useState } from 'react';
import FeaturedProjectsCarousel from './FeaturedProjectsCarousel';
import FeaturedProjectCard from './FeaturedProjectCard';
import FeaturedProjectModal from './FeaturedProjectModal';
import './FeaturedProjects.css';
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

function Projects({ language = 'es' }) {
  const labels =
    language === 'en'
      ? { title: 'Featured Projects' }
      : { title: 'Proyectos Destacados' };

  const projects = useMemo(
    () => [
      {
        id: 'ipt',
        title: '🌱 Sistema de Gestión de Lotes y Turnos para Productores de Tabaco (IPT)',
        status: 'in_progress',
        startDate: { es: 'OCT 2025 - Actualidad', en: 'Oct 2025 - Present' },
        repoUrl: 'https://github.com/gabo4567/sistema-lotes',
        demoUrl: null,
        images: lotesImages,
        previewAlt: { es: 'IPT captura', en: 'IPT screenshot' },
        modalAlt: { es: 'IPT captura', en: 'IPT screenshot' },
        shortDescription: {
          en: 'System developed for Instituto Provincial del Tabaco, focused on the full management of producers, plots, and appointment slots.',
          es: 'Sistema desarrollado para el Instituto Provincial del Tabaco, destinado a la gestión integral de productores, lotes y turnos de atención.'
        },
        fullDescription: {
          en: [
            'System developed for Instituto Provincial del Tabaco, focused on the full management of producers, plots, and appointment slots.',
            'It includes a web app for administrators and a mobile app for producers, enabling data organization, production records, and efficient appointment management.'
          ],
          es: [
            'Sistema desarrollado para el Instituto Provincial del Tabaco, destinado a la gestión integral de productores, lotes y turnos de atención.',
            'Incluye una aplicación web para administradores y una aplicación móvil para productores, permitiendo organizar información, registrar datos productivos y gestionar turnos de forma eficiente.'
          ]
        },
        technologies: {
          en: ['React', 'React Native', 'Firebase', 'JavaScript'],
          es: ['React', 'React Native', 'Firebase', 'JavaScript']
        },
        role: {
          en: 'Full stack development, data modeling, business logic, validations, and UI design.',
          es: 'Desarrollo full stack, modelado de datos, lógica de negocio, validaciones y diseño de interfaces.'
        }
      },
      {
        id: 'ecommerce',
        title: '🛒 Plataforma de E-commerce basada en Microservicios',
        status: 'finished',
        startDate: { es: 'SEP 2025 - DIC 2025', en: 'Sep 2025 - Dec 2025' },
        repoUrl: 'https://github.com/gabo4567/ecommerce-integrador-p4',
        demoUrl: null,
        images: ecommerceImages,
        previewAlt: { es: 'E-commerce captura', en: 'E-commerce screenshot' },
        modalAlt: { es: 'E-commerce captura', en: 'E-commerce screenshot' },
        shortDescription: {
          en: 'E-commerce project developed as an integrative assignment for Programming IV, combining user/product/order management with modern full stack practices. It includes JWT authentication, real-time communication, an AI microservice structure, Docker deployment, and solid engineering practices.',
          es: 'Desarrollo de plataforma e-commerce full stack con gestión integral de usuarios, productos y pedidos. Implementa autenticación segura con JWT, comunicación en tiempo real y arquitectura escalable preparada para microservicios de IA. El proyecto contempla despliegue contenerizado con Docker y adopta buenas prácticas de ingeniería y diseño de software.'
        },
        fullDescription: {
          en: [
            'E-commerce project developed as an integrative assignment for Programming IV, combining user/product/order management with modern full stack practices. It includes JWT authentication, real-time communication, an AI microservice structure, Docker deployment, and solid engineering practices.'
          ],
          es: [
            'Desarrollo de plataforma e-commerce full stack con gestión integral de usuarios, productos y pedidos. Implementa autenticación segura con JWT, comunicación en tiempo real y arquitectura escalable preparada para microservicios de IA. El proyecto contempla despliegue contenerizado con Docker y adopta buenas prácticas de ingeniería y diseño de software.'
          ]
        },
        technologies: {
          en: [
            'Python / Django backend (REST API)',
            'FastAPI (AI microservice)',
            'PostgreSQL',
            'Node.js / Express',
            'Firebase',
            'Docker, CI/CD (GitHub Actions)'
          ],
          es: [
            'Backend Python / Django (REST API)',
            'FastAPI (microservicio IA)',
            'PostgreSQL',
            'Node.js / Express',
            'Firebase',
            'Docker, CI/CD (GitHub Actions)'
          ]
        },
        role: {
          en: 'Backend development with Python/Django, microservice integration, modular architecture design and deployment, functional testing, and service rollout.',
          es: 'Desarrollo de backend con Python/Django, integración de microservicios, diseño y despliegue de arquitectura modular, pruebas funcionales y puesta en marcha de servicios.'
        }
      },
      {
        id: 'clinica',
        title: '📱 Clinica Salud Total - Aplicación Mobile Android',
        status: 'finished',
        startDate: { es: 'JUN 2025 - JUL 2025', en: 'Jun 2025 - Jul 2025' },
        repoUrl: 'https://github.com/gabo4567/Clinica-ST-Mobile',
        demoUrl: null,
        images: clinicaImages,
        previewAlt: { es: 'Clínica captura', en: 'Clinic screenshot' },
        modalAlt: { es: 'Clínica captura', en: 'Clinic screenshot' },
        shortDescription: {
          en: 'Native mobile app developed in Kotlin with Android Studio to manage medical appointments for Clínica Salud Total.',
          es: 'Aplicación mobile nativa desarrollada en Kotlin con Android Studio para la gestión de turnos médicos de la clínica Salud Total.'
        },
        fullDescription: {
          en: [
            'Native mobile app developed in Kotlin with Android Studio to manage medical appointments for Clínica Salud Total.',
            'The app follows an MVVM architecture, connects to an external RESTful API via Retrofit, handles JWT authentication, and supports full CRUD operations on system entities.',
            'The project applies mobile development best practices, including form validations, state management, and local storage using SharedPreferences.'
          ],
          es: [
            'Aplicación mobile nativa desarrollada en Kotlin con Android Studio para la gestión de turnos médicos de la clínica Salud Total.',
            'La app implementa una arquitectura MVVM, se conecta a una API RESTful externa mediante Retrofit, maneja autenticación con JWT y permite realizar operaciones CRUD completas sobre entidades del sistema.',
            'El proyecto aplica buenas prácticas de desarrollo mobile, incluyendo validaciones de formularios, manejo de estados y almacenamiento local de datos usando SharedPreferences.'
          ]
        },
        technologies: {
          en: [
            'Kotlin',
            'Android Studio',
            'MVVM',
            'ViewBinding',
            'Retrofit',
            'Coroutines',
            'SharedPreferences',
            'RecyclerView'
          ],
          es: [
            'Kotlin',
            'Android Studio',
            'MVVM',
            'ViewBinding',
            'Retrofit',
            'Coroutines',
            'SharedPreferences',
            'RecyclerView'
          ]
        },
        role: {
          en: 'End-to-end mobile app development, including architecture, UI, REST API consumption, authentication, and CRUD features.',
          es: 'Desarrollo completo de la aplicación mobile, incluyendo arquitectura, interfaz de usuario, consumo de API REST, autenticación y funcionalidades CRUD.'
        }
      }
    ],
    []
  );

  const [openId, setOpenId] = useState(null);
  const openProject = projects.find((p) => p.id === openId) || null;

  return (
    <section id="projects" className="featured-projects">
      <h2>{labels.title}</h2>
      <FeaturedProjectsCarousel language={language}>
        {projects.map((project) => (
          <FeaturedProjectCard
            key={project.id}
            project={project}
            language={language}
            onMore={setOpenId}
          />
        ))}
      </FeaturedProjectsCarousel>

      {openProject && (
        <FeaturedProjectModal
          key={openProject.id}
          project={openProject}
          language={language}
          onClose={() => setOpenId(null)}
        />
      )}
    </section>
  )
}

export default Projects
