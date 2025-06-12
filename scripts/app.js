const toggleTheme = document.getElementById('toggleTheme');

const navbarHome = document.getElementById('navbarHome');
const navbarShop = document.getElementById('navbarShop');
const navbarContact = document.getElementById('navbarContact');

const navbarBtn = document.querySelectorAll('.navbar-btn');

function toggleDarkMode() {
    let darkMode = document.body;
    darkMode.classList.toggle('dark-mode');

    if(darkMode) {
        svg
    }
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