document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // This will typically make the navigation links visible 
            // on mobile when the hamburger icon is clicked.
            navLinks.classList.toggle('active');
        });
    }
});

// To see the mobile menu work, you would need to add CSS like:
/*
@media (max-width: 576px) {
    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: var(--text-light);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10;
        padding: 10px 0;
    }
    .nav-links.active li {
        padding: 10px 20px;
        text-align: left;
    }
}
*/
