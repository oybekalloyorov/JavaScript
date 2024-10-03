// let name = "Akmalbek"; //String
// let age = 16; // Number
// let isMerried = false; // boolean
// let firstName; //undefined

// let lastName = null; //null

// let sum = 27;
// let yigindi = 89, kopaytma = "Hello", bolinma;

// let a = 'Salom';
// let A = 45;
// sum = "Assalom";
// console.log(sum);

// const pi = 3.14;

// console.log(pi); 

// console.log( + )
// console.log( - )
// console.log( / )
// console.log( * )
// console.log( % )
// console.log( ** )

let a = 4;
let b = 2;
let sum = 68;

 sum = a + b;

// console.log(sum);

a = 45



// console.log(a--);
// console.log(a);
 
// ------------------------------------------------------------------------------
// console.log("Salom");
// + - * / % **
// = += -= *= 

// let son1 = 1 // number
// let son = "1"; //String
// console.log(son === son1);
// >
// < 
// >=
// <=
// ==
// ===
// !=

// &&, ||,  !

// console.log(true && true && true);

// let date = new Date();

// let bosh_soat = date.getHours();
// let tug_soat = date.getMinutes();
// let sekund = date.getSeconds();
// // let oqishVaqti = bosh_soat >= 15 && tug_soat <= 18;
// console.log(bosh_soat + " " + tug_soat + " " +sekund);
//  let x = 10;
let y = 5;
//  console.log(x > y);

//  Agar x = 5 bolsa 
// let x = "5";
// console.log(x !== 5 );
// console.log("2" == "12");


// let a = "Akmalbek";
// let b = null;
// let c = undefined;
// let d;
// let e;
// let f = a || b || c || d || e;
// console.log(f);

// console.log(Math.abs(-25)); // Sonning moduli
// console.log(Math.acos(0.5));
// console.log(Math.E); // Exponenta
// console.log(Math.PI);
// console.log(Math.LN10); 
// console.log(Math.sqrt(100));
// console.log(Math.floor(5.999999));
// console.log(Math.ceil(7.1));
// console.log(Math.log(10));
// console.log(Math.max(2, 8, 10, 5));
// console.log(Math.min(2, 8, 10, 5,1));

// Shart Operatori

// let a = 78;
// let b = 55;
// if(a % 2 == 0 || b % 2 == 0){
//     a = "Juft son";
// }else{
//     a = "toq son";
// }
// console.log(a);
// Vazifa
// Agar berilgan son musbat bolsa uni 7 ga oshirilsin, 
// son manfiy bolsa 9 ga kamaytirilsin
// let son = -46;
// if (son > 0){
//     son += 7;
// }else{
//     son -= -9;
// }
// console.log(son);

// Uchta son berilgan , Shu sonlarning yig'indisi eng katta boladigan 
// ikkitasini ekranga chiqaring

// let son1 = 8, son2 = 16, son3 = 9;

// if((son1 + son2 > son1 + son3) && (son2 + son3 < son1 + son2)){
//     console.log(son1 + ", " + son2);
// }else {
//     if((son1 + son3 > son2 + son1) && (son1 + son3 > son2 + son3)){
//         console.log(son1 + ", " + son3);
//     }else{
//         if((son2 + son3 > son2 + son1) && (son2 + son3 > son1 + son3)){
//             console.log(son2 + ", " + son3);
//         }
//     }
// }
let randomson = Math.floor(Math.random() * 1000);
// console.log(randomson);

// 1 - 999 gacha sonlar berilgan. Shu oraliqdan bittasini olib, uni juft
// yoki toq va Bir, ikki, uch xonali ekanligini ekranga chiqaring?
// let a = 24;
// let b = 67;
// console.log((a==b) ? "Ha" : "yoq");//ternry operatori

function summ(son1, son2,son3){
    return son1 + son2 + son3; 
}

// console.log(summ(12,45,78));
// console.log(summ(1,69,85));
// console.log(summ(12,13,78));
// console.log(summ(1000,83,78));
// console.log(summ(12,1264,123));

// vazifa
// 1-100 Kiritilgan sonlarni matn holatiga o'tkazuvchi dastur 

// dars 4


// let ixtiyoriySon = 251;
// let satr = "";
// let yuzlik = Math.floor(ixtiyoriySon / 100);
// let onlik = ixtiyoriySon % 100;
// if (ixtiyoriySon >=200 && ixtiyoriySon < 300){
//     satr += "ikki yuz "
// }
// if (ixtiyoriySon >=100 && ixtiyoriySon < 200){
//     satr += "yuz "
// }
// if (ixtiyoriySon > 100){
//     ixtiyoriySon = onlik;

