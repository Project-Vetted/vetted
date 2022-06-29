import addLoginEvent from "../auth.js";

export function initiateChatPresence (userId, username, userEmail) {

    let appIdString = "tYHo9w1I";

    Talk.ready.then(function () {
        let me = new Talk.User({
            id: userId,
            name: username,
            email: userEmail,
            // photoUrl: userPhotoUrl,
        });
        window.talkSession = new Talk.Session({
            appId: appIdString,
            me: me,
        });
});

}
