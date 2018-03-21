const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {

        return this.cities.map((city) => this.name + ' has lived in' + city);
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());