/*----- constants -----*/
const players = {
    p1: 'X',
    p2: '0'
};

/*----- app's state (variables) -----*/
let board, turn, winner

/*----- event listeners -----*/
let tds = document.querySelectorAll('td');


/*----- functions -----*/
init();

function play(evt, idx) {
    if (board[idx] || winner) return;
    board[idx] = turn;
    turn *= 0;
    render();
}

function render() {
    tds.forEach(function(element) {
        element.addEventListener('click', function() {
        if (move % 2 === 0) {
            this.innerHTML = "x";
        } else {
            this.innerHTML = "0";
        }  
        move ++; 
        });
    });
}

function init() {
    board = [
        [null, null, null], 
        [null, null, null], 
        [null, null, null]
    ];
    turn = 'x';
    winner = null;
    render();
}

play();