// }
// if (ixtiyoriySon >=90 && ixtiyoriySon < 100){
//     satr += "toqson "
// }
// if (ixtiyoriySon >=80 && ixtiyoriySon < 90){
//     satr += "sakson "
// }
// if (ixtiyoriySon >=70 && ixtiyoriySon < 80){
//     satr += "yetmish "
// }
// if (ixtiyoriySon >=60 && ixtiyoriySon < 70){
//     satr += "oltmish "
// }
// if (ixtiyoriySon >=50 && ixtiyoriySon < 60){
//     satr += "ellik "
// }
// if (ixtiyoriySon >=40 && ixtiyoriySon < 50){
//     satr += "qirq "
// }
// if (ixtiyoriySon >=30 && ixtiyoriySon < 40){
//     satr += "o'ttiz "
// }
// if (ixtiyoriySon >=20 && ixtiyoriySon < 30){
//     satr += "yigirma "
// }
// if (ixtiyoriySon >=10 && ixtiyoriySon < 20){
//     satr += "o'n "
// }

// if (ixtiyoriySon % 10 == 1){
//     satr += "bir";
// }else if (ixtiyoriySon % 10 == 2){
//     satr += "ikki";
// }else if (ixtiyoriySon % 10 == 3){
//     satr += "uch";
// }else if (ixtiyoriySon % 10 == 4){
//     satr += "tort";
// }else if (ixtiyoriySon % 10 == 5){
//     satr += "besh";
// }else if (ixtiyoriySon % 10 == 6){
//     satr += "olti";
// }else if (ixtiyoriySon % 10 == 7){
//     satr += "yetti";
// }else if (ixtiyoriySon % 10 == 8){
//     satr += "sakkiz";
// }else if (ixtiyoriySon % 10 == 9){
//     satr += "toqqiz";
// }

// // console.log(satr);

// // a, b va c butun sоnlar bеrilgan. Tеkshiring: a<b<c 
// // tеngsizlik bajariladimi ? agar
// //  tengsizlik bajarilsa “YES” aks xolda “NO” so’zini chiqaring.

// let a1 =2;
// let b1 = 4;
// let c1 = 2;

// if (a1 < b1 && b1 < c1){
//     console.log("Yes");
    
// }else{
//     console.log("No");
    
// }
// // O`lchami x bo`lgan kubik berilgan uni hajmini toping.
// let x = 10;
// let kubHajmi = Math.pow(x,3);//x ** 3
// // console.log(kubHajmi);

// // Radiuslari r1, r2, r3 bo’lgan 3 
// // to doira radiuslari berilgan. Doiralarni yuzlarinihisoblang.

// let r1=4,r2=8,r3=6;

// let doiraYuzi1 = r1 ** 2 * Math.PI;
// let doiraYuzi2 = r2 ** 2 * Math.PI;
// console.log("Birinchi doira yuzi: = ",doiraYuzi1);
// console.log("Ikkinchi doira yuzi: = ",doiraYuzi2);

// dars 5

// masala 16
// let x=5.41,y=6.49,c1;
// let surat = x + y;
// let maxraj = y*y + Math.abs((y*y +2) / (x + (x ** 3) / 5));
// let logorifm = Math.exp(y+2);
// c1 = surat / maxraj + logorifm;
// console.log(c1.toFixed(2));

// masala 17
// x=1.7; y=5.18;
// surat = 2 * Math.tan(x+Math.PI/6);
// maxraj = (1 / 3) + Math.pow((Math.cos(y + x * x)),2);
// let son3 = Math.log2((x * x) + 2);
// let f1 = surat / maxraj + son3;

// let x=3.15,y=0.44, surat, maxraj, son3;
// surat = 1 / (x + (2 / x ** 2) + (3 / x ** 3)) + Math.exp(x*x + 3*x);
// maxraj = Math.atan(x + y) + Math.abs(Math.pow((x+5), 2));
// son3 = Math.pow(Math.cos(y ** 2 + (x ** 2) / 2), 2);
// let f2 = surat / maxraj - son3;
// console.log( f2.toFixed(2) );
// let a = 64;
// console.log( Math.pow(a, 0.5), " <=") ;

// masala 22
// let c=2, d=3, x1=7.99,x2=0.72, surat, maxraj, son3;
// surat = Math.pow((Math.sin(Math.abs(c*(x2 ** 3) + d * (x1 ** 3) - c*d))),2);
// maxraj = Math.pow(((c*x1*x1 + d*x2*x2 +5) + 2), 0.5);
// son3 = Math.tan(x1 * x2*x2 + d ** 3);
// let F = Math.abs(surat / maxraj) + son3;
// console.log(F.toFixed(2));

//                                           Function 
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

