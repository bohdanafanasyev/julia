// Main
import React, {Component} from 'react';
import moment from 'moment';


// Components
import DeletePost from './deletepost';
import EditPost from './editpost';


export default class Post extends Component {

  render() {

    let time = moment(this.props.posts.createdAt).fromNow();

    return(

      <div className='post-wrapper'>


        <div className='social-post'>
          <img src={this.props.posts.link_image}></img>

          <p className='social-proof'>{this.props.posts.social}, {time}</p>
          <a className='social-link' target="_blank">{this.props.posts.title}</a>

          <div className='list-buttons'>
            <button type="button" className='form-button button-gradient' data-toggle="modal" data-target={'#delete' + this.props.posts._id}>Delete</button>
            <button type="button" className='form-button button-gradient' data-toggle="modal" data-target={'#edit' + this.props.posts._id}>Edit</button>
          </div>
        </div>


        <DeletePost post={this.props.posts}/>
        <EditPost post={this.props.posts}/>


      </div>

    );
  }
}
