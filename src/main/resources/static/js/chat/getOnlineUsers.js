
function getOnlineUsers (){
    let userId = 6;
    let appId = 'tZou7ipA';

    $.ajax({
        url: `"https://api.talkjs.comv1/${appId}/users/${userId}"`,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Bearer 6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
        }, success: function(data){
            alert(data);
            console.log(data);
            //process the JSON data etc
        }
    })



}