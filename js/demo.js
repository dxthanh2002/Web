
// so + so = So
//so + chuoi = chuoi
//chuoi + chuoi = chuoi
var ar= [];
ar[0]=1;
ar.push(10);
ar.push("hello");
//duyet mang theo chi muc index
for( var i=0;i<ar.length;i++){
    console.log(ar[i]);
}//duyet mang theo phan tu mot
ar.map(xyz=>{
    console.log(xyz)
});
function tinhtong(a,b){

    return a+b;
}
var tk = tinhtong(3,5);
var tk2 = tinhtong( 5, 20);
console.log(tk);
console.log(tk2);

//function demo()
{
    console.log("hello every boy");
}
//setTimeout(demo,1000);
console.log("ABC");

//setInterval(demo,3000);
console.log(" ABVC");

/*var n=10;
function countdown() {
    var xyz = document.getElementById("head");
    xyz.innerText = n;
    console.log(n);
    n--;
    if(i<0){
        clearInterval(si);
    }
}
var si=setInterval(countdown,1000);
*/

/*var n = 2;
var m = 0;
function countdown() {
    var xyz = document.getElementById("head");
    xyz.innerText += " "+n;
    n+=2;
    m++;
    if(m>=10){
        clearInterval(cc);
    }
}
var cc = setInterval(countdown,1000);
*/
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
var cc = setInterval(countdown,500);