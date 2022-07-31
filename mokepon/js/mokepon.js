let attackPlayer
let attackEnemy
let vidaPlayer = 3
let vidaEnemigo = 3 

function startPlay() {
    // let selectAttack = document.getElementById('select-attack')
    // selectAttack.style.display = 'none'

    // let selectRestart = document.getElementById('restart-game')
    // selectRestart.style.display = 'none'

    let buttonPetPlayer = document.getElementById('button-pet')
    buttonPetPlayer.addEventListener('click', selectPetPlayer)

    let buttonFire = document.getElementById('button-fire')
    buttonFire.addEventListener('click', attackFire)

    let buttonWater = document.getElementById('button-water')
    buttonWater.addEventListener('click', attackWater)

    let buttonGround = document.getElementById('button-ground')
    buttonGround.addEventListener('click', attackGround)

    let buttonRestart = document.getElementById('button-restart')
    buttonRestart.addEventListener('click', restartGame)
}

function selectPetPlayer() {
    // SELECT MY PET
    let hipodogeInpunt = document.getElementById('hipodoge')
    let capipepoInpun = document.getElementById('capipepo')
    let ratigueyaInpunt = document.getElementById('ratigueya')
    let langostelvisInpunt = document.getElementById('langostelvis')
    let tucapalmaInpunt = document.getElementById('tucapalma')
    let pydosInpunt = document.getElementById('pydos')
    
    let spanPetPlayer = document.getElementById('pet-player')
    

    if (hipodogeInpunt.checked === true) {
        spanPetPlayer.innerHTML = 'Hipodoge'
    } else if (capipepoInpun.checked === true) {
        spanPetPlayer.innerHTML = 'Capipepo'
    } else if (ratigueyaInpunt.checked === true) {
        spanPetPlayer.innerHTML = 'Ratigueya'
    } else if (langostelvisInpunt.checked === true) {
        spanPetPlayer.innerHTML = 'Langostelvis'
    } else if (tucapalmaInpunt.checked === true) {
        spanPetPlayer.innerHTML = 'Tucapalma'
    } else if (pydosInpunt.checked === true) {
        spanPetPlayer.innerHTML = 'Pydos'
    } else {
        alert('Escoge p mascota')
    }

    selectPetEnemy()
    let selectAttack = document.getElementById('select-attack')
    selectAttack.style.display = 'block'
}

function selectPetEnemy() {
    let spanPetEnemy = document.getElementById('pet-enemy')
    let nRandom = numberRandom(1,6)
    if (nRandom == 1) {
        spanPetEnemy.innerHTML = 'Hipodoge'
    } else if (nRandom == 2) {
        spanPetEnemy.innerHTML = 'Capipepo'
    } else if (nRandom == 3) {
        spanPetEnemy.innerHTML = 'Ratigueya'
    } else if (nRandom == 4) {
        spanPetEnemy.innerHTML = 'Langostelvis'
    } else if (nRandom == 5) {
        spanPetEnemy.innerHTML = 'Tucapalma'
    } else if (nRandom == 6) {
        spanPetEnemy.innerHTML = 'Pydos'
    }
}


function attackFire() {
    attackPlayer = 'Fire'
    // let spanMyTurnAttack = document.getElementById('my-attack')
    // spanMyTurnAttack.innerHTML = attackPlayer

    ataqueEnemigo = enemyAttack()
    // let spanEnemyTurnAttack = document.getElementById('enemy-attack')
    // spanEnemyTurnAttack.innerHTML = ataqueEnemigo
    // ganadorPorAtaque = winner()
    // let spanWinner = document.getElementById('player-winner')
    // spanWinner.innerHTML = winner(attackPlayer, ataqueEnemigo)
    // let ganador = winner(attackPlayer, ataqueEnemigo)
    // createMessage(`Your pet attacked with ${attackPlayer}, enemy's pet attacked with ${attackEnemy} - ${ganadorPorAtaque}`)
    winner()
}

