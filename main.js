window.addEventListener('resize', updateMoreMenu);

function updateMoreMenu() {
    const navItems = document.querySelectorAll('.main-nav li:not(.more-menu)');
    const dropdown = document.querySelector('.more-menu .dropdown');

    navItems.forEach(item => {
        if (getComputedStyle(item).display === 'none') {
            dropdown.appendChild(item);
        } else {
            document.querySelector('.main-nav').insertBefore(item, document.querySelector('.more-menu'));
        }
    });
}

// Initial call to set up the menu correctly
updateMoreMenu();
// JavaScript source code
