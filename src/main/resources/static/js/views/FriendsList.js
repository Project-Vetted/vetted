


export default function FriendsList(props) {

    localStorage.setItem("user_id", props.user.id.toString())
    //language=HTML
    return `
        <header>
            <div style="margin-top: 80px">


                <h1>Welcome, ${props.user.username}</h1>
            </div>
        </header>
        <main>
            <h1>Your friends</h1>
            <hr>
          <div>${props.user.id}</div>

        </main>
    `
}


// export function FriendsEvent() {
//     $(window).on('load', function () {
//         const userId = localStorage.getItem("user_id")
//         return fetch(`http://localhost:8080/api/users/each-friend?id=${userId}`, {
//             method: 'GET',
//             headers: {"Content-Type": "application/json"}
//         })
//             .then(data => console.log(data))
//             .catch(err => console.log(err))
//     })
//
// }