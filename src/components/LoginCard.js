import React, { Component } from 'react'

export default class LoginCard extends Component {
    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <div className="ui form">
                        <div className="field">
                            <label>Username</label>
                            <input className="ui input" placeholder="Username"/>
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input className="ui input" placeholder="Password"/>
                        </div>
                    </div>
                </div>
                <button className="ui button">Sign in</button>
            </div>
        )
    }
}
