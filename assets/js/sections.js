// Fonction réutilisable pour charger des sections HTML avec un script JavaScript optionnel
function loadSection(id, htmlPath, jsPath = null) {
    fetch(htmlPath)
        .then(response => {
            if (!response.ok) throw new Error(`Erreur HTTP ${response.status} pour ${htmlPath}`);
            return response.text();
        })
        .then(html => {
            const section = document.getElementById(id);
            if (section) {
                section.innerHTML = html;
                if (jsPath) {
                    const script = document.createElement('script');
                    script.src = jsPath;
                    script.defer = true;
                    document.body.appendChild(script);
                }
            } else {
                console.warn(`Élément #${id} introuvable.`);
            }
        })
        .catch(error => {
            console.error(`Erreur lors du chargement de ${id} :`, error);
        });
}

// Appels de chargement de sections
window.onload = function() {
    loadSection('services', 'sections/services.html', null);
    loadSection('about', 'sections/about.html', null);
    loadSection('reservations', 'sections/reservations.html');
};