function attackWater() {
    attackPlayer = 'Water'
    // let spanMyTurnAttack = document.getElementById('my-attack')
    // spanMyTurnAttack.innerHTML = attackPlayer

    ataqueEnemigo = enemyAttack()
    // let spanEnemyTurnAttack = document.getElementById('enemy-attack')
    // spanEnemyTurnAttack.innerHTML = ataqueEnemigo

    // let spanWinner = document.getElementById('player-winner')
    // spanWinner.innerHTML = winner(attackPlayer, ataqueEnemigo)
    // let ganador = winner(attackPlayer, ataqueEnemigo)
    // createMessage(`Your pet attacked with ${attackPlayer}, enemy's pet attacked with ${attackEnemy}`)
    winner()
}

function attackGround() {
    attackPlayer = 'Ground'
    // let spanMyTurnAttack = document.getElementById('my-attack')
    // spanMyTurnAttack.innerHTML = attackPlayer

    ataqueEnemigo = enemyAttack()
    // let spanEnemyTurnAttack = document.getElementById('enemy-attack')
    // spanEnemyTurnAttack.innerHTML = ataqueEnemigo

    // let spanWinner = document.getElementById('player-winner')
    // spanWinner.innerHTML = winner(attackPlayer, ataqueEnemigo)
    // let ganador = winner(attackPlayer, ataqueEnemigo)
    // createMessage(`Your pet attacked with ${attackPlayer}, enemy's pet attacked with ${attackEnemy}`)
    winner()
}

function enemyAttack() {
    attackRandom = numberRandom(1,3)
    if (attackRandom == 1) {
        attackEnemy = 'Fire'
    } else if (attackRandom == 2) {
        attackEnemy = 'Water'
    } else {
        attackEnemy = 'Ground'
    }
    return attackEnemy
}

function winner() {
    let spanVidasPlayer = document.getElementById('vida-player')
    let spanVidasEnemigo = document.getElementById('vida-enemigo')
    if (attackPlayer == attackEnemy) {
        playerWinner = 'EMPANTE'
    } else if (attackPlayer =='Fire' && attackEnemy =='Ground') {
        playerWinner = 'YOU WIN'
        vidaEnemigo = vidaEnemigo - 1
        spanVidasEnemigo.innerHTML = vidaEnemigo 
    } else if (attackPlayer =='Water' && attackEnemy =='Fire') {
        playerWinner = 'YOU WIN'
        vidaEnemigo = vidaEnemigo - 1
        spanVidasEnemigo.innerHTML = vidaEnemigo 
    } else if (attackPlayer =='Ground' && attackEnemy =='Water') {
        playerWinner = 'YOU WIN'
        vidaEnemigo = vidaEnemigo - 1
        spanVidasEnemigo.innerHTML = vidaEnemigo 
    } else {
        playerWinner = 'ENEMY WIN'
        vidaPlayer = vidaPlayer - 1
        spanVidasPlayer.innerHTML = vidaPlayer  
    }
    createMessage(`Your pet attacked with ${attackPlayer}, enemy's pet attacked with ${attackEnemy} - ${playerWinner}`)
    reviewVidas()

    // return playerWinner
}

function reviewVidas() {
    if (vidaEnemigo == 0) {
        createMessage('Ganaste firulays')
        let buttonFire = document.getElementById('button-fire')
        buttonFire.disabled = true
        let buttonWater = document.getElementById('button-water')
        buttonWater.disabled = true
        let buttonGround = document.getElementById('button-ground')
        buttonGround.disabled = true

        let selectRestart = document.getElementById('restart-game')
        selectRestart.style.display = 'block'
    }
    else if (vidaPlayer == 0) {
        createMessage('Perdiste firulays')
        let buttonFire = document.getElementById('button-fire')
        buttonFire.disabled = true
        let buttonWater = document.getElementById('button-water')
        buttonWater.disabled = true
        let buttonGround = document.getElementById('button-ground')
        buttonGround.disabled = true

        let selectRestart = document.getElementById('restart-game')
        selectRestart.style.display = 'block'
    }
}

function createMessage(mensaje) {
    let sectionMessagge = document.getElementById('message')
    let parrafo = document.createElement('p')

    parrafo.innerHTML = mensaje

    sectionMessagge.appendChild(parrafo)

    
    // winner()

   
}

function restartGame() {
    location.reload()
}

function numberRandom(min, max) {
    random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}

window.addEventListener('load', startPlay)