// Observer pour ajouter la classe "visible" lorsque la section est dans la vue
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // On arrête d'observer la section une fois qu'elle est visible
        }
    });
}, {
    threshold: 0.3  // 30% de la section doit être visible pour déclencher l'animation
});

// Appliquer l'observer sur toutes les sections
sections.forEach(section => {
    observer.observe(section);
});
