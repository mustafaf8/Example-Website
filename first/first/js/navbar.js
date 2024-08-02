document.getElementById('searchInput').addEventListener('keydown', function(event) {
    // Enter tuşuna basıldığında
    if (event.key === 'Enter') {
        // Arama terimini al
        var query = event.target.value.toLowerCase();

        // Yönlendirme mantığı
        var pageMap = {
            'home' :'index.html',
            'hom' :'index.html',
            'ana' :'index.html',
            'ana sayfa' :'index.html',
            'giriş' :'index.html',
            'about': 'aboutView.html',
            'abot': 'aboutView.html',
            'about us': 'aboutView.html',
            'hakkımızda': 'aboutView.html',
            'biz kimiz': 'aboutView.html',
            'product': 'productView.html',
            'products': 'productView.html',
            'ürünler': 'productView.html',
            'urunler': 'productView.html',
            'contact': 'contactView.html',
            'kontekt': 'contactView.html',
            'iletişim': 'contactView.html',
            'iletsim': 'contactView.html',
            'founder' : 'aboutView.html',
            'ceo' : 'aboutView.html'
            
            
            // Buraya daha fazla eşleştirme ekleyebilirsiniz
        };

        // Uygun sayfayı bul ve yönlendir
        if (pageMap[query]) {
            window.location.href = pageMap[query];
        } else {
            alert('No Resulte.');
        }
    }
});
