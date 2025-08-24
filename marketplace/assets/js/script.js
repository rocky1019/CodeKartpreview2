const scrollElements = document.querySelectorAll('.animate-on-scroll');

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (el) => {
  el.classList.add('visible');
};

const hideScrollElement = (el) => {
  el.classList.remove('visible');
};

const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => { handleScrollAnimation(); });
window.addEventListener('load', () => { handleScrollAnimation(); });
