// Main
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


// Styling
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


// Mongo collections
import { About } from '../../../imports/collections/about';
import { WonderfulPeople } from '../../../imports/collections/wonderfulpeople';
import { Models } from '../../../imports/collections/models';


export default class AboutJulia extends TrackerReact(React.Component) {

  constructor(props) {
    super(props);

    this.state = {
      subscription: {
        albums: Meteor.subscribe('about'),
        wonderfulpeople: Meteor.subscribe('wonderfulpeople'),
        models: Meteor.subscribe('models')
      }
    }
  }

  componentDidMount() {

    Tracker.autorun(() => {

      if (About.find().count()) {

        $('.carousel').flickity({
          imagesLoaded: true,
          prevNextButtons: false,
          pageDots: false,
          freeScroll: true,
          freeScrollFriction: 0.25,
          percentPosition: false,
          wrapAround: true,
        });

      }

      $(window).on("load resize", function() {
        var slider = $('.slider-image').height()
        $('.slider').css('height', slider)
      });

    })
  }

  listClicked() {
    if ($(".panel-heading a").hasClass('showClicked')) {
       $( ".showClicked" ).text( "Hide the list" ).removeClass('showClicked').addClass('hideClicked');
    } else {
       $( ".hideClicked" ).text( "Show the list" ).removeClass('hideClicked').addClass('showClicked');
    }
  }

  handleImageLoaded() {
    var sliderHeight = $('.slider-image').height()
    $('.slider').css('height', sliderHeight)
  }

  callAbout() {
    return About.find().fetch();
  }

  callPeople() {
    return WonderfulPeople.find().fetch();
  }

  callModels() {
    return Models.find().fetch();
  }

  render () {

    const photoList = []

    this.callAbout().map( (album) => {
        for (key in album.photos){
          var photo = album.photos[key]
          if (photo.photo != '') {
            photoList.push(photo)
          }
        }
    })

    return (

      <ReactCSSTransitionGroup component='div' className='layout' transitionName='page' transitionAppear = {true} transitionAppearTimeout = {500} transitionEnter = {false} transitionLeave = {false}>


        {this.callAbout().map( (record) => {
          return (
            <div className='slider' key={record._id + 'image'}>
              <div className='slide'>
                <img src={record.landscapeImage} className='slider-image' onLoad={this.handleImageLoaded.bind(this)}/>
              </div>
            </div>
          )
        })}


        <div className='aboutLayout'>
          {this.callAbout().map( (record) => {
            return (
              <div className='aboutJuliaBlock' key={record._id + 'text'} >
                <h1 className='aboutJulia-header juliaStory'>So why JULIA?</h1>

                <div className='about'>
                  <p>{record.description}</p>
                </div>

                <h1 className='aboutJulia-header'>CONTACT</h1>

                <div className='contact-header'>
                  <ul className='mail'>
                    <li className='mail'><a className='link-hover' href={'mailto:' + record.email}>{record.email}</a></li>
                  </ul>

                  <ul className='telephone'>
                    <li className='phone'><a className='link-hover' href={'tel:' + record.phone}>{record.phone}</a></li>
                    <li className='barcelona'>{record.city}, {record.country}</li>
                  </ul>
                </div>
              </div>
            )
          })}


          <div className='pnf'>
            <h1 className='friends aboutJulia-header'>JULIA & JOHN</h1>
            <p className='thank-you'>Julia, Julia, oceanchild, calls me<br />So I sing a song of love, Julia<br />Julia, seashell eyes, windy smile, calls me<br /> So I sing a song of love, Julia</p>
          </div>


          <div id="accordion" role="tablist" aria-multiselectable="false">
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="showingList">
                <a data-toggle="collapse" onClick={this.listClicked.bind(this)} data-parent="#accordion" className='link-hover showClicked' href="#showList" aria-expanded="true" aria-controls="showList">Show all</a>
              </div>

              <div id="showList" className="panel-collapse collapse" role="tabpanel" aria-labelledby="showingList">
                <p className='header'>MODELS</p>

                <div className='peopleBlock'>
                  {this.callModels().map( (modelRecord) => {
                    return (
                      <p key={modelRecord._id}><a className='link-hover' href={modelRecord.link} target='_blank'>{modelRecord.name}</a></p>
                    )
                  })}
                </div>

                <p className='header'>WONDERFUL PEOPLE</p>

                <div className='peopleBlock'>
                  {this.callPeople().map( (peopleRecord) => {
                    return (
                      <p key={peopleRecord._id}><a className='link-hover' href={peopleRecord.link} target='_blank'>{peopleRecord.name}</a></p>
                    )
                  })}
                </div>

              </div>
            </div>
          </div>


          <h1 className='discover aboutJulia-header'>DISCOVER MORE OF JULIA</h1>


          <div className='social'>
            <div className='socialAboutBox'><p className='overMask aboutYoutube'>pt</p><a target='_blank' href='https://www.facebook.com/' className='socialAbout aboutYoutubeInvert'></a></div>
            <div className='socialAboutBox'><p className='overMask aboutFacebook'>pt</p><a target='_blank' href='https://www.facebook.com/' className='socialAbout aboutFacebookInvert'></a></div>
            <div className='socialAboutBox'><p className='overMask aboutInstagram'>pt</p><a target='_blank' href='https://www.facebook.com/' className='socialAbout aboutInstagramInvert'></a></div>
          </div>


          <div className='dragImages'>
            <p className=''>Drag the images in any direction</p>
          </div>


          <div className='carousel carousel-about'>
            {photoList.map( (photo) => {
              return (
                <div className='carousel-cell' key={photo.photo}>
                  <div className='portfolioHover'>
                    <img src={photo.photo} />
                  </div>
                </div>
              )
            })}
          </div>


        </div>


      </ReactCSSTransitionGroup>
  )}
}
