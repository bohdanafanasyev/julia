import { Mongo } from 'meteor/mongo';

Meteor.methods({

  'about.update': function (aboutCursor, newData) {
      About.update({_id: aboutCursor}, { $set: {
        landscapeImage: newData.landscapeImage,
        description: newData.description,
        email: newData.email,
        phone: newData.phone,
        city: newData.city,
        country: newData.country,
        photos: {
          One: {
            photo: newData.descriptionPhotos.One.photo
          },
          Two: {
            photo: newData.descriptionPhotos.Two.photo
          },
          Three: {
            photo: newData.descriptionPhotos.Three.photo
          },
          Four: {
            photo: newData.descriptionPhotos.Four.photo
          },
          Five: {
            photo: newData.descriptionPhotos.Five.photo
          },
          Six: {
            photo: newData.descriptionPhotos.Six.photo
          },
          Seven: {
            photo: newData.descriptionPhotos.Seven.photo
          },
          Eight: {
            photo: newData.descriptionPhotos.Eight.photo
          },
          Nine: {
            photo: newData.descriptionPhotos.Nine.photo
          },
          Ten: {
            photo: newData.descriptionPhotos.Ten.photo
          }
      }}});
  },

})

export const About = new Mongo.Collection('about');
