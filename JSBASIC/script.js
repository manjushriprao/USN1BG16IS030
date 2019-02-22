/*
var age=18;
if(age<18){
    console.log("minor");

}else if(age>18){
console.log("major");
}

//con?true:false
age>=18?console.log("major"): console.log("minor");
*/
//function
/*
function manjushri(firstName,Lastname){
    console.log(firstName+' '+Lastname);
}
manjushri('deepti','agarwal');

//array

var names=['manjushri','nikitha','malavika'];
console.log(name[2]);
console.log(name.length);

names.push("Shrihaan");
names.unshift("rajesh");
names.pop();
console.log(names);
*/


//challenge 2


var tip;
function calculator(amount){
    if(amount<50){
        tip=0.2*amount;
        return tip;
    }
    else if(amount>50 && amount<200){
        tip=0.15*amount;
        return tip;
    }
    else if(amount>200){
        tip=0.1*amount;
        return tip;
    }
}
var bill=[calculator(124),calculator(48),calculator(268)];
console.log('Bill='+bill);
var final_amount=[bill[0]+124,bill[1]+48,bill[2]+268];
console.log('Final amount='+final_amount);





//object

/*
var myDetails={
    firstName:'manjushri p',
    lastName:'rao',
    doB:1997,
    family:['manjushri','malavika'],
    calcAge:function(birthYear){
        return 2019-birthYear;

    }
};
console.log(myDetails.firstName);
var z='doB';
console.log(myDetails[z]);

myDetails.doB=1998;
console.log(myDetails);
*/

//new object

/*
var shiva=new Object();
shiva.firstName='deepti';
console.log(shiva);
//
console.log('manjushri is '+myDetails.calcAge(1997)+' years old');
*/