"use strict"

import {getConnectingUser} from "../chat/getConnectingUser.js";
import {getHostUser} from "../chat/getHostUser.js";
import {getRoomAddress} from "../chat/getRoomAddress.js";
import {loadChat} from "../chat/loadChat.js";


export default function Chat(props) {
    console.log(props)
    console.log(props.user.id)
    console.log(props.user.username)
    console.log(props.user.email)
    return `
        <header>
            <h1>Chat Page</h1>
        </header>
        <main>               
            <div>
                <p>Chat page is here.</p>  
            </div>
            <div>s</div>      
            <div>s</div>
            <div>s</div>
            <div>s</div>
            <div>s</div>
            <div>
                <button id="launch-chat-btn">Chat</button>
            </div>
        <!-- Container element for all TalkJS UI elements -->
<div class="chatbox-container">

    <!-- Custom TalkJS chat header -->
    <div id="chatbox-header">

        <div id="header-bg"></div>
        <div id="user-avatar"></div>
        <p id="header-subject"><span id="header-username"> Username</span></p>


        <div class="button-container">
            <div class="call-button">
                <input type="image" name="videoCallButton" id="videocall" src="https://img.icons8.com/material-sharp/24/ffffff/video-call--v1.png"/>
            </div>
            <div class="call-button">
                <input type="image" name="audioCallButton" id="audiocall" src="https://img.icons8.com/material-rounded/24/ffffff/phone-disconnected.png"/>
            </div>
        </div>
    </div>

    <!-- container element in which TalkJS will display a chat UI -->
    <div id="talkjs-container" style="width: 100%;  height: 500px"><i>Loading chat...</i></div>

</div>    
        </main>
    `;
}


$(document).on('click', '#launch-chat-btn', function (e) {
    e.preventDefault();
    loadChat(getHostUser(), getConnectingUser(getHostUser), getRoomAddress());
    // console.log('I got clicked');
    // console.log(getHostUser());
    // console.log(getConnectingUser(getHostUser()));
    // console.log(getRoomAddress());
});


