// function test1() {
//     let a = 10;
//     if (a > 5) {
//     a = 7;
//     }
//     console.log("a = " + a);
//     }
//     test1();

// function test2A() {
// if (1 == 1) {
// var a = 5;
// }
// console.log("a = " + a);
// }

// test2A();

// "use strict";
// let a = 4;

// function test3() {
// a = 3;
// console.log("a = " + a);
// }
// test3();

// console.log("a = " + a);

// console.log("a = " + a);
// "use strict";
// let a = 4;
// function test5() {
// a = 7;
// function again() {
// let a = 8;
// console.log("a = " + a);
// }
// again();
// console.log("a = " + a);
// }
// test5();
// console.log("a = " + a);

// "use strict";
// let a = 4;

// function test5() {
// a = 7;

// function again() {
// let a = 8;
// console.log("a = " + a);
// }

// again();

// console.log("a = " + a);
// }

// test5();

// const str = 'hello'

// ["H", 'e', "l", "o", "o"]

// "str" 'str' ``
//   0,     1,   2    3  4

// let str = "Brenda Kaye";

// console.log(str.indexOf("Brenda"))

// function parseAndDisplayName (name) {
//     name  = name.split(" ")

//     console.log(name[0])

// }

// // [ 'Brenda', 'Kaye' ]
// //     0         1

// // "hello"

// parseAndDisplayName("Brenda Kaye");
// parseAndDisplayName("Ian Auston");
// parseAndDisplayName("Siddalee Grace");
// parseAndDisplayName("Cher");
// parseAndDisplayName("Brenda Kaye");
// parseAndDisplayName("Dana Lynn Wyatt");

// "use strict";
// let fullName = "Mark Westley";

// let firstLetter = fullName[9];
// console.log(firstLetter);



function parseAndDisplayName(name) {
    'Brenda   Kaye'
  let positionOfTheSpace = name.indexOf(' '); // 6

  let firstName = name.substring(0, positionOfTheSpace); // Brenda
  let lastName = name.substring(6) // Kaye

  console.log("First Name: " + firstName);
  console.log("Last Name: " + lastName);

}

parseAndDisplayName('Brenda Kaye');


function getSupplier(code){
    const index  = code.indexOf(':');
    const previousCharacters = code.substring(0, index)

    console.log(previousCharacters);
}

getSupplier('ACME:123-L')


// function getSupplier(code)
// // that returns all characters before the :
// function getProductNumber(code)
// // that returns all characters between the : and -
// function getSize(code)
// // that returns all characters after the -
