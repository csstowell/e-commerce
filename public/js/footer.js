const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
            <img src="img/logo.png" class="logo" alt="">
    
            <div class="footer-ul-container">
                <ul class="category">
                <!-- category heading -->
                <li class="category-title">men</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shorts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
                </ul>
                <!-- copy ul element 1 -->
                <ul class="category">
                <!-- category heading -->
                <li class="category-title">Women</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shorts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
                </ul>
            </div>

        </div>

        <p class="footer-title">about company</p>
        <p class="info">Clothes from Garage will be a wearable clothing retail store. 
                        Garage enables people, male or female, young or old, 
                        to design their own clothing whether they have any 
                        artistic abilities or not. It will be fashion art that's unique and original. 
                        Most of all they will be entertained while creating their own fashion art.</p>
        
        <p class="info">support emails - help@garage.com, 
            customersupport@garage.com</p>
        <p class="info">telephone - 1800 00 00 001, 1800 00 00 002</p>

        <!--- Div for class footer social link -->
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & service</a>
                <a href="#" class="social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>

        <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}


// call the function

createFooter();