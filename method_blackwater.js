var price = 1122
var hours_per_day= 24
var hours_per_year= 8760

function savings_blackwater() {
    var x; 
    var y;
    var z; 
    var e;
    var a;
    var b;
    var c;
    x = document.getElementById("area_available").value;
    y = document.getElementById("water_cost").value;
    z = document.getElementById("average_rainfall").value;
     a= z * x
     b= a * y
     c= price
    e = b - c
    document.getElementById("demo").innerHTML = "£"+e;
   
}