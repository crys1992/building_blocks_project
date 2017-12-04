import { Chemicals } from './chemicals.js';
import { Sciencing } from './sciencing.js';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('allData', function allDataPublication() {

    return [
        Chemicals.find({}),
        Sciencing.find({})
    ]
  });
}
