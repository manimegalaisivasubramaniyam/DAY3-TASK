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

/* 7. Write 6 statement which provide truthy & falsey values.
let  x=1;
let y='1'
let z=[1];
truely statement
x==y(1=='1')-true
y=z('1'==[1])-true
z=x([1]==1)-true
x==y(1==='1')-false
y=z('1'===[1])-false
z=x([1]===1)-false

*/

console.log("task 2 Task 2: Simple Programs todo for Operators")

//Square of a number
let number_one=20;
let number_two=10
let number_three=34;
let number_four=89;
let number_five=100;
let temp;
console.log("square of number",number_one*number_one);
temp=number_one;
number_one=number_two;
number_two=temp;
console.log("swapped number",number_one,number_two)
console.log("addding of 3 numbers",number_one+number_two+number_three)
let celsious=80
let fahrenheit=0;
fahrenheit = (celsious * (9 / 5)) + 32;
console.log("celsious to fahrenheit",fahrenheit );
let meter=200;
console.log("meter to miles",meter*0.00062137)
let pounds=20000;
console.log("pounds to kilograms",pounds/2.2046)
console.log("average of 5 testscore is",(number_one+number_two+number_three+number_four+number_five)/5)
console.log("2 power of 3 is",2**3)
let p=1000;
let time=5;
let rateofinterest=9;
console.log("simple interest ",(p*time*rateofinterest)/100)
console.log ("area of equalteral traingle",(1.73*number_one*number_one)/4)
var area = 1/2*number_one*number_two
console.log("Area Of Isosceles Triangle",area)
var radious=20;
console.log("Volume Of Sphere", 4/3*3.14159*radious**3)
console.log("volume of prism base *height",number_one*number_two)

console.log("area of traingle",1/2*number_one*number_three)
let salesPrice=2000;
let actualPrice=2500;
console.log("discount price",actualPrice-salesPrice);
console.log("diamater of circle",2*radious,"Circumference of a Circle",2*3.141*radious,"area of circle is",3.141*radious**2)
console.log("all airthmrtic operation")
console.log("sum of numbers",number_one+number_two)
console.log("subraction of numbers",number_one-number_two)
console.log("multify of numbers",number_one*number_two)
console.log("div of numbers",number_one/number_two)
console.log("modulo of numbers",number_one%number_two)
var symbol="*****"
console.log(symbol,"\n",symbol,"\n",symbol,"\n",symbol,"\n",symbol);
console.log("electricity bill per unit 10rs,bill of month",(100*24*30)/1000*10)
let m1=8.9;let m2=8.9;let m3=9.0;let m4=9.8;let m5=9.6;
console.log("CGPA ",(m1+m2+m3+m4+m5)/5.0)




};
