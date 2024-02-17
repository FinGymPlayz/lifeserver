function hackedStart() {
    document.getElementById('musicplayer').play();
    var containers = document.getElementsByClassName("container");
    var name = document.getElementsByClassName("name");
    if (containers.length > 0) { // Check if at least one element was found
        containers[0].classList.add("fadeout"); // Add the class to the first element in the collection
    }
    if (name.length > 0) { // Check if at least one element was found
        name[0].classList.add("fadeout"); // Add the class to the first element in the collection
    }
    setTimeout(() => {
        
    var bg = document.getElementsByClassName("bg");
    if (bg.length > 0) { // Check if at least one element was found
        bg[0].classList.add("fadein"); // Add the class to the first element in the collection
    }
}, 2000);
    setTimeout(() => {
        document.getElementById("1").innerHTML = "IP: 4.245.23.234"
        setTimeout(() => {
        document.getElementById("2").innerHTML = "Name: "+document.getElementById("nme").value;
        setTimeout(() => {
        document.getElementById("3").innerHTML = "Age: "+document.getElementById("ag").value;
        setTimeout(() => {
        document.getElementById("4").innerHTML = "Bank Details: "+document.getElementById("bank").value+" 6195 0371 5702";
        setTimeout(() => {
        document.getElementById("5").innerHTML = "Last Spend: 1000 Robux";
        setTimeout(() => {
        document.getElementById("1").innerHTML = "Best Person: Fin *obviously*";
        document.getElementById("2").innerHTML = "";
        document.getElementById("3").innerHTML = "";
        document.getElementById("4").innerHTML = "";
        document.getElementById("5").innerHTML = "";
        setTimeout(() => {
        document.getElementById("2").innerHTML = "Pay us";
        setTimeout(() => {
        document.getElementById("3").innerHTML = "Over Crypto";
        setTimeout(() => {
        document.getElementById("4").innerHTML = "Or else";
        setTimeout(() => {
        document.getElementById("5").innerHTML = "BTC: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa";
        setTimeout(() => {
        var ara = document.getElementsByClassName("area");
        if (ara.length > 0) { 
            ara[0].classList.add("imageOpac"); 
        }
        }, 500);
        }, 500);
        }, 500);
        }, 500);
        }, 500);
        }, 500);
        }, 500);
        }, 500);
        }, 500);
        }, 500);
    }, 3800);
    
}