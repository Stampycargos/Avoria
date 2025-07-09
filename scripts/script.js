// In a file like scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    const hamBtn = document.getElementById('ham-btn');
    const navBar = document.getElementById('nav-bar');

    hamBtn.addEventListener('click', () => {
        navBar.classList.toggle('open');
        hamBtn.classList.toggle('open'); // Toggle the hamburger icon to 'X'
    });
});