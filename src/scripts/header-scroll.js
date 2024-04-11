document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.header__nav__navbar__list__item__link');
    const sections = document.querySelectorAll('section');

    function isSectionInView(section) {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    }

    function updateActiveLink() {
        let activeSectionId = null;
    
        sections.forEach(section => {
            const id = section.getAttribute('id');
            const link = document.querySelector(`.header__nav__navbar__list__item__link[href="#${id}"]`);
    
            if (link && isSectionInView(section)) {
                activeSectionId = id;
            }
        });
    
        links.forEach(link => {
            const href = link.getAttribute('href').substring(1);
            if (href === activeSectionId) {
                link.classList.add('--is-active');
            } else {
                link.classList.remove('--is-active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
});