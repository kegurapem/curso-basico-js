function numberRandom(min=1, max=6) {
    random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}

console.log(numberRandom())