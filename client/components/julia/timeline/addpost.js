// Main
import React, { Component } from 'react';

export default class AddPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: 'Lets share something new today?'
    };
  }

  clearForm() {
    document.getElementById("add_post").reset();
  }

  handleSubmit(event) {
    event.preventDefault();

    const title = this.refs.title.value;
    const social = this.refs.social.value;
    const link = this.refs.link.value;
    const link_image = this.refs.link_image.value;

    Meteor.call('posts.insert', {title, social, link, link_image}, (error) => {
      if (error && error.error === "too-long") {
        this.setState({error: ' Title is too long'});
      } else if (error && error.error === "empty") {
        this.setState({error: '  Title can\'t be empty'});
      } else if (error && error.error === "select") {
        this.setState({error: '  Please select social network'});
      } else if (error && error.error === "link") {
        this.setState({error: '  You\'ve forgotten to point the way'});
      } else if (error && error.error === "link_image") {
        this.setState({error: '  Please add link to the image'});
      } else {
        this.setState({error: 'Lets share something new today?'});
        this.clearForm();
        $('#modalAdd').modal('hide');
      }
    });
  }

  render() {

    return (

        <div className="modal fade" id="modalAdd" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">


          <div className="form-outer">
            <form id='add_post' onSubmit={this.handleSubmit.bind(this)}>
                <div className='form-text form-header'>
                  <p><strong>Hey</strong>, master</p>
                  <p>{this.state.error}</p>
                </div>

                <input ref="title" type="text" className="form-input" placeholder="What about the title?" />

                <div className='form-text form-header form-header-distance'>
                  <p>Where should I point the way?</p>
                </div>

                <select ref="social" className="form-select">
                  <option>Select</option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>Youtube</option>
                  <option>julia.com</option>
                  <option>Vkontakte</option>
                  <option>Twitter</option>
                </select>

                <input ref="link" type="url" className="form-input" placeholder="Point the way" />

                <div className='form-text form-header form-header-distance'>
                  <p>And what about the image?</p>
                </div>

                <input ref="link_image" type="url" className="form-input" placeholder="Point the way" />

                <button type="button" className="form-button" data-dismiss="modal" onClick={this.clearForm}>Close</button>
                <button type="sumbit" className="form-button" >Save</button>
            </form>
          </div>


        </div>
    );
  }
}
