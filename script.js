window.addEventListener('load', function () {
    let nav = document.getElementById('nav');
    let links = nav.querySelectorAll('a'); // Get all <a> tags inside the #nav div
    
    links.forEach((link) => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
})

// Add theme change detector
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    let currentTheme = localStorage.getItem('theme') || 'light';
  
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    toggleButton.addEventListener('click', () => {
      let newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      currentTheme = newTheme;
      setThemeImg(currentTheme);
    });
    setThemeImg(currentTheme);
});

// Changes image path based on theme value (light or dark)
function setThemeImg(theme) {
    const toggleImage = document.getElementById('theme-image');
    if(theme == 'light') {
        toggleImage.src = 'static/moon_graphic.png';
    }
    else if (theme == 'dark') {
        toggleImage.src = 'static/sun_graphic.png';
    }
    else {
        console.error("Invalid theme property.");
    }
}