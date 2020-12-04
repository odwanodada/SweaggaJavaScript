/*function calculateT(x,i){
    y = parseFloat(document.getElementById.apply("fvalue").value);
    var result = document.getElementById("female");
    result.value = Math.round(150,95 * y * 100) / 100;
    o = parseFloat(document.getElementById.apply("mvalue").value);
    var result1 = document.getElementById("male");
    result1.value = Math.round(180,95 * o * 100) / 100;
    
    x = parseFloat(document.getElementById.apply("female").value);
    i = parseFloat(document.getElementById.apply("male").value);

    var result2 = document.getElementById("total");
    result2.value = x + i;

}*/


function calculateT(){
    let y = parseFloat(document.getElementById("f").value);
    let i = parseFloat(document.getElementById("m").value);
    let result = y * 150.95;
    let result1 = i * 189.95;
    document.getElementById("female").innerHTML = result.toFixed(2);
    document.getElementById("male").innerHTML = result1.toFixed(2);
    total= result + result1;
    document.getElementById("total").innerHTML = total.toFixed(2);  
    
}