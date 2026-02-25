(function() {
    var path = 'assets/includes/';
  if (window.location.pathname.indexOf('/blog/') !== -1 || window.location.pathname.lastIndexOf('/') > 1) {
    path = '../assets/includes/';
  }

  // Google Tag Manager - inject if not already present
  if (!document.querySelector('script[src*="googletagmanager.com/gtm.js"]')) {
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W79QLTNF');
  }

  // Google Analytics (gtag) - inject if not already present
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-CM9KT40C4X');
    var ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtm.js?id=G-CM9KT40C4X';
    document.head.appendChild(ga);
  }

  // Load HousecallPro booking script if not already present
  if (!document.querySelector('script[src*="housecallpro.com"]')) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://online-booking.housecallpro.com/script.js?token=03f9b3d242034807a562ba24b6278aa1&orgName=Hett-Painting-Group';
    document.head.appendChild(s);
  }

  function load(id, file) {
    var el = document.getElementById(id);
    if (!el) return;
    fetch(path + file)
      .then(function(r) { return r.text(); })
      .then(function(html) { el.innerHTML = html; })
      .catch(function(err) { console.warn('Could not load ' + file, err); });
  }

  load('site-navbar', 'navbar.html');
  load('site-footer', 'footer.html');
})();
