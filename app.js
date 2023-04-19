const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const workCards = document.querySelectorAll('.work-card');
workCards.forEach((card) => {
    card.addEventListener('click', () => {
      const slider = tns({
        container: '.grid-container',
        items: 1,
        slideBy: 1,
        autoplay: false,
        controls: true,
        nav: false,
        mouseDrag: true,
        arrowKeys: true,
      });
    });
  });
