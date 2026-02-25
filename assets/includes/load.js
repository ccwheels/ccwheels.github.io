(function() {
  var path = 'includes/';

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
