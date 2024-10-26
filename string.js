// let futbolName;
// // console.log(typeof futbolCount);

// // function startApp(){
// //     futbolName = prompt("Jamoa nomini kiriting:");
// //     while(futbolName == "" || futbolName == null){
// //         futbolName = prompt("Jamoa nomini kiriting:");
// //     }
// // }
// // startApp();

// const futboll = {
//     name: "",
//     count: 10,
//     score: [],
//     players: {},
//     stationName: "",
// }
// // console.log(futboll.name);

// // let a = prompt("Birinchi jamoa nomini kiriting:"),
// //     b = prompt("gollar sonini kiriting:");
// // let c = prompt("Ikkinch jamoa nomini kiriting:"),
// //     d = prompt("gollar sonini kiriting:");
// // futboll.score[a] = b;
// // futboll.score[c] = d;
// // console.log(futboll);
// for(let i = 0; i < 2; i++){
//     let a = prompt(`Birinchi jamoa nomini kiriting:${i+1}`),
//     b = prompt("gollar sonini kiriting:");

//     if(a != "" && b != null && a != null && b != ""){
//         futboll.score[a] = b;
//     }else {
//         i--
//     }
    
// }
// console.log(futboll);
// String 
// let text = "Oybek";
// let arr = [1,2,3,4,5];

// console.log(text[3] = "t");
// console.log(arr[3] = "apple");
// console.log(text);
// console.log(arr);
// let satr = "Hello world";
// let upp = satr.toUpperCase()
// console.log(satr.toLowerCase());
// for(let i = 0; i < satr; i++){
//     console.log(satr[i] , "=> ",i);
    
// }
// console.log(satr.indexOf("t"));

let CountOfF = 10;
// function startApp(){
//      CountOfF = +prompt("Gollar sonini kiriting");
//     while(CountOfF == "" || CountOfF == null){
//         CountOfF = +prompt("Gollar sonini kiriting");
//     }
// }
// startApp();

const futboll = {
    count: CountOfF,
    score: [],
    players: {},

}

// let a = prompt("Birinchi jamoa nomini kiriting:"),
//     b = prompt("gollar sonini kiriting:");
// let c = prompt("Ikkinchi jamoa nomini kiriting:"),
//     d = prompt("gollar sonini kiriting:");

// for(let i = 0; i < 2; i++){
//     let a = prompt(`jamoa nomini kiriting:${i+1}`);
//     let b = prompt("gollar sonini kiriting:");
//     if(a != "" && b != null && a != null && b != ""){
//         futboll.score[a] = b;
//     }else{
//         i--;
//     }
    
// }

// let text = "Oybek";
// let arr = [1,2,3,4,5];
// console.log(text[2] = "t");
// console.log(arr[2] = "Hello");
// console.log(text);
// console.log(arr);

let txt = "Hello world!";
// console.log(txt.toUpperCase());
// console.log(txt.toLowerCase());
// console.log(txt.indexOf("w"));





// futboll.score[a] = b;
// futboll.score[c] = d;
// console.log( futboll);

// let x = prompt("Ixtiyoriy sonni kiriting:");
// console.log(parseFloat(x));


                // Object distributizatsiya
// const thief = {
//     height: 1.85,
//     jacket: "red",
//     color: {
//         hair: "black",
//         eyeColor: "blue"
//     }
// }

// const {hair, eyeColor} = thief.color;
// const hair = thief.color.hair;
// const eyeColor = thief.color.eyeColor;
// console.log(hair);
// console.log(eyeColor);

// let newObj = thief;
// newObj.height = 2;
// console.log(thief);
// console.log(newObj);

// const numbers ={
//     x: 10,
//     y: 5,
// }
// const addNumber ={
//     z: 15,
// }
// const allNumbers = Object.assign(numbers, addNumber);
// numbers.x = 20;

// console.log(allNumbers);
// console.log(numbers);

// let arr = ["Oybek",2,3,3,5];

// let newArr = arr.slice();//arr copy
// newArr[0] = "Shohruh";
// console.log(arr);
// console.log(newArr);


// let newArr = arr;
// newArr[0] = "Muhammad";
// console.log(arr);
// console.log(newArr);

// const realM = ["Mpape", "Vinisius"];
// const Barsa = ["Yamal"];

// const mixPlayer = [...realM, ...Barsa];
// console.log(mixPlayer);

// const numbers = [1,2,3];

// function saver(x,y,z){
//     console.log(x+y+z);
// }
// saver(...numbers);

// const arr = ["x", "y"];
// const newArr = [...arr]
// console.log(newArr);

const car = {
    motor: "X",
    color: "red",
    rusumi: ["GM", "BYD", "BMW"],
    isAirbag: true,
    isSpeed: function(){
        console.log(100);  
    },
}
const gm = {
    isAirbag: false,
}

// Object.setPrototypeOf(gm, car);
const bmw = Object.create(car);
bmw.motor = "Y";
console.log(bmw);
console.log(car);


// gm.__proto__ = car;
// console.log(gm.rusumi);
// console.log(gm.isSpeed());




