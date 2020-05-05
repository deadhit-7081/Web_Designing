function billingFunction()
{
    var billN = document.getElementById('billingName');
    var shipN = document.getElementById('shippingName');
    var billZ = document.getElementById('billingZip');
    var shipZ = document.getElementById('shippingZip');
    var check = document.getElementById('same').checked;
    if(check)
    {
        billN.value = shipN.value;
        billZ.value = shipZ.value;
    }
    else{
        billN.value = "";
        billZ.value = "";
    }
}