
export function getOnlineUsers (){

    // let appIdString = "tYHo9w1I";
    // let skString = "sk_test_D94IOA990ljdPAfNwSn7zXohikqwy1b7";
    // let talkJsUrl = `"https://api.talkjs.com/v1/${appIdString}/presences"`

    const data = {
        includeBackgroundSessions?: boolean,
        selectedConversationId?: string | null,
        hasFocus?: boolean,
        isTyping?: boolean,
        userIds?: string[],
        expandUser?: boolean
    };

    fetch('https://api.talkjs.com/v1/tYHo9w1I/presences', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + 'sk_test_D94IOA990ljdPAfNwSn7zXohikqwy1b7',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            return data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}