// Main
import React, { Component } from 'react';


// Components
import AddAlbum from './addalbum';
import AlbumsList from './albumslist';


export default class JuliaPortfolio extends Component {

  render() {

    return (

      <div className='julia-wrapper'>


        <div className='julia-wrapper-nav'>
          <h1 className='julia-header'>Latest albums</h1>

          <button type="button" className="btn-modal" data-toggle="modal" data-target="#modalAddAlbum">
            Add Album
          </button>
        </div>


        <AddAlbum />
        <AlbumsList />


      </div>
    );
  }
}
