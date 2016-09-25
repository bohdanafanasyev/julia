import { Mongo } from 'meteor/mongo';

Meteor.methods({

  'posts.insert' : function(post) {

    if (post.title.length > 50) {
      throw new Meteor.Error("too-long");
    } else if (post.title.length == '') {
      throw new Meteor.Error("empty");
    } else if (post.social == 'Select') {
      throw new Meteor.Error("select");
    } else if (post.link == '') {
      throw new Meteor.Error("link");
    } else if (post.link_image == '') {
      throw new Meteor.Error("link_image");
    } else {
      post.createdAt = new Date();
      Posts.insert(post);
    }
  },

  'posts.update': function (post, newPost) {
      Posts.update(post, { $set: {title: newPost.title, social: newPost.social, link: newPost.link, link_image: newPost.link_image} });
  },

  'posts.remove' : function(post) {
    return Posts.remove(post);
  },

  'posts.number' : function() {
      return Posts.find().count();
  }

});



export const Posts = new Mongo.Collection('posts');
