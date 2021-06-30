import React, { Component } from 'react'

export default class User extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        // fetch api and store users inside state
        fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
        .then(response => response.json())
        .then(userData => this.setState({users: userData}));
    }

    render() {
        const { users } = this.state;

        return (
            <div>
                <h1>Users List</h1>
                {/* Loop users from state and show name and email. Use map() */}
                <ol>
                    { users.map((user) => {
                        return ( <li key={user.id}> Name: {user.name} <br></br>
                                                    Email: {user.email} <br></br>
                                                    UserID: {user.id}
                                                </li>
                                )
                    })}
                </ol>
            </div>
        )
    }
}
