// Main
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


// Mongo collections
import { WonderfulPeople } from '../../../../imports/collections/wonderfulpeople';


export default class GreatPeople extends TrackerReact(React.Component) {

  constructor(props) {
    super(props);

    this.state = {
      subscription: {
        wonderfulpeople: Meteor.subscribe('wonderfulpeople')
      }
    }
  }

  wonderfulPeople() {
    return WonderfulPeople.find().fetch();
  }

  deletePerson() {
    Meteor.call('wonderfulpeople.remove', this);
  }

  updatePerson() {
    const name = $( `#name${this._id}` ).val();
    const link = $( `#link${this._id}` ).val();

    Meteor.call('wonderfulpeople.update', this, { name, link });
  }

  addPerson() {
    Meteor.call('wonderfulpeople.insert')
  }

  render() {

    return (

      <div className="modal fade form-gratitude" id='greatpeople' tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">


        <div className="form-outer">
          <div className='delete_post'>
              <div className='form-text form-header'>
                <p><strong>Great people</strong></p>
                <button type="button" className="btn-modal addNew" onClick={this.addPerson.bind(this)}>Add new</button>
              </div>

              <div className='gratitude-body'>
                {this.wonderfulPeople().map( (person) => {

                  return (
                    <div className='gratitude-person' key={person._id}>
                      <input id={'name' + person._id} type="text" className="form-input" placeholder="Provide a name" defaultValue={person.name}/>
                      <input id={'link' + person._id} type="url" className="form-input" placeholder="Social link/website" defaultValue={person.link}/>
                      <button className='form-button' onClick={this.deletePerson.bind(person)}>​‌×</button>
                      <button className='form-button' onClick={this.updatePerson.bind(person)}>✓</button>
                    </div>

                  )
                })}
              </div>

              <div className='album-edit-footer gratitude-footer'>
                <button ref='aloha' type="button" className="form-button album-button"  data-dismiss="modal">Close</button>
              </div>

          </div>
        </div>


      </div>
    );
  }
}
