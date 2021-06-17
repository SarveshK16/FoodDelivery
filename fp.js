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

var ibtn4 = document.getElementById("ibtn4");
var val4 = 0;
var pbtn4 = document.getElementById("pbtn4");
function max4() {
    val4 += 1;
    ibtn4.innerHTML = val4;
    if (val4 > 0) {
        pbtn4.innerHTML = ""
    }
}
function min4() {
    if (val4 <= 0) {
        pbtn4.innerHTML = "You Cannot select below 0!";
        sleep(1500).then(() => { pbtn4.innerHTML = ""; });
    } else {
        val4 -= 1;
        ibtn4.innerHTML = val4;
        pbtn4.innerHTML = "";
    }
}

//------------------------------

var food1 = document.getElementById("food1");
var food2 = document.getElementById("food2");
var food3 = document.getElementById("food3");
var food4 = document.getElementById("food4");
var totPrice = 0;


// ------------------------------
function checkout() {
    document.getElementById("afterOrder").style = "display:flex";
    document.getElementById("check").style = "display:none";
    var sum = val1 + val2 + val3 + val4;
    var price = document.getElementById("price");
    if (sum > 0) {
        if (val1 > 0) {
            food1.innerHTML = "Burger x " + val1;
        }
        else {
            food1.innerHTML = "";
        }
        if (val2 > 0) {
            food2.innerHTML = "Veg Roll x " + val2;
        }
        else {
            food2.innerHTML = "";
        }
        if (val3 > 0) {
            food3.innerHTML = "Large Fries x " + val3;
        }
        else {
            food3.innerHTML = "";
        }
        if (val4 > 0) {
            food4.innerHTML = "Burger x " + val4;
        }
        else {
            food4.innerHTML = "";
        }
    }
    totPrice = (val1 * 120) + (val2 * 100) + (val3 * 60) + (val4 * 40)
    price.innerHTML = totPrice;
}
function can() {
    document.getElementById("afterOrder").style = "display:none";
    document.getElementById("check").style = "display:flex";
}
function placeOrder() {
    if (totPrice <= 0) {
        alert("Please select proper food items!");
    }
    else {
        window.open("summary.html", "_self");
    }
}