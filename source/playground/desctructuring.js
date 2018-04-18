//Object desctructuring

/*const person = {
	name: "Daniel",
	age: 31,
	location: {
		city: 'Newborough',
		temp: 15
	}
};

const {name:firstName = "Anon", age} = person;

console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;
if(city && temperature) {
	console.log(`It's ${temperature}c in ${city}`);
}

const book = {
	title: 'Ego is the Enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin'
	}
};

const {name: publisherName = 'Self published'} = book.publisher;

console.log(publisherName);

/*-------------------------------------------------------------------------*/
//Array desctructuring

const address = ['12 Test Street', 'Testville', 'Test', '1234'];

const [, city, state = 'Victoria'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, , medium] = item;

console.log(`A medium ${drink} costs ${medium}`);