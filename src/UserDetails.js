import React, { Component } from 'react';

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "Maruthi",
            rollNo: "10",
            userText: "Random Message"
        };
    }

    emailChangeHandler (evt) {
        this.setState({...this.state, email: evt.target.value});
    }

    
    rollIdChangeHandler (evt) {
        this.setState({...this.state, rollNo: evt.target.value});
    }

    randTextUpdateHandler (evt) {
        this.setState({...this.state, userText: evt.target.value});
    }

    formSubmitHandler (evt) {
        evt.preventDefault();
        this.props.getUserData(this.state);
        this.setState({
            email: '',
            rollNo: '',
            userText: ''
        });
    }
    
    render(){
        return (
            <form>
                <div className="form-input-container">
                    <label htmlFor='useremail'>Email</label>
                    {/* <input id="useremail" type="email" placeholder='Enter the email' onChange={this.emailChangeHandler} value={this.state.email}/> */}
                    <input id="useremail" type="text" placeholder='Enter the email' onChange={(evt) => this.emailChangeHandler(evt)} value={this.state.email}/>
                </div>
                <div className="form-input-container">
                    <label htmlFor='user-id'>Roll</label>
                    <input id="user-id" type="text" placeholder='Enter the roll number' onChange={(evt) => this.rollIdChangeHandler(evt)} value={this.state.rollNo}/>
                </div>
                <div className="form-input-container">
                    <label htmlFor='user-text'>text</label>
                    <input id="user-text" type="text" placeholder='Enter the text' onChange={(evt) => this.randTextUpdateHandler(evt)} value={this.state.userText}/>
                </div>
                <button type="submit" onClick={(evt) => this.formSubmitHandler(evt)}>Submit</button>
            </form>
        );
    };
};

export default UserDetails;