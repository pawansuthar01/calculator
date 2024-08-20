let display = document.getElementById("display");
let display2 = document.getElementById("display2");
let currvalue = "";
let block = true;
let count = 0;
display.value = "";
display2.value = "";

function appendnum(number) {
  currvalue += number;
  display.innerText = currvalue;
  block = true;
  count = 1;
}

function appendop(op) {
  if (block && currvalue !== "") {
    block = false;
    count = 0;
    currvalue += "" + op + "";
    display.innerText = currvalue;
  }
}
function calculator() {
  if (count !== 0) {
    try {
      let result = eval(currvalue);
      display2.innerText = result;
      display.classList.add("active");
      display2.classList.remove("hidden");
    } catch (error) {
      display2.innerText = error;
      display.classList.add("active");
      display2.classList.remove("hidden");
    }
  } else {
    if (currvalue != 0) {
      try {
        let arr = display.innerText;
        let newotal = arr.substring(0, arr.length - 1);
        display2.innerText = eval(newotal);
        display.classList.add("active");
        display2.classList.remove("hidden");
      } catch (error) {
        display2.innerText = error;
      }
    }
  }
}
function cler() {
  let newc = currvalue.substring(0, currvalue.length - 1);
  display.innerText = newc;
  currvalue = newc;
  count = 0;
}
function clerall() {
  display.innerText = "";
  currvalue = "";
  display.classList.remove("active");
  display2.classList.add("hidden");
  display2.innerText = "";
  count = 0;
}
