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
let name = "Abrorbek"; //global
let ism = "Muhammadali"; // global
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


let a=5,b=6;
function katta(x,y){
    if(x > y){
        console.log("katta ", x);
    }else{
        console.log("kichik ", y);
    }
}
katta(8,2);
daraja(8,3);
minimum(x1,x2)