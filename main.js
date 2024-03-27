const gameBoard = (function() {
    const row1 = [" "," "," "];
    const row2 = [" "," "," "];
    const row3 = [" "," "," "];
    const rows = [row1,row2,row3];

    const drawBoard = () => {
        console.log("\n",row1.join("|"),"\n",row2.join("|"),"\n",row3.join("|"));
        return null
    }
    return  {row1,row2,row3,drawBoard,rows}
})()

function createUser(name) {
    let wins = 0;
    const getWin = function() {
        console.log(`${name} wins!`);
        if (gameState.winCond === false) {this.wins++};
        gameState.winCond = true;
    }
    return {name, wins, getWin};
}

const player1 = createUser("Player 1");
player1.marker = "X";
const player2 = createUser("Player 2");
player2.marker = "O";

function winCondition(player, oplayer) {
    if (gameBoard.row1.every((element) => element === player.marker)||
        gameBoard.row2.every((element) => element === player.marker)||
        gameBoard.row3.every((element) => element === player.marker)||
        (gameBoard.row1[0]===player.marker&&
        gameBoard.row2[0]===player.marker&&
        gameBoard.row3[0]===player.marker)||
        (gameBoard.row1[1]===player.marker&&
        gameBoard.row2[1]===player.marker&&
        gameBoard.row3[1]===player.marker)||
        (gameBoard.row1[2]===player.marker&&
        gameBoard.row2[2]===player.marker&&
        gameBoard.row3[2]===player.marker)||
        (gameBoard.row1[0]===player.marker&&
        gameBoard.row2[1]===player.marker&&
        gameBoard.row3[2]===player.marker)||
        (gameBoard.row1[2]===player.marker&&
        gameBoard.row2[1]===player.marker&&
        gameBoard.row3[0]===player.marker))
        {document.querySelector(".whoWon").innerHTML = "Player 1 won!";
        return player.name}
        if (gameBoard.row1.every((element) => element === oplayer.marker)||
        gameBoard.row2.every((element) => element === oplayer.marker)||
        gameBoard.row3.every((element) => element === oplayer.marker)||
        (gameBoard.row1[0]===oplayer.marker&&
        gameBoard.row2[0]===oplayer.marker&&
        gameBoard.row3[0]===oplayer.marker)||
        (gameBoard.row1[1]===oplayer.marker&&
        gameBoard.row2[1]===oplayer.marker&&
        gameBoard.row3[1]===oplayer.marker)||
        (gameBoard.row1[2]===oplayer.marker&&
        gameBoard.row2[2]===oplayer.marker&&
        gameBoard.row3[2]===oplayer.marker)||
        (gameBoard.row1[0]===oplayer.marker&&
        gameBoard.row2[1]===oplayer.marker&&
        gameBoard.row3[2]===oplayer.marker)||
        (gameBoard.row1[2]===oplayer.marker&&
        gameBoard.row2[1]===oplayer.marker&&
        gameBoard.row3[0]===oplayer.marker))
        {document.querySelector(".whoWon").innerHTML = "Player 2 won!";
        return oplayer.name}    
}

const playRound = (function (){
    console.log("Start");
const playerOneRound = (function(player) {        
    if (((gameBoard.row1.includes(" ")) || (gameBoard.row2.includes(" "))|| (gameBoard.row3.includes(" "))) && (gameState.winCond === false))
        {   let selection = selected;
            let playerOneY = selection.at(0);
            let playerOneX = selection.at(2);
            let selectedRow = (gameBoard.rows[parseInt(playerOneY)-1]);
            if (selectedRow[parseInt(playerOneX)-1]===" "){
            selectedRow.splice(parseInt(playerOneX)-1,1,player.marker);
            document.querySelector(`.r${selection.at(0)}${selection.at(2)}`).textContent = player.marker;
            console.log(gameBoard.drawBoard());


        };
        } 
        else {
            console.log("Round Ends");
            gameState.roundEnd = true;
        };
        if (winCondition(player1,player2) === player1.name){
            console.log("Round Ends Win cond");
            player1.getWin();
            console.log(`${player1.name} has ${player1.wins} wins!`);
        }
        if (winCondition(player1,player2) === player2.name) {
            console.log("Round Ends Win cond");
            player2.getWin();
            console.log(`${player2.name} has ${player2.wins} wins!`);
        }
        

        })
 
const playerTwoRound = (function(oplayer){
        if (((gameBoard.row1.includes(" ")) || (gameBoard.row2.includes(" "))|| (gameBoard.row3.includes(" "))) && (gameState.winCond === false))
        {
        let selection2 = selected;
        let playerTwoY = selection2.at(0);
        let playerTwoX = selection2.at(2);
        let selectedRowTwo = (gameBoard.rows[parseInt(playerTwoY)-1]);
        if (selectedRowTwo[parseInt(playerTwoX)-1]===" "){
        selectedRowTwo.splice(parseInt(playerTwoX)-1,1,oplayer.marker);
        document.querySelector(`.r${selection2.at(0)}${selection2.at(2)}`).textContent = oplayer.marker;
        console.log(gameBoard.drawBoard());    
        } 
    }
    else {
        console.log("Round Ends");
        gameState.roundEnd = true;
    }
        if (winCondition(player1,player2) === player1.name){
            console.log("Round Ends Win cond");
            player1.getWin();
            console.log(`${player1.name} has ${player1.wins} wins!`);
        }
        if (winCondition(player1,player2) === player2.name) {
            console.log("Round Ends Win cond");
            player2.getWin();
            console.log(`${player2.name} has ${player2.wins} wins!`);

        }

        
        })
    return {playerOneRound, playerTwoRound}
    }
)()

