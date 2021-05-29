var ibtn1 = document.getElementById("ibtn1");
var val1 = 0;
function max1(){
    val1+=1;  
    console.log("val : "+val1);
    ibtn1.innerHTML = val1;
}
function min1(){
    val1-=1;
    console.log("val : "+val1);
    ibtn1.innerHTML = val1;
}
var ibtn2 = document.getElementById("ibtn2");
var val2 = 0;
function max2(){
    val2+=1;  
    console.log("val : "+val2);
    ibtn2.innerHTML = val2;
}
function min2(){
    val2-=1;
    console.log("val : "+val2);
    ibtn2.innerHTML = val2;
}
var ibtn3 = document.getElementById("ibtn3");
var val3 = 0;
function max3(){
    val3+=1;  
    console.log("val : "+val3);
    ibtn3.innerHTML = val3;
}
function min3(){
    val3-=1;
    console.log("val : "+val3);
    ibtn3.innerHTML = val3;
}




// --------------------------------

// function placeOrder() {
//     document.getElementById("order summary").style = "display:contents";
//     var name = document.getElementById("txtName").value;
//     var mobile = document.getElementById("txtMobile").value;
//     var burger = document.getElementById("optburger");
//     var roller = document.getElementById("optRoller");
//     var fries = document.getElementById("optfries");
//     var mcost = 0;
//     var acost = 0;
//     var mname = "";
//     var aname = "";
//     if (burger.checked == true && roller.checked == true) {
//         mcost = 220;
//         mname = burger.value + " & " + roller.value;
//     }
//     else if (burger.checked == true) {
//         mcost = 120;
//         mname = burger.value;
//     }
//     else if (roller.checked == true) {
//         mcost = 100;
//         mname = roller.value;
//     }
//     else {
//         mname = "Please choose valid options!";
//     }

//     if (fries.checked == true) {
//         acost = 60;
//         mcost += acost;
//         aname += fries.value;
//     }
//     console.log(mname);
//     console.log(aname);
//     console.log(mcost);
//     // console.log(mobile);
//     document.getElementById("lblName").innerHTML = name;
//     document.getElementById("lblMobile").innerHTML = mobile;
//     document.getElementById("lblMeal").innerHTML = mname;
//     document.getElementById("lblAdd").innerHTML = aname;
//     document.getElementById("lblAmount").innerHTML = mcost;
// }