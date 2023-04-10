const continiun = document.getElementById('clickFuntion');
const contacto = document.getElementById('contac');
const loaderContainer = document.getElementById('loader-container');

continiun.addEventListener('click', () => {
    event.preventDefault();
    gsap.to(loaderContainer, { y: "-100vh", duration: 1 });
})

contacto.addEventListener('click', () => {
    event.preventDefault();
    gsap.to(loaderContainer, { y: "0vh", duration: 1 });
})