const gameState = (function(){
    let roundEnd = false;
    let whoStartsFirst = [];
    const turnList = [];
    let winCond = false;
    return {turnList,winCond,whoStartsFirst, roundEnd};

    
})()
const Start = (function (){
if (gameState.whoStartsFirst.length === 0) {
    gameState.whoStartsFirst.push("player1");
    console.log("start if")
}
if (gameState.whoStartsFirst.at(-1) === "player1") {
    gameState.whoStartsFirst.push("player2");

}
if (gameState.whoStartsFirst.at(-1) === 'player2') {
    gameState.whoStartsFirst.push("player1");
};
})
let befSelected = [];
let selected;
const boardDivElements = document.querySelectorAll(".boardElement");
boardDivElements.forEach(element => {
    element.addEventListener("click", () =>{
        if (gameState.whoStartsFirst.length === 0) {
            Start();
            console.log(Start.whoStartsFirst);
        }
        if (befSelected.includes(element.getAttribute("id"))){
            document.querySelector(".errMsg").innerHTML = "Please select an empty square";
        }
        else {
            document.querySelector(".errMsg").innerHTML = "";
        selected = element.getAttribute("id");
        switch (gameState.turnList.at(-1)) {
        case undefined :
            playRound.playerOneRound(player1);
            console.log(gameState.turnList);
            gameState.turnList.push(gameState.whoStartsFirst.at(-1));
            befSelected.push(selected);
            document.querySelector(".whosTurn").innerHTML = "Player 2's Turn";
            if (befSelected.length === 9) { gameState.roundEnd=true};
            document.querySelector(".roundStat").innerHTML = `This is the round ${befSelected.length + 1}`;
            break;
        
        case "player2": 
            playRound.playerOneRound(player1);
            console.log(gameState.turnList);
            gameState.turnList.push("player1");
            befSelected.push(selected);
            document.querySelector(".whosTurn").innerHTML = "Player 2's Turn";
            document.querySelector(".roundStat").innerHTML = `This is the round ${befSelected.length + 1}`;
            if (befSelected.length === 9) {
                gameState.roundEnd=true;
                document.querySelector(".roundStat").innerHTML = "This round ends"
            };
            break;
        
        case "player1":
            playRound.playerTwoRound(player2);
            console.log(gameState.turnList);
            gameState.turnList.push("player2");
            befSelected.push(selected);
            document.querySelector(".whosTurn").innerHTML = "Player 1's Turn";
            document.querySelector(".roundStat").innerHTML = `This is the round ${befSelected.length + 1}`;
            if (befSelected.length === 9) { 
                gameState.roundEnd=true;
                document.querySelector(".roundStat").innerHTML = "This round ends"
            };
            break;
        }
        return selected;}
    } 
    )
});

const resetGame = (function (){
    gameBoard.rows.forEach(element => {
        element.splice(0,3," "," "," ");
    });
    gameState.turnList = [];
    befSelected = [];
    gameState.winCond = false;
    gameState.roundEnd = false;
    Start.whoStartsFirst = [];
    boardDivElements.forEach(element => {
        element.innerHTML= " ";
    });
    player1.wins = 0;
    player2.wins = 0;
    document.querySelector(".player1WinStat").innerHTML = `Player 1 wins : 0`;
    document.querySelector(".player2WinStat").innerHTML = `Player 2 wins : 0`;
    document.querySelector(".whoWon").innerHTML = "";
    document.querySelector(".roundStat").innerHTML = "This is the round 1";
});

const nextRound = (function (){
    gameBoard.rows.forEach(element => {
        element.splice(0,3," "," "," ");
    });
    gameState.turnList = [];
    befSelected = [];
    gameState.winCond = false;
    gameState.roundEnd = false;
    boardDivElements.forEach(element => {
        element.innerHTML= " ";
    });
    document.querySelector(".roundStat").innerHTML = "This is the round 1";
    document.querySelector(".player1WinStat").innerHTML = `Player 1 wins : ${player1.wins}`;
    document.querySelector(".player2WinStat").innerHTML = `Player 2 wins : ${player2.wins}`;
    document.querySelector(".whoWon").innerHTML = "";

});



const resetBtt = document.querySelector(".resetGame");
resetBtt.addEventListener("click", resetGame);
{document.querySelector(".nextRound").addEventListener("click", () => {
if (gameState.winCond === true || gameState.roundEnd === true){nextRound()}})}

//TODO
//BUGFIX
// CAN GET MULTIPLE WINS IF YOU CLICK AFTER YOU WON