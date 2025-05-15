
        document.addEventListener('DOMContentLoaded', function() {
            const indiceLista = document.getElementById('indice-lista');
            const mainContent = document.querySelector('main'); // O un selector más específico si solo quieres escanear una parte

            if (!indiceLista || !mainContent) {
                // Salir si no encontramos el contenedor del índice o el contenido principal
                return;
            }

            // Seleccionar los encabezados que queremos incluir en el índice
            const headings = mainContent.querySelectorAll('h2, h3');

            headings.forEach((heading, index) => {
                // Asegurarse de que el encabezado tenga un ID
                if (!heading.id) {
                    // Generar un ID basado en el texto del encabezado (simple y puede necesitar mejoras para caracteres especiales)
                    // O usar un índice si el texto se repite
                    heading.id = 'section-' + index + '-' + heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                }

                // Crear el elemento de la lista para el índice
                const listItem = document.createElement('li');

                // Crear el enlace
                const link = document.createElement('a');
                link.href = '#' + heading.id;
                link.textContent = heading.textContent;

                // Añadir clases de estilo basadas en el nivel del encabezado
                if (heading.tagName === 'H3') {
                    listItem.style.marginLeft = '20px'; // Añadir sangría para subtítulos
                    listItem.style.fontSize = '0.9em'; // Hacer la fuente un poco más pequeña
                }

                // Añadir el enlace al elemento de la lista
                listItem.appendChild(link);

                // Añadir el elemento de la lista a la lista del índice
                indiceLista.appendChild(listItem);
            });
        });

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
