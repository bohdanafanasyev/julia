// Main
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Link } from 'react-router';


// Components
import Album from './album';


// Styling
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


// Mongo collections
import { Albums } from '../../../imports/collections/albums';


export default class Portfolio extends TrackerReact(React.Component) {

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
            setGallerySize: false,
            wrapAround: true
          });

          $('.carousel-nav').flickity({
            asNavFor: '.carousel',
            prevNextButtons: false,
            percentPosition: false,
            pageDots: false,
            imagesLoaded: true,
            watchCSS: true,
            "contain": true
          });
    }})

    // Mobile about button hover fix
    setTimeout(function() {
      $('.main-navbar').show()
    }, 10)

  }

  albums() {
    return Albums.find().fetch();
  }

  render() {

    return (

      <ReactCSSTransitionGroup component='div' className='layout'  transitionName='page' transitionAppear = {true} transitionAppearTimeout = {500} transitionEnter = {false} transitionLeave = {false}>


        <div className='carousel portfolioCarousel'>
          {this.albums().map( (album) => {

            const url = `/portfolio/${album.title}`.toLowerCase();

            return (<div className='carousel-cell for' key={album._id}>
                      <Link to={url}>
                        <div className='portfolioHover'>
                          <img src={album.cover} />
                        </div>

                        <p className='album-title cover-title underline'>{album.title}</p>
                      </Link>
                    </div>)
          })}
        </div>


      <div className='carousel-nav portfolioCarouselNav'>
        {this.albums().map( (album) => {
          return <div className='carousel-cell nav-cell' key={album._id}><img src={album.cover} /></div>
        })}
      </div>


     </ReactCSSTransitionGroup>
    );
  }
}
