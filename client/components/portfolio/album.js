// Main
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Link } from 'react-router';


//Components
import AlbumNavigation from './navigation';


// Styling
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


// Mongo collections
import { Albums } from '../../../imports/collections/albums';


export default class Album extends TrackerReact(React.Component) {

  constructor(props) {
    super(props);

    this.state = {
      subscription: {
        albums: Meteor.subscribe('albums')
      }
    }
  }

  componentDidMount() {

    Tracker.autorun(() => {

        if (Albums.find().count()) {

          $('.carousel').flickity({
            imagesLoaded: true,
            prevNextButtons: false,
            pageDots: false,
            freeScroll: true,
            freeScrollFriction: 0.15,
            percentPosition: false,
            watchCSS: true,
            wrapAround: true
          });

          $('.carousel-nav').flickity({
            asNavFor: '.carousel',
            prevNextButtons: false,
            pageDots: false,
            imagesLoaded: true,
            percentPosition: false,
            watchCSS: true,
            "contain": true
          });
    }})

    $('.main-navbar').hide()

    $(document).ready(function(){
      $("html,body").scrollTop(0);
    });

  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  album() {
    const {url} = this.props.params;
    return Albums.find({title: this.capitalizeFirstLetter(url)}).fetch()
  }

  render() {

    const photoList = []

    this.album().map( (album) => {
        for (key in album.photos){
          var photo = album.photos[key]
          if (photo.photo != "") {
            photoList.push(photo)
          }
        }
    });

    return (

      <ReactCSSTransitionGroup component='div' className='layout'  transitionName='page' transitionAppear = {true} transitionAppearTimeout = {500} transitionEnter = {false} transitionLeave = {false}>


        <AlbumNavigation album={this.props}/>


        <ReactCSSTransitionGroup component='div'   transitionName='postLoad' transitionLeaveTimeout={2000} transitionEnterTimeout={2000}>

          <div className='carousel portfolioCarousel'>
            {photoList.map( (photo) => {
              return (<div className='carousel-cell for' key={photo.photo}>
                        <div className='image-hoover'>
                          <img src={photo.photo} />
                        </div>

                        <a className='photo-description' target="_blank">{photo.description}</a>
                      </div>)
            })}
          </div>


        <div className='carousel-nav portfolioCarouselNav'>
          {photoList.map( (photo) => {
            return <div className='carousel-cell nav-cell' key={photo.photo} ><img src={photo.photo} /></div>
          })}
        </div>


       </ReactCSSTransitionGroup>


     </ReactCSSTransitionGroup>
    );

  }
}
