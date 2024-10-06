document.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.hero, .mission, .team, .member');

   
    setTimeout(function() {
        sections[0].classList.add('visible');
    }, 100);

   
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1 
    });


    sections.forEach(function(section) {
        observer.observe(section);
    });
});
