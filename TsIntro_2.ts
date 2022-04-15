// Problem.1
// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number

interface Todo{
    title: string;
    status : boolean;
    id : number;
}

const todo : Todo = {
    title : "Study Node Eevent loop",
    status : true,
    id: 123
}
console.log(todo);

// Problem.2
// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it

interface User {
    firstname : string;
    lastname? : string;
}

const userName = {
    firstname : "Jaswant",
    // lastname : "Chaudhary"
}
function getName( userName: User) {
    console.log(userName);
}
getName(userName);

// Problem : 3
// create an interface Address
// it takes
// houseNumber
// street
// city
// state
// postalCode
// country
// add appropriate types
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode:number;
    country : string;
}
const address : Address = {
    houseNumber: 123,
    street: "Anand Vihar-2319",
    city: "Javahar Nagar",
    state: "Delhi",
    postalCode: 289856,
    country:"India"
}
console.log(address);

// problem.4
// create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional
interface PersonDetails{
    prefix? : string;
    phones : Array<number>;
    addresses? : Array<Address>;
    email? : string;
    firstname : string;
    lastname : string;
    middlename? : string;
}

// Problem : 5
// create a function PhoneBook
// it should accept PersonDetails type argument
// it should push into an array containing all persons
function PhoneBook(person : PersonDetails){
    let arr = [];
    arr.push(person);
    console.log(arr);
}

PhoneBook({
    prefix: "Mr",
    phones : [9910203040, 7898654329],
    addresses: [{
        houseNumber: 123,
        street: "Anand Vihar-2319",
        city: "Javahar Nagar",
        state: "Delhi",
        postalCode: 289856,
        country:"India"
    }],
    firstname: "Jaswant",
    lastname: "Chaudhary"
});