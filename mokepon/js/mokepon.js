const selectContinue = document.getElementById('select-continue')
const selectRestart = document.getElementById('restart-game')
const selectAttack = document.getElementById('select-attack')
const buttonPetPlayer = document.getElementById('button-pet')
const buttonFire = document.getElementById('button-fire')
const buttonWater = document.getElementById('button-water')
const buttonGround = document.getElementById('button-ground')
const buttonRestart = document.getElementById('button-restart')
const buttonContinue = document.getElementById('button-continue-battle')

const hipodogeInpunt = document.getElementById('hipodoge')
const capipepoInpun = document.getElementById('capipepo')
const ratigueyaInpunt = document.getElementById('ratigueya')
const langostelvisInpunt = document.getElementById('langostelvis')
const tucapalmaInpunt = document.getElementById('tucapalma')
const pydosInpunt = document.getElementById('pydos')
const spanPetPlayer = document.getElementById('pet-player')
const playerChose = document.getElementById('player-chose')
const sectionImg = document.getElementById('player-choose')
const img = document.createElement('img')
const selectMokepon= document.getElementById('select-pet')

const spanPetEnemy = document.getElementById('pet-enemy')
const computerChose = document.getElementById('computer-chose')

const spanVidasPlayer = document.getElementById('vida-player')
const spanVidasEnemigo = document.getElementById('vida-enemigo')

let mokepones = []
let attackPlayer
let attackEnemy
let vidaPlayer = 3
let vidaEnemigo = 3 

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let  hipodoge = new Mokepon('Hipodoge', './assets/1.png', 5)
let  capipepo = new Mokepon('Capipepo', './assets/2.png', 5)
let  ratigueya = new Mokepon('Ratigueya', './assets/3.png', 5)
let  langostelvis = new Mokepon('Langostelvis', './assets/4.png', 5)
let  tucapalma = new Mokepon('Tucapalma', './assets/5.png', 5)
let  pydos = new Mokepon('Pydos', './assets/6.png', 5)


// mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)
hipodoge.ataques.push(
    {nombre: '💦', id:'button-water'},
    {nombre: '💦', id:'button-water'},
    {nombre: '💦', id:'button-water'},
    {nombre: '🔥', id:'button-fire'},
    {nombre: '🌱', id:'button-ground'}
)
capipepo.ataques.push(
    {nombre: '🔥', id:'button-fire'},
    {nombre: '🔥', id:'button-fire'},
    {nombre: '🔥', id:'button-fire'},
    {nombre: '💦', id:'button-water'},
    {nombre: '🌱', id:'button-ground'}
)
ratigueya.ataques.push(
    {nombre: '🌱', id:'button-ground'},
    {nombre: '🌱', id:'button-ground'},
    {nombre: '🌱', id:'button-ground'},
    {nombre: '💦', id:'button-water'},
    {nombre: '🔥', id:'button-fire'},
)
langostelvis.ataques.push(
    {nombre: '💦', id:'button-water'},
    {nombre: '💦', id:'button-water'},
    {nombre: '💦', id:'button-water'},
    {nombre: '🔥', id:'button-fire'},
    {nombre: '🌱', id:'button-ground'}
)
tucapalma.ataques.push(
    {nombre: '🔥', id:'button-fire'},
    {nombre: '🔥', id:'button-fire'},
    {nombre: '🔥', id:'button-fire'},
    {nombre: '💦', id:'button-water'},
    {nombre: '🌱', id:'button-ground'}
)
pydos.ataques.push(
    {nombre: '🌱', id:'button-ground'},
    {nombre: '🌱', id:'button-ground'},
    {nombre: '🌱', id:'button-ground'},
    {nombre: '💦', id:'button-water'},
    {nombre: '🔥', id:'button-fire'},
)


