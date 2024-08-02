
document.addEventListener('DOMContentLoaded', function() {
    var firstSection = document.querySelector('.section');
    var secondSection = document.querySelector('.section1');
    var thirdSection = document.querySelector('.section2');
    var fourthSection = document.querySelector('.section3'); // Dördüncü bölüm

    var lastScrollTop = 0; // Son kaydırma pozisyonunu saklamak için

    // İlk section'ı yavaşça görünür hale getirin
    setTimeout(function() {
        firstSection.classList.add('visible');
    }, 100); // 100ms bekle, isterseniz bu süreyi değiştirebilirsiniz

    // Scroll ile diğer section'ları görünür hale getirin
    document.addEventListener('scroll', function() {
        var windowHeight = window.innerHeight;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        var firstSectionBottom = firstSection.getBoundingClientRect().bottom;
        var secondSectionTop = secondSection.getBoundingClientRect().top;
        var secondSectionBottom = secondSection.getBoundingClientRect().bottom;
        var thirdSectionTop = thirdSection.getBoundingClientRect().top;
        var fourthSectionTop = fourthSection.getBoundingClientRect().top;

        // İlk section tamamen görünürse ikinci section'ı kontrol et
        if (firstSectionBottom <= windowHeight) {
            if (secondSectionTop < windowHeight) {
                secondSection.classList.add('visible');
            } else {
                secondSection.classList.remove('visible');
            }

            // İkinci section tamamen görünürse üçüncü section'ı kontrol et
            if (secondSectionBottom <= windowHeight) {
                if (thirdSectionTop < windowHeight) {
                    thirdSection.classList.add('visible');
                } else {
                    thirdSection.classList.remove('visible');
                }
            }

            // Üçüncü section tamamen görünürse dördüncü section'ı kontrol et
            if (thirdSectionTop <= windowHeight) {
                if (fourthSectionTop < windowHeight) {
                    // Kaydırma yönüne göre section3'ü göster veya gizle
                    if (scrollTop > lastScrollTop) {
                        // Aşağı kaydırma
                        fourthSection.classList.add('visible');
                    } else {
                        // Yukarı kaydırma
                        fourthSection.classList.remove('visible');
                    }
                } else {
                    fourthSection.classList.remove('visible');
                }
            }
        }

        // Son kaydırma pozisyonunu güncelle
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Kötü kaydırma pozisyonunu engelle
    });
});

  