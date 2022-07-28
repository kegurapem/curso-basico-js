function startPlay() {
    let buttonPetPlayer = document.getElementById('button-pet')
    buttonPetPlayer.addEventListener('click', selectPetPlayer)
}

function selectPetPlayer() {
    alert('seleccionaste tu mascota')
}

window.addEventListener('load', startPlay)