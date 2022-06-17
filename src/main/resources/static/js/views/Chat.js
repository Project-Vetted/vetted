
import {loadChat} from "../chat/loadChat.js";
import {getHeaders} from "../auth.js";



export default function Chat(props) {
    const hiddenUsername = "Anonymous";
    localStorage.setItem("user_id", props.user.id.toString());
    localStorage.setItem("user_name", hiddenUsername);
    localStorage.setItem("user_email", props.user.id.toString());

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
                <!--input type="checkbox" name="notificationToggle" class="toggle-checkbox" id="toggle"-->
                <input type="image" name="videoCallButton" id="videocall" src="https://img.icons8.com/material-sharp/24/ffffff/video-call--v1.png"/> 
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

{$(document).on('click', '#launch-chat-btn', function (e) {
    e.preventDefault();
    const userId = localStorage.getItem("user_id");
    const username = localStorage.getItem("user_name");
    const userEmail = localStorage.getItem("user_email");
    loadChat(userId, username, userEmail);

})};






