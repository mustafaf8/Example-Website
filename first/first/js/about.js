document.addEventListener('DOMContentLoaded', function() {

    var sections = document.querySelectorAll('.hero, .mission, .team, .member');


    setTimeout(function() {
        sections[0].classList.add('visible');
    }, 100); 


    function checkVisibility() {
        var windowHeight = window.innerHeight;

        sections.forEach(function(section) {
            var rect = section.getBoundingClientRect();
            
          
            if (rect.top >= 0 && rect.bottom <= windowHeight) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }


    var debounceTimer;
    document.addEventListener('scroll', function() {
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }
        debounceTimer = setTimeout(checkVisibility, 100); 
    });


    checkVisibility();
});
