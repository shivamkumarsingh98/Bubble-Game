
let score = 0;
let rnser = 0;

function getBubble(){
    let cutter = "";
for(let i=1;i<=330; i++) {
    let rn = Math.floor(Math.random()*10)
    cutter += `<div class="game">${rn}</div>`
    
}
document.getElementById('game-box').innerHTML = cutter
}
let time = 60;
function timerRun(){
   let timer = setInterval(function()  {
        
        if(time > 0){
            time--;
            document.getElementById('bubble').textContent = time;
        }
        else {
            clearInterval(timer)
            document.getElementById("game-box").innerHTML = `<h1>Game over</h1>`
        }
    }, 1000) 
    
}
function hitScore() {
    rnser = Math.floor(Math.random() * 10);
    document.getElementById('hit').textContent = rnser;

}

function increaseScore(){
    score += 5;
    document.querySelector("#Scoreval").textContent = score;
}

document.getElementById('game-box').addEventListener('touchstart', function(el){
    let clickgame = Number(el.target.textContent)
    if(clickgame === rnser){
        console.log("ok")
        increaseScore()
        hitScore();
        getBubble();
    }else {
        document.getElementById("game-box").innerHTML = `<h1>Game over</h1>`
    }
})


timerRun();
hitScore();
getBubble();
