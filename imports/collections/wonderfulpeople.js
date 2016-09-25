import { Mongo } from 'meteor/mongo';

Meteor.methods({

  'wonderfulpeople.insert': function() {
    return WonderfulPeople.insert({
      name: '',
      link: ''
    })
  },

  'wonderfulpeople.update': function(person, newData) {
    return WonderfulPeople.update({_id: person._id}, { $set: { name: newData.name, link: newData.link }});
  },

  'wonderfulpeople.remove': function(person) {
    return WonderfulPeople.remove(person)
  }

});

export const WonderfulPeople = new Mongo.Collection('wonderfulpeople');
