function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var answer = addAndMultiplyBy5(10, 5);
console.log(answer);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtraction = subtractTwoNumbers(22, 7);
console.log(subtraction);

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}
var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Jennifer', 'Noh');
console.log(fullName);

function cube(number) {
  return number ^ 3;
}
var result = cube(5);
console.log(result);
