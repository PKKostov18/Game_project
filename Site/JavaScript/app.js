console.log("The js file is working");

window.onscroll = function() {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

var items = 0;

function clearCart() {
  console.log("test")
  items=0;
  cart.innerHTML=` ${items} items in cart`;
}

function buy() {
    items++;
    cart.innerHTML=` ${items} items in cart`;
    console.log(items);
}

