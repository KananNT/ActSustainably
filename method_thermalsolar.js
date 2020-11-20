var price_per_m2= 1243
var kWh_per_square_meter= 150
var hours_per_day= 24
var hours_per_year= 8760

function savings_thermal() {
    var x; 
    var y; 
    var e;
    var a;
    var b;
    var c;

    x = document.getElementById("area_available").value;
    y = document.getElementById("energy_cost").value;
     a= x * kWh_per_square_meter
     b= a * y * hours_per_day
     c= x * price_per_m2
    e = b - c
    document.getElementById("demo").innerHTML = "£"+e;
   
}