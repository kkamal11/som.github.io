// const form = document.getElementById('form1');
// var p1 = form.elements['player1'];
// var p2 = form.elements['player2'];

function func(p1,p2){
    var num;
    x = document.querySelectorAll("img");
    num = Math.random()*6;
    var num1 = Math.floor(num)+1;
    var link = "static/" + "dice" + num1 + ".png";
    x[0].setAttribute("src",link);

    num = Math.random()*6;
    var num2 = Math.floor(num)+1;
    var link = "static/" + "dice" + num2 + ".png";
    x[1].setAttribute("src",link);

    if(num1 > num2){
        document.querySelector("h3").innerHTML = p1 +" Won!!!!!";
}
    else if(num2 > num1){
        document.querySelector("h3").innerHTML = p2 +" Won!!!!!";
    }
    else{
        document.querySelector("h3").innerHTML = "Scores Equal!!!!.....Let us play again.";
    }
}












// x = document.querySelectorAll(".dice");
// for(i=0;i<2;i++){
//     x[i].innerHTML = Math.floor(Math.random()*6);
//     x[i].style.fontSize = "100px";
//     x[i].style.color = "yellow";
//     x[i].style.padding = "30px";
// }