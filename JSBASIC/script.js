//decision making
//var age=18;
//if (age<18){
  //  console.log("minor");
//}else if(age>=18){
  //  console.log("major");
//}

//con?true:false
//age>=18?console.log("major"):console.log("major");

//function
/*
function malavika(firstName,Lastame){
console.log('firstName','Lastname');
}
malavika('manju','rao');
//array
var names=['malavikadn','suman','roopa'];
console.log(names[2]);
console.log(names.length);
names.push("manjushri");
names.unshift("nikitha");
names.pop();
console.log(names);
*/
//challenge2
/*
var tips;
function calci(amount){
    if(amount<50){
        tips=0.2*amount;
        return tips;
    }
    else if(amount>50 && amount<200){
        tips=0.15*amount;
        return tips;
    }
    else if(amount>200){
        tips=0.1*amount;
        return tips;
    }
}
var bill=[calci(124),calci(48),calci(268)];
console.log('Bill='+bill);
var final_amount=[bill[0]+124,bill[1]+48,bill[2]+268];
console.log('Final amount='+final_amount);
/*
//object
/*
var myDetails={
firstName:'malavika',
Lastame:'dn',
doB: 1998,
family:['malavika','nikitha'],
calcAge: function(birthYear){
    return 2019-birthYear;
}
};
 console.log(myDetails.firstName);
 var z='doB';
 console.log(myDetails[z]);
 myDetails.doB=1999;
 console.log(myDetails);
//new object
var shiva=new Object();
shiva.firstName='manju';
console.log(shiva);
//
console.log('malavika is '+myDetails.calcAge(1998)+'year old');*/

//dom manupulation
//onmouseover
/*document.getElementById('btn').OnMouseOver=changeOnMouseOver;
function changeOnMouseOver() {
    var btn = document.getElementById('btn');
    but.style.background="red";
*/
var but =document.getElementById('btn');
but.addEventListener('mouseover',changeOnMouseOver);
but.addEventListener('mouseout',changeOnMouseOut);
function changeOnMouseOver() {
    this.style.background="red";

}function changeOnMouseOut() {
    this.style.background="blue";
    
}
