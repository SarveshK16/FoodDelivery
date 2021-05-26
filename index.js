function placeOrder() {
    document.getElementById("order summary").style="display:contents";
    var name = document.getElementById("txtName").value;
    var mobile = document.getElementById("txtMobile").value;
    var burger = document.getElementById("optburger");
    var roller = document.getElementById("optRoller");
    var fries = document.getElementById("optfries");
    var mcost = 0;
    var acost = 0;
    var mname = "";
    var aname = "";
    if(burger.checked==true && roller.checked==true){
        mcost = 220;
        mname = burger.value + " & " +  roller.value;
    }
    else if (burger.checked==true) {
        mcost = 120;
        mname = burger.value;
    }
    else if (roller.checked==true) {
        mcost = 100;
        mname = roller.value;
    }
    else{
        mname = "Please choose valid options!";
    }
  
    if (fries.checked==true) {
        acost = 60;
        mcost += acost;
        aname += fries.value;
    }
    console.log(mname);
    console.log(aname);
    console.log(mcost);
    // console.log(mobile);
    document.getElementById("lblName").innerHTML = name;
    document.getElementById("lblMobile").innerHTML = mobile;
    document.getElementById("lblMeal").innerHTML = mname;
    document.getElementById("lblAdd").innerHTML = aname;
    document.getElementById("lblAmount").innerHTML = mcost;
}