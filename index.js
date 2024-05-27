// Q.1-Given an array of numbers, use the map function with an arrow function to square each element of the array.

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]



// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..


const getGrade = (score) => {
    return score >= 90 ? 'A' :
           score >= 80 ? 'B' :
           score >= 70 ? 'C' :
           score >= 60 ? 'D' :
                         'F';
}

// Example usage:
console.log(getGrade(95)); 
console.log(getGrade(85)); 
console.log(getGrade(75)); 
console.log(getGrade(65)); 
console.log(getGrade(55)); 



// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year


const car = {
    company: 'Toyota',
    model: 'Corolla',
    year: 2020
};


function changeCarYear(carObject, newYear) {
    carObject.year = newYear;
}

changeCarYear(car, 2022);

const { model, year } = car;
console.log(Model: ${model}, Year: ${year}); 



// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num <= 3) return true;  // 2 and 3 are prime numbers
    if (num % 2 === 0 || num % 3 === 0) return false; // eliminate multiples of 2 and 3

    // Check divisors from 5 onwards
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const primeNumbers = numbers.filter(isPrime);

console.log(primeNumbers); // Output: [2, 3, 5, 7, 11, 13, 17, 19]




// Q5 -  State different use cases of map, filter and reduce functions.

//using map() method

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  const names = users.map(user => user.name);
  console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

  //using filter() method
  const olderUsers = users.filter(user => user.age > 30);
console.log(olderUsers); // Output: [{ name: 'Charlie', age: 35 }]


//using reduce() method

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
const fruitCount = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});
console.log(fruitCount); // Output: { apple: 2, banana: 3, orange: 2 }



// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.



async function fetchData(url) {
    try {
        
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
            let data = await response.json();
        
        // Log the result
        console.log(data);
    } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
    }
}


const url = 'https://jsonplaceholder.typicode.com/todos/1';

fetchData(url);



// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.



const person = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        zip: '12345'
    },
    contact: {
        email: 'john.doe@example.com',
        phone: '555-1234'
    }
};


const phoneNumber = person.contact?.phone;

// Log the result
console.log(phoneNumber);


const personWithoutContact = {
    name: 'Jane Smith',
    address: {
        street: '456 Elm St',
        city: 'Othertown',
        zip: '67890'
    }
};


const phoneNumberMissing = personWithoutContact.contact?.phone;


console.log(phoneNumberMissing); // Output: undefined