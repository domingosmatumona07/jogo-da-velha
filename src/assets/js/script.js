var player1, player2;
var board = [];
let qtdJog = 0, winner, loser, tie, validOp = true;

let status = document.getElementById('status');

winner = loser = tie = false;

window.onload = function() {
    player1 = prompt('Vai jogar com X ou O? ');
    player1 = player1.toUpperCase();

    if(player1 === 'X') {
        player2 = 'O';
    } else if(player1 === 'O') {
        player2 = 'X';
    } else {
        alert('Escolha simplesmente X ou O! Clique em Ok e recarrege a página para tentar novamente.');
        validOp = false;
    }

    setTimeout(oppositePlay, 300);
}

function play(pos) {
    if(validOp === true) {
        let play01 = document.getElementsByClassName('space')[pos];
        
        if((play01.innerText == '') && ((winner === false) && (loser === false) && (tie === false))) {
            play01.innerHTML = player1;
            board[pos] = player1;
            qtdJog++;

            if((winner !== true) && (loser !== true))  {
                winOrLose(player1);
                if(winner !== true)
                    setTimeout(oppositePlay, 500);
            }
        } else if ((winner) || (loser) || (tie)){
            alert('Óhhhh Jovem... O jogo já acabou!!! Recarregue a página se quiseres jogar novamente.');
        } else {
            alert('Jogada Inválida!')
        }
    }
}

function oppositePlay() {
    if(validOp === true) {
        let logico = true;
        if(qtdJog < 10) {
            do {
                let rand = Math.floor(Math.random()*9);
                let play02 = document.getElementsByClassName('space')[rand];
                if(play02.innerText == '') {
                    play02.innerHTML = player2;
                    board[rand] = player2;
                    qtdJog++;
                    logico = false;
                }
            } while(logico);
        }

        winOrLose(player2);

        if((qtdJog === 9) && (winner !== true) & (loser !== true)) {
            status.style.color = 'white';
            status.innerHTML = 'EMPATE!!';
            tie = true;
        }
    }
}

function winOrLose(player) {
    // HORIZONTAL
    if((board[0] === player) && (board[1] === player) && (board[2] === player)) {
        callWinOrLose(player);
    } else if((board[3] === player) && (board[4] === player) && (board[5] === player)) {
        callWinOrLose(player);
    } else if((board[6] === player) && (board[7] === player) && (board[8] === player)) {
        callWinOrLose(player);
    }

    //VERTICAL
    if((board[0] === player) && (board[3] === player) && (board[6] === player)) {
        callWinOrLose(player);
    } else if((board[1] === player) && (board[4] === player) && (board[7] === player)) {
        callWinOrLose(player);
    } else if((board[2] === player) && (board[5] === player) && (board[8] === player)) {
        callWinOrLose(player);
    }

    //DIAGONALS
    if((board[0] === player) && (board[4] === player) && (board[8] === player)) {
        callWinOrLose(player);
    } else if((board[2] === player) && (board[4] === player) && (board[6] === player)) {
        callWinOrLose(player);
    }
}

callWinOrLose = function(player) {
    (player === player1) ? win(true) : lose(true);
}

function win(bool) {
    winner = bool;
    status.style.color = 'green';
    status.innerHTML = 'Parabéns, você venceu!';
}

function lose(bool) {
    loser = bool;
    status.style.color = 'red';
    status.innerHTML = 'Você perdeu!';
}