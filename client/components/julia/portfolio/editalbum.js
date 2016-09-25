// Main
import React, { Component } from 'react';

export default class EditPost extends Component {

  constructor(props) {
    super(props);
    this.state = {error: 'What should I change for you?'};
  }




  handleEdit(event) {
    event.preventDefault();

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const title = capitalizeFirstLetter(this.refs.title.value);
    const cover = this.refs.cover.value;
    const description = this.refs.description.value;

    const One = {
      photo: this.refs.cover1.value,
      description: this.refs.title1.value
    }
    const Two = {
      photo: this.refs.cover2.value,
      description: this.refs.title2.value
    }
    const Three = {
      photo: this.refs.cover3.value,
      description: this.refs.title3.value
    }
    const Four = {
      photo: this.refs.cover4.value,
      description: this.refs.title4.value
    }
    const Five = {
      photo: this.refs.cover5.value,
      description: this.refs.title5.value
    }
    const Six = {
      photo: this.refs.cover6.value,
      description: this.refs.title6.value
    }
    const Seven = {
      photo: this.refs.cover7.value,
      description: this.refs.title7.value
    }
    const Eight = {
      photo: this.refs.cover8.value,
      description: this.refs.title8.value
    }
    const Nine = {
      photo: this.refs.cover9.value,
      description: this.refs.title9.value
    }
    const Ten = {
      photo: this.refs.cover10.value,
      description: this.refs.title10.value
    }
    const Eleven = {
      photo: this.refs.cover11.value,
      description: this.refs.title11.value
    }
    const Twelve = {
      photo: this.refs.cover12.value,
      description: this.refs.title12.value
    }
    const Thirteen = {
      photo: this.refs.cover13.value,
      description: this.refs.title13.value
    }
    const Fourteen = {
      photo: this.refs.cover14.value,
      description: this.refs.title14.value
    }
    const Fifteen = {
      photo: this.refs.cover15.value,
      description: this.refs.title15.value
    }
    const Sixteen = {
      photo: this.refs.cover16.value,
      description: this.refs.title16.value
    }
    const Seventeen = {
      photo: this.refs.cover17.value,
      description: this.refs.title17.value
    }
    const Eighteen = {
      photo: this.refs.cover18.value,
      description: this.refs.title18.value
    }
    const Nineteen = {
      photo: this.refs.cover19.value,
      description: this.refs.title19.value
    }
    const Twenty = {
      photo: this.refs.cover20.value,
      description: this.refs.title20.value
    }

    const photos = {One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten,
                    Eleven, Twelve, Thirteen, Fourteen, Fifteen, Sixteen, Seventeen, Eighteen, Nineteen, Twenty}



    if (title.length > 50) {
      this.setState({error: ' Title is too long'});
    } else if (title.length == '') {
      this.setState({error: '  Title can\'t be empty'});
    } else {
      Meteor.call('albums.update', this.props.album, {
        title, cover, description, photos
      })
    }
  }


