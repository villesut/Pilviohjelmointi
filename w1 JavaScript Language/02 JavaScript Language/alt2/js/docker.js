// koodi:

class Stuff {
	constructor(name, weight) {
		this.name = name;
		this.weight = this.weight;
	}
}

class Bag {
	constructor(maxWeight) {
		this.items = [];
		this.maxWeight = maxWeight;
	}
	add(item) {
		if (item instanceof Stuff && !this.items.includes(item) && this.weight() + item.weight <= this.maxWeight) {
			this.items.push(item);
		}
	}
	weight() {
		return this.items.map(item => item.weight).reduce((total, itemWeight) => (total += itemWeight), 0);
	}
}

class Cargo {
	constructor(maxWeight) {
		this.Cargo = [];
		this.maxWeight = maxWeight;
	}

	add(bag) {
		if (bag instanceof Bag && !this.cargo.includes(bag) && this.weight() + bag.weight() <= this.maxWeight) {
			this.cargo.push(bag);
		}
	}

	weight() {
		return this.cargo.map(bag => bag.weight()).reduce((total, bagWeight) => (total += bagWeight), 0);
	}
}

var stone = new Stuff('stone', 3);
var book = new Stuff('book', 7);
var cotton = new Stuff('cotton', 0.001);

var bag = new Bag(10);
var vuitton = new Bag(3);

var schenker = new Cargo(15);

bag.add(stone);
console.log('laukun paino, pitäisi olla 3: ' + bag.weight());
bag.add(stone); // virhe: "Stuff lisätty jo, ei onnistu!"

bag.add(book);
console.log('laukun paino, pitäisi olla 10: ' + bag.weight());

bag.add(cotton); // virhe: "Liian painava, ei pysty!"

console.log('laukun paino, pitäisi olla 10: ' + bag.weight());

schenker.add(bag);
schenker.add(cotton); // virhe: Vääränlainen esine, ei onnistu!

console.log('Ruuman paino, pitäisi olla 10: ' + schenker.weight());

vuitton.add(cotton);
schenker.add(vuitton);
console.log('Ruuman paino, pitäisi olla noin 10.001: ' + schenker.weight());

cotton.weight = 300;
console.log('Ruuman paino, pitäisi olla 310: ' + schenker.weight()); // hups!
