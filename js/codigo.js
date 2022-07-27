//sdsdsdsd
function getRandomArbitrary(min=1, max=3) {
    random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}

function eleccion(jugada) {
    if (jugada == 1) {
        resultado = 'PIEDRA'
    } else if(jugada == 2){
        resultado = 'PAPEL'
    } else if(jugada == 3){
        resultado = 'TIJERA'
    } else {
        resultado = 'Ingresa valores 1, 2 o 3'
    }
    return resultado
}

let triunfos = 0;
let derrotas = 0;
let empates = 0;

while(triunfos < 3 && derrotas < 3) {
    //COMBATE
    // let num_random = getRandomArbitrary();
    let num_input = prompt('Ingresa un numero: ')
    let num_pc = getRandomArbitrary();

    // Muestra en pantalla que elegiste
    alert(`Tú eliges ${eleccion(num_input)}`)
    alert(`PC eliges ${eleccion(num_pc)}`)

    if(num_input == num_pc) {
        alert('EMPATE');
        empates= empates + 1
    } else if(num_input ==1 && num_pc == 3) {
        alert('GANASTE')
        triunfos = triunfos + 1
    } else if(num_input == 2 && num_pc == 1) {
        alert('GANASTE')
        triunfos = triunfos + 1
    } else if(num_input == 3 && num_pc == 2) {
        alert('GANASTE')
        triunfos = triunfos + 1
    } else {
        alert('PERDISTE');
        derrotas = derrotas + 1;
    }

}

alert(`Ganaste ${triunfos} veces y perdiste${derrotas} veces y empataste ${empates} veces`)