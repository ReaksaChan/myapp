import React from "react";

const UserGreeting = (props) => {

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in continue</h2>

  return (props.isloggedIn ?  welcomeMessage : loginPrompt);
}

export default UserGreeting;