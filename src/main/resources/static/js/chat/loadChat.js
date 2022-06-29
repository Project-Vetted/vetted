
export function loadChat (userId, username, userEmail, matchedUsers, unmatchedUsers, onlineUsers) {

    let userPhotoUrl = 'https://svgsilh.com/svg/303792.svg';

    Talk.ready.then(function () {
        let me = new Talk.User({
            id: userId,
            name: username,
            email: userEmail,
            photoUrl: userPhotoUrl,
        });
        window.talkSession = new Talk.Session({
            appId: 'tYHo9w1I',
            me: me,
        });

        let other = new Talk.User({
            id: userId,
            name: username,
            email: userEmail,
            photoUrl: userPhotoUrl,
        });

        let userMatchFound = false;

        for (let i = 0; i < matchedUsers.length; i++) {
            for (let x = 0; x < onlineUsers.length; x++) {
                if (matchedUsers[i] === onlineUsers[x]) {
                    other = new Talk.User({
                        id: matchedUsers[i].id,
                        name: matchedUsers[i].username,
                        email: matchedUsers[i].email,
                        photoUrl: 'https://svgsilh.com/svg/295387.svg',
                    });
                    i = matchedUsers.length
                    x = onlineUsers.length
                    userMatchFound = true;
                }
            }
        }

        if (!userMatchFound) {
            for (let i = 0; i < unmatchedUsers.length; i++) {
                for (let x = 0; x < onlineUsers.length; x++) {
                    if (unmatchedUsers[i] === onlineUsers[x]) {
                        other = new Talk.User({
                            id: unmatchedUsers[i].id,
                            name: unmatchedUsers[i].username,
                            email: unmatchedUsers[i].email,
                            photoUrl: 'https://svgsilh.com/svg/295387.svg',
                        });
                        i = unmatchedUsers.length
                        x = onlineUsers.length
                        userMatchFound = true;
                    }
                }
            }
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