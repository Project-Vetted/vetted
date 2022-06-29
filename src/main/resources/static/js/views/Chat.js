import {loadChat} from "../chat/loadChat.js";
import {matchByCategory} from "../chat/matchByCategory.js";
import {matchByNoCategory} from "../chat/matchByNoCategory.js";
import {initiateChatPresence} from "../chat/initiateChatPresence.js";
import {getOnlineUsers} from "../chat/getOnlineUsers.js";
import {loadChatFake} from "../chat/loadchatFake.js";
import {getHeaders} from "../auth.js";

export default function Chat(props) {

    console.log("props:     " + props);

    localStorage.setItem("user_id", props.me.id.toString());
    localStorage.setItem("user_name", props.me.username.toString());
    localStorage.setItem("user_email", props.me.email.toString());

    const getMatchedUsers = matchByCategory(props);
    localStorage.setItem('matched_users', JSON.stringify(getMatchedUsers));

    const getUnmatchedUsers = matchByNoCategory(props, matchedUsers);
    localStorage.setItem('unmatched_users', JSON.stringify(getUnmatchedUsers));

    initiateChatPresence(userId, username, userEmail);

    //language=HTML
    return `
        <style>

            @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300&display=swap");

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
            }

            body {
                background: linear-gradient(90deg, #C7C5F4, #776BCC);
            }
            
            

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
                        <div>
                            <!--                            TODO: ADD A VALUE TO THE LINE BELOW EQUAL TO THE USER ID OF THE UPVOTEE-->
                            <button type="button" class="btn btn-primary btn-sm" id="give-like-btn">
                                Give Like
                            </button>
                        </div>
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

const userId = localStorage.getItem("user_id");
const username = localStorage.getItem("user_name");
const userEmail = localStorage.getItem("user_email");

const matchedUsers = JSON.parse(localStorage.getItem('matched_users'));
const unmatchedUsers = JSON.parse(localStorage.getItem('unmatched_users'));
const onlineUsers = getOnlineUsers(matchedUsers, unmatchedUsers);

// console.log("userId:    " + userId);
// console.log("userId:    " + username);
// console.log("userId:    " + userEmail);
console.log("matched users array:   " + matchedUsers);
console.log("unmatched users array:" + unmatchedUsers);
console.log("online users array:" + onlineUsers);


$(document).on('click', '#launch-chat-btn', function (e) {
    e.preventDefault();

    const chatBoxDiv = document.getElementById("chatbox");
    chatBoxDiv.style.display = "revert";

    initiateChatPresence(userId, username, userEmail);
    // loadChat(userId, username, userEmail, matchedUsers, unmatchedUsers, onlineUsers);
    loadChatFake(userId, username, userEmail);



});

$(document).on('click', '#give-like-btn', function (e) {
        console.log(e)
        //TODO: ADD THE USER ID OF THE UPVOTEE TO THE LINE BELOW
        // const upVotee =
        const voteGiver = userId.toString();
        let voteReceiver = ''
        if (voteGiver === '2') {
            voteReceiver = '3'
            $("#give-like-btn").val = voteReceiver;
            return
        } else if (voteGiver === '3') {
            voteReceiver = '2'
            $("#give-like-btn").val = voteReceiver;
        }
        return fetch(`http://localhost:8080/api/users/${voteReceiver}/${voteGiver}/upvote`, {
            method: 'GET',
            headers: getHeaders(),
        })
            .catch(err => console.log(err))
    }
)









