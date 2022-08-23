// https://reactrouter.com/docs/en/v6/getting-started/overview

function App({ users, posts }) {
    return (
        <>
            {
                console.log(users, posts)
            }
            <h1>Hello world</h1>
        </>
    )
}

export default App