const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});

let links = document.querySelectorAll(".menu__list-item > a");
for (let i = 0; i < links.length; i++){
    links[i].onclick = function(){
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("top__buy").onclick = function () {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

const linkCatalogue = document.querySelector(".promo__link");
linkCatalogue.onclick = function(){
    document.getElementById(linkCatalogue.getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
}





const swiperOne = new Swiper('.feedback__slider', {
    loop: true,
    spaceBetween: 20,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

});

const swiperTwo = new Swiper('.certificates__slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});

const accordeon = document.querySelector('.accordeon');
const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle){
    accordeonTitle.addEventListener('click', function(){
        const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

        accordeonTitle.classList.toggle('accordeon__title--active');
        currentText.classList.toggle('accordeon__text--visible');


        if (currentText.classList.contains('accordeon__text--visible')) {
            currentText.style.maxHeight = currentText.scrollHeight + 'px'
        } else{
            currentText.style.maxHeight = null
        }
    });
});