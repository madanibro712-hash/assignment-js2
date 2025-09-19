// var str = prompt ("entr the username")
// var name_charac = str.length;



// for (var i = 0; i < name_charac; i++) {
//     if (str.charAt(i) === "!",str.charAt(i) === "@",str.charAt(i) === "," ) {
//         alert("prevent this page from creating additional dialoge ");
//         break;
//     }
// }

// var a=["cake","cookie", "applepie","chips","patties"]
// var confirmation_order = prompt("Welcome sir to ABC bakery whats your order?")

// var indexNum = a.indexOf(confirmation_order)

// if(indexNum !==  -1) {
//     document.write(confirmation_order," " , "is available" , "for index", indexNum," ", "in our bakery" )
    
// }else {
//     document.write("sorry", confirmation_order," " ,"this not available" )
// }

// // password input
// var pwd = prompt("Enter your password:");

// if (!pwd) {
//   document.write("Please enter a password.");
// }
// else if (pwd.length < 6) {
//   document.write("This is not valid password: must be at least 6 characters.");
// }
// else if (/^\d/.test(pwd)) {
//   document.write("This is not valid password: must not start with a number.");
// }
// else {
//   document.write("Valid password ");
// }

// document.write("<br>")

// var university = "university of karachi";

// for (var i =0; i < university.length; i++) {
//     document.write(university [i] + "<br>");
// };

// var select_ountry = prompt("Select country");

// var copycontry = select_ountry.slice(0);

// var lastindex = select_ountry.length-1;

// document.write("Last character of" +" "+ select_ountry[lastindex]);


// var ab = ["the quik  brown for jumps over the lazy dog"]


// let text = "The quick brown fox jumps over the lazy dog";


// let words = text.toLowerCase().split(" ");

// // "the" ka count nikalenge
// let count = 0;
// for (let i = 0; i < words.length; i++) {
//   if (words[i] === "the") {
//     count++;
//   }
// }

// console.log("Text:", text);
// console.log("There are " + count + " occurrence(s) of word 'the'");
// var num_ = Math.random() * 4500;


// document.write("number :"," ", num_ , "<br>")

// // round num

// var num = 3.3;

// var roundednum =Math.round(num);
// document.write("rounded num :" , roundednum, "<br>");

// var floornum =Math.floor(num);
// document.write("floor num :" , floornum, "<br>");

// var ceilnum =Math.ceil(num);
// document.write("ceil num :" , ceilnum, "<br>");


// // negative

// var num_ = Math.random() *- 2900;


// document.write("number :"," ", num_ , "<br>")

// var num = -3.3;

// var roundednum =Math.round(num);
// document.write("rounded num :" , roundednum, "<br>");

// var floornum =Math.floor(num);
// document.write("floor num :" , floornum, "<br>");

// var ceilnum =Math.ceil(num);
// document.write("ceil num :" , ceilnum, "<br>");


// var dice = Math.floor(Math.random() *6 ) +1;
// document.write("Dice value",dice,"<br>");

// let xyz = Math.floor(Math.random() * 100 +1);
// document.write("Random number between 1 and 100 " ," :", xyz);

// var userprompt = prompt("EntEr your Weight");

// var weight = parseFloat(userprompt);

// console.log("yor weight is "," ",weight,"kilogram")

var num5 = prompt("Enter number between 1 to 10 (Only)");

if (num5 >= 1 && num5 <= 10) {
    for (var o = 1; o <= 10; o++) {
        if (o == num5) {
            document.write("Ok correct, your number is " + num5);
            break;
        }
    }
} else {
    console.log("Wrong number! please enter 1 - 10 between digit");
}








