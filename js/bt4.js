function checkprime(x){
    if(x<2)
    {
        return false;
    }
    if(x==2 || x==3){
        return true;
    }else{
        for(var i=2; i<= x/2;i++){
            if(x % i == 0){
                return false;
            }
        }
        return true;
    }
}
function nextprime (x){
    for(var i=x+1;true;i++){
        if( checkprime(i)){
            return i;
        }

    }
}
var n = 2;
var m = 0;
function countdown() {
    var xyz = document.getElementById("head");
    xyz.innerText += " "+n;
    n = nextprime(n);
    m++;
    if(m>=20){
        clearInterval(cc);
    }
}
var cc = countdown();