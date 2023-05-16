"use strict";
// const names: Array = ['Max', 'Stiv']
const names = [];
// names[0].split(' ');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("This is done!"); }, 2000);
});
//________________________________________________________________
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
console.log(mergedObj.hobbies);
console.log(mergedObj.name);
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 value';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' values.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
//________________________________________________________________
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
//extractAndConvert({}, 'name'); //-> error
// console.log (extractAndConvert({}, 'name'));
//________________________________________________________________
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    } // returns copy of data
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Mira');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const objStorage = new DataStorage();
const maxObj = { name: 'Max' };
objStorage.addItem(maxObj);
objStorage.addItem({ name: 'Mira' });
//...
objStorage.removeItem(maxObj);
console.log(objStorage.getItems());
//But you could have scenarios like this, where you want to temporarily switch
// one of your object types, one of your interfaces to be optional only.
// To make sure that all the properties in there can be optional only temporarily.
function createCourseGoal(title, description, completeDate) {
    // return{title:title, description:description, completeDate:completeDate}
    // let courseGoal: CourseGoal = {}; //error
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeDate = completeDate;
    return courseGoal;
}
