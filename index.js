// console.log("Hello");

// let x = 10;
// console.log(typeof x)
// x = "Tonkla";
// console.log(typeof x);

// const y = 5;

//string

const firstName = "Ponguthai";
const lastName = "Samrankhong";
// console.log(firstName[0])

//concate ต่อ string

const fullName = firstName + " " + lastName;
// console.log(fullName)

const concateWithGrave = `Your first name is ${firstName} Your last name is ${lastName}`;

// console.log(concateWithGrave)

// console.log(firstName.length)

const upperCase = firstName.toUpperCase();
// console.log(upperCase)

const lowerCase = lastName.toLowerCase();
// console.log(lowerCase)

const withSpace = "  Hello Trim  ";
// console.log(withSpace)

const noSpace = withSpace.trim();
// console.log(noSpace)

// const token = "Bearer=1234567"
// console.log(token)
// const splitWord = token.split("=")
// console.log(splitWord)

// const userLong = "Ton,Bing,Ter,Hang,Newton"
// const splitName = userLong.split(",")
// console.log(splitName)

//number

const numbA = 10;
const numbB = 20;

// console.log(numbA + numbB);
// console.log(numbA - numbB);
// console.log(numbA * numbB);
// console.log(numbA / numbB);
// console.log(numbA % numbB);
// console.log(numbA ** numbB);

// const floatA = 1.23456;
// const ceil = Math.ceil(floatA);
// const floor = Math.floor(floatA);
// console.log(`Ceil is ${ceil} Floor is ${floor}`)

// const t = true
// const f = false
// const test = 0
// const undef = undefined
// const nu = null
// if(test){
//     console.log(t)
// }
// else{
//     console.log(f)
// }

// if(test != undefined){
//     console.log(t)
// }
// else{
//     console.log(f)
// }

//array

const arr = [1, 2, 3, 4, 5];
// console.log(arr[4])
// console.log(arr.length)

//array method

// const nameArr = []
// console.log(nameArr, " :original")
// nameArr.push("Ton")
// console.log(nameArr," :After push")
// nameArr.pop()
// console.log(nameArr," :After push")
// nameArr.push("Ton")
// nameArr.unshift("John")
// console.log(nameArr," :After unshift")
// nameArr.shift()
// console.log(nameArr," :After shift")

//Object

// const userObject = {
//     username: "Username1",
//     password: "Password1"
// }
// console.log(userObject.username)
// console.log(userObject.password)
// userObject.email = "test@gmail.com"
// console.log(userObject)
// console.log(userObject.email)
// console.log(userObject["username"])

//Pass by value
//Pass by reference

// const x = 10
// let y = 5

// y = x
// y = y +10
// console.log(y, ":y")
// console.log(x, ":x")

//Pass by ref example

let user1 = {
  name: "user1",
  age: 20,
};

let user2 = {
  name: "user2",
  age: 15,
};

//worst case
// user2 = user1
// console.log(user2, ":user2")
// user2.name = "User2Fr"
// console.log(user2, ":user2")
// console.log(user1, ":user1")

// user2 = {...user1}
// user2.name = "User2Fr"
// console.log(user2, ":user2")
// console.log(user1, ":user1")

//function

// function sumNumber(n1, n2){
//     // console.log(n1,n2, ":from function")
//     return n1 + n2
//     console.log("hello")
// }

// const sum = sumNumber(5,6)

// const sum2 = sumNumber
// const xe = sum2(2,4)
// // console.log(xe, ":From sum2 func")

// const sumByArrowFunc = (n1,n2) => n1 + n2;
// console.log(sumNumber(2,3))
// console.log(sumByArrowFunc(2,3))

// //callback

// function CallBackContainer(){
//     Callback()
//     console.log("Callback Container Logic")
// }

// function Callback(){
//     console.log("Callback logic")
// }
// console.log(CallBackContainer())

//block control
//if-else,switch-case

//if-else
const money = 4;
const national = "TH";
const age = 15;
// if (money > 5 && national == "TH") {
//   console.log("Enough");
// } else if (money <= 4) {
//   console.log("Almost");
// } else {
//   console.log("Not enough");
// }
// if(age === "15"){
//     console.log("Adult");
// }

// const role = age > 15 ? "Adult" : "Kid";

// //switch case

// switch(1){
//     case 1:
//         console.log("Hello one")
//         break
//     case 2:
//         console.log("Hello two")
//         break
//     default:
//         console.log("Not one or two")
// }

// const objectSwitch = {
//     1: "hello one",
//     2: "hello two"
// }

// console.log(objectSwitch["2"])
// objectSwitch["3"] = "Hello three"
// console.log(objectSwitch["3"])
// console.log(objectSwitch["4"] ?? "Not in case")

//loop

// //for
// for(let i = 0; i < 5; i++){
//     console.log(`This is ${i} round`)
// }

// //while
// let round = 0
// while(round < 5){
//     console.log(`This is ${round} round`)
//     round++
// }

//array loop
//foreach
const nums = [1, 2, 3, 4, 5];
// nums.forEach((value, index) => {
//   console.log(`This is round of element ${value} at index ${index}`);
// });

// nums.map((value, index) => {
//     console.log(`This is round of element ${value} at index ${index}`);
//   });

// const noThree = nums.filter((value) => value !== 3)
// console.log(noThree)

const axios = require("axios")

async function FetchpokenAPI(){
    try{
        const data = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
        console.log(data.data)
    }catch(error){
        console.log("Error occured")
    }finally{
        console.log("Finish loading")
    }
}
FetchpokenAPI()