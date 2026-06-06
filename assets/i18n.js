(function () {
    'use strict';

    const translations = {
        es: {
            // Meta
            'meta.description': 'Alter Ego — Plataforma de bots conversacionales con IA. Atención automatizada, captación de leads y gestión de contactos en WhatsApp y Web.',
            'meta.og.title': 'Alter Ego — Tu asistente IA, en tu negocio',
            'meta.og.description': 'Conversaciones, leads, contactos y atención automatizada en WhatsApp y Web. Una plataforma para que tu equipo trabaje más eficientemente y tus clientes estén más atendidos.',
            'meta.title': 'Alter Ego — Plataforma de bots conversacionales IA',

            // Nav
            'nav.product': 'Producto',
            'nav.features': 'Funciones',
            'nav.enterprise': 'Empresas',
            'nav.demo': 'Solicitar demo',
            'nav.cases': 'Casos de éxito',

            // Hero
            'hero.pill': 'Plataforma de bots conversacionales IA',
            'hero.title': 'Tu asistente IA,',
            'hero.title.grad': 'en tu negocio.',
            'hero.subtitle': 'Conversaciones, leads, contactos y atención automatizada — todo en un lugar. Diseñado para que tu equipo trabaje más eficientemente y tus clientes estén más atendidos.',
            'hero.cta.demo': 'Solicitar demo',
            'hero.cta.how': 'Ver cómo funciona',
            'hero.tag.whatsapp': 'WhatsApp & Web',
            'hero.tag.ai': 'IA Conversacional',
            'hero.tag.multi': 'Multi-canal',

            // Producto
            'producto.kicker': 'Para tu empresa',
            'producto.title': 'El asistente que tu empresa',
            'producto.title.grad': 'estaba esperando.',
            'producto.subtitle': 'Alter Ego es la plataforma que unifica todo lo que necesita tu equipo de atención: gestioná desde tu panel, mantené a tus clientes informados y respondidos 24/7. Sin colas de espera, sin clientes perdidos, sin respuestas tarde.',
            'producto.card1.title': 'Para tu negocio',
            'producto.card1.text': 'Atendé miles de consultas en simultáneo con bots inteligentes que aprenden y se adaptan a tu marca.',
            'producto.card2.title': 'Para tus clientes',
            'producto.card2.text': 'Respuesta inmediata, atención personalizada. Todo queda registrado para una experiencia consistente y profesional.',
            'producto.replace.title': 'Lo que Alter Ego reemplaza',
            'producto.replace.1': 'Bandejas de mail saturadas',
            'producto.replace.2': 'Operadores agotados de repetir lo mismo',
            'producto.replace.3': 'Llamadas sin respuesta fuera de horario',
            'producto.replace.4': 'Clientes esperando horas por una respuesta',
            'producto.replace.5': 'Datos perdidos en planillas dispersas',
            'producto.replace.6': 'Consultas olvidadas que nadie siguió',

            // Funciones
            'funciones.kicker': 'Módulo conversacional',
            'funciones.title': 'Atender clientes nunca fue',
            'funciones.title.grad': 'tan inteligente.',
            'funciones.spotlight.title': 'Bot IA con personalidad',
            'funciones.spotlight.title.grad': 'propia',
            'funciones.spotlight.text': 'Configurás el tono, el conocimiento y el estilo del bot. Alter Ego conversa como tu marca, responde con contexto y aprende de cada interacción. Todo automático. Todo natural.',
            'funciones.feat1.title': 'Personalidad configurable',
            'funciones.feat1.text': 'Definí el tono, registro, estilo y carácter del asistente.',
            'funciones.feat2.title': 'Prompts del sistema',
            'funciones.feat2.text': 'Instrucciones detalladas para que el bot actúe como un experto.',
            'funciones.feat3.title': 'Conversaciones 24/7',
            'funciones.feat3.text': 'Tu negocio no duerme. Tu bot tampoco.',
            'funciones.feat4.title': 'Historial completo',
            'funciones.feat4.text': 'Todas las conversaciones registradas, buscables y exportables.',
            'funciones.feat5.title': 'Probador de bots',
            'funciones.feat5.text': 'Testeá tu bot antes de salir a producción. Iterá sin riesgo.',
            'funciones.feat6.title': 'Multi-idioma',
            'funciones.feat6.text': 'Atendé en español, inglés o el idioma que necesite tu mercado.',
            'funciones.whatsapp.title': 'Integración con WhatsApp Business',
            'funciones.whatsapp.text': 'Conectá tu instancia de WhatsApp y empezá a atender clientes desde el mismo número que ya usan. Cero fricción. Cero apps nuevas para descargar. Tu cliente, donde ya está.',
            'funciones.chip.whatsapp': 'WhatsApp Business',
            'funciones.chip.web': 'Web embebido',
            'funciones.chip.api': 'API REST',
            'funciones.chip.notif': 'Notificaciones',

            // Datos
            'datos.kicker': 'Datos de tu negocio',
            'datos.title': 'Tu base de datos siempre',
            'datos.title.grad': 'organizada.',
            'datos.subtitle': 'Cada conversación es una oportunidad. Alter Ego captura, organiza y deriva la información automáticamente. Nunca más perdés un lead, una consulta o un contacto importante.',
            'datos.card1.title': 'Formularios inteligentes',
            'datos.card1.text': 'Creá formularios que el bot completa charlando con el cliente. Sin formularios fríos. Datos limpios y completos en cada conversación.',
            'datos.card2.title': 'Contactos centralizados',
            'datos.card2.text': 'Toda la información de cada cliente en un solo lugar. Historial, preferencias, etiquetas y datos de contacto siempre actualizados.',
            'datos.card3.title': 'Derivaciones a humanos',
            'datos.card3.text': 'Cuando el bot detecta que necesita ayuda humana, transfiere la conversación a un agente con todo el contexto previo.',
            'datos.card4.title': 'Envíos masivos',
            'datos.card4.text': 'Mandá comunicaciones, promociones o avisos a tus contactos segmentados con plantillas dinámicas y trazabilidad completa.',
            'datos.quote': '"El cliente deja de esperar respuestas. El equipo deja de repetir lo mismo cien veces al día."',
            'datos.quote.caption': 'Diseñado para que la IA trabaje por vos',

            // Demos
            'demos.kicker': 'Miralo en acción',
            'demos.title.full': 'Así se ve <span class="grad-text">Alter Ego.</span>',
            'demos.subtitle': 'Mirá cómo funciona en situaciones reales. Cada video muestra una parte distinta de la plataforma.',
            'demos.hint': 'Deslizá para ver más',

            // Empresas
            'empresas.kicker': 'Configuración profesional',
            'empresas.title': 'Para empresas que quieren',
            'empresas.title.grad': 'escalar, no saturarse.',
            'empresas.subtitle': 'Alter Ego se adapta a tu negocio, no al revés. Manejá uno o varios bots con la misma facilidad. Todo medible, todo configurable, todo en orden.',
            'empresas.stat.label': 'Conversaciones simultáneas, sin límites de capacidad',
            'empresas.feat1.title': 'Multi-proyecto',
            'empresas.feat1.text': 'Manejá distintos bots para distintas marcas o productos desde un solo panel. Cambiá entre proyectos con un clic.',
            'empresas.feat2.title': 'Módulos configurables',
            'empresas.feat2.text': 'Activá o desactivá funcionalidades según tu necesidad. Configurá horarios, idiomas, derivaciones y mucho más.',
            'empresas.feat3.title': 'Dashboard de métricas',
            'empresas.feat3.text': 'Conversaciones, contactos, bots activos, derivaciones — todo en tiempo real. Tomá decisiones con datos reales.',
            'empresas.feat4.title': 'Gestión de usuarios',
            'empresas.feat4.text': 'Sumá miembros de tu equipo con distintos roles y permisos. Cada uno con su propio acceso y trazabilidad.',

            // Casos de éxito
            'casos.kicker': 'Casos de éxito',
            'casos.subtitle': 'Negocios que transformaron su atención al cliente y escalaron sus operaciones con Alter Ego.',
            'casos.card1.name': 'Humberto Rivero',
            'casos.card1.role': 'Dueño de tienda online',
            'casos.card1.quote': '"Antes perdía ventas por no llegar a contestar todos los mensajes a tiempo. Desde que sumé Alter Ego, mis clientes tienen respuesta al instante a cualquier hora y yo dejé de vivir pegado al celular. La tienda nunca está cerrada."',
            'casos.card1.text': 'Resultado: atención automática 24/7 y cero consultas sin responder.',
            'casos.card2.name': 'Lucas Rodriguez',
            'casos.card2.role': 'Comerciante',
            'casos.card2.quote': '"Mis clientes preguntan todo el día por precios y si tengo stock. Alter Ego les responde al toque, sin que yo tenga que frenar lo que estoy haciendo. Es como tener un vendedor extra que nunca se cansa."',
            'casos.card2.text': 'Resultado: consultas de disponibilidad y precios resueltas al instante, más ventas cerradas sin esfuerzo.',
            'casos.title.full': 'Resultados reales de empresas\n                <span class="grad-text">reales.</span>',

            // Contacto
            'contacto.pill': 'Empezá hoy',
            'contacto.title': 'Solicitar una',
            'contacto.title.grad': 'demo gratuita.',
            'contacto.subtitle': 'Completá el formulario y nos ponemos en contacto con vos. Demo sin costo, configuración en minutos, soporte real desde el primer día.',
            'contacto.success.title': 'Mensaje enviado',
            'contacto.success.text': 'Gracias por tu interés. Nos ponemos en contacto pronto.',
            'contacto.error.text': 'Hubo un error al enviar. Por favor intentá de nuevo.',
            'contacto.label.name': 'Nombre',
            'contacto.label.email': 'Email',
            'contacto.label.company': 'Empresa',
            'contacto.label.company.optional': '(opcional)',
            'contacto.label.message': 'Mensaje',
            'contacto.placeholder.name': 'Tu nombre',
            'contacto.placeholder.email': 'tu@email.com',
            'contacto.placeholder.company': 'Nombre de tu empresa',
            'contacto.placeholder.message': 'Contanos qué necesitás o preguntanos lo que quieras',
            'contacto.submit': 'Enviar mensaje',
            'contacto.submitting': 'Enviando...',

            // Footer
            'footer.copy': 'Producto de',

            // HTML keys (innerHTML with child tags)
            'hero.title.full': 'Tu asistente IA,\n            <span class="grad-text">en tu negocio.</span>',
            'hero.cta.how.full': 'Ver cómo funciona <span class="btn-arrow">→</span>',
            'producto.title.full': 'El asistente que tu empresa\n                <span class="grad-text">estaba esperando.</span>',
            'funciones.title.full': 'Atender clientes nunca fue\n                <span class="grad-text">tan inteligente.</span>',
            'funciones.spotlight.title.full': 'Bot IA con personalidad <span class="grad-text">propia</span>',
            'datos.title.full': 'Tu base de datos siempre\n                <span class="grad-text">organizada.</span>',
            'empresas.title.full': 'Para empresas que quieren\n                <span class="grad-text">escalar, no saturarse.</span>',
            'contacto.title.full': 'Solicitar una\n                <span class="grad-text">demo gratuita.</span>',
            'contacto.label.company.full': 'Empresa <span class="form-optional">(opcional)</span>',
            'contacto.submit.full': 'Enviar mensaje <span class="btn-arrow">→</span>',
            'footer.copy.full': '© <span id="year"></span> Alter Ego — Producto de\n            <a href="https://www.unbrabyte.com" target="_blank" rel="noopener">unbraByte</a>.',
            'whatsapp.url': 'https://wa.me/59899028390?text=Hola%20quiero%20info%20de%20Alter%20Ego'
        },
        en: {
            // Meta
            'meta.description': 'Alter Ego — AI conversational bots platform. Automated support, lead capture and contact management on WhatsApp and Web.',
            'meta.og.title': 'Alter Ego — Your AI assistant, for your business',
            'meta.og.description': 'Conversations, leads, contacts and automated support on WhatsApp and Web. A platform to help your team work more efficiently and your customers be better served.',
            'meta.title': 'Alter Ego — AI Conversational Bots Platform',

            // Nav
            'nav.product': 'Product',
            'nav.features': 'Features',
            'nav.enterprise': 'Enterprise',
            'nav.demo': 'Request demo',
            'nav.cases': 'Success stories',

            // Hero
            'hero.pill': 'AI Conversational Bots Platform',
            'hero.title': 'Your AI assistant,',
            'hero.title.grad': 'for your business.',
            'hero.subtitle': 'Conversations, leads, contacts and automated support — all in one place. Designed to help your team work more efficiently and your customers be better served.',
            'hero.cta.demo': 'Request demo',
            'hero.cta.how': 'See how it works',
            'hero.tag.whatsapp': 'WhatsApp & Web',
            'hero.tag.ai': 'Conversational AI',
            'hero.tag.multi': 'Multi-channel',

            // Producto
            'producto.kicker': 'For your business',
            'producto.title': 'The assistant your business',
            'producto.title.grad': 'has been waiting for.',
            'producto.subtitle': 'Alter Ego is the platform that unifies everything your support team needs: manage from your dashboard, keep your customers informed and answered 24/7. No queues, no lost customers, no late responses.',
            'producto.card1.title': 'For your business',
            'producto.card1.text': 'Handle thousands of queries simultaneously with smart bots that learn and adapt to your brand.',
            'producto.card2.title': 'For your customers',
            'producto.card2.text': 'Immediate response, personalized attention. Everything is recorded for a consistent and professional experience.',
            'producto.replace.title': 'What Alter Ego replaces',
            'producto.replace.1': 'Overflowing email inboxes',
            'producto.replace.2': 'Agents exhausted from repeating the same answers',
            'producto.replace.3': 'Unanswered calls outside business hours',
            'producto.replace.4': 'Customers waiting hours for a reply',
            'producto.replace.5': 'Data lost across scattered spreadsheets',
            'producto.replace.6': 'Forgotten queries that nobody followed up on',

            // Funciones
            'funciones.kicker': 'Conversational module',
            'funciones.title': 'Customer service has never been',
            'funciones.title.grad': 'this smart.',
            'funciones.spotlight.title': 'AI Bot with its own',
            'funciones.spotlight.title.grad': 'personality',
            'funciones.spotlight.text': 'Set the tone, knowledge and style of the bot. Alter Ego talks like your brand, responds with context and learns from every interaction. Fully automatic. Fully natural.',
            'funciones.feat1.title': 'Configurable personality',
            'funciones.feat1.text': 'Define the tone, register, style and character of the assistant.',
            'funciones.feat2.title': 'System prompts',
            'funciones.feat2.text': 'Detailed instructions so the bot acts like an expert.',
            'funciones.feat3.title': '24/7 conversations',
            'funciones.feat3.text': 'Your business never sleeps. Neither does your bot.',
            'funciones.feat4.title': 'Full history',
            'funciones.feat4.text': 'Every conversation logged, searchable and exportable.',
            'funciones.feat5.title': 'Bot tester',
            'funciones.feat5.text': 'Test your bot before going live. Iterate risk-free.',
            'funciones.feat6.title': 'Multi-language',
            'funciones.feat6.text': 'Serve customers in Spanish, English or whatever language your market needs.',
            'funciones.whatsapp.title': 'WhatsApp Business integration',
            'funciones.whatsapp.text': 'Connect your WhatsApp instance and start serving customers from the same number they already use. Zero friction. No new apps to download. Your customer, right where they are.',
            'funciones.chip.whatsapp': 'WhatsApp Business',
            'funciones.chip.web': 'Embedded web',
            'funciones.chip.api': 'REST API',
            'funciones.chip.notif': 'Notifications',

            // Datos
            'datos.kicker': 'Your business data',
            'datos.title': 'Your database always',
            'datos.title.grad': 'organized.',
            'datos.subtitle': 'Every conversation is an opportunity. Alter Ego captures, organizes and routes information automatically. Never lose a lead, a query or an important contact again.',
            'datos.card1.title': 'Smart forms',
            'datos.card1.text': 'Create forms the bot fills out by chatting with the customer. No cold forms. Clean, complete data from every conversation.',
            'datos.card2.title': 'Centralized contacts',
            'datos.card2.text': 'All your customer information in one place. History, preferences, tags and contact details always up to date.',
            'datos.card3.title': 'Human handoffs',
            'datos.card3.text': 'When the bot detects it needs human help, it transfers the conversation to an agent with full prior context.',
            'datos.card4.title': 'Mass messaging',
            'datos.card4.text': 'Send communications, promotions or notices to segmented contacts with dynamic templates and full traceability.',
            'datos.quote': '"Customers stop waiting for answers. Your team stops repeating the same thing a hundred times a day."',
            'datos.quote.caption': 'Designed to let AI work for you',

            // Demos
            'demos.kicker': 'See it in action',
            'demos.title.full': 'This is how <span class="grad-text">Alter Ego</span> looks.',
            'demos.subtitle': 'See how it works in real scenarios. Each video showcases a different part of the platform.',
            'demos.hint': 'Swipe for more',

            // Empresas
            'empresas.kicker': 'Professional setup',
            'empresas.title': 'For businesses that want to',
            'empresas.title.grad': 'scale, not stall.',
            'empresas.subtitle': 'Alter Ego adapts to your business, not the other way around. Manage one or multiple bots with the same ease. Everything measurable, everything configurable, everything in order.',
            'empresas.stat.label': 'Simultaneous conversations, no capacity limits',
            'empresas.feat1.title': 'Multi-project',
            'empresas.feat1.text': 'Manage different bots for different brands or products from a single dashboard. Switch between projects with one click.',
            'empresas.feat2.title': 'Configurable modules',
            'empresas.feat2.text': 'Enable or disable features as needed. Set schedules, languages, handoffs and much more.',
            'empresas.feat3.title': 'Metrics dashboard',
            'empresas.feat3.text': 'Conversations, contacts, active bots, handoffs — all in real time. Make decisions with real data.',
            'empresas.feat4.title': 'User management',
            'empresas.feat4.text': 'Add team members with different roles and permissions. Each with their own access and audit trail.',

            // Success stories
            'casos.kicker': 'Success stories',
            'casos.subtitle': 'Businesses that transformed their customer service and scaled their operations with Alter Ego.',
            'casos.card1.name': 'Humberto Rivero',
            'casos.card1.role': 'Online store owner',
            'casos.card1.quote': '"I used to lose sales because I couldn\'t reply to all messages in time. Since I added Alter Ego, my customers get instant replies at any hour and I stopped being glued to my phone. The store is never closed."',
            'casos.card1.text': 'Result: 24/7 automatic support and zero unanswered inquiries.',
            'casos.card2.name': 'Lucas Rodriguez',
            'casos.card2.role': 'Retailer',
            'casos.card2.quote': '"My customers ask about prices and stock all day long. Alter Ego answers them instantly, without me having to stop what I\'m doing. It\'s like having an extra salesperson who never gets tired."',
            'casos.card2.text': 'Result: availability and pricing inquiries resolved instantly, more sales closed effortlessly.',
            'casos.title.full': 'Real results from <span class="grad-text">real businesses.</span>',

            // Contacto
            'contacto.pill': 'Start today',
            'contacto.title': 'Request a',
            'contacto.title.grad': 'free demo.',
            'contacto.subtitle': 'Fill out the form and we\'ll get in touch with you. Free demo, setup in minutes, real support from day one.',
            'contacto.success.title': 'Message sent',
            'contacto.success.text': 'Thanks for your interest. We\'ll be in touch soon.',
            'contacto.error.text': 'There was an error sending your message. Please try again.',
            'contacto.label.name': 'Name',
            'contacto.label.email': 'Email',
            'contacto.label.company': 'Company',
            'contacto.label.company.optional': '(optional)',
            'contacto.label.message': 'Message',
            'contacto.placeholder.name': 'Your name',
            'contacto.placeholder.email': 'you@email.com',
            'contacto.placeholder.company': 'Your company name',
            'contacto.placeholder.message': 'Tell us what you need or ask us anything',
            'contacto.submit': 'Send message',
            'contacto.submitting': 'Sending...',

            // Footer
            'footer.copy': 'A product by',

            // HTML keys (innerHTML with child tags)
            'hero.title.full': 'Your AI assistant,\n            <span class="grad-text">for your business.</span>',
            'hero.cta.how.full': 'See how it works <span class="btn-arrow">→</span>',
            'producto.title.full': 'The assistant your business\n                <span class="grad-text">has been waiting for.</span>',
            'funciones.title.full': 'Customer service has never been\n                <span class="grad-text">this smart.</span>',
            'funciones.spotlight.title.full': 'AI Bot with its own <span class="grad-text">personality</span>',
            'datos.title.full': 'Your database always\n                <span class="grad-text">organized.</span>',
            'empresas.title.full': 'For businesses that want to\n                <span class="grad-text">scale, not stall.</span>',
            'contacto.title.full': 'Request a\n                <span class="grad-text">free demo.</span>',
            'contacto.label.company.full': 'Company <span class="form-optional">(optional)</span>',
            'contacto.submit.full': 'Send message <span class="btn-arrow">→</span>',
            'footer.copy.full': '© <span id="year"></span> Alter Ego — A product by\n            <a href="https://www.unbrabyte.com" target="_blank" rel="noopener">unbraByte</a>.',
            'whatsapp.url': 'https://wa.me/59899028390?text=Hi%20I%20want%20info%20about%20Alter%20Ego'
        }
    };

    function detectLanguage() {
        const saved = localStorage.getItem('alterego-lang');
        if (saved && translations[saved]) return saved;
        const browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
        return browserLang.startsWith('en') ? 'en' : 'es';
    }

    let currentLang = detectLanguage();

    function applyTranslations(lang) {
        currentLang = lang;
        const t = translations[lang];
        if (!t) return;

        // Update textContent elements
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) el.textContent = t[key];
        });

        // Update innerHTML elements
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (t[key] !== undefined) el.innerHTML = t[key];
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
        });

        // Update meta tags
        var metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && t['meta.description']) metaDesc.setAttribute('content', t['meta.description']);

        var ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && t['meta.og.title']) ogTitle.setAttribute('content', t['meta.og.title']);

        var ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc && t['meta.og.description']) ogDesc.setAttribute('content', t['meta.og.description']);

        // Update page title
        if (t['meta.title']) document.title = t['meta.title'];

        // Re-set year in footer (innerHTML overwrites it)
        var yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // Update html lang attribute
        document.documentElement.setAttribute('lang', lang);

        // Update switcher label
        var switcher = document.getElementById('langSwitch');
        if (switcher) switcher.textContent = lang === 'es' ? 'EN' : 'ES';

        // Update WhatsApp button href
        var waBtn = document.getElementById('whatsappBtn');
        if (waBtn && t['whatsapp.url']) waBtn.setAttribute('href', t['whatsapp.url']);

        // Save preference
        localStorage.setItem('alterego-lang', lang);
    }

    function toggleLanguage() {
        applyTranslations(currentLang === 'es' ? 'en' : 'es');
    }

    function initSwitcher() {
        var btn = document.getElementById('langSwitch');
        if (!btn) return;
        btn.addEventListener('click', toggleLanguage);
    }

    // Run on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initSwitcher();
            applyTranslations(currentLang);
        });
    } else {
        initSwitcher();
        applyTranslations(currentLang);
    }

    // Expose for script.js to use translated strings
    window.AlterEgoI18n = {
        t: function (key) {
            return (translations[currentLang] && translations[currentLang][key]) || key;
        },
        lang: function () { return currentLang; }
    };
})();
