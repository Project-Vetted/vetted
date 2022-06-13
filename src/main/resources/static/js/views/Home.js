export default function Home(props) {

    //language=HTML
    return `
<!--        <head>-->
<!--            <meta charset="UTF-8"/>-->

<!--            <link rel="stylesheet" href="../../assets/css/style.css">-->
<!--            <link rel="stylesheet" href="../../assets/css/pre.css">-->


<!--        </head>-->
        <body>

        <!--social media header starts-->
        <!--<section class="social-header">-->
        <!--    <nav class="social-media">-->
        <!--        <div id="socials" class="socials"></div>-->
        <!--        <a href="https://www.linkedin.com/in/mersedyes-livingston/"> <i class="fab fa-linkedin"></i> linkedin </a>-->
        <!--        <a href="https://github.com/Project-Vetted"> <i class="fab fa-github"></i> github </a>-->
        <!--    </nav>-->
        <!--</section>-->
        <!--social media header ends-->
        

        <!-- home section starts  -->

        <section class="home" id="home">
            <div class="swiper home-slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="box" style="background: url('../../assets/imgs/home-bg-1.png') no-repeat;">
                            <div class="content">
                                <span>you are not</span>
                                <h3>alone</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                                <a href="#visiter-user" class="btn">get started</a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="box second" style="background: url('../../assets/imgs/home-bg-2.png') no-repeat;">
                            <div class="content">
                                <span>this is your</span>
                                <h3>safe space</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                                <a href="#visiter-user" class="btn">get started</a>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="box" style="background: url('../../assets/imgs/home-bg-3.png') no-repeat;">
                            <div class="content">
                                <span>own your mental</span>
                                <h3>health</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                                <a href="#visiter-user" class="btn">get started</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </section>
        <!-- home section ends -->

        <!-- about section starts  -->

        <section class="about" id="about">

            <div class="image">
                <img src="../../assets/imgs/about-img.png" alt="">
            </div>

            <div class="content">
                <h3>vetted</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptates corrupti natus necessitatibus beatae voluptatibus, deserunt quo soluta minima libero laborum, corporis error esse vitae placeat blanditiis reiciendis vel? Minima.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dicta doloremque placeat porro, ipsam quia at beatae atque odit iste?</p>
                <a href="#" class="btn">read more</a>
            </div>

        </section>

        <!-- about section ends -->

        <!-- sign-in/register section starts  -->

        <section class="register" id="register">
            <h1 class="heading">sign-in/register</h1>
            <div class="swiper register">
                <div class="register-action">
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem laborum pariatur alias, culpa illum quaerat, aliquid laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab delectus dolorum ut recusandae ipsam?</p>
                    <a href="#" class="btn">Register</a>
                </div>
            </div>
            </div>
        </section>

        <!-- sign-in/register section ends -->

        <!-- services section starts  -->

        <section class="services">
            <h1 class="heading"> why vetted </h1>
            <div class="box-container">

                <div class="box">
                    <img src="../../assets/imgs/serv-1.jpeg" alt="">
                    <h3>vetted members</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                    <a href="#" class="btn">read more</a>
                </div>

                <div class="box">
                    <img src="../../assets/imgs/serv-2.jpeg" alt="">
                    <h3>privacy</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                    <a href="#" class="btn">read more</a>
                </div>

                <div class="box">
                    <img src="../../assets/imgs/serv-3.jpeg" alt="">
                    <h3>anonymity</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                    <a href="#" class="btn">read more</a>
                </div>

                <div class="box">
                    <img src="../../assets/imgs/serv-4.jpeg" alt="">
                    <h3>build connections</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                    <a href="#" class="btn">read more</a>
                </div>

                <div class="box">
                    <img src="../../assets/imgs/serv-5.jpeg" alt="">
                    <h3>mental health education</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nihil?</p>
                    <a href="#" class="btn">read more</a>
                </div>
            </div>
        </section>

        <!-- services section ends -->

        <!-- testimonials section starts  -->
        <section class="category">
            <h1 class="heading">Testimonials</h1>
            <div class="box-container">
                <div class="box">
                    <img src="../../assets/imgs/category-1.jpeg" alt="">
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                    <a href="#" class="btn">read more</a>
                </div>

                <div class="box">
                    <img src="../../assets/imgs/category-3.jpeg" alt="">
                    <h3>Lorem ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                    <a href="#" class="btn">read more</a>
                </div>

                <div class="box">
                    <img src="../../assets/imgs/category-2.jpeg" alt="">
                    <h3>Lorem ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                    <a href="#" class="btn">read more</a>
                </div>

                <div class="box">
                    <img src="../../assets/imgs/category-4.jpeg" alt="">
                    <h3>Lorem ipsum dolor sit.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, id.</p>
                    <a href="#" class="btn">read more</a>
                </div>
            </div>
        </section>
        <!-- testimonials section ends -->

        <!-- blogs section starts  -->

        <section class="blogs" id="blogs">

            <h1 class="heading"> our quarterly post </h1>

            <div class="swiper blogs-slider">

                <div class="swiper-wrapper">

                    <div class="swiper-slide slide">
                        <img src="../../assets/imgs/img-1.jpg" alt="">
                        <div class="icons">
                            <a href="#"> <i class="fas fa-calendar"></i> June 2022 </a>
                            <a href="#"> <i class="fas fa-user"></i> by vetted </a>
                        </div>
                        <h3>why is your mental health important?</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                        <a href="#" class="btn">read more</a>
                    </div>

                    <div class="swiper-slide slide">
                        <img src="../../assets/imgs/img-2.jpg" alt="">
                        <div class="icons">
                            <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                            <a href="#"> <i class="fas fa-user"></i> by admin </a>
                        </div>
                        <h3>how does vetted benefit the vet community?</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                        <a href="#" class="btn">read more</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- blogs section ends -->

        <!-- newsletter section  -->

        <section class="newsletter">
            <div class="content">
                <h1 class="heading">Vetted Highlights</h1>
                <p>To help you track with Vetted news, provide your email to keep track of what's going on.</p>
                <form action="">
                    <input type="email" name="" placeholder="enter your email address" id="" class="email">
                    <input type="submit" value="subscribe" class="btn">
                </form>
            </div>
        </section>

        <!-- footer section starts  -->
        <section class="footer">
            <div class="box-container">
                <div class="box">
                    <h3>quick links</h3>
                    <<a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#contact">contact</a>
                    <a href="#resource">resource blog</a>
                    <a href="#visiter-user">Sign-in/Register</a>
                </div>

                <div class="box">
                    <h3>contact us</h3>
                    <a href="#"> <i class="fas fa-phone"></i> +123-345-5678 </a>
                    <a href="#"> <i class="fas fa-envelope"></i> info@codeup.com </a>
                    <a href="#"> <i class="fas fa-map"></i> Dallas, Texas </a>
                </div>

                <div class="box">
                    <h3>Social Media</h3>
                    <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
                    <a href="#"> <i class="fab fa-github"></i> github </a>
                </div>
            </div>

            <div class="group-name">created by <span>Globo Gym</span> | all rights reserved</div>

        </section>
        <!-- footer section ends -->

        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

        <!-- Initialize Swiper -->
        <script>
            const swiper = new Swiper(".home-slider", {
                loop: true,
                grabCursor: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        </script>

        <!-- custom js file link  -->
        <script src="src/main/resources/static/js/main.js"></script>
        <script src="src/main/resources/static/js/pre.js"></script>

        </body>
    `;
}

export function HomeEvent() {
    let navbar = document.querySelector('.header .navbar');

    document.querySelector('#menu-btn').onclick = () =>{
        navbar.classList.add('active');
    }

    document.querySelector('#nav-close').onclick = () =>{
        navbar.classList.remove('active');
    }

    let searchForm = document.querySelector('.search-form');

    document.querySelector('#search-btn').onclick = () =>{
        searchForm.classList.add('active');
    }

    window.onscroll = () =>{
        navbar.classList.remove('active');

        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('.header').classList.remove('active');
        }
    };

    window.onload = () =>{
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('.header').classList.remove('active');
        }
    };
}