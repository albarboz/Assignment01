let someMonth
function theMonth() { }
let currentMonth
let summerMonth
let myLibraryFunction


numericLiteral = 1
stringLiteral = '2'
booleanLiteral = true
nullLiteral = null


userScore = 75;
bonusPoints = 20;
minPassingScore = 70;
hasExtraCredit = true;

canGraduate = userScore + bonusPoints >= minPassingScore
console.log(canGraduate);


hoursWorked = 40;
hourlyRate = 15;
overtimeRate = 1.5;
isHoliday = false;

totalPay = (hoursWorked > 40 ?
    (40 * hourlyRate) + ((hoursWorked - 40) * hourlyRate * overtimeRate) :
    (hoursWorked * hourlyRate)) +
    (isHoliday ? 50 : 0)
console.log(totalPay)


strFirstName
strLastName
strAddress
strCity
strState
strZipCode
intYourAge
strReferralSource
booMayWeContactYou


strFirstName = "Alan"
strLastName = "Barboza"
intYourAge = 29


applesFallen = 3 + " apples have fallen."
console.log(applesFallen)


iJustTripped = true + " I just tripped"
console.log(iJustTripped)

numAndBoolean = 6 + true
console.log(numAndBoolean)


someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);


nullValue = null
console.log(nullValue)

undefinedValue
console.log(undefinedValue)


str = "Hello, World!";
console.log(typeof str);

num = 22;
console.log(typeof num);

bool = true;
console.log(typeof bool);

obj = { name: "Alan", age: 29 };
console.log(typeof obj);

undef;
console.log(typeof undef);


alert('Hello ' + 'Alan Barboza' + ', welcome to the JavaScript class!')


name = 'Alan Barboza'
alert('Hello ' + name + ', welcome to the JavaScript class!')


course = 'JavaScript'
alert('Hello ' + name + ', welcome to the' + course + ' class!')


alert('Hello ' + name + '.\nwelcome to the' + course + ' class!')


name = prompt('What is your name?')


course = prompt('What class are you taking?')


var x = 10
var y = 20
console.log(x, y)


var x = 20
console.log(x += 20)


var x = 20
console.log(x *= 5)


var x = 20 % 3
x /= 1
console.log(x)


age = 25
hasLicense = true
canDrive = (age >= 18) && hasLicense
console.log(canDrive)

temp = 50
isRaining = true
shouldGoOutside = (temp >= 60) && !isRaining
console.log(shouldGoOutside)