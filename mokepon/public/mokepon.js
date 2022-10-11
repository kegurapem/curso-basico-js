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
let mascotaJugadorObjeto

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
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 40
const anchoMaximoDelMapa = 850

let jugadorId = null
let mokeponesEnemigos = []
let enemigoId = null

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 400/600
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, id = null) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 80
        this.alto = 80
        this.x = numberRandom(0, mapa.width - this.ancho)
        this.y = numberRandom(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let  hipodoge = new Mokepon('Hipodoge', './assets/1.png', 5, './assets/hipodoge.png')
let  capipepo = new Mokepon('Capipepo', './assets/2.png', 5, './assets/capipepo.png')
let  ratigueya = new Mokepon('Ratigueya', './assets/3.png', 5, './assets/ratigueya.png')

// let  hipodogeEnemigo = new Mokepon('Hipodoge', './assets/1.png', 5, './assets/hipodoge.png')
// let  capipepoEnemigo = new Mokepon('Capipepo', './assets/2.png', 5, './assets/capipepo.png')
// let  ratigueyaEnemigo = new Mokepon('Ratigueya', './assets/3.png', 5, './assets/ratigueya.png')

// hipodoge.ataques.push(
//     {nombre: '💦', id:'button-water'},
//     {nombre: '💦', id:'button-water'},
//     {nombre: '💦', id:'button-water'},
//     {nombre: '🔥', id:'button-fire'},
//     {nombre: '🌱', id:'button-ground'}
// )

const HPODOGE_ATAQUES = [
    {nombre: '💦', id:'button-water'},
    {nombre: '💦', id:'button-water'},
    {nombre: '💦', id:'button-water'},
    {nombre: '🔥', id:'button-fire'},
    {nombre: '🌱', id:'button-ground'}
]
hipodoge.ataques.push(...HPODOGE_ATAQUES)

const CAPIPEPO_ATAQUES = [
    {nombre: '🔥', id:'button-fire'},
    {nombre: '🔥', id:'button-fire'},
    {nombre: '🔥', id:'button-fire'},
    {nombre: '💦', id:'button-water'},
    {nombre: '🌱', id:'button-ground'}
]
capipepo.ataques.push(...CAPIPEPO_ATAQUES)

const RATIGUEYA_ATAQUES = [
    {nombre: '🌱', id:'button-ground'},
    {nombre: '🌱', id:'button-ground'},
    {nombre: '🌱', id:'button-ground'},
    {nombre: '💦', id:'button-water'},
    {nombre: '🔥', id:'button-fire'},
]
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)

mokepones.push(hipodoge, capipepo, ratigueya)

function startPlay() {
    
    selectAttack.style.display = 'none'
    selectRestart.style.display = 'none'
    selectContinue.style.display = 'none'

    sectionVerMapa.style.display = 'none'

    buttonPetPlayer.addEventListener('click', selectPetPlayer)
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
    }) 

    unirseAlJuego()
}

function unirseAlJuego() {
    fetch('http://localhost:8080/unirse')
        .then(function (res) {
            if (res.ok) {
                res.text()
                    .then(function (respuesta){
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
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
    } else {
        alert('Escoge p mascota')
    }

    seleccionarMokepon(mascotaJugador)

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

function seleccionarMokepon(mascotaJugador) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepom: mascotaJugador
        })
    })
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
            if (ataqueJugador.length === 5) {
                enviarAtaques()
            }
        })
    })
    
}

function enviarAtaques() {
    fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`, {
        method: 'post',
        headers: {
            "Content Type": "application/json" 
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques() {
    fetch(`http://localhost:8080/mokepon/${enemigoId}/ataques`)
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function ({ ataques }) {
                        if (ataques.length === 5) {
                            enemyAttack = ataques
                            winner()
                        }
                    })
            }
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
    clearInterval(intervalo)

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
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

    mokeponesEnemigos.forEach(function (mokepon) {
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })
}

function enviarPosicion(x, y) {
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            x,
            y
        })
    })
     .then(function (res) {
        if (res.ok) {
            res.json()
                .then(function ({ enemigos }) {
                    console.log(enemigos)
                    mokeponesEnemigos = enemigos.map(function(enemigo){
                        let mokeponEnemigo = null
                        const mokeponNombre = enemigo.mokepom.nombre || ''
                        if (mokeponNombre === 'Hipodoge') {
                            mokeponEnemigo = new Mokepon('Hipodoge', './assets/1.png', 5, './assets/hipodoge.png', enemigo.id)
                        } else if (mokeponNombre === 'Capipepo') {
                            mokeponEnemigo = new Mokepon('Capipepo', './assets/2.png', 5, './assets/capipepo.png', enemigo.id)
                        } else if (mokeponNombre === 'Ratigueya') {
                            mokeponEnemigo = new Mokepon('Ratigueya', './assets/3.png', 5, './assets/ratigueya.png', enemigo.id)                        
                        }

                        mokeponEnemigo.x = enemigo.x
                        mokeponEnemigo.y = enemigo.y

                        return mokeponEnemigo
                    })
                    
                    
                    
                })
        }
     })
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 16
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -16
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 16
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -16
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
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
    // mapa.width = 800
    // mapa.height= 600
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 80)

    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
           return mokepones[i]
        }
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

     if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
     ) {
        return
     }

     detenerMovimiento()
     console.log('Se detecto colision')
     enemigoId = enemigo.id
     selectAttack.style.display = 'block'
     sectionVerMapa.style.display = 'none'
    //  alert('Hay Colision' + enemigo.nombre)
}

window.addEventListener('load', startPlay)