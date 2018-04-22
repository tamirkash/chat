import React from 'react';
import {sendMsg, subscribeToChat} from "../../api/api";

export default class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            input: ""
        };

        subscribeToChat((err, msg) => this.setState({
            messages: [...this.state.messages, msg]
        }));
    }

    handleChange = input => {
        this.setState({
            input: input.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        sendMsg(this.state.input);
        this.setState({
            input: ""
        })
    };

    render() {
        return (
            <div className="App">
                <ul id="messages">
                    {this.state.messages.map(msg => <li>{msg}</li>)}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} id="m" autoComplete="off" value={this.state.input}/>
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}