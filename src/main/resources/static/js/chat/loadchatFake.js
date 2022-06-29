
export function loadChatFake (userId, username, userEmail) {

    let userPhotoUrl = 'https://svgsilh.com/svg/303792.svg';

    console.log("userId:    " + userId);
    console.log("username:    " + username);
    console.log("userEmail:    " + userEmail);

    Talk.ready.then(function () {
        let me = new Talk.User({
            id: userId,
            name: username,
            email: userEmail,
            photoUrl: userPhotoUrl,
        });
        window.talkSession = new Talk.Session({
            appId: 't2b5YrOq',
            me: me,
        });

        let other = new Talk.User({
            id: "3",
            name: "army_strong77",
            email: "Jmoore@gmail.com",
            photoUrl: userPhotoUrl,
        });

        if (userId === "3" ) {
            other = new Talk.User({
                id: "2",
                name: "marine_lady",
                email: "tamaraEllis@gmail.com",
                photoUrl: userPhotoUrl,
            });
        }


        let conversation = talkSession.getOrCreateConversation(
            Talk.oneOnOneId(me, other)
        );

        conversation.setParticipant(me);
        conversation.setParticipant(other);


        let inbox = talkSession.createInbox({ selected: conversation }, { showChatHeader: false });
        inbox.mount(document.getElementById('talkjs-container'));

        // Add the participant user's name and photo to the custom header
        let headerUsername = document.getElementById('header-username');
        headerUsername.textContent = other.name;
        document.getElementById('user-avatar').style.backgroundImage = me.photoUrl;

        let callButton = document.getElementById('videocall');

        callButton.addEventListener('click', function() {
            let callFrame = window.DailyIframe.createFrame({
                showLeaveButton: true,
                showFullscreenButton: true,
            });
            callFrame.join({ url: 'https://vetted.daily.co/tPZkcdIH0sHOgKa2ye84' })
        });

    });

}