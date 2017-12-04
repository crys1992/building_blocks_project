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
  'chemicals.insert'(name, atoms) {
  
    Chemicals.insert({
      name: name,
      atoms: atoms,
      updatedAt: new Date(),
    });
  }
})