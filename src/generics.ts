// const names: Array = ['Max', 'Stiv']
const names: Array<string> = [];
// names[0].split(' ');

const promise: Promise<string> = new Promise ((resolve, reject) => {
    setTimeout(() => {resolve("This is done!");}, 2000);
});

//________________________________________________________________

function merge<T extends object, U extends object>(objA:T, objB:U){
    return Object.assign(objA, objB);
}
const mergedObj = merge ({name:'Max', hobbies:['Sports']},{age:30});
console.log(mergedObj);
console.log(mergedObj.hobbies);
console.log(mergedObj.name);
console.log(mergedObj.age);

//________________________________________________________________

interface Lengthy{
    length:number;
}

function countAndDescribe<T extends Lengthy>(element: T){
    let descriptionText = 'Got no value.';

    if (element.length === 1){
        descriptionText = 'Got 1 value'}
    else if (element.length>1){
        descriptionText = 'Got ' + element.length + ' values.';}
    return [element, descriptionText]
}

console.log(countAndDescribe('Hi there!'));

//________________________________________________________________

function extractAndConvert<T extends object, U extends keyof T> (obj: T, key: U){
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Max'}, 'name');
//extractAndConvert({}, 'name'); //-> error
// console.log (extractAndConvert({}, 'name'));

//________________________________________________________________

class DataStorage <T>{
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item),1)
    }

    getItems(){
        return [...this.data];
    } // returns copy of data
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Mira');
textStorage.removeItem('Max');
console.log(textStorage.getItems());


const objStorage = new DataStorage<object>();
const maxObj = {name:'Max'}
objStorage.addItem(maxObj);
objStorage.addItem({name:'Mira'});
//...
objStorage.removeItem(maxObj);
console.log(objStorage.getItems());



// objStorage.addItem({name:'Max'});
// objStorage.addItem({name:'Mira'});
// //...
// objStorage.removeItem({name:'Max'});
// console.log(objStorage.getItems());


//________________________________________________________________


interface CourseGoal {
    title: string;
    description: string;
    completeDate: Date;
}
//But you could have scenarios like this, where you want to temporarily switch
// one of your object types, one of your interfaces to be optional only.
// To make sure that all the properties in there can be optional only temporarily.

function createCourseGoal(title:string, description:string, completeDate:Date) : CourseGoal {
    // return{title:title, description:description, completeDate:completeDate}
    // let courseGoal: CourseGoal = {}; //error
    let courseGoal: Partial<CourseGoal> = {}; 
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeDate = completeDate;
    return courseGoal as CourseGoal;
}