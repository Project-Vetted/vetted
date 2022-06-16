export default function Dash(props) {

    //language=HTML
    return `
        <body>
        <nav>
            <div class="logo-name">
                <div class="logo-image">
                    <img src="../../assets/imgs/official_vetted_logo.png" alt="vetted logo">
                </div>

                <span class="logo_name">Vetted</span>
            </div>

            <div class="menu-items">
                <ul class="nav-links">
                    <li><a href="#">
                        <i class="uil uil-estate"></i>
                        <span class="link-name">Home</span>
                    </a></li>
                    <li><a href="#">
                        <i class="uil uil-comments"></i>
                        <span class="link-name">Chat</span>
                    </a></li>
                    <li><a href="#">
                        <i class="uil uil-files-landscapes"></i>
                        <span class="link-name">Vetted Blog</span>
                    </a></li>
                    <li><a href="#">
                        <i class="uil uil-thumbs-up"></i>
                        <span class="link-name">Rating</span>
                    </a></li>
                </ul>
                <!--lower side navbar-->
                <ul class="logout-mode">
                    <li><a href="#">
                        <i class="uil uil-signout"></i>
                        <span class="link-name">Sign Out</span>
                    </a></li>

                    <li class="mode">
                        <a href="#">
                            <i class="uil uil-moon"></i>
                            <span class="link-name">Switch Mode</span>
                        </a>

                        <div class="mode-toggle">
                            <span class="switch"></span>
                        </div>
                    </li>
                </ul>
                <!--end of lower side navbar-->
            </div>
        </nav>

        <!--dashboard features-->
        <section class="dashboard">
            <div class="top-nav">
                <i class="uil uil-bars sidebar-toggle"></i>

                <div class="search-box">
                    <i class="uil uil-search"></i>
                    <input type="text" placeholder="Type your search here">
                </div>

                <img src="../../assets/imgs/vetted_profile.png" alt="profile picture for user">
            </div>
            <!--vetted dashboard-->
            <div class="dash-content">
                <div class="overview">
                    <div class="title">
                        <i class="uil uil-tachometer-fast-alt"></i>
                        <span class="text">Vetted Dashboard</span>
                    </div>

                    <!--user info blog posts-->
                    <div class="boxes">
                        <div class="box box1">
                            <i class="blog-pic" id="blog-pic1"></i>
                            <span class="text">Mental Health & COVID-19</span>
                            <span class="text">Information and mental health resources.</span>
                            <a href="https://mhanational.org/covid19" class="btn">More...</a>
                        </div>
                        <div class="box box2">
                            <i class="blog-pic" id="blog-pic2"></i>
                            <span class="text">State of Mental Health in America</span>
                            <span class="text">Check out our 2022 mental health ranking.</span>
                            <a href="https://mhanational.org/issues/state-mental-health-america" class="btn">More...</a>

                        </div>
                        <div class="box box3">
                            <i class="blog-pic" id="blog-pic3"></i>
                            <span class="text">Action Alerts</span>
                            <span class="text">Take action on key mental health issues.</span>
                            <a href="https://mhanational.org/issues/action-alerts" class="btn">More...</a>
                        </div>
                    </div>
                </div>

                <!--user activity options-->
                <div class="activity">
                    <div class="title">
                        <i class="uil uil-clock-three"></i>
                        <span class="text">User Options</span>
                    </div>
                    <div class="user-btn" id="user-btn">
                        <a href="#" class="chat-btn">Chat</a>
                        <a href="#" class="resources-btn">Resources</a>
                        <a href="#" class="protocol-btn">Protocol</a>
                    </div>
                </div>

                <!--user activity options-->
                <div class="activity">
                    <h3>Category Selection</h3>
                    <div>
                        <button type="button" id="ptsd-btn" data-id="${props.user.id}">PTSD</button>
                        <button type="button" id="depression-btn">Depression</button>
                        <button type="button" id="anxiety-btn">Anxiety</button>
                        <button type="button" id="alcohol-btn">Alcohol Abuse</button>
                        <button type="button" id="sex-btn">Sex Addiction</button>
                    </div>
                </div>
                <!--end of dashboard features-->
            </div>
            </div>
        </section>

        <!--program scripts-->
        <script src="../../js/dashboard.js"></script>
        </body>
    `
}


export function DashEvent() {

    $(document).on('click', '#ptsd-btn', function (e) {
        console.log("user with id:" + $(this).data("id") + " has attempted to add a category to their profile.")
            const reqBody = {
                // id: $(this).data("id"),
                category: $("#ptsd-btn").val()
            }
        //
        //
        //     const options = {
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         method: 'PATCH',
        //         body: JSON.stringify(reqBody)
        //     }
        //
        //     //TODO: Receiving this error when registering a new user: Failed to load resource: the server responded with a status of 500 ()
        //     fetch("http://localhost:8080/api/users/edit-categories", options)
        //         .then(data => console.log(data))
        //         .catch(err => console.log(err))

        return fetch('http://localhost:8080/api/users/edit-categories', {
            method: 'PATCH',
            body: JSON.stringify({
                reqBody
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        }
    )
}