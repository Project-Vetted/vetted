export default function Rating(props) {
    //language=HTML
    return `
        <header>
            <div style="margin-top: 80px">
                <div style="margin-top: 80px">
                    <h1>Welcome, ${props.user.username}</h1>
                </div>
            </div>
        </header>
        <main>
            <h1>Your total score count is: ${props.user.points}</h1>
        </main>
    `
}

