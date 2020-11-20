var biomass_digestor= 821
var gas_per_kg_waste= 0.1314
var energy_joules_per_kg_gas = 55200
var hours_per_day= 24
var hours_per_year= 8760

function savings_biomass() {
    var x; 
    var y; 
    var e;
    var a;
    var b;
    var c;
    var d;
    x = document.getElementById("energy_cost").value;
    y = document.getElementById("waste_kg").value;
     a= y / hours_per_day
     b= a * gas_per_kg_waste
     c= b * energy_joules_per_kg_gas
     d= c * x * hours_per_year 
    e = d - biomass_digestor
    document.getElementById("demo").innerHTML = "£"+e;
    console.log(e)
}

