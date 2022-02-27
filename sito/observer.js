
 const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const glassmorphism = entry.target.querySelector('.glassmorphism');
  
      if (entry.isIntersecting) {
        square.classList.add('glassmorphism-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('glassmorphism-animation');
    });
  });
  
  observer.observe(document.querySelector('.section')); 

  function vhToPixels (vh) {
    return Math.round(window.innerHeight / (100 / vh)) ;
  }

  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.body.scrollTop > Math || document.documentElement.scrollTop > Math) {
      document.getElementById("vej").className = "test";
    } else {
      document.getElementById("vej").className = "";
    }
  }

  