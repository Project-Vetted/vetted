
export function initiateChatPresence (userId, username, userEmail) {

    let appIdString = "t2b5YrOq";

    Talk.ready.then(function () {
        let me = new Talk.User({
            id: userId,
            name: username,
            email: userEmail,
        });
        window.talkSession = new Talk.Session({
            appId: appIdString,
            me: me,
        });
});

}