  render() {

    return (

        <div className="modal fade form-editAlbum" id={'edit' + this.props.album._id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">


          <div className="form-outer form-album">
            <form id='edit_post'>
              <div className='form-headliner'>
                <div className='form-text form-header album-header'>
                  <h2 className="album-title-header">{this.props.album.title}</h2>
                  <p>Greetings my, <strong>master</strong> :)</p>
                  <p>Lets make a great album!</p>
                  <input ref="description" type="text" className="form-input description-input" placeholder="Description for social share"  defaultValue={this.props.album.description}/>
                </div>

                <div className='album-photo-block'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.cover} />
                  </div>

                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Cover photo</p>
                    <input ref="title" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.title}/>
                    <input ref="cover" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.cover}/>
                  </div>
                </div>
              </div>


              <div className='julia-album-grid'>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.One.photo} />
                  </div>

                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 1</p>
                    <input ref="title1" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.One.description}/>
                    <input ref="cover1" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.One.photo}/>
                  </div>
                </div>

                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Two.photo} />
                  </div>

                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 2</p>
                    <input ref="title2" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Two.description}/>
                    <input ref="cover2" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Two.photo}/>
                  </div>
                </div>

                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Three.photo} />
                  </div>

                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 3</p>
                    <input ref="title3" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Three.description}/>
                    <input ref="cover3" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Three.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Four.photo} />
                  </div>

                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 4</p>
                    <input ref="title4" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Four.description}/>
                    <input ref="cover4" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Four.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Five.photo} />
                  </div>

                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 5</p>
                    <input ref="title5" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Five.description}/>
                    <input ref="cover5" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Five.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Six.photo} />
                  </div>

                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 6</p>
                    <input ref="title6" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Six.description}/>
                    <input ref="cover6" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Six.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Seven.photo} />
                  </div>
                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 7</p>

                    <input ref="title7" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Seven.description}/>
                    <input ref="cover7" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Seven.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Eight.photo} />
                  </div>
                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 8</p>

                    <input ref="title8" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Eight.description}/>
                    <input ref="cover8" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Eight.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Nine.photo} />
                  </div>
                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 9</p>

                    <input ref="title9" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Nine.description}/>
                    <input ref="cover9" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Nine.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Ten.photo} />
                  </div>
                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 10</p>

                    <input ref="title10" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Ten.description}/>
                    <input ref="cover10" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Ten.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Eleven.photo} />
                  </div>
                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 11</p>

                    <input ref="title11" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Eleven.description}/>
                    <input ref="cover11" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Eleven.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Twelve.photo} />
                  </div>
                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 12</p>

                    <input ref="title12" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Twelve.description}/>
                    <input ref="cover12" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Twelve.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Thirteen.photo} />
                  </div>
                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 13</p>

                    <input ref="title13" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Thirteen.description}/>
                    <input ref="cover13" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Thirteen.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Fourteen.photo} />
                  </div>
                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 14</p>

                    <input ref="title14" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Fourteen.description}/>
                    <input ref="cover14" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Fourteen.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Fifteen.photo} />
                  </div>
                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 15</p>

                    <input ref="title15" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Fifteen.description}/>
                    <input ref="cover15" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Fifteen.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Sixteen.photo} />
                  </div>
                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 16</p>

                    <input ref="title16" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Sixteen.description}/>
                    <input ref="cover16" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Sixteen.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Seventeen.photo} />
                  </div>
                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 17</p>

                    <input ref="title17" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Seventeen.description}/>
                    <input ref="cover17" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Seventeen.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Eighteen.photo} />
                  </div>
                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 18</p>

                    <input ref="title18" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Eighteen.description}/>
                    <input ref="cover18" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Eighteen.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Nineteen.photo} />
                  </div>
                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 19</p>

                    <input ref="title19" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Nineteen.description}/>
                    <input ref="cover19" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Nineteen.photo}/>
                  </div>
                </div>
                <div className='album-photo-block photo-fixer'>
                  <div className='album-photo-block-thumbnail'>
                    <img className='album-photo-thumbnail' src={this.props.album.photos.Twenty.photo} />
                  </div>
                  <div className='form-text album-photo-description form-header form-header-distance'>
                    <p>Position: 20</p>

                    <input ref="title20" type="text" className="form-input" placeholder="What about the title?"  defaultValue={this.props.album.photos.Twenty.description}/>
                    <input ref="cover20" type="url" className="form-input" placeholder="Point the way" defaultValue={this.props.album.photos.Twenty.photo}/>
                  </div>
                </div>
              </div>

            </form>

            <div className='album-edit-footer'>
              <button type="button" className="form-button album-button"  data-dismiss="modal">Close</button>
              <button type="sumbit" className="form-button" onClick={this.handleEdit.bind(this)}>Save</button>
            </div>
          </div>
        </div>
    );
  }
}
