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
      landscapeImage: "http://lorempixel.com/g/1200/600/abstract/",
        description: "This wonderful name originally comes from the Latin, which means youthful and vivacious. It also represents inner desire for order and physical creativity, besides it's a name of a great woman that gave birth to one little boy, which grew up with a big and generous heart .",
        email: "julia@wonderland.eh",
        phone: "+ 1 597 364 280",
        city: "Earty",
        country: "Universe",
        photos: {
          One: {
            photo: "http://lorempixel.com/g/640/481/abstract/"
          },
          Two: {
            photo: "http://lorempixel.com/g/640/482/abstract/"
          },
          Three: {
            photo: "http://lorempixel.com/g/640/483/abstract/"
          },
          Four: {
            photo: "http://lorempixel.com/g/640/484/abstract/"
          },
          Five: {
            photo: "http://lorempixel.com/g/640/485/abstract/"
          },
          Six: {
            photo: "http://lorempixel.com/g/640/486/abstract/"
          },
          Seven: {
            photo: "http://lorempixel.com/g/640/487/abstract/"
          },
          Eight: {
            photo: "http://lorempixel.com/g/640/488/abstract/"
          },
          Nine: {
            photo: "http://lorempixel.com/g/640/489/abstract/"
          },
          Ten: {
            photo: "http://lorempixel.com/g/640/480/abstract/"
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
