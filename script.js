//q1.how to compare to json without order
let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };
let a = JSON.stringify(obj1);
let b = JSON.stringify(obj2);
console.log(a == b);
//--------------------------------------------------------------------------
//q2.display the all contry flag in console
console.log("question2");
var request = new XMLHttpRequest();
request.open("get", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].flags);
  }
  //q3.all contries name ,region ,sub region,papulation
  console.log("display all contries name,region,sub region,papulation");
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].region, result[i].subregion, result[i].population);
  }

  //q4
  console.log(
    "1.Declare four variables without assigning values and print them in console"
  );
  var samplename;
  var number;
  var city;
  var count;
  console.log("without assing value will be:", samplename, city, number, count);
  console.log("2.How to get value of the variable myvar as output");
  var myvar = 1;
  console.log("my var value is", myvar);
  console.log(
    "3.Declare variables to store your first name, last name, marital status, country and age in multiple lines"
  );
  let firstname = "mani";
  let lastname = "s";
  let martialstatus = "single";
  let country = "india";
  let age = 29;
  console.log(firstname, lastname, martialstatus, country);
  console.log(
    "-----4. Declare variables to store your first name, last name, marital status, country and age in a single line-"
  );
  let PersonDetail={firstname:"manimegalai",lastname:"s",age:"29",martialstatus:"single"}
  console.log("5.Declare variables and assign string, boolean, undefined and null data types")
  console.log(PersonDetail);
  let detail="i am 25 years old"
  let person2="you are 30 years old"
  console.log(detail)
  console.log(person2)

  console.log("6.convert string into number parseint,number,unary operator")
var StringtoNumber="2034";
console.log(parseInt(StringtoNumber))
console.log(Number(StringtoNumber))
console.log(+StringtoNumber)

/* */

};