function startPlay() {
    
    selectAttack.style.display = 'none'
    selectRestart.style.display = 'none'
    selectContinue.style.display = 'none'
    buttonPetPlayer.addEventListener('click', selectPetPlayer)
    buttonFire.addEventListener('click', attackFire)
    buttonWater.addEventListener('click', attackWater)
    buttonGround.addEventListener('click', attackGround)
    buttonRestart.addEventListener('click', restartGame)
    buttonContinue.addEventListener('click', continueGame)
}
function continueGame() {
    selectContinue.style.display = 'none'
    selectAttack.style.display = 'block'
}
function selectPetPlayer() {
    // SELECT MY PET
    if (hipodogeInpunt.checked === true) {
        spanPetPlayer.innerHTML = 'Hipodoge'
        playerChose.innerHTML = 'Hipodoge'
        rutaImg = './assets/1.png'
    } else if (capipepoInpun.checked === true) {
        spanPetPlayer.innerHTML = 'Capipepo'
        playerChose.innerHTML = 'Capipepo'
        rutaImg = './assets/2.png'
    } else if (ratigueyaInpunt.checked === true) {
        spanPetPlayer.innerHTML = 'Ratigueya'
        playerChose.innerHTML = 'Ratigueya'
        rutaImg = './assets/3.png'
    } else if (langostelvisInpunt.checked === true) {
        spanPetPlayer.innerHTML = 'Langostelvis'
        playerChose.innerHTML = 'Langostelvis'
        rutaImg = './assets/4.png'
    } else if (tucapalmaInpunt.checked === true) {
        spanPetPlayer.innerHTML = 'Tucapalma'
        playerChose.innerHTML = 'Tucapalma'
        rutaImg = './assets/5.png'
    } else if (pydosInpunt.checked === true) {
        spanPetPlayer.innerHTML = 'Pydos'
        playerChose.innerHTML = 'Pydos'
        rutaImg = './assets/6.png'
    } else {
        alert('Escoge p mascota')
    }
    selectPetEnemy()

    //INSERTAR IMAGEN PLAYER
    img.setAttribute('src', rutaImg)
    // img.src = rutaImg
    sectionImg.appendChild(img)
    //INSERTAR IMAGEN ENEMIGO
    //MUESTRA INTERFAZ-2
    selectContinue.style.display = 'block'
    //ESCONDE INTERFAZ-1
    selectMokepon.style.display = 'none'
}

function selectPetEnemy() {
    let nRandom = numberRandom(1,6)
    if (nRandom == 1) {
        spanPetEnemy.innerHTML = 'Hipodoge'
        computerChose.innerHTML = 'Hipodoge'
        rutaImgEnemy = './assets/1.png'
    } else if (nRandom == 2) {
        spanPetEnemy.innerHTML = 'Capipepo'
        computerChose.innerHTML = 'Capipepo'
        rutaImgEnemy = './assets/2.png'
    } else if (nRandom == 3) {
        spanPetEnemy.innerHTML = 'Ratigueya'
        computerChose.innerHTML = 'Ratigueya'
        rutaImgEnemy = './assets/3.png'
    } else if (nRandom == 4) {
        spanPetEnemy.innerHTML = 'Langostelvis'
        computerChose.innerHTML = 'Langostelvis'
        rutaImgEnemy = './assets/4.png'
    } else if (nRandom == 5) {
        spanPetEnemy.innerHTML = 'Tucapalma'
        computerChose.innerHTML = 'Tucapalma'
        rutaImgEnemy = './assets/5.png'
    } else if (nRandom == 6) {
        spanPetEnemy.innerHTML = 'Pydos'
        computerChose.innerHTML = 'Pydos'
        rutaImgEnemy = './assets/6.png'
    }

    let sectionImg = document.getElementById('computer-choose')
    let img = document.createElement('img')
    img.setAttribute('src', rutaImgEnemy)
    // img.src = rutaImg
    sectionImg.appendChild(img)
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
    createMessage('player-message',`Your pet attacked with ${attackPlayer}`)
    createMessage('computer-message',`Enemy's pet attacked with ${attackEnemy}`)

    // createMessage('message',`${playerWinner}`)

    reviewVidas()

    // return playerWinner
}

function reviewVidas() {
    if (vidaEnemigo == 0) {
        createMessage('message',`Ganaste firulays`)
        buttonFire.disabled = true
        buttonWater.disabled = true
        buttonGround.disabled = true
        selectRestart.style.display = 'block'
    }
    else if (vidaPlayer == 0) {
        createMessage('message',`Perdiste firulays`)
        buttonFire.disabled = true
        buttonWater.disabled = true
        buttonGround.disabled = true
        selectRestart.style.display = 'block'
    }
}

function createMessage(identifier, mensaje) {
    // let sectionMessagge = document.getElementById('message')
    let sectionMessagge = document.getElementById(identifier)
    let parrafo = document.createElement('p')

    parrafo.innerHTML = mensaje

    sectionMessagge.appendChild(parrafo)
}

function restartGame() {
    location.reload()
}

function numberRandom(min, max) {
    random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}

window.addEventListener('load', startPlay)