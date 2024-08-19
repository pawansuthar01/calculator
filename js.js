let display = document.getElementById("display");
let display2 = document.getElementById("display2");
let currvalue = "";
let block = true;
let count = 0;
display.value = "";
display2.value = "";

function appendnum(number) {
  currvalue += number;
  display.value = currvalue;
  block = true;
  count = 1;
}

function appendop(op) {
  if (block && currvalue !== "") {
    block = false;
    count = 0;
    currvalue += "" + op + "";
    display.value = currvalue;
  }
}
function calculator() {
  if (count !== 0) {
    try {
      let result = eval(currvalue);
      display2.value = result;
    } catch (error) {
      display2.value = error;
    }
  } else {
    if (currvalue != 0) {
      try {
        let arr = display.value;
        let newotal = arr.substring(0, arr.length - 1);
        display2.value = eval(newotal);
      } catch (error) {
        display2.value = error;
      }
    }
  }
}
function cler() {
  let newc = currvalue.substring(0, currvalue.length - 1);
  display.value = newc;
  currvalue = newc;
  count = 0;
}
function clerall() {
  display.value = "";
  currvalue = "";
  display2.value = "";
  count = 0;
}
