"use strict";

function recursiva(num) {

  if (num === 0) {
    console.log("Par.");
  } else if (num === 1) {
    console.log("Impar.")
  } else {
    recursiva(num-2);
  }
}

recursiva(23);