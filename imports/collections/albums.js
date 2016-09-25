import { Mongo } from 'meteor/mongo';

Meteor.methods({

  'albums.insert' : function(album) {

    if (album.title.length > 50) {
      throw new Meteor.Error("too-long");
    } else if (album.title.length == '') {
      throw new Meteor.Error("empty");
    } else if (album.cover == '') {
      throw new Meteor.Error("link_image");
    } else {
      album.createdAt = new Date();
      Albums.insert(album);
    }
  },

  'albums.update': function (album, newData) {
      Albums.update(album, { $set: {
        title: newData.title,
        cover: newData.cover,
        description: newData.description,
        photos: {
          One: {
            photo: newData.photos.One.photo,
            description: newData.photos.One.description
          },
          Two: {
            photo: newData.photos.Two.photo,
            description: newData.photos.Two.description
          },
          Three: {
            photo: newData.photos.Three.photo,
            description: newData.photos.Three.description
          },
          Four: {
            photo: newData.photos.Four.photo,
            description: newData.photos.Four.description
          },
          Five: {
            photo: newData.photos.Five.photo,
            description: newData.photos.Five.description
          },
          Six: {
            photo: newData.photos.Six.photo,
            description: newData.photos.Six.description
          },
          Seven: {
            photo: newData.photos.Seven.photo,
            description: newData.photos.Seven.description
          },
          Eight: {
            photo: newData.photos.Eight.photo,
            description: newData.photos.Eight.description
          },
          Nine: {
            photo: newData.photos.Nine.photo,
            description: newData.photos.Nine.description
          },
          Ten: {
            photo: newData.photos.Ten.photo,
            description: newData.photos.Ten.description
          },
          Eleven: {
            photo: newData.photos.Eleven.photo,
            description: newData.photos.Eleven.description
          },
          Twelve: {
            photo: newData.photos.Twelve.photo,
            description: newData.photos.Twelve.description
          },
          Thirteen: {
            photo: newData.photos.Thirteen.photo,
            description: newData.photos.Thirteen.description
          },
          Fourteen: {
            photo: newData.photos.Fourteen.photo,
            description: newData.photos.Fourteen.description
          },
          Fifteen: {
            photo: newData.photos.Fifteen.photo,
            description: newData.photos.Fifteen.description
          },
          Sixteen: {
            photo: newData.photos.Sixteen.photo,
            description: newData.photos.Sixteen.description
          },
          Seventeen: {
            photo: newData.photos.Seventeen.photo,
            description: newData.photos.Seventeen.description
          },
          Eighteen: {
            photo: newData.photos.Eighteen.photo,
            description: newData.photos.Eighteen.description
          },
          Nineteen: {
            photo: newData.photos.Nineteen.photo,
            description: newData.photos.Nineteen.description
          },
          Twenty: {
            photo: newData.photos.Twenty.photo,
            description: newData.photos.Twenty.description
          }
      }}});
  },

  'albums.remove' : function(album) {
    return Albums.remove(album);
  },

  'albums.number' : function() {
      return Albums.find().count();
  },

  'albums.find' : function(titleValue) {
    return Albums.find({title: titleValue})
  }

});


export const Albums = new Mongo.Collection('albums');
