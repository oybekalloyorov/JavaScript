
let car = ["Malibu","Cobalt", "Damas", "BYD"];
car[4] = "Mers";
car[5] = 12;
car.push("AUDI");
car.push(true);
// car.splice(2,0,"Cherry","Jetour")
// car.pop();
// car.pop();
// console.log(car);
// console.log(car[2]);
// for(let i = 0; i <= car.length-1; i++){
//     console.log(car[i], " => ", i);
// } 
// for (let element of car){
//     console.log(element);
// }
const person = {
    name: "Toshmat",
    lastName: "Bla",
    cars: ["Malibu",45,"Cobalt", {model: ["GM", "BYD", "AUDI"]},"Damas"]
}
// console.log(person.cars[5]);
// console.log(person.cars[3].model[2]);
let ismlar = [45,74];
let ismlar1 = new Array(45,74);
let lastName;
// console.log(ismlar.length);
// console.log(ismlar1[39]);
// console.log(Array.isArray(lastName));
// console.log(car.toString());
// console.log(car.at(2));
// console.log(car.join(" $ "));
// console.log(car.concat(ismlar));
// ismlar.splice(1, 0, "MuhammadAli", "MahmudAli");
// console.log( ismlar);

// Vazifa Massivlarga doir masalalarni ishlash
//group 2
let apple = "Olma";
let banana = "Banan";
let fruit = ["olma", "uzum", 12, 78, true];
fruit.push("Anor");
fruit.push("Nok");
// fruit.splice(0,2,"Gilos", "Olcha")
// fruit.pop();
// console.log(fruit);

// for(let i = 1; i <= fruit.length-1; i+=2){
//     console.log(fruit[i]," => ",i);   
// }

// for(let element of fruit){
//     console.log(element);  
// }
// fruit[10] = "Behi";
// console.log(fruit);
// for(let i = 0; i <= fruit.length-1; i++){
//     console.log(fruit[i]," => ",i);   
// }

// const person = {
//     name: "Sharifa",
//     age: 16,
//     fruits: ["olma", "uzum", {tozaligi: ["yuvilgan","yuvilmagan"]}]
// }

// console.log(person.fruits[2].tozaligi[1]);

const davlatlar = ["Uzb", "Ru","Eng"];
// console.log(davlatlar.join(" bir narsa "));
// console.log(davlatlar.toString());
// console.log(fruit.concat(davlatlar, car));

// masala 101
const massiv = [58,22,17,84,50,53];

let yigindi = 0;
for(let i = 0; i < massiv.length; i++){
    yigindi += massiv[i];
}
let ortacha_Qiymat = yigindi/massiv.length;
// console.log(ortacha_Qiymat);
let ortacha2 = 0, count = 0;
for(let i = 0; i < massiv.length; i++){
    if(ortacha_Qiymat > massiv[i]){
        ortacha2 += massiv[i];
        count++;
        // console.log(massiv[i], " ",count);
    }
}

// console.log(ortacha2 / count);
// masala 102

// let arr102 = [15,8];
// let a=0,b=0;
// let minm = arr102[0];
// for (let i = 1; i < arr102.length; i++){
//     if(minm > arr102[i]){
//         minm = arr102[i];
//     }
// }
// for(let i = a; i <= b; i++){
//     arr102[i] = arr102[i]/minm;
// }
// for(let i = 0; i< arr102.length; i++){
//     console.log(arr102[i].toFixed(1));
// }

// masala 111
// let arr111 = [9,72,18,48,150,75,32,29,78,25,100];
// let M = 76, sum = 0;
// for(let i=0; i<arr111.length; i++){
//     if(arr111[i] > M){
//         sum += arr111[i];
//     }
// }
// console.log(sum);

// masala 112
// let arr112 = [38,34,13,48];
// let kopaytma=1, hisob=0
// for(let i = 0; i < arr112.length; i+=2){
//     kopaytma *= arr112[i];
//     // console.log(arr112[i]); 
// }
// for(let i = 1; i < arr112.length; i+=2){
//     hisob += arr112[i];
//     // console.log(arr112[i]); 
// }
// console.log((kopaytma/hisob).toFixed(2));

// for(let i = 1; i >= 10; i++){
//     console.log(i);
// }

// masala 106
const massiv106 = [24,50,72,96,95];
let kvadratYigindi = 0;
let minn = massiv106[0];
for(let i = 0; i < massiv106.length; i++){
    kvadratYigindi = kvadratYigindi+ Math.pow(massiv106[i], 2);
    // if(massiv106[i] < minn){;
    //     minn = massiv106[i];
    // }
    // // console.log(massiv106[i]);
    
}
// console.log(kvadratYigindi);
// masala 104
// const mass104 = [8,37,42,64,16,7,40,12,13,21,24,11,98];
// let minnn = mass104[0], index=0;
// for(let i = 0; i < mass104.length; i++){
//     if(mass104[i] < minnn){
//         index = i;
//         minnn = mass104[i];
//     }
// }
// mass104[index] = mass104[mass104.length-1]
// mass104[mass104.length-1] = minnn;
// console.log(mass104);

