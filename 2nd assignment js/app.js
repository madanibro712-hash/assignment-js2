//  //  Array question answers solve 

// var studentname =[];
// var studentname= xyx ()
// var fruits = ["Apple", "Mango", "Banana"];
//  var numbers = [10, 20, 30, 40];
// var booleanarray = [true,false]
// var mixedArray =[true,25,"madani",false]
// var qualification =["SSC","HSC","BS","BCOM" ,"MS","PHD" ,"M"];

// document.write("<h2>qulifications</h2> <br> SSC <br>HSC <br>BS<br>BCOM<br>PHD<br>")

// var student1 = ["Michael", "marks", 320, "percentage" , "64%"]; var student2 =[320,230,480] ; student3 =["64%","46%","96%"] ;

// alert( student1 + "\n " + student2 + "\n " + student3);


var colors=["green", " " ,"purple"," ","White"];
var newcolor =prompt("which color add the starting")
var new2color= prompt("Which color add the last");

colors.unshift(newcolor);
colors.push(new2color)

console.log(colors); 

// 2 colors added

colors.unshift("color1","color2")
console.log(colors)

 // 1st color deleted
colors.shift()
console.log(colors)

// last color deleted
colors.pop()
console.log(colors)




var colors = ["Red", "Green", "Blue", "White"];

var indexAdd = prompt("Enter the INDEX where you want to add a color:");
var colorName = prompt("Enter the COLOR name to add:");

colors.splice(indexAdd, 0, colorName);

console.log(colors);




var colors = ["Red", "Green", "Blue", "White", "Black", "Yellow"];

console.log("Shuru ka:", colors);

var index = +prompt("Index number?");
var count = +prompt("Kitne colors delete?");

console.log("Delete huye:", colors.splice(index, count));

// answer:10

var scores = [320, 230, 480, 120];

console.log("Scores of Students:", scores);

// Ascending order me sort karna
scores.sort(function(a, b) { return a - b;});

console.log("Ordered Scores of Students:", scores);

// answer;11
var cities=["karachi","lahore","hyderabad","peshawar"];

var selectedcities= cities.slice(2,4);

console.log(selectedcities)
