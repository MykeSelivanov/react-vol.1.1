import { Component } from "react";

class Greeting extends Component {

    state = {
        isLoggedIn: true,
        unreadMessages: [
            {text:'call me', id: 1}, 
            {text:'text me', id: 2}, 
            {text:'shoot me an email', id: 3},  
            {text:'get back to me', id: 4}
         ],
    };

    render() {
        const {isLoggedIn, unreadMessages} = this.state;

        if(isLoggedIn) {
        return (
            <div>
                <h1>Welcome User!</h1>
                {/* logical operator */}
                { unreadMessages.length > 0 && (
                <h2>You have { unreadMessages.length} messages!</h2>
                )}
                {
                    <ol>
                        { unreadMessages.map((message) => {
                            return <li>{message.text}</li>
                        })}
                    </ol>
                }
            </div>
        ) 
        } else {
            return <h1>Welcome Guest, Please Login!</h1>
        }
    }
}

export default Greeting;