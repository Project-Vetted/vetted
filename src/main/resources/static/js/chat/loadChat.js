
export function loadChat (userId, username, userEmail) {

    var userPhotoUrl = '';

    if (username != 'Alice') {
        userPhotoUrl = 'https://svgsilh.com/svg/303792.svg';
    } else {
        userPhotoUrl = 'https://svgsilh.com/svg/295387.svg'
    }

    Talk.ready.then(function () {
        var me = new Talk.User({
            id: userId,
            name: username,
            email: userEmail,
            photoUrl: userPhotoUrl,
        });
        window.talkSession = new Talk.Session({
            // appId: 'tYHo9w1I',
            // appId: 'tWKk7wVj',
            appId: 'tZou7ipA',
            me: me,
        });
        var other = new Talk.User({
            id: '6',
            name: 'Alice',
            email: 'Alice@gmail.com',
            photoUrl: 'https://svgsilh.com/svg/295387.svg',
        });

        if (me.name == 'Alice') {
            other.name = 'Sebastian';
        }

        var conversation = talkSession.getOrCreateConversation(
            Talk.oneOnOneId(me, other)
        );

        conversation.setParticipant(me);
        conversation.setParticipant(other);


        var inbox = talkSession.createInbox({ selected: conversation }, { showChatHeader: false });
        inbox.mount(document.getElementById('talkjs-container'));

        // Add the participant user's name and photo to the custom header
        var headerUsername = document.getElementById('header-username');
        headerUsername.textContent = other.name;
        document.getElementById('user-avatar').style.backgroundImage = me.photoUrl;

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