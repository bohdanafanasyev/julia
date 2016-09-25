// Main
import React, { Component } from 'react';

class DeleteAlbum extends Component {

  handleDelete(event) {
    event.preventDefault();
    $('.modal').modal('hide');
    Meteor.call('albums.remove', this.props.album);
  }

  render() {

    return (

        <div className="modal fade form-delete" id={'delete' + this.props.album._id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">


          <div className="form-outer">
            <form className='delete_post' onSubmit={this.handleDelete.bind(this)}>
                <div className='form-text form-header'>
                  <p>My dear, <strong>master</strong></p>
                  <p>Are you really sure about that?</p>
                </div>

                <button type="button" className="form-button button-delete" data-dismiss="modal">No</button>
                <button type="sumbit" className="form-button button-delete">Yes</button>
            </form>
          </div>


        </div>
    );
  }
}

export default DeleteAlbum;
