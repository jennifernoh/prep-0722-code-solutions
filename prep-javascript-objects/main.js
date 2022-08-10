var person = {
  firstName: 'Bilbo',
  lastName: 'Baggins',
  hobby: 'writing'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('The name of the person is:', fullName);

person.job = 'landlord';
console.log('The job of the person is:', person.job);

person.previousJob = 'farmer';
console.log('The previous job of the person was:', person.previousJob);

console.log(person);
