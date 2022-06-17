import {getHostUser} from "./getHostUser.js";
import {getConnectingUser} from "./getConnectingUser.js";
import {getRoomAddress} from "./getRoomAddress.js";
import {getUserDetails} from "./getUserDetails.js";
import fetchData from "../fetchData.js";

export function loadChat (hostUser, connectingUser, roomAddress, userDetails) {

    console.log(userDetails)
    


    // console.log("I just ran fetchData")
    // console.log(fetchData(state, request));

    // (function(t,a,l,k,j,s){
    //     s=a.createElement('script');s.async=1;s.src="https://cdn.talkjs.com/talk.js";a.head.appendChild(s)
    //     ;k=t.Promise;t.Talk={v:3,ready:{then:function(f){if(k)return new k(function(r,e){l.push([f,r,e])});l
    //                 .push([f])},catch:function(){return k&&new k()},c:l}};})(window,document,[]);
    //
    // Talk.ready.then(function () {
    //     var me = new Talk.User(hostUser);
    //
    //     window.talkSession = new Talk.Session({
    //         appId: 'tYHo9w1I',
    //         me: me,
    //     });
    //
    //     var other = new Talk.User(connectingUser);
    //
    //     var conversation = talkSession.getOrCreateConversation(
    //         Talk.oneOnOneId(me, other)
    //     );
    //
    //     conversation.setParticipant(me);
    //     conversation.setParticipant(other);
    //
    //     var chatbox = talkSession.createChatbox({selected: conversation, showChatHeader: false});
    //     chatbox.mount(document.getElementById('talkjs-container'));
    //
    //     // Add the participant user's name and photo to the custom header
    //     var headerUsername = document.getElementById('header-username');
    //     headerUsername.textContent = other.name;
    //     document.getElementById('user-avatar').style.backgroundImage = "url(" + other.photoUrl + ")";
    //
    //     var callButton = document.getElementById('videocall');
    //
    //     callButton.addEventListener('click', function () {
    //         callFrame = window.DailyIframe.createFrame({
    //             showLeaveButton: true,
    //             showFullscreenButton: true,
    //         });
    //         callFrame.join({url: roomAddress})
    //     });
    //
    //     var callButton = document.getElementById('videocall');
    //     var audioCallButton = document.getElementById('audiocall');
    //
    //     var callFrame;
    //
    //     callButton.addEventListener('click', function () {
    //         if (callFrame != null) {
    //             callFrame.destroy();
    //         }
    //         callFrame = window.DailyIframe.createFrame({
    //             showLeaveButton: true,
    //             showFullscreenButton: true,
    //         });
    //
    //
    //         callFrame.join({url: roomAddress})
    //     });
    //
    //     //audio button listener
    //     audioCallButton.addEventListener('click', function () {
    //
    //
    //         if (callFrame != null) {
    //             callFrame.destroy();
    //         }
    //
    //         callFrame = window.DailyIframe.createFrame({
    //             showLeaveButton: true,
    //             showFullscreenButton: true,
    //
    //         });
    //         callFrame.join({url: roomAddress})
    //     });
    //
    // });
}

