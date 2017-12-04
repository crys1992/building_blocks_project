import { Mongo } from 'meteor/mongo';
 
export const Sciencing = new Mongo.Collection('sciencing');
import { check } from 'meteor/check';


if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('sciencing', function sciencingPublication() {
    return Sciencing.find({});
  });
}

// http://docs.meteor.com/api/collections.html#Mongo-Collection-upsert
Meteor.methods({
  'sciencing.upsert'(id, element1Value, element2Value, element3Value, element1Count, element2Count, element3Count, stir, light) {
    var currentSciencing = Sciencing.upsert({
      _id:id
    },
    {
      $set: {
        element1: element1Value,
        element2: element2Value,
        element3: element3Value,
        element1Count: element1Count,
        element2Count: element2Count,
        element3Count: element3Count,
        stir : stir,
        light : light, 
        updatedAt: new Date(),
      }
    });
    return currentSciencing.insertedId;
  }
})