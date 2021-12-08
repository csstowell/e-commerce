// create nav function
// use query selector method

const CreateNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/logo.png" class="brand-logo" alt="">
            <!-- create search box -->
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, clothing">
                    <!-- search button -->
                    <button class="search-btn">search</button>
                </div>
                <!-- create an anchor tag inside nav-items -->
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        
        <ul class="links-container">
            <!-- LI tags to create list items -->
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">Women</a></li>
            <li class="link-item"><a href="#" class="link">Men</a></li>
            <li class="link-item"><a href="#" class="link">Kids</a></li>
            <li class="link-item"><a href="#" class="link">Accessories</a></li>
        </ul>
    `;
}


//call the CreateNav function

CreateNav();