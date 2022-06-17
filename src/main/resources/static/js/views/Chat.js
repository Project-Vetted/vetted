
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

            <!-- container element in which TalkJS will display a chat UI -->
            <div id="talkjs-container" style="width: 90%; margin: 30px; height: 500px">
              <i>Loading chat...</i>
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






