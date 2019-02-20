 var _ = require('lodash');

 var arr=[1,2,3,4,5];
 console.log('answer:', _.without(arr,3));

var x=document.getElementById("color1");
var y=document.getElementById("color2");
var css=document.querySelector("h3");
var body=document.querySelector("#gradient");

function paint(){
    document.body.style.background=
    "linear-gradient(to right,"
    +x.value
    +","
    +y.value
    +")";

    css.innerHTML=body.style.background;
}

 x.addEventListener("input",paint);
 y.addEventListener("input",paint);

// //filter Map reduce
// array=[1,3,6,16];
// const mapArr=array.filter(num=> num>4);
// const mapArr=array.map(num=> num*2);
// //accumulator to iterator mozemy podać na koncu od jakiej liczby ma sie zaczyanc
// const mapArr=array.reduce((accumulator,num)=> {
//     return accumulator+ num;
// },5);
// const evArr=array.every(num=>num>18) sprawdza czy wszystkie >18 false
// .some() sprawdza czy cos spelnia warunek (true)
// .find() zwraca pierwsza spelniajaca warunek (liczba)
// .findIndexOf() zwraca index znalezionej





 
