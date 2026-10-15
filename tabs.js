const tabs = document.querySelectorAll('.tab');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        tabs.forEach(tab =>
            tab.classList.toggle('active', tab.getAttribute('href') === '#' + entry.target.id)
        );
    });
}, { rootMargin: '-30% 0px -60% 0px' });

document.querySelectorAll('section').forEach(s => observer.observe(s));
