function compareArrays(arr1, arr2) {
	return arr1.every((elem, index) => arr1.length === arr2.length && elem === arr2[index])
}

function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(person => person.gender === gender).map(person => person.age).reduce((acc, age, index, users) => {
		acc += age;
		if (index === users.length - 1) {
			return acc /= users.length;
		}
		return acc;
	}, 0);
	return result
}