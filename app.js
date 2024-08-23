let display = document.getElementById("display");
let display2 = document.getElementById("display2");

let currvalue = "";
let countnumber = 0;
let block = true;
let operter = true;
let count = 0;

display.value = "";
display2.value = "";

function appendnum(number) {
  if (countnumber !== 16) {
    countnumber++;

    currvalue += number;
    display.value = currvalue;
    block = true;
    count = 1;
  }
}

function appendop(op) {
  if (block && currvalue !== "") {
    block = false;
    countnumber = 0;
    count = 0;

    currvalue += "" + op + "";
    display.value = currvalue;
  }
}
function calculator() {
  if (count != 0) {
    try {
      let result = eval(currvalue);
      display2.value = result;

      display2.classList.remove("hidden");
    } catch (error) {
      display2.value = error;

      display2.classList.remove("hidden");
    }
  } else {
    if (currvalue != "") {
      try {
        let arr = display.value;
        let newotal = arr.substring(0, arr.length - 1);
        display2.value = eval(newotal);

        display2.classList.remove("hidden");
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

  countnumber--;
}
function clerall() {
  display.value = "";
  countnumber = 0;
  currvalue = "";

  display2.classList.add("hidden");
  display2.value = "";
  count = 0;
}
