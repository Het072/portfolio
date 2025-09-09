document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  // Observer for header background change
  const headerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          header.style.background = "rgba(30, 30, 30, 0.65)";
          header.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
        } else {
          header.style.background = "rgba(30, 30, 30, 0.4)";
          header.style.boxShadow = "none";
        }
      });
    },
    { threshold: 0.1 }
  );

  const heroSection = document.querySelector("#hero");
  if (heroSection) {
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '1px';
    sentinel.style.height = '1px';
    document.body.prepend(sentinel);
    headerObserver.observe(sentinel);
  }

  // Hamburger menu logic
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li a");

  const toggleMenu = () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  };

  hamburger.addEventListener("click", toggleMenu);

  links.forEach(link => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("open")) {
        toggleMenu();
      }
    });
  });

  // Intersection Observer for scroll animations
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing the element once it's visible
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
});