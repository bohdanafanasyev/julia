import { Mongo } from 'meteor/mongo';

Meteor.methods({

  'models.insert': function() {
    return Models.insert({
      name: '',
      link: ''
    })
  },

  'models.update': function(person, newData) {
    return Models.update({_id: person._id}, { $set: { name: newData.name, link: newData.link }});
  },

  'models.remove': function(person) {
    return Models.remove(person)
  }

});

export const Models = new Mongo.Collection('models');
