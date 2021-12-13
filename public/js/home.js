// slider


// select all product container using query select all method
const productContainers =[...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];



// Loop through each card using forEach method
productContainers.forEach((item, i) => {
    // store card dimensions inside this variable
    let containerDimensions = item.getBoundingClientRect(); // returns elements dimensions
    let containerWidth = containerDimensions.width;

    // add click event to next button of the current index(i)
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})