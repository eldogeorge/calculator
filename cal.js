function displayData(n){
    result.value+=n
}

//to calculate =

function evaluateOper(){
    result.value=eval(result.value)
}

//to clear AC
function allclear(){
    result.value=""
}

//to clear one by one usong slice method
function backsplace(){
    result.value=result.value.slice(0,-1)
}