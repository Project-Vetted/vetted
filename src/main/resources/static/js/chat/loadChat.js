
import fetchData from "../fetchData.js";

export function loadChat (userId, username, userEmail) {

    (function(t,a,l,k,j,s){
        s=a.createElement('script');s.async=1;s.src="https://cdn.talkjs.com/talk.js";a.head.appendChild(s)
        ;k=t.Promise;t.Talk={v:3,ready:{then:function(f){if(k)return new k(function(r,e){l.push([f,r,e])});l
                    .push([f])},catch:function(){return k&&new k()},c:l}};})(window,document,[]);


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

        const inbox = talkSession.createInbox({ selected: conversation });
        inbox.mount(document.getElementById('talkjs-container'));
    });
}

