const selectContinue = document.getElementById('select-continue')
const selectRestart = document.getElementById('restart-game')
const selectAttack = document.getElementById('select-attack')
const buttonPetPlayer = document.getElementById('button-pet')
// const buttonFire = document.getElementById('button-fire')
// const buttonWater = document.getElementById('button-water')
// const buttonGround = document.getElementById('button-ground')
const buttonRestart = document.getElementById('button-restart')
const buttonContinue = document.getElementById('button-continue-battle')

// const hipodogeInpunt = document.getElementById('Hipodoge')
// const capipepoInpun = document.getElementById('capipepo')
// const ratigueyaInpunt = document.getElementById('ratigueya')
// const langostelvisInpunt = document.getElementById('langostelvis')
// const tucapalmaInpunt = document.getElementById('tucapalma')
// const pydosInpunt = document.getElementById('pydos')
const spanPetPlayer = document.getElementById('pet-player')
const playerChose = document.getElementById('player-chose')
const sectionImg = document.getElementById('player-choose')
const img = document.createElement('img')
const selectMokepon= document.getElementById('select-pet')

const spanPetEnemy = document.getElementById('pet-enemy')
const computerChose = document.getElementById('computer-chose')

const spanVidasPlayer = document.getElementById('vida-player')
const spanVidasEnemigo = document.getElementById('vida-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []
let attackPlayer = []
let attackEnemy = []
let opcionDeMokepones

let mascotaJugador

let ataquesMokepon

let botones = []

let ataqueJugador = []

let hipodogeInpunt
let capipepoInpun
let ratigueyaInpunt
let langostelvisInpunt
let tucapalmaInpunt
let pydosInpunt

let buttonFire
let buttonWater
let buttonGround

let ataquesMokeponEnemigo

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

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)

function startPlay() {
    
    selectAttack.style.display = 'none'
    selectRestart.style.display = 'none'
    selectContinue.style.display = 'none'
    buttonPetPlayer.addEventListener('click', selectPetPlayer)
    // buttonFire.addEventListener('click', attackFire)
    // buttonWater.addEventListener('click', attackWater)
    // buttonGround.addEventListener('click', attackGround)
    buttonRestart.addEventListener('click', restartGame)
    buttonContinue.addEventListener('click', continueGame)

    mokepones.forEach((mokepom) => {
        opcionDeMokepones = `
            <input type="radio" name="pet" id=${mokepom.nombre} >
            <label class="tarjeta-mokepon" for=${mokepom.nombre}>
                <p>${mokepom.nombre} </p>
                <img src=${mokepom.foto} alt=${mokepom.nombre}> 
            </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        hipodogeInpunt = document.getElementById('Hipodoge')
        capipepoInpun = document.getElementById('Capipepo')
        ratigueyaInpunt = document.getElementById('Ratigueya')
        langostelvisInpunt = document.getElementById('Langostelvis')
        tucapalmaInpunt = document.getElementById('Tucapalma')
        pydosInpunt = document.getElementById('Pydos')
    }) 
}


function continueGame() {
    selectContinue.style.display = 'none'
    selectAttack.style.display = 'block'
}
function selectPetPlayer() {
    // SELECT MY PET
    if (hipodogeInpunt.checked === true) {
        spanPetPlayer.innerHTML = hipodogeInpunt.id
        playerChose.innerHTML = hipodogeInpunt.id
        rutaImg = hipodoge.foto

        mascotaJugador = hipodogeInpunt.id
    } else if (capipepoInpun.checked === true) {
        spanPetPlayer.innerHTML = capipepoInpun.id
        playerChose.innerHTML = capipepoInpun.id
        rutaImg = capipepo.foto

        mascotaJugador = capipepoInpun.id
    } else if (ratigueyaInpunt.checked === true) {
        spanPetPlayer.innerHTML = ratigueyaInpunt.id
        playerChose.innerHTML = ratigueyaInpunt.id
        rutaImg = ratigueya.foto

        mascotaJugador = ratigueyaInpunt.id
    } else if (langostelvisInpunt.checked === true) {
        spanPetPlayer.innerHTML = langostelvisInpunt.id
        playerChose.innerHTML = langostelvisInpunt.id
        rutaImg = langostelvis.foto

        mascotaJugador = langostelvisInpunt.id
    } else if (tucapalmaInpunt.checked === true) {
        spanPetPlayer.innerHTML = tucapalmaInpunt.id
        playerChose.innerHTML = tucapalmaInpunt.id
        rutaImg = tucapalma.foto

        mascotaJugador = tucapalmaInpunt.id
    } else if (pydosInpunt.checked === true) {
        spanPetPlayer.innerHTML = pydosInpunt.id
        playerChose.innerHTML = pydosInpunt.id
        rutaImg = pydos.foto

        mascotaJugador = pydosInpunt.id
    } else {
        alert('Escoge p mascota')
    }

    extraerAtaques(mascotaJugador)
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

function extraerAtaques(mascotaJugador) {
    let ataquesNuevo
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            ataquesNuevo = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataquesNuevo)
}

function mostrarAtaques(ataquesNuevo) {
    ataquesNuevo.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="botonAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    buttonFire = document.getElementById('button-fire')
    buttonWater = document.getElementById('button-water')
    buttonGround = document.getElementById('button-ground')

    botones = document.querySelectorAll('.botonAtaque')

    // buttonFire.addEventListener('click', attackFire)
    // buttonWater.addEventListener('click', attackWater)
    // buttonGround.addEventListener('click', attackGround)
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('Fire')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else if (e.target.textContent === '💦') {
                ataqueJugador.push('Water')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            } else {
                ataqueJugador.push('Ground')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
            }
            enemyAttack()
        })
    })
    
}

function selectPetEnemy() {
    let nRandom = numberRandom(0, mokepones.length - 1)
    // console.log(nRandom)
    spanPetEnemy.innerHTML = mokepones[nRandom].nombre
    computerChose.innerHTML = mokepones[nRandom].nombre
    ataquesMokeponEnemigo = mokepones[nRandom].ataques
    rutaImgEnemy = mokepones[nRandom].foto

    let sectionImg = document.getElementById('computer-choose')
    let img = document.createElement('img')
    img.setAttribute('src', rutaImgEnemy)
    // img.src = rutaImg
    sectionImg.appendChild(img)

    secuenciaAtaque()
}


// function attackFire() {
//     // attackPlayer = 'Fire'

//     // ataqueEnemigo = enemyAttack()

//     winner()
// }

// function attackWater() {
//     // attackPlayer = 'Water'

//     // ataqueEnemigo = enemyAttack()

//     winner()
// }

// function attackGround() {
//     // attackPlayer = 'Ground'

//     // ataqueEnemigo = enemyAttack()

//     winner()
// }

function enemyAttack() {
    attackRandom = numberRandom(0, ataquesMokeponEnemigo.length - 1)
    if (attackRandom == 0 || attackRandom == 1) {
        attackEnemy.push('Fire')
    } else if (attackRandom == 3 || attackRandom == 4) {
        attackEnemy.push('Water')
    } else {
        attackEnemy.push('Ground')
    }
    console.log(attackEnemy)
    // winner()
    iniciarPelea()
    return attackEnemy
    

    
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        winner()
    }
}

function winner() {
    for (let i = 0; i < ataqueJugador.length; i++) {
        // console.log(ataqueJugador[i])
        if(ataqueJugador[i] === attackEnemy[i]) {
            console.log('Empate')
        }
        
    }

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