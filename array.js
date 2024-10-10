let car = ["Malibu",45,"Cobalt", "Damas", "BYD"];
car[4] = "Mers";
car[5] = 12;
car.push("AUDI");
car.push("BMW");
// car.pop();
// car.pop();
// console.log(car.length);
// console.log(car[1]);
// for(let i = 1; i < car.length; i+=2){
//     console.log(car[i], " => ", i);
// }
// for (let element of car){
//     console.log(element);
// }
// const person = {
//     name: "Toshmat",
//     lastName: "Bla",
//     cars: ["Malibu",45,"Cobalt", {model: ["GM", "BYD", "AUDI"]},"Damas"]
// }
// console.log(person.cars[3].model[2]);
// console.log(person.name);
let ismlar = ["Toshmat", "Eshmat", "Boltavoy"];
let ismlar1 = new Array(40);
let lastName;
// console.log(ismlar);
// console.log(ismlar1[39]);
// console.log(Array.isArray(lastName));
// console.log(car.toString());
// console.log(car.at(2));
// console.log(car.join(" , "));
// console.log(car.concat(ismlar));
// ismlar.splice(0, 1, "MuhammadAli", "MahmudAli");
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
console.log(ortacha_Qiymat);
let ortacha2 = 0, count = 0;
for(let i = 0; i < massiv.length; i++){
    if(ortacha_Qiymat > massiv[i]){
        ortacha2 += massiv[i];
        count++;
        console.log(massiv[i], " ",count);
    }
}

console.log(ortacha2 / count);
















