
export function getOnlineUsers (matchedUsers, unmatchedUsers){

    // const data = {
    //     selectedConversationId: null,
    //     expandUser: true
    // };
    //
    // fetch('https://api.talkjs.com/v1/t2b5YrOq/presences', {
    //     method: 'POST', // or 'PUT'
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + 'sk_test_SYsVaymbxP2lBbrv6vX7RoFNdqjeRzO3',
    //     },
    //     body: JSON.stringify(data),
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Matched Users: ', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });

    // return matchedUsers.concat(unmatchedUsers);
    return matchedUsers && unmatchedUsers;
}
