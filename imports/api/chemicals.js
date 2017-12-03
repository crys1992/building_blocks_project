import { Mongo } from 'meteor/mongo';
 
export const Chemicals = new Mongo.Collection('chemicals');
import { check } from 'meteor/check';


if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('chemicals', function chemicalsPublication() {
    return Chemicals.find({});
  });
}

// http://docs.meteor.com/api/collections.html#Mongo-Collection-upsert
Meteor.methods({
  'chemicals.insert'(element1Value, element2Value, element3Value, element1Count, element2Count, element3Count, stir, light) {
  
    Chemicals.insert(
    {
      $set: {
        element1: element1Value,
        element2: element2Value,
        element3: element3Value,
        element1Count: element1Count,
        element2Count: element2Count,
        element3Count: element3Count;
        stir : stir
        light : light, 
        updatedAt: new Date(),
      }
    });
  }
})