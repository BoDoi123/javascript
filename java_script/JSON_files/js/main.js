// 1. JSON.stringify()
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const jsonString = JSON.stringify(names);
// console.log(jsonString);

const person = {
    name: "Spongebob",
    age: 30,
    isEmployed: true,
    hobbies: ["Jellyfishing", "karate", "cooking"],
};

const jsonString1 = JSON.stringify(person);
// console.log(jsonString1);

const people = [
    {
        name: "Spongebob",
        age: 30,
        isEmployed: true,
    },
    {
        name: "Patrick",
        age: 34,
        isEmployed: false,
    },
    {
        name: "Squidward",
        age: 50,
        isEmployed: true,
    },
    {
        name: "Sandy",
        age: 27,
        isEmployed: false,
    },
];

const jsonString2 = JSON.stringify(people);
// console.log(jsonString2);

// 2. JSON.parse()
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;

const jsonPerson = `{name: "Spongebob", age: 30, isEmployed: true, hobbies: ["Jellyfishing", "karate", "cooking"]}`;

const jsonPeople = `[{name: "Spongebob", age: 30, isEmployed: true},
                     {name: "Patrick", age: 34, isEmployed: false},
                     {name: "Squidward", age: 50, isEmployed: true},
                     {name: "Sandy", age: 27, isEmployed: false},]`;

const parsedData = JSON.parse(jsonNames);

// console.log(parsedData);

// 3. fetch JSON
fetch("./people.json")
    .then((response) => response.json())
    .then((values) => values.forEach((value) => console.log(value)))
    .catch((error) => console.error(error));
