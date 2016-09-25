// Main
import React, { Component } from 'react';

export default class AddAlbum extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: 'New album? Sweeet :)'
    };
  }

  clearForm() {
    document.getElementById("add_album").reset();
  }

  handleSubmit(event) {
    event.preventDefault();

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const title = capitalizeFirstLetter(this.refs.title.value)
    const cover = this.refs.cover.value;

    const photos = {
        One: "",
        Two: "",
        Three: "",
        Four: "",
        Five: "",
        Six: "",
        Seven: "",
        Eight: "",
        Nine: "",
        Ten: "",
        Eleven: "",
        Twelve: "",
        Thirteen: "",
        Fourteen: "",
        Fifteen: "",
        Sixteen: "",
        Seventeen: "",
        Eighteen: "",
        Nineteen: "",
        Twenty: ""
      };

    Meteor.call('albums.insert', {title, cover, photos}, (error) => {
      if (error && error.error === "too-long") {
        this.setState({error: ' Title is too long'});
      } else {
        this.setState({error: 'New album? Sweeet :)'});
        this.clearForm();
        $('#modalAddAlbum').modal('hide');
      }
    });
  }

  render() {

    return (

        <div className="modal fade" id="modalAddAlbum" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">

          <div className="form-outer">
            <form id='add_album' onSubmit={this.handleSubmit.bind(this)}>
                <div className='form-text form-header'>
                  <p><strong>Hey</strong>, master!</p>
                  <p>{this.state.error}</p>
                </div>

                <input ref="title" type="text" className="form-input" placeholder="What about the title?" />

                <div className='form-text form-header form-header-distance'>
                  <p>And what about the cover?</p>
                </div>

                <input ref="cover" type="url" className="form-input" placeholder="Point the way" />
                <button type="button" className="form-button" data-dismiss="modal" onClick={this.clearForm}>Close</button>
                <button type="sumbit" className="form-button" >Save</button>
            </form>
          </div>


        </div>
    );
  }
}