////////////////////////////////////////// Arrays Methods
let son = [-5,0,9,7,11,4,3];
function sum(x){
    console.log(x*2);  
}
// function filtered(arr){
//     let newMassiv =[];
//     for (const element of arr) {
//         if(element > 0){
//             newMassiv.push(element);
//         }
//     }
//     return newMassiv;
// }
// console.log(filtered(son));

// let filtered = son.filter(value => value > 0);
// let masevry = son.every(value => value >= 0);
// let massome = son.some(value => value >= 10);
// let rediuced = son.reduce((acc, value) => (acc += value),0);

// let average = rediuced / son.length;

// let mapped = son.map((value, index, arr) => value*5)
// sum(filtered);
// let newForEach = son.forEach((x, index, arr) => console.log(x," ",index,));


// console.log(newForEach);


////////////////////////////////
let number = [5,2,-1,5,6,8,-6,10];
let newnumber = [];
// for(let i = 0; i < number.length; i++){
//     if(number[i] > 0){
//         newnumber.push(element);
//     }
// }
// for (const element of number) {
//     if(element > 0){
//         newnumber.push(element);
//     }
// }
// let numberEvry = number.every(value => value > 0);
// let numbersome = number.some(x => x < 8);
// function filtered(arr){
//     let boshFiltered = [];
//     for (const element of arr) {
//         if(element > 8){
//             boshFiltered.push(element);
//         }
//     }
//     return boshFiltered;
// }
let filtered = number.filter(value => (value % 2 == 0))
                     .map((value,index) => value * index)
                     .filter(value => value > 6);

// let foreachNumber = number.forEach((value, index) => console.log(value, " ", index));

// let reduced = number.reduce((acc, value) => (acc *= value),0);

// console.log(reduced);
// //////////////////////////////////////////////////Massivni davomi va siqllar
// for while dowhile
// for(let i = 0; i<=100; i++){
//     console.log(i);
    
// }
// for(let i = 100; i>=50; i--){
//     console.log(i);
// }

// let i = 11
// while(i <= 10){
//     console.log(i);
//     i++;
// }
// let i = 5;
// do{
//     console.log("i=>",i);
//     i++;
// }while(i < 10)

// let arr = [2,5,6,8,9];
// for (const element of arr) {
//     console.log(element);
    
// }

// let object = {
//     name: "Akmalbek",
//     age: 16,
//     telRaqam: "9912345646"
// }
// console.log(object.age);

// for (let i in object) {
//    console.log(object.values[name]);
   
// }

// let person1 =[
//     {
//         name: "Akmalbel",
//          age: 16},
//     {
//         name:"MahmudAli",
//         age: 17
//     },
//     {
//         name: "Tohirjon",
//          age: 18
//     },
//     {
//         name: "Shahriyor", age: 19
//     }
// ]
// for (const element of person1) {
//     console.log(element.name ," ", element.age);
    
// }
// console.log(person1.name);


// for(let i = 10; i>0; i--){
//     console.log(i);
    
// }
// i = 11;
// while(i<=10){
//     console.log(i);
//     i++;
    
// }
// j = 100;
// while(j>0){
//     console.log(j);
//     j--
    
// }

//  i = 1000;
// do{
//     console.log(i);
//     i++;
// }while(i <= 10)
// let studentlar = [
//     {
//         name: "Muhammad",
//         age: 16,
//         telRaqam: "5456461"
//     },
//     {
//         name: "Elmurod",
//         age: 17,
//         telRaqam: "4654535"
//     },
//     {
//         name: "fksdjvhkduhfkul",
//         age: 20,
//         telRaqam: "213454"
//     }
// ]
// let yoshYigindi = 0;
// for (const element of studentlar) {
//     // console.log(element.name, element.age, element.telRaqam);
//     yoshYigindi += element.age
// }
// console.log(yoshYigindi);

// Masala siql 93

let x=1,y=1,a=2,b=2;
let surat = 0,maxraj = 1, S = 0;
for (let k=1; k <= x; k++){
    surat = (((k ** 2) * Math.sin(k)) + 5);
    maxraj = Math.pow(((k ** 7) + 1), 0.2);
    S += (surat / maxraj);
}
surat = 0; maxraj = 1;
let P1 = 1;
for(let n = 1; n <= y; n++){
    surat = n + (n ** 0.5);
    maxraj = n - Math.pow((n+1), 0.2);
    P1 *= surat/maxraj;
}
surat = 0; maxraj = 1; 
let SP = 0; P = 1;
for(let k = 1; k <= a; k++){
    for(let i = 1; i <= b; i++){
        surat =  i*i + Math.pow((k*k), i);
        maxraj = (Math.sin(i) + Math.cos(k)) * (i ** k);
        P *= surat / maxraj;
    }
    SP += P;
}
console.log(S.toFixed(2), P1.toFixed(2), SP.toFixed(2));








