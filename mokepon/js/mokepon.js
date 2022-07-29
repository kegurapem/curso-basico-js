function startPlay() {
    let buttonPetPlayer = document.getElementById('button-pet')
    buttonPetPlayer.addEventListener('click', selectPetPlayer)
}

function numberRandom(min=1, max=6) {
    random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
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
}

function selectPetEnemy() {
    let spanPetEnemy = document.getElementById('pet-enemy')
    let nRandom = numberRandom()
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

window.addEventListener('load', startPlay)