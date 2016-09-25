// Main
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


// Components
import Album from './album';


// Styling
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import VisibilitySensor from 'react-visibility-sensor';
import { Pulse } from 'better-react-spinkit';


// Collections
import { Albums } from '../../../../imports/collections/albums';


// part of width()
var limit = 6;
var counter = 0;


export default class AlbumsList extends TrackerReact(React.Component) {

  constructor(props) {
    super(props);

    this.state = {
      subscription: {
        albums: Meteor.subscribe('albums', limit)
      }
    }
  }

  componentWillMount() {
    Meteor.call('albums.number', updateCounter);
    function updateCounter(err, count) {
      counter = count;
    }
  }

  componentWillUnmount() {
    this.state.subscription.albums.stop();
  }

  albums() {
    return Albums.find().fetch();
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
        visible = true
        Meteor.subscribe('albums', limit);
        return { albums: Albums.find().fetch() };
      }
   }

   var width = function () {
     var currentWidth = $('.layout').width();
     if (currentWidth > 1000) {
       increaser = 3;
     } else if (currentWidth < 1000) {
       increaser = 2;
     }
   }

    return (

      <ReactCSSTransitionGroup onChange={width()} component='div' className='layout'  transitionName='page' transitionAppear = {true} transitionAppearTimeout = {500} transitionEnter = {false} transitionLeave = {false}>


        <ReactCSSTransitionGroup component='div' className='flex-timeline julia-timeline'  transitionName='postLoad' transitionLeaveTimeout={2000} transitionEnterTimeout={2000}>
          {this.albums().map( (album) => {
            return <Album key={album._id} albums={album} />
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
