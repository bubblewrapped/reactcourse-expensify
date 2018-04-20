database.ref('expenses').on('child_removed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
	console.log(snapshot.key, snapshot.val());
});


/*database.ref('expenses').on('value', (snapshot) => {
	const expenses = [];
	snapshot.forEach((childSnapshot) => {
		expenses.push({
			id: childSnapshot.key,
			...childSnapshot.val()
		});
	});

	console.log(expenses);
});*/

/*database.ref('expenses').once('value').then((snapshot) =>{
	const expenses = [];
	snapshot.forEach((childSnapshot) => {
		expenses.push({
			id: childSnapshot.key,
			...childSnapshot.val()
		});
	});

	console.log(expenses);
});*/

/*database.ref('expenses').push({
	description: 'expense 1',
	note: 'a note',
	amount: 100,
	createdAt: 2018
});*/

//database.ref('notes/-LARQg7LKf1EtATYjwYp').remove();

/*database.ref('notes').push({
	title: 'course topics',
	body: 'a bunch of things'
})*/

/*const firebaseNotes = {
	notes: {
		qweer: {
			title: 'first note',
			body: 'a note'
		},
		qwedsa: {
			title: 'second note',
			body: 'another note'
		}
	}
};

const notes = [{
	id: '12',
	title: 'first note',
	body: 'a note'
}, {
	id: '761a',
	title: 'second note',
	body: 'another note'
}];

database.ref('notes').set(notes);*/

/*database.ref().on('value', (snapshot) => {
	console.log(snapshot.val().name + ' is a ' + snapshot.val().job.title + ' at ' + snapshot.val().job.company);
});*/

/*const onValueChange = database.ref('age').on('value', (snapshot) => {
	console.log(snapshot.val());
}, (e) => {
	console.log('error with data fetching', e);
});

setTimeout(() => {
	database.ref('age').set(34);
}, 3500);

setTimeout(() => {
	database.ref().off('value',onValueChange);
}, 7000);

setTimeout(() => {
	database.ref('age').set(38);
}, 10500);*/

/*database.ref().once('value').then((snapshot) => {
	const val = snapshot.val();
	console.log(val);
}).catch((e) => {
	console.log('Error fetching data', e);
})*/

/*database.ref().set({
	name: 'Daniel Langenakker',
	age: 31,
	stressLevel: 7,
	job: {
		title: 'Software Developer',
		company: 'Google'
	},
	location: {
		city: 'Moe',
		country: 'Australia'
	}
}).then(() => {
	console.log('data is saved');
}).catch((e) => {
	console.log('This failed', e);
});

database.ref().update({
	stressLevel: 9,
	'job/company': 'Amazon',
	'location/city': 'Melbourne'
});*/

/*database.ref('isSingle').remove().then(() =>{
	console.log('isSingle was removed');
}).catch((e) => {
	console.log('Error removing isSingle:', e.message);
});*/