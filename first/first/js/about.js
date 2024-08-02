document.addEventListener('DOMContentLoaded', function() {
    // Bölümleri seçiyoruz
    var heroSection = document.querySelector('.hero');
    var missionSection = document.querySelector('.mission');
    var teamSection = document.querySelector('.team');
    var memberSection = document.querySelector('.member');

    var lastScrollTop = 0; // Son kaydırma pozisyonunu saklamak için

    // İlk section'ı yavaşça görünür hale getirin
    setTimeout(function() {
        heroSection.classList.add('visible');
    }, 100); // 100ms bekle, isterseniz bu süreyi değiştirebilirsiniz

    // Scroll ile diğer section'ları görünür hale getirin
    document.addEventListener('scroll', function() {
        var windowHeight = window.innerHeight;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Her bölümün görünürlük durumunu kontrol ediyoruz
        var sections = [heroSection, missionSection, teamSection, memberSection];

        sections.forEach(function(section) {
            var sectionTop = section.getBoundingClientRect().top;
            var sectionBottom = section.getBoundingClientRect().bottom;

            // Bölüm ekranın altına düşüp düşmediğini kontrol ediyoruz
            if (sectionBottom <= windowHeight && sectionTop >= 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });

        // Son kaydırma pozisyonunu güncelle
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Kötü kaydırma pozisyonunu engelle
    });
});

