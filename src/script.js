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

