document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "interactive") {
        divGenerator()
    }
});

function divGenerator(){
    document.getElementById("box").innerHTML = '';
    for (let i = 1; i < 10; i++){
        let div = `<div onclick="onField(event)" class="box" id=${i}></div>`

        document.getElementById("box").innerHTML += div;
    }
}
let isPlayer1=true
let player1="";
let player2="";
let winner="";
let combinations=["123",'456','789', "147", "258", "369", "159", "357"];
let winCountX = "";
let winCountO = "";
function onField(event) {
    winCountX = document.getElementById('WinScoreX').innerHTML
    winCountO = document.getElementById('WinScoreX').innerHTML

    let index = event.target.id;
    if (document.getElementById(index).innerHTML.length<1){
        if (isPlayer1 ===true) {
            player1 += index
            isPlayer1 = false
            document.getElementById(index).innerHTML += "X";
            winner = combinations.find(x => x === player1);
            if (winner) {
                alert("player 1 wins");
                document.getElementById('WinScoreX').innerHTML = parseInt(winCountX) + 1
                return "player 1 wins"
            }
        } else {
            player2 += index
            isPlayer1 = true
            document.getElementById(index).innerHTML += "O";
            winner = combinations.find(x => x === player2);
            if (winner) {
                alert("player 2 wins")
                document.getElementById('WinScoreO').innerHTML = parseInt(winCountO) + 1
                return "player 2 wins"
            }
        }
    }

}




