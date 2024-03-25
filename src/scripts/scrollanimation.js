document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Verhindern Sie, dass der Link standardmäßig navigiert wird

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top;
            const scrollPosition = window.scrollY;
            const targetPosition = offsetTop + scrollPosition;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth' // Fügen Sie eine sanfte Scrollanimation hinzu
            });
        }
    });
});