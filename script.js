const player1Input = document.getElementById('player1Input')
const player2Input = document.getElementById('player2Input')
const playerTurn = document.getElementById('playerTurn')
let p1Turn = false
let start = false

document.getElementById('btnStart').addEventListener('click', function() {
    if(player1Input.value === '' || player2Input.value === '') {
        playerTurn.innerText = 'Coloque o nome dos jogadores'
    } else {
        playerTurn.innerText = 'Vez de: ' + player1Input.value
        p1Turn = true
        start = true
    }
})

document.querySelectorAll('.board-button').forEach(function (button) {
    button.addEventListener('click', function() {
        if(start) {
            if (p1Turn) {
                button.innerText = 'X'
                playerTurn.innerText = 'Vez de: ' + player2Input.value
                p1Turn = false
            } else {
                button.innerText = 'O'
                playerTurn.innerText = 'Vez de: ' + player1Input.value
                p1Turn = true
            }
        } else {
            playerTurn.innerText = 'Coloque o nome dos jogadores'
        }
    })
})
