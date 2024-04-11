document.addEventListener('DOMContentLoaded', function () {
    // seasons section
    const buttons = document.querySelectorAll('[data-tab-button]');

    // seasons tabs 
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const abaAlvo = event.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            hideAllTabs();
            tab.classList.add('seasons__list--is-active');
            tab.classList.add('.animated-element')
            removeActiveButton();
            event.target.classList.add('seasons__tabs__button--is-active');
        });
    });

    // functions 
    function removeActiveButton() {
        const buttons = document.querySelectorAll('[data-tab-button]');

        buttons.forEach(button => {
            button.classList.remove('seasons__tabs__button--is-active');
        });
    }

    function hideAllTabs() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        tabsContainer.forEach(tab => {
            tab.classList.remove('seasons__list--is-active');
            tab.classList.remove('.animated-element')
        });
    }
    
    // animations
    const element = document.querySelector('.animated-element');
    
    element.style.opacity = 0;
    element.style.transform = 'translateX(-100%)';
    
    function fadeInAndMoveIn() {
        element.style.opacity = 1;
        element.style.transform = 'translateX(0)';
    }
    
    setTimeout(fadeInAndMoveIn, 2000);

    
});