var price_per_m2= 300
var kWh_per_square_meter= 59.5
var hours_per_day= 24
var hours_per_year= 8760

function savings_PV() {
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
