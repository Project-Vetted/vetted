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

    var chatbox = talkSession.createChatbox({ selected: conversation });
    chatbox.mount(document.getElementById('talkjs-container'));

});
