function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var ibtn1 = document.getElementById("ibtn1");
var val1 = 0;
var pbtn1 = document.getElementById("pbtn1");
function max1() {
    val1 += 1;
    ibtn1.innerHTML = val1;
    if (val1 >= 0) {
        pbtn1.innerHTML = ""
    }
}
function min1() {
    if (val1 <= 0) {
        pbtn1.innerHTML = "You Cannot select below 0!";
        sleep(1500).then(() => { pbtn1.innerHTML = ""; });
    } else {
        val1 -= 1;
        ibtn1.innerHTML = val1;
        pbtn1.innerHTML = "";
    }
}


var ibtn2 = document.getElementById("ibtn2");
var val2 = 0;
var pbtn2 = document.getElementById("pbtn2");
function max2() {
    val2 += 1;
    ibtn2.innerHTML = val2;
    if (val2 > 0) {
        pbtn2.innerHTML = ""
    }
}
function min2() {
    if (val2 <= 0) {
        pbtn2.innerHTML = "You Cannot select below 0!";
        sleep(1500).then(() => { pbtn2.innerHTML = ""; });
    } else {
        val2 -= 1;
        ibtn2.innerHTML = val2;
        pbtn2.innerHTML = "";
    }
}


var ibtn3 = document.getElementById("ibtn3");
var val3 = 0;
var pbtn3 = document.getElementById("pbtn3");
function max3() {
    val3 += 1;
    ibtn3.innerHTML = val3;
    if (val3 > 0) {
        pbtn3.innerHTML = ""
    }
}
function min3() {
    if (val3 <= 0) {
        pbtn3.innerHTML = "You Cannot select below 0!";
        sleep(1500).then(() => { pbtn3.innerHTML = ""; });
    } else {
        val3 -= 1;
        ibtn3.innerHTML = val3;
        pbtn3.innerHTML = "";
    }
}

//-----------------
function checkout(){
    document.getElementById("afterOrder").style="display:flex";
    document.getElementById("check").style="display:none";
}
function can(){
    document.getElementById("afterOrder").style="display:none";
    document.getElementById("check").style="display:flex";
}
function placeOrder(){
    alert("Your order has been placed!");
}
// --------------------------------

// window.addEventListener("scroll",function(){
//     var header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY>0);
// })

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