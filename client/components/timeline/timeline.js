// Main
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


// Components
import Post from './post';


// Styling
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Pulse } from 'better-react-spinkit';
import VisibilitySensor from 'react-visibility-sensor';


// Mongo collections
import { Posts } from '../../../imports/collections/posts';


// width() parts
var limit = 6;
var counter = 0;


export default class Timeline extends TrackerReact(React.Component) {

  constructor(props) {
    super(props);

    this.state = {
      subscription: {
        posts: Meteor.subscribe('posts', limit)
      }
    }
  }

  componentWillMount() {
    Meteor.call('posts.number', updateCounter);
    function updateCounter(err, count) {
      counter = count;
    }
  }

  componentWillUnmount() {
    this.state.subscription.posts.stop();
  }

  posts() {
    return Posts.find().fetch();
  }

  renderLoading() {
    if (limit < counter) {
      return (<Pulse className='loader' size={46} color='#434343'/>)
    } else {
      return (<div></div>)
    }
  }

  render() {

    var increaser = 0;

    var onChange = function (isVisible) {
      if (isVisible == true && limit < counter) {
        limit += increaser;
        visible = true;
        Meteor.subscribe('posts', limit);
        return { posts: Posts.find().fetch() };
      }
   }

   var width = function () {
     var currentWidth = $('.layout').width();
     if (currentWidth > 1600) {
       increaser = 4;
     } else if (currentWidth > 1200) {
       increaser = 3;
     } else {
       increaser = 2;
     }
   }

    return (

      <ReactCSSTransitionGroup onChange={width()} component='div' className='layout'  transitionName='page' transitionAppear = {true} transitionAppearTimeout = {500} transitionEnter = {false} transitionLeave = {false}>


        <ReactCSSTransitionGroup component='div' className='flex-timeline julia-timeline'  transitionName='postLoad' transitionLeaveTimeout={1000} transitionEnterTimeout={1000}>
          {this.posts().map( (post) => {
            return <Post key={post._id} posts={post} />
          })}
        </ReactCSSTransitionGroup>


        <div className='infinite'>
          {this.renderLoading()}
          <VisibilitySensor onChange={onChange} />
        </div>


      </ReactCSSTransitionGroup>
    );
  }
}
