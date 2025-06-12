const toggleTheme = document.getElementById('toggleTheme');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const cartIcon = document.getElementById('cartIcon');

const navbarHome = document.getElementById('navbarHome');
const navbarShop = document.getElementById('navbarShop');
const navbarContact = document.getElementById('navbarContact');

const navbarBtn = document.querySelectorAll('.navbar-btn');

// Toggle Dark Mode and Light Mode, switches SVG colors and SVG icons based off theme
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if(isDarkMode) {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    }

    const svgColor = isDarkMode ? 'white' : 'black';

    sunIcon.setAttribute('color', svgColor);
    moonIcon.setAttribute('color', svgColor);
    cartIcon.setAttribute('color', svgColor);
}

toggleTheme.addEventListener('click', () => {
    toggleDarkMode();
})


navbarBtn.forEach((button) => {
    button.addEventListener('click', () => {
        navbarBtn.forEach(btn => btn.classList.remove('active-tab'));
        button.classList.add('active-tab')
    })
})