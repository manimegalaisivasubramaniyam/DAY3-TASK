//q1.how to compare to json without order
let obj1={name:"person1",age:5}
let obj2={age:5,name:"person1"}
let a=JSON.stringify(obj1);
let b=JSON.stringify(obj2);
console.log(a==b)
//--------------------------------------------------------------------------
//q2.display the all contry flag in console

var request=new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function()
{
  var data=request.response ;
  var result=JSON.parse(data)
for(var i=0;i<result.length;i++ )
    {
        console.log(result[i].flags)

    }
//q3.all contries name ,region ,sub region,papulation
    for(var i=0;i<result.length;i++ )
    {
        console.log(result[i].region,result[i].subregion,result[i].population)

    }

}

