const player1Input = document.getElementById('player1Input')
const player2Input = document.getElementById('player2Input')
const playerTurn = document.getElementById('playerTurn')
const btn = document.querySelectorAll('.board-button')
const root = document.querySelector(':root')
let p1Turn = false
let start = false
let victory = false

document.getElementById('btnStart').addEventListener('click', function() {
    if(player1Input.value === '' || player2Input.value === '') {
        playerTurn.innerText = 'Coloque o nome dos jogadores'
    } else {
        playerTurn.innerText = 'Vez de: ' + player1Input.value
        p1Turn = true
        start = true
    }
})

btn.forEach(function (button) {
    button.addEventListener('click', function() {
        if(start && !victory) {
            if (p1Turn) {
                button.innerText = 'X'
                button.disabled = true
                checkVictory()
                if(!victory) {
                    playerTurn.innerText = 'Vez de: ' + player2Input.value
                    p1Turn = false
                } else {
                    btn.disabled = true
                }
            } else {
                button.innerText = 'O'
                button.disabled = true
                checkVictory()
                if(!victory) {
                    playerTurn.innerText = 'Vez de: ' + player1Input.value
                    p1Turn = true
                } else {
                    btn.disabled = true
                }
            }
        } else {
            playerTurn.innerText = 'Coloque o nome dos jogadores'
        }
    })
})

function checkVictory() {
    const area00 = document.getElementById('area00')
    const area01 = document.getElementById('area01')
    const area02 = document.getElementById('area02')
    const area10 = document.getElementById('area10')
    const area11 = document.getElementById('area11')
    const area12 = document.getElementById('area12')
    const area20 = document.getElementById('area20')
    const area21 = document.getElementById('area21')
    const area22 = document.getElementById('area22')
    //caso 1
    checkEqual(area00, area01, area02)
    //caso 2
    checkEqual(area10, area11, area12)
    //caso 3
    checkEqual(area20, area21, area22)
    //caso 4
    checkEqual(area00, area10, area20)
    //caso 5
    checkEqual(area01, area11, area21)
    //caso 6
    checkEqual(area02, area12, area22)
    //caso 7
    checkEqual(area00, area11, area22)
    //caso 8
    checkEqual(area02, area11, area20)
}

function checkEqual(a0, a1, a2) {
    if (a0.innerText && a0.innerText === a1.innerText && a1.innerText === a2.innerText) {
        playerTurn.innerText = player1Input.value + ' venceu!'
        changeColor(a0, a1, a2)
        victory = true
    } else if (a0.innerText && a0.innerText === a1.innerText && a1.innerText === a2.innerText) {
        playerTurn.innerText = player2Input.value + ' venceu!'
        changeColor(a0, a1, a2)
        victory = true
    } 
}

function changeColor(a0, a1, a2) {
    a0.style.color = 'green'
        a1.style.color = 'green'
        a2.style.color = 'green'
        setTimeout(function() {
            a0.style.color = 'rgb(141, 141, 126)'
            a1.style.color = 'rgb(141, 141, 126)'
            a2.style.color = 'rgb(141, 141, 126)'
        },2000)
}