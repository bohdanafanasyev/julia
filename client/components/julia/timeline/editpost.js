// Main
import React, { Component } from 'react';


export default class EditPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: 'What should I change for you?'
    };
  }

  handleEdit(event) {
    event.preventDefault();

    const title = this.refs.title.value;
    const social = this.refs.social.value;
    const link = this.refs.link.value;
    const link_image = this.refs.link_image.value;

    if (title.length > 50) {
      this.setState({error: ' Title is too long'});
    } else if (title.length == '') {
      this.setState({error: '  Title can\'t be empty'});
    } else if (social == 'Select') {
      this.setState({error: '  Please select social network'});
    } else if (link == '') {
      this.setState({error: '  You\'ve forgotten to point the way'});
    } else if (link_image == '') {
      this.setState({error: '  Please add link to the image'});
    } else {
      Meteor.call('posts.update', this.props.post, {title, social, link, link_image})
      $('.modal').modal('hide');
      document.getElementById("edit_post").reset();
    }

  }


  render() {

    return (

        <div className="modal fade" id={'edit' + this.props.post._id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">


          <div className="form-outer">
            <form id='edit_post' onSubmit={this.handleEdit.bind(this)}>
                <div className='form-text form-header'>
                  <p><strong>Hey</strong>, master</p>
                  <p>{this.state.error}</p>
                </div>

                <input ref="title" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.post.title}/>

                <div className='form-text form-header form-header-distance'>
                  <p>Where should I point the way?</p>
                </div>

                <select ref="social" className="form-select" defaultValue={this.props.post.social}>
                  <option>Select</option>
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>Youtube</option>
                  <option>julia.com</option>
                  <option>Vkontakte</option>
                  <option>Twitter</option>
                </select>

                <input ref="link" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.post.link}/>
                <div className='form-text form-header form-header-distance'>

                  <p>And what about the image?</p>
                </div>

                <input ref="link_image" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.post.link_image}/>

                <button type="button" className="form-button" data-dismiss="modal">Close</button>
                <button type="sumbit" className="form-button" >Save</button>
            </form>
          </div>


        </div>
    );
  }
}
