import { Meteor } from 'meteor/meteor';

// Data Base
import { Posts } from '../imports/collections/posts';
import { Albums } from '../imports/collections/albums';

import { About } from '../imports/collections/about';
import { WonderfulPeople } from '../imports/collections/wonderfulpeople';
import { Models } from '../imports/collections/models';

// Creating user
Meteor.startup(() => {

  // Auto user creation
  if (Meteor.users.find().count() < 1) {
    Accounts.createUser({
      email: 'julia@universe.com',
      password: '1234567890'
    });
  }



  // Auto about creation
  if (!About.find().count() >= 1) {
    About.insert({
      _id: "aboutpage",
      landscapeImage: "",
        description: "",
        email: "",
        phone: "",
        city: "",
        country: "",
        photos: {
          One: {
            photo: ""
          },
          Two: {
            photo: ""
          },
          Three: {
            photo: ""
          },
          Four: {
            photo: ""
          },
          Five: {
            photo: ""
          },
          Six: {
            photo: ""
          },
          Seven: {
            photo: ""
          },
          Eight: {
            photo: ""
          },
          Nine: {
            photo: ""
          },
          Ten: {
            photo: ""
          }
       }
    })
  }



  Meteor.methods({
     'editPassword' : function(newPassword){
       Accounts.setPassword(userId, newPassword);
     }
  });


  Meteor.publish('posts', function (limit) {
    // Setting the limit of published objects
    return Posts.find({}, {sort: {createdAt: -1}, limit: limit});
  });

  Meteor.publish('albums', function () {
    return Albums.find({});
  });

  Meteor.publish('about', function () {
    return About.find({});
  });

  Meteor.publish('wonderfulpeople', function () {
    return WonderfulPeople.find({});
  });

  Meteor.publish('models', function () {
    return Models.find({});
  });

});
