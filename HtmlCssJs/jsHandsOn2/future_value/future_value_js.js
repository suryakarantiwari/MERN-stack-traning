var $ = function (id) {
    return document.getElementById(id);
}

var validate = function (investment,rate,years) {

    if (isNaN(investment)) {
        alert("Investment must be numeric");
    }
    else if( investment <=0 ){
        alert("Investment must be greater than zero");
    }
    if ( isNaN(rate)){
        alert("Rate must be numeric");
    }
    else if( rate <=0 ){
        alert("Rate must be greater than zero");
    }

    if ( isNaN(years)){
        alert("Years must be numeric");
    }
    else if( years <=0 ){
        alert("Years must be greater than zero");
    }

    else{
        return true;
    }


}

var calculateFV = function () {
    var investment = parseFloat($("investment").value);
	var rate = parseFloat($("rate").value);
    var years = parseInt($("years").value);
    
    
    if (validate(investment,rate,years)){
        let futureValue = investment;
        for(let i=1; i<=years; i++){
            futureValue += futureValue * rate/100;
        }

        $("future_value").value = futureValue.toFixed();
    }
    




}

window.onload = function () {
    $("calculate").onclick = calculateFV;
}