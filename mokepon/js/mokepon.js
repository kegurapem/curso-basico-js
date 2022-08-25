const selectContinue = document.getElementById('select-continue')
const selectRestart = document.getElementById('restart-game')
const selectAttack = document.getElementById('select-attack')
const buttonPetPlayer = document.getElementById('button-pet')

const buttonRestart = document.getElementById('button-restart')
const buttonContinue = document.getElementById('button-continue-battle')

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

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

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

let indexAtaqueJugador
let indexAtaqueEnemigo 

let victoriasJugador = 0
let victoriasEnemigo = 0

let vidaPlayer = 3
let vidaEnemigo = 3 

let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocidadX = 0
        this.velocidadY = 0
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

    sectionVerMapa.style.display = 'none'

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
    // selectContinue.style.display = 'block'
    //ESCONDE INTERFAZ-1
    selectMokepon.style.display = 'none'
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
    
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

}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('Fire')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
                createMessage('player-message','🔥')
            } else if (e.target.textContent === '💦') {
                ataqueJugador.push('Water')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
                createMessage('player-message','💦')
            } else {
                ataqueJugador.push('Ground')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
                createMessage('player-message','🌱')
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
    sectionImg.appendChild(img)

    secuenciaAtaque()
}

function enemyAttack() {
    attackRandom = numberRandom(0, ataquesMokeponEnemigo.length - 1)
    if (attackRandom == 0 || attackRandom == 1) {
        attackEnemy.push('Fire')
        createMessage('computer-message','🔥')
    } else if (attackRandom == 3 || attackRandom == 4) {
        attackEnemy.push('Water')
        createMessage('computer-message','💦')
    } else {
        attackEnemy.push('Ground')
        createMessage('computer-message','🌱')
    }
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        winner()
    }
}

function indexAmbosOpentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = attackEnemy[enemigo]
}

function winner() {
    for (let i = 0; i < ataqueJugador.length; i++) {
        indexAmbosOpentes(i, i)
        if(ataqueJugador[i] === attackEnemy[i]) {
            // createMessage('message', 'Empate')
        } else if (ataqueJugador[i] == 'Fire' && attackEnemy[i] == 'Ground') {
            playerWinner = 'YOU WIN'
            victoriasJugador++
            spanVidasPlayer.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == 'Water' && attackEnemy[i] == 'Fire') {
            playerWinner = 'YOU WIN'
            victoriasJugador++
            spanVidasPlayer.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] == 'Ground' && attackEnemy[i] == 'Water') {
            playerWinner = 'YOU WIN'
            victoriasJugador++
            spanVidasPlayer.innerHTML = victoriasJugador
        } else {
            playerWinner = 'ENEMY WIN'
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVictorias()
    selectRestart.style.display = 'block'

}

function revisarVictorias() {
    if (victoriasJugador === victoriasEnemigo) {
        createMessage('message',`Empataste Cuy. Sigue intentando color chaufa`)
    } else if (victoriasJugador > victoriasEnemigo) {
        createMessage('message',`Ganaste firulays`)
    } else {
        createMessage('message',`Perdiste firulays`)
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

function pintarCanvas() {
    capipepo.x = capipepo.x + capipepo.velocidadX
    capipepo.y = capipepo.y + capipepo.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    lienzo.drawImage(
        capipepo.mapaFoto,
        capipepo.x,
        capipepo.y,
        capipepo.ancho,
        capipepo.alto
    )
}

function moverDerecha() {
    capipepo.velocidadX = 4
}

function moverIzquierda() {
    capipepo.velocidadX = -4
}

function moverAbajo() {
    capipepo.velocidadY = 4
}

function moverArriba() {
    capipepo.velocidadY = -4
}

function detenerMovimiento() {
    capipepo.velocidadX = 0
    capipepo.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    console.log(event.key)
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break;
        case 'ArrowDown':
            moverAbajo()
            break;
        case 'ArrowLeft':
            moverIzquierda()
            break;
        case 'ArrowRight':
            moverDerecha()
            break;
        default:
            break;
    }
}

function iniciarMapa() {
    mapa.width = 800
    mapa.height= 600
    intervalo = setInterval(pintarCanvas, 80)

    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

window.addEventListener('load', startPlay)