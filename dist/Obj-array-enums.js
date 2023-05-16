"use strict";
// const person: {
// : {
//     name: string;
//     age: number;
// } = {
// Tuples 19
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: "John",
//     age: 21,
//     hobbies: ["Sports", "Cooking"],
//     role: [0, "admin"]
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["Read_Only"] = 2] = "Read_Only";
})(Role || (Role = {}));
//enum 20
const person = {
    name: "John",
    age: 21,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
console.log(person.age);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
