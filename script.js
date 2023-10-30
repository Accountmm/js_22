let array = []
for (let i = 0; i < Infinity; i++) {
  let commandWindow = prompt("type a comand like (add,) (del,) (stop)")
  let sliced = commandWindow.split(",")
  if (sliced[0] == "add") {
    array.unshift(sliced[1])
  } else if (sliced[0] == "del") {
    for (let q = 0; q < array.length; q++) {
      if (array[q] == sliced[1]) {
        array.splice(q, 1)
      }
    }
  } else if (sliced[0] == "stop" || sliced[0] == "Stop" || sliced[0] == "STOP") {
    break
  }
}
console.log(array);
// let array = []

// let add = "add"
// let del = "del"
// let box

// // let com = +prompt("Type a command !!")

// com = array
// while (com !== "stop" && com !== "Stop") {
//   com = +prompt ("Type a command!")
//   if (com == `${add}, ${com}`) {
//     array[index].shift(com)
//   } else if (com == `${del}, ${com}`) {
//     array[index].unshift(com)
//   } else if (com == "stop" || com == "stop") {
//     console.log(array[index]);
//     break
//   }
// }
// console.log(array[index]);


// let array = []
// while () {

// }




// array = []
// let command = 'stop';
// let a = prompt("komanda kiriting ");
// let arr = a.split('dell' || 'add')

// while (a !== command) {
//   a = prompt('Enter th command!!');
//   if (a == "add") {
//     a.push(array);
//   }
//   else if (a == "dell") {
//     a.pop(array)
//   }

// }

// console.log(array);

// let massiv = [];
// for (let i = 0; i < Infinity; i++) {
//   let mmm = prompt("Type a command !!");
//   let q = mmm.split(",");
//   if (q[0] == "add") {
//     massiv.push(q[1]);
//   } else if (q[0] == "del") {
//     for (let w = 0; w < massiv.length; w++) {
//       if (massiv[w] == q[1]) {
//         massiv.splice(w, 1);
//       }
//     }
//   } else if (q[0] == "stop" || q[0] == "Stop" || q[0] == "STOP") {
//     break
//   }
// }
// console.log(massiv);
