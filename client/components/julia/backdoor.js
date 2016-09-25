// Main
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Backdoor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: 'May I know who are you?'
    };
  }

  onSubmit(event) {
    event.preventDefault();

    const mail = this.refs.mail.value;
    const password = this.refs.password.value;

    Meteor.loginWithPassword(mail, password, (err) => {
        if (err && err.reason == 'User not found') {
          this.setState({error: ' I am sorry, but I don\'t know you?'});
        } else if (err && err.reason == 'Incorrect password') {
          this.setState({error: 'I am sorry but secretword is wrong'});
        }  else {
          browserHistory.push('/julia');
        }
    });
  }

  render() {

    return (

      <ReactCSSTransitionGroup component='div' className='login'  transitionName='page' transitionAppear = {true} transitionAppearTimeout = {500} transitionEnter = {false} transitionLeave = {false}>


        <nav className="navbar navbar-fixed-top bg-default flex-navbar bg-none">
          <div className='navbar-brand bold logo'>
            <Link to='/'>LOGO</Link>
          </div>
        </nav>


        <form onSubmit={this.onSubmit.bind(this)}>
          <div className='form-outer'>
            <div className='form-text'>
              <p><strong>Greetings</strong>, stranger :)  </p>
              <p className='form-text-bottom'>{this.state.error}</p>
            </div>

            <input ref='mail' className='form-input' type="email" placeholder="Name" />
            <input ref='password' className='form-input' type="password" placeholder="Secretword" />

            <button className='form-button' type="submit">Enter</button>
          </div>
        </form>


      </ReactCSSTransitionGroup>
    );
  }
}
