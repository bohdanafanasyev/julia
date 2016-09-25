// Main
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


// Components
import GreatPeople from './greatpeople';
import LoadModels from './models';



// Styling
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


// Mongo collections
import { About } from '../../../../imports/collections/about';


export default class JuliaAbout extends TrackerReact(React.Component) {

  constructor(props) {
    super(props);

    this.state = {
      subscription: {
        albums: Meteor.subscribe('about')
      }
    }
  }

  callAbout() {
    return About.find().fetch();
  }

  handleSubmit(event) {

    event.preventDefault();

    const landscapeImage = this.refs.landscapeImage.value;
    const description = this.refs.description.value;
    const email = this.refs.email.value;
    const phone = this.refs.phone.value;
    const city = this.refs.city.value;
    const country = this.refs.country.value;

    const One = {
      photo: this.refs.cover1.value
    }
    const Two = {
      photo: this.refs.cover2.value
    }
    const Three = {
      photo: this.refs.cover3.value
    }
    const Four = {
      photo: this.refs.cover4.value
    }
    const Five = {
      photo: this.refs.cover5.value
    }
    const Six = {
      photo: this.refs.cover6.value
    }
    const Seven = {
      photo: this.refs.cover7.value
    }
    const Eight = {
      photo: this.refs.cover8.value
    }
    const Nine = {
      photo: this.refs.cover9.value
    }
    const Ten = {
      photo: this.refs.cover10.value
    }

    const descriptionPhotos = {One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten}

    var aboutCursor = "aboutpage";


    Meteor.call('about.update', aboutCursor, {
      landscapeImage, description, email, phone, city, country, descriptionPhotos
    })
  }

