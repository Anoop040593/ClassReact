const ConditionalRendering = ({isLoggedIn, userName}) => {
    return (
        <div>
            { isLoggedIn ? (
                <h1>Welcome, {userName}</h1>
            ) : (
                <h1>Please, login to continue</h1>
            )}
        </div>
    )
}

export default ConditionalRendering;