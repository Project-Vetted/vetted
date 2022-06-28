import {loadChat} from "../chat/loadChat.js";
import {getHeaders} from "../auth.js";

export default function Chat(props) {
    localStorage.setItem("user_id", props.user.id.toString());
    localStorage.setItem("user_name", props.user.username.toString());
    localStorage.setItem("user_email", props.user.email.toString());

    //language=HTML
    return `
        <style>


            /* Container for everything TalkJS*/
            .chatbox-container {
                display: none;
                width: 420px;
                max-width: 100%;
                margin: auto;
            }

            /* Custom header for the chatbox*/
            #chatbox-header {
                height: 110px;
                position: relative;
                background-color: #000;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                /* Slightly curve the top of the header */
                border-radius: 10px 10px 0 0;
                margin-bottom: -3px;
                padding: 10px;
                position: relative;
            }

            #header-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                border-radius: inherit;
                opacity: 0.6;
            }

            #user-avatar {
                background-image: url("https://i.ibb.co/gJjXWP3/Soldier-Avatar.png");
                position: absolute;
                height: 50px;
                width: 50px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                border-radius: 50%;
                border: 2px solid #eee;
            }

            #chatbox-header p {
                font-family: "Helvetica", sans-serif;
                color: #eee;
                margin: 0;
            }

            #header-subject {
                position: absolute;
                font-size: 32px;
                left: 70px;
                top: 7px;
            }

            /* Notification toggle */
            .button-container {
                text-align: right;
                position: absolute;
                bottom: 15px;
                right: 10px;
            }

            .button-container p {
                display: inline;
                font-size: 10px;
                padding-right: 10px;
                vertical-align: middle;
            }
            .call-button {
                vertical-align: middle;
                display: inline-block;
                position: relative;
                width: 51px;
                -webkit-user-select:none;
                -moz-user-select:none;
                -ms-user-select: none;
                user-select: none;
                height: 18px;
            }

        </style>
        
        <header>
            <h1>Chat Page</h1>
        </header>
        <main>
            <div>
                <p>Chat page is here.</p>
            </div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>.</div>
            <div>
                <button id="launch-chat-btn">Chat</button>
            </div>

            <!-- Container element for all TalkJS UI elements -->
            <div id="chatbox" class="chatbox-container">

                <!-- Custom TalkJS chat header -->
                <div id="chatbox-header">

                    <div id="header-bg"></div>
                    <div id="user-avatar"></div>
                    <p id="header-subject"><span id="header-username"> Username</span></p>


                    <div class="button-container">
                        <div class="call-button">
                            <!--input type="checkbox" name="notificationToggle" class="toggle-checkbox" id="toggle"-->
                            <input type="image" name="videoCallButton" id="videocall"
                                   src="https://img.icons8.com/material-sharp/24/ffffff/video-call--v1.png"/>
                        </div>
                    </div>
                </div>

                <!-- container element in which TalkJS will display a chat UI -->
                <div id="talkjs-container" style="width: 100%;  height: 500px"><i>Loading chat...</i></div>

            </div>

            </div>

        </main>
    `;
}

{
    {$(document).on('click', '#launch-chat-btn', function (e) {
        e.preventDefault();

        const chatBoxDiv = document.getElementById("chatbox");
        chatBoxDiv.style.display = "revert";

        const userId = localStorage.getItem("user_id");
        const username = localStorage.getItem("user_name");
        const userEmail = localStorage.getItem("user_email");
        loadChat(userId, username, userEmail);

    })}

    $(document).on('click', '#give-like-btn', function (e) {
            console.log($(this).val());
            const userId = localStorage.getItem("user_id")
            if (!userId) {
                return
            }
            const newFriendsUsername = $(this).val().toString();

            return fetch(`http://localhost:8080/api/users/${userId}/updateFriends?friend=${newFriendsUsername}`, {
                method: 'PATCH',
                headers: getHeaders(),
            })
                .catch(err => console.log(err))
        }
    )
}







