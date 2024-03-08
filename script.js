const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or light images
function imageMode(color) {
  // Adjust images to be consistent with theme:
  image1.src = `images/undraw_dev_focus_${color}.svg`;
  image2.src = `images/undraw_prototyping_process_${color}.svg`;
  image3.src = `images/undraw_engineering_team_${color}.svg`;
}

// Dark mode styles
function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'; // black
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'; // white
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMode('dark');
}

// Light mode styles
function lightMode() {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'; // black
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)'; // white
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
}

// Switch theme dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
}

toggleSwitch.addEventListener('change', switchTheme);