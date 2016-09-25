// Main
import React, { Component } from 'react';


// Components
import AddPost from './addpost';
import PostsList from './postslist';


export default class JuliaTimeline extends Component {

  render() {

    return (

      <div className='julia-wrapper'>


        <div className='julia-wrapper-nav'>
          <h1 className='julia-header'>Latest posts</h1>

          <button type="button" className="btn-modal" data-toggle="modal" data-target="#modalAdd">
            Add Post
          </button>
        </div>


        <AddPost />
        <PostsList />

        
      </div>
    );
  }
}
