// // console.log("Hello");
// // function declaretion
// oqish();
// function oqish(){
//     console.log("O'qi");
// }
// // function expression
// // yozish(); //error
// let yozish = function(){
//     console.log("Yozish => yozish2");
    
// }
// let yozish2 = yozish;
// yozish2();
// let name = "Abrorbek"; //global
// let ism = "Muhammadali"; // global
function salomlashish(firstName, lastName){
    let ism = "Shohruh"; //local
    console.log("Assalomu Aleykum " + name +" "+ ism);
}
// salomlashish(name);
// salomlashish(ism, familiya); //error
// let name2 = "Bahodir"
// salomlashish(name2)

// function greet(firstName, lastName){
//     console.log("Assalomu Aleykum " + firstName +" "+ lastName);
// }
//  ism = "Oybek";
// let familiya = "Alloyorov"
// greet(ism,familiya);


function yigindi(son1, son2){
    return son1 + son2;
    
}

let ss = yigindi(45,63);
// console.log(ss);

// console.log( yigindi(12,6));
// console.log( yigindi(15,6));
// console.log( yigindi(122,6));
// console.log( yigindi(182,586));


// let a=5,b=6;
// function katta(x,y){
//     if(x > y){
//         console.log("katta ", x);
            // console.log("kichik ", y);
//     }else{
//           console.log("katta ", y);
            // console.log("kichik ", x);
//     }
// }
// katta(8,2);
// daraja(8,3);
// minimum(x1,x2)

// let a = 10;
// let b = a;
// a = 20;
// console.log(a, b);

// let x = {kalit: 5}
// let y = x;
// x.kalit = 15;
// console.log(x,y);

// Objects
// let name = "Akmalbek";
// let lastName = "Qurbonov";
// let age = 25;

const person = {
    name: "Shohruh",
    lastname: "Husainov",
    age: 16,
    fulName: function(){ // metod
        console.log(this.name,this.lastname);
        
    }
} 
// for(let key in person){
//     console.log(person[key]);
// }
// person.fulName();
// person.name = "Abrorbek";
// person["lastname"] = "Hakimov";
// console.log(person.name, person.lastname,person.age); 
// console.log(person["name"], person["lastname"],person["age"]);


// let result = Object.keys(person)
// console.log(result);


// person.fullName();



// person.name = "Muhammadali";
// person["age"] = 18;

// // console.log(person.name, person.lastname, person.age);
// // console.log(person["name"], person["lastname"], person["age"]);
// console.log(person.age);


// console.log(name, age);

let cars = {
    car1: "Mercedes",
    car2: "BMW",
    car3: "DAMAS",
    car4: "TICO",
    GM:  {
        car5: "Lasetti",
        car6: "Cobalt"
    }
}
// console.log(cars.GM.car6);

let myMethods = {
    carNames: function(obj) {
        return Object.values(obj)
    }
}

// console.log(myMethods.carNames(cars));
// console.log(myMethods.carNames(person));

const Tortburchak = {
    perimetr: function(a, b) {
        return `Tortburchakning perimetri ${2 * (a + b)}`;
    },

    yuza: function(a,b) {
        return `Tortburchakning yuzasi ${a * b}`;
    }
}

// let perimetr = Tortburchak.perimetr(4,5)
// let yuza = Tortburchak.yuza(4,5)
// console.log(perimetr, yuza); 
// console.log(Tortburchak.perimetr(8,6)); 
// &&
/* console.log(Tortburchak.perimetr(4,5)); */


// let Kutubxona = {

//     kitobQosh: function(...kitoblar) {
//         let kutubxona = [];
//         for (const element of kitoblar) {
//             kutubxona.push(element)
//         }

//         return [kutubxona, `Kitoblar soni ${kutubxona.length}`];
//     }
// }

// let kitobQoshish = Kutubxona.kitobQosh("Kamasutra", "JavaScript", "Raqamli Qala")
// console.log(kitobQoshish);

// vazifa
// aylana
// Doira
// kub sigimini topish
// uchburchak
// va boshqa kopburchallarga doir metodlar yaratib ulardan foydalaning

// Takrorlash 2.41 1.92 2.41 7.91 masala 42
let a=2.41,b=1.92,c=2.41,d=7.91;
function funksiya(a,b,c,d){
    if((a <= b)&&(b <= c)&&(c <= d)){
        a=d;
        b=d;
        c=d;
        return d;
    }else {
        let minimum = Math.min(a,b,c,d);
        b=minimum;
        c=minimum; 
        d=minimum;
        a=minimum;
        return minimum;
    }
    
}
let result = funksiya(a,b,c,d);
// console.log(result);
// masala 47
// let x=0.03,y;
// if(x <= 1){
//     y = -x;
// }else if(x > 1 && x <= 2){
//     y = 1;
// }else{
//     y = //x= 2 y = 1
//         //x= 3 y= -1
// }

// masala 38 0.54 0.09 1.64 || 1.29 1.5 0.16
let x1=1.29, x2=1.5, x3=0.16;
if(x1<=3 && x1 >= 1){
    console.log(x1);
}
if(x2<=3 && x2 >= 1){
    console.log(x2);
}
if(x3<=3 && x3 >= 1){
    console.log(x3);
}






