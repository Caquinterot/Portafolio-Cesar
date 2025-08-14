// Test script para verificar el funcionamiento del traductor
document.addEventListener('DOMContentLoaded', function() {
    // Esperar un poco para que todo se cargue
    setTimeout(function() {
        console.log('=== TEST TRADUCTOR ===');

        // Verificar que las traducciones están cargadas
        console.log('1. Verificando traducciones...');
        if (typeof translations !== 'undefined') {
            console.log('✅ Traducciones cargadas');
            console.log('Idiomas disponibles:', Object.keys(translations));
            console.log('Traducciones ES:', Object.keys(translations.es).length);
            console.log('Traducciones EN:', Object.keys(translations.en).length);
        } else {
            console.log('❌ Traducciones NO cargadas');
            return;
        }

        // Verificar elementos del DOM
        console.log('\n2. Verificando elementos del DOM...');
        const elementsToCheck = [
            'home_title', 'home_description', 'home_cv',
            'about_title', 'about_description',
            'skills-title', 'skills-desc',
            'projects-title', 'contact-title',
            'language-toggle'
        ];

        let missingElements = [];
        elementsToCheck.forEach(id => {
            const element = document.getElementById(id);
            if (!element) {
                missingElements.push(id);
                console.log(`❌ Elemento faltante: ${id}`);
            } else {
                console.log(`✅ Elemento encontrado: ${id} - Texto: "${element.textContent.substring(0, 30)}..."`);
            }
        });

        // Verificar funcionamiento del toggle
        console.log('\n3. Verificando toggle...');
        const toggle = document.getElementById('language-toggle');
        if (toggle) {
            console.log('✅ Toggle encontrado');
            console.log('Estado actual del toggle:', toggle.checked);
            if (typeof currentLanguage !== 'undefined') {
                console.log('Idioma actual:', currentLanguage);
            }
        } else {
            console.log('❌ Toggle NO encontrado');
        }

        // Verificar funciones
        console.log('\n4. Verificando funciones...');
        if (typeof setLanguage === 'function') {
            console.log('✅ setLanguage está disponible');
        } else {
            console.log('❌ setLanguage NO está disponible');
        }
        
        if (typeof toggleLanguage === 'function') {
            console.log('✅ toggleLanguage está disponible');
        } else {
            console.log('❌ toggleLanguage NO está disponible');
        }

        // Resumen
        console.log('\n=== RESUMEN ===');
        if (missingElements.length === 0) {
            console.log('🎉 ¡Todos los elementos encontrados!');
        } else {
            console.log(`⚠️  Elementos faltantes: ${missingElements.length}`);
            console.log('Elementos faltantes:', missingElements);
        }

        console.log('\n=== INSTRUCCIONES ===');
        console.log('Para probar manualmente en la consola:');
        console.log('- setLanguage("en") - Cambia a inglés');
        console.log('- setLanguage("es") - Cambia a español');
        console.log('- toggleLanguage() - Alterna idioma');
        console.log('- Click en el toggle visual para cambiar idioma');

    }, 500); // Esperar 500ms
});
