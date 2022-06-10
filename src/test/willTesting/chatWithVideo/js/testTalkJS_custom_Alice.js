
function startChat () {
    Talk.ready.then(function () {
        var me = new Talk.User({
            id: '123456',
            name: 'Alice',
            email: 'alice@example.com',
            photoUrl: 'https://i.ibb.co/1vQ3mm0/pexels-pixabay-415829.jpg',
            welcomeMessage: 'Hey there! How are you? :-)',
        });
        window.talkSession = new Talk.Session({
            appId: 'tYHo9w1I',
            me: me,
        });
        var other = new Talk.User({
            id: '654321',
            name: 'Sebastian',
            email: 'Sebastian@example.com',
            photoUrl: 'https://i.ibb.co/ZdxhpBM/pexels-creation-hill-1681010.jpg',
            welcomeMessage: 'Hey, how can I help?',
        });

        var conversation = talkSession.getOrCreateConversation(
            Talk.oneOnOneId(me, other)
        );
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        var chatbox = talkSession.createChatbox({selected: conversation, showChatHeader: false});
        chatbox.mount(document.getElementById('talkjs-container'));

        // Add the participant user's name and photo to the custom header
        var headerUsername = document.getElementById('header-username');
        headerUsername.textContent = other.name;
        document.getElementById('user-avatar').style.backgroundImage = "url(" + other.photoUrl + ")";

        var callButton = document.getElementById('videocall');

        callButton.addEventListener('click', function () {
            callFrame = window.DailyIframe.createFrame({
                showLeaveButton: true,
                showFullscreenButton: true,
            });
            callFrame.join({url: 'https://vetted.daily.co/tPZkcdIH0sHOgKa2ye84'})
        });

        var callButton = document.getElementById('videocall');
        var audioCallButton = document.getElementById('audiocall');

        var callFrame;

        callButton.addEventListener('click', function () {
            if (callFrame != null) {
                callFrame.destroy();
            }
            callFrame = window.DailyIframe.createFrame({
                showLeaveButton: true,
                showFullscreenButton: true,
            });


            callFrame.join({url: 'https://vetted.daily.co/tPZkcdIH0sHOgKa2ye84'})
        });

        //audio button listener
        audioCallButton.addEventListener('click', function () {


            if (callFrame != null) {
                callFrame.destroy();
            }

            callFrame = window.DailyIframe.createFrame({
                showLeaveButton: true,
                showFullscreenButton: true,

            });
            callFrame.join({url: 'https://vetted.daily.co/tPZkcdIH0sHOgKa2ye84'})
        });

    });
}
