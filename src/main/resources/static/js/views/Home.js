export default function Home(props) {

    //language=HTML
    return `
        <header>
            <h1>Home Page</h1>
        </header>
        <main>
            <div>
                <p>
                    This is the home page text.
                </p>
            </div>
        </main>
    `;

}

export function HomeEvent() {
    let navbar = document.querySelector('.header .navbar');

    //TODO: Refactor to  $(document).on('click', '#register-btn', function (e) {

    document.querySelector('#menu-btn').addEventListener("click",() =>{
        navbar.classList.add('active');
    })

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