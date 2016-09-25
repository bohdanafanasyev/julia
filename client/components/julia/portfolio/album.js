// Main
import React, {Component} from 'react';
import moment from 'moment';

// Components
import DeleteAlbum from './deletealbum';
import EditAlbum from './editalbum';


export default class Album extends Component {

  render() {

    return (

      <div className='post-wrapper'>


        <div className='social-post'>
          <img src={this.props.albums.cover}></img>

          <a className='album-title' target="_blank">{this.props.albums.title}</a>

          <div className='list-buttons'>
            <button type="button" className='form-button button-gradient' data-toggle="modal" data-target={'#delete' + this.props.albums._id}>Delete</button>
            <button type="button" className='form-button button-gradient' data-toggle="modal" data-target={'#edit' + this.props.albums._id}>Edit</button>
          </div>
        </div>


        <DeleteAlbum album={this.props.albums}/>
        <EditAlbum album={this.props.albums}/>


      </div>

    );
  }
}
