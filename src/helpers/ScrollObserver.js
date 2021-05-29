const Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const cards = entry.target.parentElement.querySelectorAll('[data-animate]');
        console.log(cards);
        if (entry.isIntersecting) {
            cards.forEach(card => {
                // card.classList.add(card.getAttribute('data-animate-class'));
                card.setAttribute('data-animate', 'true');
            });
            return;
        }
        cards.forEach(card => {
            // card.classList.remove(card.getAttribute('data-animate-class'));
            card.setAttribute('data-animate', 'false');
        });
    });
});

// observer.observe(document.querySelector('.square-wrapper'));

export default Observer;