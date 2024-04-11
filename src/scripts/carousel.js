document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dots = document.querySelectorAll('.dot');
    
    let index = 0;
    
    function updateNav() {
        if (index === 0) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }
        
        if (index === items.length - 1) {
            nextBtn.classList.add('hidden');
        } else {
            nextBtn.classList.remove('hidden');
        }
        
        dots.forEach(dot => dot.classList.remove('dot--is-active'));
        dots[index].classList.add('dot--is-active');
    }
    
    function moveToSlide(newIndex) {
        track.style.transform = `translateX(-${items[newIndex].offsetLeft}px)`;
        index = newIndex;
        updateNav();
    }
    
    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            moveToSlide(index - 1);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (index < items.length - 1) {
            moveToSlide(index + 1);
        }
    });
    
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            moveToSlide(i);
        });
    });
    
    updateNav();
});
