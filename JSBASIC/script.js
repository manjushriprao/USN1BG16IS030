document.getElementById('btn').onmouseover = changeOnMouseOver;
document.getElementById('btn').onmouseout = changeOnMouseOut;

function changeOnMouseOver(){
var but=document.getElementById('btn');
but.style.background="red";
}
function changeOnMouseOut(){
    var but=document.getElementById('btn');
    but.style.background="blue";
    }