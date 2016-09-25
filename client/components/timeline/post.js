// Main
import React, {Component} from 'react';
import moment from 'moment';


export default class Post extends Component {

  render() {

    let time = moment(this.props.posts.createdAt).fromNow();

    return (

      <div className='post-wrapper'>


        <div className='social-post'>
          <div className='image-hover'>
            <img src={this.props.posts.link_image}></img>
          </div>

          <p className='social-proof'>{this.props.posts.social}, {time}</p>
          <a className='social-link underline' href={this.props.posts.link} target="_blank">{this.props.posts.title}</a>
        </div>


      </div>

    );
  }
}
