import addLoginEvent from "../auth.js";

export function initiateChatPresence (userId, username, userEmail) {

    let appIdString = "tYHo9w1I";
    let sKString = "sk_test_D94IOA990ljdPAfNwSn7zXohikqwy1b7";
    let talkJsUrl = `"https://api.talkjs.com/v1/${appIdString}/presences"`

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
