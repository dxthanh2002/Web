let obj = {
    nam: "Nam",
    age: 18,
    tel: "+59595959595",
    girlfriend: ['nguyen van anh', "Le ngoc anh"],
    eat: function () {
        console.log(this.nam + " dang an mi tom");
        console.log(obj.girlfriend);

    }
};
console.log(obj.tel);
obj.eat();
obj.nam="huy";
console.log(obj.nam+ " dang an mi tom");

let a = document.getElementById('abc');
console.log(a.innerText);
var x=15;
function changeText(){
   // a.innerText = " xin chao cac ban";
   // a.innerHTML =" <i> xin chao cac ban </i>"
    a.style.fontSize = x+"px";
    a.style.color = "pink";
    a.classList.add("classnado");
    a.style.transform = "rotate("+x+"deg)";
    x++;
}
//setInterval(changeText,30);

