// Main
import React, { Component } from 'react';

export default class JuliaControl extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: 'And I will take care of everything'
    };
  }

  hideForm() {
    $('#modalJulia').modal('hide');
    $('#modalUser').modal('hide');
  }

  logOut(event) {
    event.preventDefault();
    $('#modalJulia').modal('hide');
    Meteor.logout();
  }


  onSubmit(event) {
    event.preventDefault();

    const oldPassword = this.refs.oldPass.value;
    const newPassword = this.refs.newPass1.value;
    const confirmPassword = this.refs.newPass2.value;

    if (newPassword !== confirmPassword) {
      this.setState({error: ' New passwords don\'t match'});
    } else if (newPassword.length < 10) {
      this.setState({error: ' Password length is less then 10'});
    } else if (newPassword === confirmPassword) {
      Accounts.changePassword(oldPassword, newPassword, (error) => {
        if (error) {
          this.setState({error: ' Old password is incorrect'});
        } else if (!error) {
          Meteor.logoutOtherClients()
        }
      });
    }
  }

  render() {

    return (

       <div>


          <div className="modal fade" id="modalJulia" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="form-outer">
              <div className='form-text'>
                <p><strong>Hello</strong>, my dear master :)</p>
                <p className='form-text-bottom'>What should I do for you?</p>
              </div>

              <button type="button" className="form-button julia-button" data-toggle="modal" data-target="#modalUser">Change my login information</button>
              <button type="sumbit" onClick={this.logOut} className="form-button julia-button" >Log me out on this machine</button>
              <button type="sumbit" className="form-button julia-button" data-dismiss="modal">Nothing, I changed my mind</button>
            </div>
          </div>


          <div className="modal fade" id="modalUser" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <form onSubmit={this.onSubmit.bind(this)}>
                <div className='form-outer'>
                  <div className='form-text'>
                    <p><strong>Master</strong>, just provide new data</p>
                    <p className='form-text-bottom'>{this.state.error}</p>
                  </div>

                  <input ref="oldPass" className='form-input'  name='password' type="text" placeholder="Old Password" />
                  <input ref="newPass1" className='form-input'  name='password1' type="password" placeholder="New Password" />
                  <input ref="newPass2" className='form-input' name='password2' type="password" placeholder="Repeat Password" />

                  <button className='form-button' type="submit" onClick={this.hideForm} data-toggle="modal" data-target="#modalSuccess">Save</button>
                  <button className='form-button' type="button" onClick={this.hideForm}>Close</button>
                </div>
              </form>
          </div>


          <div className="modal fade" id="modalSuccess" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <form>
                <div className='form-outer'>
                  <div className='form-text'>
                    <p><strong>Master</strong>, everything is ready!</p>
                    <p className='form-text-bottom text-success'>I did also log out myself from all other devices for security reasons.</p>
                  </div>

                  <button className='form-button' type="button" data-dismiss="modal">Thank, you</button>
                </div>
              </form>
          </div>


        </div>
    );
  }
}
