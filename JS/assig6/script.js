const main = document.getElementById("main");
main.style.position = "absolute";
main.style.height = "100%";
main.style.width = "100%";
let colors = ["red", "orange", "green", "yellow", "royalblue", "rebeccapurple", "blue"], delay = 0;

function create(){
    let wh = `${randNum(5, 70)}px`;
    let ball = document.createElement("div");
    ball.className = "balls";
<<<<<<< HEAD
    ball.style.animationDelay = `${delay}ms`; //template literal
=======
    ball.style.animationDelay = `${delay}ms`;
    // ball.style.animation = "fall 4s linear forwards";
>>>>>>> 920600fb522881c3947252033e514bf1c433af03
    ball.style.height = wh;
    ball.style.width = wh;
    ball.style.borderRadius = "50%";
    ball.style.position = "absolute";
    ball.style.top = "0";
    ball.style.left = `${randNum(0, 100)}%`;
    ball.style.backgroundColor = colors[randNum(0, 6)];
    main.append(ball);
}
<<<<<<< HEAD
function randNum(min, max){
=======
function randNum(max, min){
>>>>>>> 920600fb522881c3947252033e514bf1c433af03
    return Math.round(Math.random()*(max-min)+min);
}
for(let i=0; i<15; i++){
    for(let j=0; j<20; j++)
        create();
    delay+=300;
}
document.getElementById("main").addEventListener("click", function(e){
    if(e.target.className == "balls")
    e.target.style.backgroundColor = "transparent";
});