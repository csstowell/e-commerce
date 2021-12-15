// carousel & toggle size btn

const productImages = document.querySelectorAll(".product-images img");
const productImageSlide = document.querySelector(".image-slider");


// varaiable to store current active image
let activeImageSlide = 0;


// use forEach to loop through image elements
productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        //remove active class from the current image
        productImages[activeImageSlide].classList.remove('active');
        //change background image using style method
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        item.classList.add('active'); //add active class to item element
        activeImageSlide = i; //store its index 
    })
})



// toggle size buttons

const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click',() => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})