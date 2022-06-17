
import fetchData from "../fetchData.js";

export function loadChat (userId, username, userEmail) {

    Talk.ready.then(function () {
        const me = new Talk.User({
            id: userId,
            name: username,
            email: userEmail
        });
        window.talkSession = new Talk.Session({
            appId: 'tYHo9w1I',
            me: me,
        });
        const other = new Talk.User({
            id: '8',
            name: 'Testyboi',
            email: 'Testyboi2@gmail.com'
        });

        const conversation = talkSession.getOrCreateConversation(
            Talk.oneOnOneId(me, other)
        );
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        const inbox = talkSession.createInbox({ selected: conversation }, { showChatHeader: false });
        inbox.mount(document.getElementById('talkjs-container'));

        // Add the participant user's name and photo to the custom header
        const headerUsername = document.getElementById('header-username');
        headerUsername.textContent = other.name;
        document.getElementById('user-avatar').style.backgroundImage = "url(" + other.photoUrl + ")";

        var callButton = document.getElementById('videocall');

        callButton.addEventListener('click', function() {
            var callFrame = window.DailyIframe.createFrame({
                showLeaveButton: true,
                showFullscreenButton: true,
            });
            callFrame.join({ url: 'https://vetted.daily.co/tPZkcdIH0sHOgKa2ye84' })
        });

    });



}

