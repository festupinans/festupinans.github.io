const continiun = document.getElementById('clickFuntion');
const contacto = document.getElementById('contac');
const loaderContainer = document.getElementById('loader-container');

continiun.addEventListener('click', () => {
    event.preventDefault();
    gsap.to(loaderContainer, { y: "-120vh", duration: 1 });
    window.scrollTo(0, 0);
})

contacto.addEventListener('click', () => {
    event.preventDefault();
    gsap.to(loaderContainer, { y: "0vh", duration: 1 });
    window.scrollTo(0, 0);
})