  render() {

    return (

        <ReactCSSTransitionGroup component='div' className='julia-about'  transitionName='page' transitionAppear = {true} transitionAppearTimeout = {500} transitionEnter = {false} transitionLeave = {false}>


          {this.callAbout().map( (about) => {
            return (
              <form onSubmit={this.handleSubmit.bind(this)} key={about._id}>
                <div className='landscape-block'>
                  <p className='about-form-header'>Сover background</p>

                  <div className='album-photo-block photo-fixer'>
                    <div className='album-photo-block-thumbnail landscape-thumbnail'>
                      <img className='album-photo-thumbnail' src={about.landscapeImage} />
                    </div>

                    <div className='form-text album-photo-description form-header form-header-distance'>
                      <input ref="landscapeImage" type="url" className="form-input" placeholder="Point the way" defaultValue={about.landscapeImage}/>
                    </div>
                  </div>
                </div>


                <div className='description-block'>
                  <p className='about-form-header'>What about description</p>
                  <textarea ref="description" type="text" className="form-input description-form" placeholder="Tell something " defaultValue={about.description}/>
                </div>


                <div className='contact-block'>
                  <p className='about-form-header'>How can they contact you?</p>

                  <div className='contact-form'>
                    <input ref="email" type="text" className="form-input" placeholder="Email adress" defaultValue={about.email}/>
                    <input ref="phone" type="text" className="form-input" placeholder="Phone Number" defaultValue={about.phone}/>
                    <input ref="city" type="text" className="form-input" placeholder="City" defaultValue={about.city}/>
                    <input ref="country" type="text" className="form-input" placeholder="Country" defaultValue={about.country}/>
                  </div>
                </div>


                <div className='gratitude-block'>
                    <p className='about-form-header'>Show gratitude to:</p>
                    <button className="form-button" type='button' data-toggle="modal" data-target={'#greatpeople'}>Wonderful people</button>
                    <button className="form-button" type='button' data-toggle="modal" data-target={'#models'}>Models</button>
                </div>


                <div className='description-photos'>
                  <p className='about-form-header'>Bottom photo block:</p>

                  <div className='album-photo-block photo-fixer'>
                    <div className='album-photo-block-thumbnail'>
                      <img className='album-photo-thumbnail' src={about.photos.One.photo} />
                    </div>

                    <div className='form-text album-photo-description form-header form-header-distance'>
                      <p>Position: 1</p>
                      <input ref="cover1" type="url" className="form-input" placeholder="Point the way" defaultValue={about.photos.One.photo}/>
                    </div>
                  </div>

                  <div className='album-photo-block photo-fixer'>
                    <div className='album-photo-block-thumbnail'>
                      <img className='album-photo-thumbnail' src={about.photos.Two.photo} />
                    </div>

                    <div className='form-text album-photo-description form-header form-header-distance'>
                      <p>Position: 2</p>
                      <input ref="cover2" type="url" className="form-input" placeholder="Point the way" defaultValue={about.photos.Two.photo}/>
                    </div>
                  </div>

                  <div className='album-photo-block photo-fixer'>
                    <div className='album-photo-block-thumbnail'>
                      <img className='album-photo-thumbnail' src={about.photos.Three.photo} />
                    </div>

                    <div className='form-text album-photo-description form-header form-header-distance'>
                      <p>Position: 3</p>
                      <input ref="cover3" type="url" className="form-input" placeholder="Point the way" defaultValue={about.photos.Three.photo}/>
                    </div>
                  </div>

                  <div className='album-photo-block photo-fixer'>
                    <div className='album-photo-block-thumbnail'>
                      <img className='album-photo-thumbnail' src={about.photos.Four.photo} />
                    </div>

                    <div className='form-text album-photo-description form-header form-header-distance'>
                      <p>Position: 4</p>
                      <input ref="cover4" type="url" className="form-input" placeholder="Point the way" defaultValue={about.photos.Four.photo}/>
                    </div>
                  </div>

                  <div className='album-photo-block photo-fixer'>
                    <div className='album-photo-block-thumbnail'>
                      <img className='album-photo-thumbnail' src={about.photos.Five.photo} />
                    </div>

                    <div className='form-text album-photo-description form-header form-header-distance'>
                      <p>Position: 5</p>
                      <input ref="cover5" type="url" className="form-input" placeholder="Point the way" defaultValue={about.photos.Five.photo}/>
                    </div>
                  </div>

                  <div className='album-photo-block photo-fixer'>
                    <div className='album-photo-block-thumbnail'>
                      <img className='album-photo-thumbnail' src={about.photos.Six.photo} />
                    </div>

                    <div className='form-text album-photo-description form-header form-header-distance'>
                      <p>Position: 6</p>
                      <input ref="cover6" type="url" className="form-input" placeholder="Point the way" defaultValue={about.photos.Six.photo}/>
                    </div>
                  </div>

                  <div className='album-photo-block photo-fixer'>
                    <div className='album-photo-block-thumbnail'>
                      <img className='album-photo-thumbnail' src={about.photos.Seven.photo} />
                    </div>

                    <div className='form-text album-photo-description form-header form-header-distance'>
                      <p>Position: 7</p>
                      <input ref="cover7" type="url" className="form-input" placeholder="Point the way" defaultValue={about.photos.Seven.photo}/>
                    </div>
                  </div>

                  <div className='album-photo-block photo-fixer'>
                    <div className='album-photo-block-thumbnail'>
                      <img className='album-photo-thumbnail' src={about.photos.Eight.photo} />
                    </div>

                    <div className='form-text album-photo-description form-header form-header-distance'>
                      <p>Position: 8</p>
                      <input ref="cover8" type="url" className="form-input" placeholder="Point the way" defaultValue={about.photos.Eight.photo}/>
                    </div>
                  </div>

                  <div className='album-photo-block photo-fixer'>
                    <div className='album-photo-block-thumbnail'>
                      <img className='album-photo-thumbnail' src={about.photos.Nine.photo} />
                    </div>

                    <div className='form-text album-photo-description form-header form-header-distance'>
                      <p>Position: 9</p>
                      <input ref="cover9" type="url" className="form-input" placeholder="Point the way" defaultValue={about.photos.Nine.photo}/>
                    </div>
                  </div>

                  <div className='album-photo-block photo-fixer'>
                    <div className='album-photo-block-thumbnail'>
                      <img className='album-photo-thumbnail' src={about.photos.Ten.photo} />
                    </div>

                    <div className='form-text album-photo-description form-header form-header-distance'>
                      <p>Position: 10</p>
                      <input ref="cover10" type="url" className="form-input" placeholder="Point the way" defaultValue={about.photos.Ten.photo}/>
                    </div>
                  </div>

                </div>


                <div className='form-buttons'>
                  <button type="sumbit" className="form-button" >Save & Update</button>
                </div>

              </form>
            )
          })}


          <GreatPeople />
          <LoadModels />


        </ReactCSSTransitionGroup>
    );
  }
}
