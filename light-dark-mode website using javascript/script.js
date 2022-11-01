const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Dark mode style
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src = 'img/undraw_learning_re_32qv dark.svg';
    image2.src = 'img/undraw_newspaper_re_syf5 dark.svg';
    image3.src = 'img/undraw_relaxation_re_ohkx dark.svg';
}

//Light mode style
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src = 'img/undraw_learning_re_32qv light.svg';
    image2.src = 'img/undraw_newspaper_re_syf5 light.svg';
    image3.src = 'img/undraw_relaxation_re_ohkx light.svg';

}

//Switch theme function 
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
        lightMode();
    }
}
//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check local storage for theme
const currentTheme = localStorage.getItem('theme')
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}