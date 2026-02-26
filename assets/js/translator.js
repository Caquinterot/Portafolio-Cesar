// assets/js/translator.js

// Diccionarios ES/EN
const translations = {
	es: {
		// Navegación
		nav_home: 'Inicio',
		nav_about: 'Acerca de Mí',
		nav_skills: 'Habilidades',
		nav_projects: 'Portafolio',
		nav_contact: 'Contacto',

		// Home
		home_title: 'Hey, soy Cesar',
		home_description:
			'Soy desarrollador web, apasionado por la tecnología, la programación y los datos.',
		home_cv: 'Descargar CV',

		// About
		about_title: 'Acerca de Mí',
		about_description:
			'Desarrollador web, científico de datos e ingeniero de datos. Además de mi formación técnica, cuento con conocimientos en ingeniería industrial, contabilidad y fundamentos jurídicos, lo que me permite abordar proyectos desde una perspectiva multidisciplinaria, estratégica y orientada a resultados. Mi experiencia abarca tanto el frontend como el backend, así como el análisis y visualización de datos. Me caracteriza una mentalidad analítica, la capacidad para comprender procesos complejos y una fuerte orientación al aprendizaje continuo. Soy una persona autodisciplinada, proactiva y comprometida, con un alto sentido de la responsabilidad y habilidad para trabajar en equipo, liderar proyectos y adaptarme a distintos entornos profesionales.',

		// Skills (IDs existentes)
		'skills-title': 'Habilidades',
		'skills-desc':
			'Aplico un enfoque multidisciplinario que combina desarrollo web, ciencia de datos y soluciones inteligentes basadas en IA.',
		'skills-soft-title': 'Habilidades Blandas',
		'soft-responsable': 'Responsable',
		'soft-team': 'Trabajo en equipo',
		'soft-creative': 'Creativo',
		'soft-punctual': 'Puntual',
		'soft-proactive': 'Proactivo',
		'soft-self': 'Autodidacta',
		'soft-disciplined': 'Disciplinado',

		// Skills (nuevas claves data-i18n)
		skill_html_title: 'HTML',
		skill_html_desc:
			'Dominio avanzado en la estructuración semántica de contenido web, optimizando la accesibilidad, el rendimiento y la compatibilidad con los estándares más recientes del W3C.',
		skill_css_title: 'CSS3',
		skill_css_desc:
			'Creación de interfaces atractivas, adaptativas y centradas en la experiencia del usuario mediante técnicas modernas como Flexbox, Grid Layout y animaciones CSS.',
		skill_js_title: 'Javascript',
		skill_js_desc:
			'Desarrollo de funcionalidades interactivas, optimización del rendimiento en el cliente y manejo eficiente del DOM con programación asíncrona y buenas prácticas.',
		skill_react_title: 'React',
		skill_react_desc:
			'Construcción de aplicaciones web dinámicas y modulares, con componentes reutilizables, hooks y manejo avanzado del estado para maximizar la escalabilidad.',
		skill_py_title: 'Python',
		skill_py_desc:
			'Soluciones orientadas a datos, automatización de procesos y scripts eficientes para análisis, modelado y despliegue de aplicaciones.',
		skill_mongo_title: 'MongoDB',
		skill_mongo_desc:
			'Diseño y gestión de bases de datos NoSQL, optimización de consultas y modelado de datos para aplicaciones modernas y de alto rendimiento.',
		skill_aws_title: 'AWS',
		skill_aws_desc:
			'Implementación y administración de arquitecturas en la nube (EC2, S3, Lambda, RDS), garantizando seguridad, escalabilidad y alta disponibilidad.',

		// Projects
		'projects-title': 'Proyectos',
		'project1-title': 'Landing-Vet',
		'project1-desc':
			'Landing page moderna y atractiva diseñada para la veterinaria PetVet. Presenta información clara sobre servicios, contacto y valores de la marca, con un diseño responsivo y visual enfocado en transmitir confianza y cuidado hacia las mascotas.',
		'project1-demo': 'VER DEMO',
		'project1-code': 'VER CÓDIGO',
		'project2-title': 'Poke-app',
		'project2-desc':
			'Este proyecto es una Pokédex web desarrollada con React, TypeScript y la PokéAPI. Permite explorar el universo Pokémon de forma dinámica, con funcionalidades de búsqueda, filtrado y visualización de detalles individuales. La interfaz es responsiva y está diseñada para ofrecer una experiencia fluida y amigable, integrando llamadas a API externas, manejo de estados y componentes reutilizables. Es una muestra sólida de integración entre frontend moderno y consumo eficiente de datos públicos.',
		'project2-demo': 'VER DEMO',
		'project2-code': 'VER CÓDIGO',
		'project3-title': 'Rickmorty-app',
		'project3-desc':
			'Aplicación web desarrollada con React y Vite que consume la Rick and Morty API. Permite explorar locaciones y personajes, buscar por nombre o ID, visualizar detalles completos, paginar residentes y mostrar locaciones aleatorias. Incorpora loaders dinámicos para una experiencia fluida y responsiva. Este proyecto destaca el manejo eficiente de datos externos, la navegación entre vistas y la implementación de componentes reutilizables en un entorno SPA moderno.',
		'project3-demo': 'VER DEMO',
		'project3-code': 'VER CÓDIGO',
		'project4-title': 'Weather-app',
		'project4-desc':
			'Aplicación web desarrollada con React y Vite que permite consultar el clima actual de cualquier ciudad del mundo utilizando la API de OpenWeatherMap. La interfaz es rápida, responsiva y fácil de usar, integrando peticiones asincrónicas, manejo de estados y componentes reutilizables. Este proyecto demuestra la capacidad de consumir datos en tiempo real y presentarlos de forma clara y accesible para el usuario.',
		'project4-demo': 'VER DEMO',
		'project4-code': 'VER CÓDIGO',

		// Contact
		'contact-title': 'Contacto',
		'contact-info-title': 'Información de contacto',
		'contact-info-desc': 'Puedes Contactarme por los siguientes medios:',
		'contact-whatsapp': 'Whatsapp: +57 323 315 5806',
		'contact-phone': '+57 323 315 5806',
		'contact-email': 'quinteroaugusto28@gmail.com',
		'contact-location': 'Puerto Salgar, Colombia.',
		'contact-form-title': 'Enviar mensaje',
		'contact-label-name': 'Nombre',
		'contact-label-email': 'Correo',
		'contact-label-subject': 'Asunto',
		'contact-label-message': 'Mensaje',
		'contact-modal-success': 'Formulario enviado con éxito!',
		'contact-modal-close': 'Cerrar',
		'contact-form-send': 'Enviar',

		// Footer
		'footer-title': 'Cesar Quintero',
		'footer-desc':
			'Soy desarrollador web, apasionado por la tecnología, la programación y los datos.',
		'footer-social-title': 'Redes Sociales',
		'footer-copy': 'Todos los derechos reservados',
	},

	en: {
		// Navigation
		nav_home: 'Home',
		nav_about: 'About Me',
		nav_skills: 'Skills',
		nav_projects: 'Portfolio',
		nav_contact: 'Contact',

		// Home
		home_title: "Hey, I'm Cesar",
		home_description:
			'Web developer, passionate about technology, programming, and data.',
		home_cv: 'Download CV',

		// About
		about_title: 'About Me',
		about_description:
			'Web developer, data scientist, and data engineer. In addition to my technical training, I have knowledge in industrial engineering, accounting, and legal fundamentals, which allows me to approach projects from a multidisciplinary, strategic, and results-oriented perspective. My experience covers both frontend and backend, as well as data analysis and visualization. I am characterized by an analytical mindset, the ability to understand complex processes, and a strong orientation towards continuous learning. I am self-disciplined, proactive, and committed, with a high sense of responsibility and the ability to work in teams, lead projects, and adapt to different professional environments.',

		// Skills (existing IDs)
		'skills-title': 'Skills',
		'skills-desc':
			'I apply a multidisciplinary approach that combines web development, data science, and intelligent solutions based on AI.',
		'skills-soft-title': 'Soft Skills',
		'soft-responsable': 'Responsible',
		'soft-team': 'Teamwork',
		'soft-creative': 'Creative',
		'soft-punctual': 'Punctual',
		'soft-proactive': 'Proactive',
		'soft-self': 'Self-taught',
		'soft-disciplined': 'Disciplined',

		// Skills (new data-i18n keys)
		skill_html_title: 'HTML',
		skill_html_desc:
			'Advanced mastery of semantic web content structuring, optimizing accessibility, performance, and compatibility with the latest W3C standards.',
		skill_css_title: 'CSS3',
		skill_css_desc:
			'Creation of attractive, adaptive, user-centric interfaces using modern techniques like Flexbox, Grid Layout, and CSS animations.',
		skill_js_title: 'JavaScript',
		skill_js_desc:
			'Development of interactive features, client-side performance optimization, and efficient DOM handling with async programming and clean code practices.',
		skill_react_title: 'React',
		skill_react_desc:
			'Building dynamic, modular web apps with reusable components, hooks, and advanced state management to maximize scalability.',
		skill_py_title: 'Python',
		skill_py_desc:
			'Data-oriented solutions, process automation, and efficient scripts for analysis, modeling, and application deployment.',
		skill_mongo_title: 'MongoDB',
		skill_mongo_desc:
			'Design and management of NoSQL databases, query optimization, and data modeling for modern, high-performance apps.',
		skill_aws_title: 'AWS',
		skill_aws_desc:
			'Implementation and management of cloud architectures (EC2, S3, Lambda, RDS), ensuring security, scalability, and high availability.',

		// Projects
		'projects-title': 'Projects',
		'project1-title': 'Landing-Vet',
		'project1-desc':
			'Modern and visually appealing landing page designed for the PetVet veterinary clinic. It presents clear information about services, contact details, and brand values, featuring a responsive design focused on conveying trust and care for pets.',
		'project1-demo': 'VIEW DEMO',
		'project1-code': 'VIEW CODE',
		'project2-title': 'Poke-app',
		'project2-desc':
			'This project is a web-based Pokédex developed using React, TypeScript, and the PokéAPI. It allows users to dynamically explore the Pokémon universe with features for searching, filtering, and viewing individual Pokémon details. The interface is fully responsive and designed to deliver a smooth, user-friendly experience, integrating external API calls, state management, and reusable components. It stands as a solid example of modern frontend integration and efficient consumption of public data.',
		'project2-demo': 'VIEW DEMO',
		'project2-code': 'VIEW CODE',
		'project3-title': 'Rickmorty-app',
		'project3-desc':
			'Web application built with React and Vite that consumes the Rick and Morty API. It enables users to explore locations and characters, search by name or ID, view detailed profiles, paginate residents, and display random locations. Dynamic loaders ensure a smooth and responsive experience. This project showcases efficient external data handling, view navigation, and reusable component implementation within a modern SPA environment.',
		'project3-demo': 'VIEW DEMO',
		'project3-code': 'VIEW CODE',
		'project4-title': 'Weather-app',
		'project4-desc':
			'Web application built with React and Vite that allows users to check the current weather in any city worldwide using the OpenWeatherMap API. The interface is fast, responsive, and user-friendly, integrating asynchronous requests, state management, and reusable components. This project showcases the ability to consume real-time data and present it in a clear, accessible format for users.',
		'project4-demo': 'VIEW DEMO',
		'project4-code': 'VIEW CODE',

		// Contact
		'contact-title': 'Contact',
		'contact-info-title': 'Contact Information',
		'contact-info-desc': 'You can contact me through the following means:',
		'contact-whatsapp': 'Whatsapp: +57 323 315 5806',
		'contact-phone': '+57 323 315 5806',
		'contact-email': 'quinteroaugusto28@gmail.com',
		'contact-location': 'Puerto Salgar, Colombia.',
		'contact-form-title': 'Send Message',
		'contact-label-name': 'Name',
		'contact-label-email': 'Email',
		'contact-label-subject': 'Subject',
		'contact-label-message': 'Message',
		'contact-modal-success': 'Form sent successfully!',
		'contact-modal-close': 'Close',
		'contact-form-send': 'Send',

		// Footer
		'footer-title': 'Cesar Quintero',
		'footer-desc':
			'Web developer, passionate about technology, programming, and data.',
		'footer-social-title': 'Social Networks',
		'footer-copy': 'All rights reserved',
	},
};

// Estado por defecto
let currentLanguage = 'es';

// Traducción por ID + por data-i18n
function setLanguage(lang) {
	currentLanguage = lang;
	const dict = translations[lang] || {};

	// 1) Compatibilidad por ID
	for (const key in dict) {
		const elById = document.getElementById(key);
		if (elById) {
			elById.textContent = dict[key];
		}
	}

	// 2) Soporte data-i18n (debe ejecutarse en cada cambio de idioma)
	document.querySelectorAll('[data-i18n]').forEach((el) => {
		const key = el.getAttribute('data-i18n');
		if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
			el.textContent = dict[key];
		}
	});

	// Atributos y toggle
	document.documentElement.lang = lang;
	const toggle = document.getElementById('language-toggle');
	if (toggle) toggle.checked = lang === 'en';
}

function toggleLanguage() {
	const lang = currentLanguage === 'es' ? 'en' : 'es';
	setLanguage(lang);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
	setLanguage(currentLanguage);
	const toggle = document.getElementById('language-toggle');
	if (toggle) toggle.addEventListener('change', toggleLanguage);
});

// Exponer global
window.setLanguage = setLanguage;
window.toggleLanguage = toggleLanguage;
window.translations = translations;
window.currentLanguage = currentLanguage;
