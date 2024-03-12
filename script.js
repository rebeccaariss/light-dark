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

function toggleDarkLightMode(isLight) {
  // nav => white : black
  nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';

  // textBox => black : white
  textBox.style.backgroundColor = isLight? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';

  // text indicator => Light Mode : Dark Mode
  toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
  
  // icon indicator => moon to sun : sun to moon
  isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  
  // image colour palettes => light : dark
  isLight ? imageMode('light') : imageMode('dark');
}

// Switch theme dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(false);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(true);
  }
}

toggleSwitch.addEventListener('change', switchTheme);

// Check localStorage for theme
const currentTheme = localStorage.getItem('theme');
// Check for null value:
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Necessary for toggleSwitch and images to match theme if currentTheme exists:
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode(false);
  }
}