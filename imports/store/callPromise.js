import { Meteor } from 'meteor/meteor';

export function callPromise(methodName, ...args) {
  return new Promise((resolve, reject) => {
    Meteor.call(methodName, ...args, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}