import { strict } from "assert";

export const Javascript = () => {
    return (
        <>
            <h1>hello</h1>
        </>
    )
}

// Event Delegation

// Instead of adding event listeners to each element, you can add a single event listener to a parent element and use the event object to determine the target element.
// For Example if you have a infinite scroll list and you want to add event listener to each element then you can add event listener to parent element and use event object to determine the target element.
// Code Example:
// <ul id="parent">
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//     <li>Item 4</li>
// <ul />
// // Instead of adding event listeners to each list item, you can add a single event listener to the parent element.
// document.getElementById('parent').addEventListener('click', (event) => {
//     if(event.target.tagName === 'LI'){  // Check if the target element is a list item
//         console.log(event.target.textContent);  // Log the text content of the list item
//     }
// });

// Event Bubbling and Capturing aka Event Propagation aka Event Trickling

// imagine 3 divs inside each other. grandparent, parent and child. If you click on child then event will bubble up to parent and then to grandparent. This is called event bubbling.
// Event bubbling is the process of an event propagating from the target element to the parent elements in the DOM tree.
// Event capturing is the process of an event propagating from the parent elements to the target element in the DOM tree.
// If you click on child then in case of event capturing event will first go to grandparent then to parent and then to child.
// Event bubbling is the default behavior in modern browsers, but you can use the capture option in the addEventListener method to enable event capturing.
// Code Example:
{/* <div id="grandparent">
    <div id="parent">
        <div id="child"></div>
    </div>
</div> */}

// document.getElementById("grandparent").addEventListener("click", () => {
//     console.log("Grandparent clicked");
// }, false);
// document.getElementById("parent").addEventListener("click", () => {
//     console.log("Parent clicked");
// }, false);
// document.getElementById("child").addEventListener("click", () => {
//     console.log("Child clicked");
// }, false);

// false is the default value for the capture option, which means that the event will bubble up from the target element to the parent elements.
// true is used to enable event capturing, which means that the event will propagate from the parent elements to the target element.
// event.stopPropagation() method can be used to stop the event from propagating further in the DOM tree.

// THIS keyword

// behaves differently in different context and in strict/Non strict mode
// console.log(this) // window object in global context
// function myFunction(){
    // console.log(this)
    // }
    // myFunction() // window object in function context in non strict mode
    // 'use strict' undefined in strict mode
    // THis substitution happens in non strict mode
// According to this substitution, if the value of this keyword is undefined or null, this will be replaced with gloabl object
// myFunction()
// window.myFunction();
// if the function is called w/o any refference then it will be null/undefined in strict mode 
// if the function is called with referrnce object then it will be reffernce object in  strict mode in tjis case window 
// In case of an object method, this refers to the owner object.
// const obj = {
//     a: 10,
//     b: function(){
//         console.log(this)
//     }
// }
// obj.function();
// here the log would be {a: 10, b: f}

// Why Doesn't function foo(){ }(); Work as an IIFE?

// In JavaScript, when you declare a function with function foo() { }, it is treated as a function declaration (not an expression).
// Function declarations must have a name and cannot be followed directly by () for invocation.
// The (); attached to it does not make sense to the parser
// Correct Way #1 (Using Parentheses Around the Function)
// (function foo() { 
//     console.log("IIFE executed!"); 
// })();
// Correct Way #2 (Using Arrow Function)
// (() => { 
//     console.log("IIFE executed!"); 
// })();
// Correct Way #3 (Using an Anonymous Function)
// (function() { 
//     console.log("IIFE executed!"); 
// })();

// Difference Between null, undefined, and undeclared

// State	Definition	Example
// null	A value that represents intentional absence of any object value.	let a = null;
// undefined	A variable is declared but has not been assigned a value.	let b; (default undefined)
// undeclared	A variable that has not been declared in the current scope.	console.log(c); // ReferenceError

// What is a Closure in JavaScript?
// A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing.
// 1) How Does a Closure Work?
// function outerFunction() {
//     let count = 0;  // Variable in outer scope

//     return function innerFunction() { 
//         count++;  // Inner function accesses `count`
//         console.log(count);
//     };
// }

// const increment = outerFunction();  // `outerFunction` returns `innerFunction`
// increment(); // 1
// increment(); // 2
// increment(); // 3
// Why Does This Work?
// outerFunction() returns innerFunction, but innerFunction still has access to count even though outerFunction has finished executing.
// count is not lost because JavaScript remembers its lexical scope.
// Data privacy: Variables like count are not accessible from the outside, providing data privacy and preventing external code from modifying them.
// function createCounter() {
//     let count = 0;

//     return {
//         increment: function () {
//             count++;
//             console.log(count);
//         },
//         decrement: function () {
//             count--;
//             console.log(count);
//         }
//     };
// }

// const counter = createCounter();
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1

// console.log(counter.count); // ❌ Undefined (count is private)

// Difference Between .forEach() and .map() in JavaScript

// 1) .forEach() - Executes a Function on Each Element
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(num => {
//     console.log(num * 2); // Just prints values, does not return a new array
// });

// 2) .map() - Creates and Returns a New Array
// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(num => num * 2);

// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Comparison of .map(), .filter(), and .reduce() in JavaScript
// 2) .filter() - Returns a New Array with Elements That Pass a Condition
// .filter() creates a new array containing only elements that meet a condition.
// const numbers = [1, 2, 3, 4, 5];

// const evens = numbers.filter(num => num % 2 === 0);

// console.log(evens); // [2, 4]
// 3) .reduce() - Reduces an Array to a Single Value
// .reduce() accumulates array values into a single output (number, object, array, etc.).
// The callback function takes two arguments:
// Accumulator (stores accumulated result)
// Current Value (current array element)
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum); // 15

// 5) Using All Three Together
// You can combine these methods to perform complex operations in a clean way
// const numbers = [1, 2, 3, 4, 5, 6];

// const sumOfSquares = numbers
//     .filter(num => num % 2 === 0) // [2, 4, 6]
//     .map(num => num * num)        // [4, 16, 36]
//     .reduce((acc, num) => acc + num, 0); // 4 + 16 + 36 = 56

// console.log(sumOfSquares); // 56


// Typical Use Cases for Anonymous Functions in JavaScrip

// 1) As a Callback Function
// Anonymous functions are commonly used as callback functions in methods like .map(), .filter(), .reduce(), setTimeout(), and setInterval().
// const numbers = [1, 2, 3, 4];

// const squared = numbers.map(function(num) {
//     return num * num;
// });

// console.log(squared); // [1, 4, 9, 16]

// Difference between: function Person(){}, var person = Person(), and var person = new Person()?
// 1) function Person() {} (Function Declaration)
// function Person() {
//     console.log("Person function called");
// }
// 2) var person = Person(); (Calling the Function Normally)
// function Person() {
//     console.log("Person function called");
// }

// var person = Person(); // Calls Person function normally
// console.log(person); // undefined
// 3) var person = new Person(); (Using new for Object Creation)
// function Person() {
//     this.name = "John"; // Adds a property to the new object
// }

// var person = new Person(); // Creates a new object
// console.log(person.name); // "John"

// What's the difference between .call and .apply and .bind?

// let name = {
//     firstname: 'John',
//     lastname: 'Doe'
//     printFullname: function() {
//         console.log(this.firstname + ' ' + this.lastname);
//     }
// }

// name.printFullname(); // John Doe

// let name2 = {
//     firstName: 'Sachin',
//     lastName: 'Tendulkar'
// }

// // function borrowing
// name.printFullname.call(name2); // Sachin Tendulkar
//printFullname can also be outside the object and this would still work

// let printFullnameWithHomeTown = function(hometown, state){
//     console.log(this.firstname + ' ' + this.lastname + ' from ' + hometown + ', ' + state);
// }

// printFullnameWithHomeTown.call(name, 'New York', 'New jersey'); // John Doe from New York, New jersey
// printFulljsonameWithHomeTown.apply(name, ['New York', 'New jersey']); // John Doe from New York, New jersey
// let printFullnameWithHomeTown = printFullnameWithHomeTown.bind(name, 'New York', 'New jersey');


// When Would You Use document.write()?

// document.write() is used to write content directly into an HTML document. However, it's rarely recommended because it can overwrite existing content and cause performance issues.
// document.write("<h1>Hello, World!</h1>");


// Hoisting in JavaScript

// getName(); // hello
// console.log(x); // undefined,   if we comment out var x = 7 then it will print not defined (errors out in the console)
// console.log(getName); // function itself
// var x = 7;
// function getName(){
//     console.log("hello");
// }
const getName = () => {
    console.log("hello");
}
const getName2 = () => {
    console.log("hello2");
}
// Even before code starts executing memory is allocated to all variables, functions etc and stores undefined to those variables and code for those functions
// for arrow functions it just behaves as a variable and not a function
// there will be undefined allocated for getName arrow function as well
// console.log(getName); // undefined
// getName2 will also be udeifned
// global execution context is created and memory is allocated to all variables and functions

// What is the difference between == and ===?
// Difference Between == and === in JavaScript
// Operator	Description	Performs Type Conversion?	Example (5 == "5")	Example (5 === "5")
// ==	Loose Equality	✅ Yes	✅ true (converts "5" to 5)	❌ false (different types)
// ===	Strict Equality	❌ No	❌ false	❌ false
// console.log(5 == "5");  // true  (String "5" is converted to Number 5)
// console.log(0 == false); // true  (false is converted to 0)
// console.log(null == undefined); // true  (both treated as "empty" values)


// What is a Single Page Application (SPA)?
// A Single Page Application (SPA) is a web application that dynamically updates content without refreshing the entire page. 
// Instead of loading new pages from the server, SPAs use JavaScript to fetch and update data via AJAX or Fetch API, ensuring a smoother, faster user experience.

// 🔹 Examples: Gmail, Google Maps, Facebook, Twitter, React/Angular/Vue apps.

// How SPAs Work:
// 1️⃣ Initial Load: The browser loads an HTML shell with JavaScript and CSS.
// 2️⃣ Client-Side Routing: JavaScript (React Router, Vue Router, etc.) updates the URL without reloading the page.
// 3️⃣ Data Fetching: API calls fetch content dynamically (e.g., via fetch() or Axios).
// 4️⃣ Rendering: The frontend updates the DOM dynamically.

// How to Make an SPA SEO-Friendly
// ✅ 1) Server-Side Rendering (SSR)

// Use Next.js (for React), Nuxt.js (for Vue) to render pages on the server before sending them to the client.
// Ensures that search engines see full HTML content instead of waiting for JavaScript.
// ✅ 3) Dynamic Rendering

// Serve pre-rendered content for search engine bots and SPA content for users.
// ✅ 5) Ensure Metadata is Set Dynamically

// Use React Helmet for dynamic meta tags:
// js
// Copy
// Edit
// import { Helmet } from "react-helmet";
// <Helmet>
//   <title>About Page</title>
//   <meta name="description" content="This is the about page" />
// </Helmet>;

// My Experience with Promises & Polyfills
// I have extensive experience working with Promises in JavaScript and TypeScript, mainly in React-based applications where asynchronous operations like API calls, event handling, and background tasks are common.
// ✅ Areas Where I've Used Promises:
// 1️⃣ Fetching Data from APIs (Using fetch and Axios)

// Handling API calls efficiently with .then() & async/await
// Managing loading, success, and error states
// Implementing retry mechanisms and timeouts for network resilience

// 2️⃣ Promise Methods (all, race, allSettled, any)

// Parallel execution using Promise.all()
// Cancelling requests with Promise.race()
// Handling multiple API calls where some may fail (Promise.allSettled())

// promise.all([p1, p2, p3])
// returns [val1, val2, val3]
// fullfilled case : returns after the final api returns (wait for all to finish)
// rejected case: returns after the first api call fails

// promise.allSettled([p1, p2, p3])
// same as promise.all in case of all fullfilled
// rejected case : wait for all promises to settle and then return the result

// promise.race([p1, p2 ,p3])
// returns the value of the first settled promise
// if the first promise is rejected then it will return the rejected value

// promise.any([p1, p2, p3])
// it waits for first promise to get successfull
// if all fails it will giver the aggregate list of all errors
// try {
//     const [programData, attributesData, quarterData] = await apiHandler(
//       Promise.all([
//         getProgramIdData(programId, versionId),
//         getAttributesData(programId, versionId),
//         getPeriodDefinition()
//       ])
//     );
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }


// 1️⃣ Callback Hell (Pyramid of Doom)
// 🔴 What is Callback Hell?
// Callback Hell happens when multiple nested callbacks make code difficult to read and maintain. 
// This usually occurs in asynchronous JavaScript when dealing with API calls, event listeners, or timeouts.
// getUser(1, (user) => {
//     getOrders(user.id, (orders) => {
//       getOrderDetails(orders[0].id, (details) => {
//         getProductInfo(details.productId, (product) => {
//           console.log(product);
//         });
//       });
//     });
//   });
//   ✅ Solution: Using async/await (Best Practice)

//   async function fetchProductDetails() {
//     try {
//       const user = await getUser(1);
//       const orders = await getOrders(user.id);
//       const details = await getOrderDetails(orders[0].id);
//       const product = await getProductInfo(details.productId);
//       console.log(product);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
// 2️⃣ Inversion of Control
// 🔵 What is Inversion of Control?
// Inversion of Control (IoC) happens when we give control of execution flow to another function, leading to potential issues like callback hell.

// 🚨 Problem: Loss of Control with Callbacks
// ✅ Solution: Using Promises (Fixing IoC)

// Difference Between Synchronous and Asynchronous Functions
// 1️⃣ Synchronous Functions
// ✅ What is Synchronous Execution?

// Code runs line by line, one operation at a time
// console.log("Start");

// function syncFunction() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }

// syncFunction();
// console.log("End");
// Start
// 0
// 1
// 2
// 3
// 4
// End
// 2️⃣ Asynchronous Functions
// ✅ What is Asynchronous Execution?

// Code does not wait for a task to finish before moving to the next line.
// console.log("Start");

// setTimeout(() => {
//   console.log("Async Task Complete");
// }, 2000);

// console.log("End");
// Start
// End
// Async Task Complete  // (after 2 seconds)


// 🔹 JavaScript Event Loop & Call Stack vs. Task Queue
// 1️⃣ What is the Event Loop?
// The Event Loop is the mechanism that enables asynchronous, non-blocking execution in JavaScript. 
// It continuously monitors and manages the execution of tasks between the Call Stack, Task Queue, and Microtask Queue.
// ✅ Key Responsibilities:

// Checks if the Call Stack is empty.
// If empty, it picks tasks from the Task Queue or Microtask Queue and pushes them onto the Call Stack.
// Ensures JavaScript runs smoothly without freezing the browser.


// 1️⃣ Spread Syntax (...)
// ✅ What is it?
// The spread operator (...) allows expanding an array, object, or iterable into its individual elements.

// ✅ Key Uses:

// Copying arrays/objects
// Merging arrays/objects
// Passing function arguments

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5]; // Expands arr1 into individual elements
// console.log(arr2); // Output: [1, 2, 3, 4, 5]

// 2️⃣ Rest Syntax (...)
// ✅ What is it?
// The rest parameter (...) collects multiple function arguments into a single array.

// ✅ Key Uses:

// Collecting function arguments
// Handling dynamic parameters
// Extracting part of an array/object

// function sum(...nums) { // Collects all arguments into an array
//     return nums.reduce((acc, val) => acc + val, 0);
//   }
  
//   console.log(sum(1, 2, 3, 4)); // Output: 10
  

// 🔹 TypeScript vs JavaScript: Explanation with Code

// 1️⃣ Dynamic vs. Static Typing
// JavaScript does not enforce types, while TypeScript ensures type safety.

// 🔹 JavaScript (Dynamic Typing)

// function multiply(a, b) {
//     return a * b;
//   }
  
//   console.log(multiply(5, "10")); // Output: "5050505050" (Bug!)
//   console.log(multiply(5, 10));   // Output: 50 (Correct)

// 🔹 TypeScript (Static Typing)

// function multiply(a: number, b: number): number {
//     return a * b;
//   }
  
//   // console.log(multiply(5, "10")); // ❌ Compile-time Error: Argument of type 'string' is not assignable to parameter of type 'number'
//   console.log(multiply(5, 10)); // ✅ Output: 50
  
// 2️⃣ Optional Parameters & Default Values


// function greet(name) {
//     return "Hello, " + name;
//   }
  
//   console.log(greet()); // Output: "Hello, undefined"

  
//   function greet(name: string = "Guest"): string {
//     return `Hello, ${name}`;
//   }
  
//   console.log(greet()); // ✅ Output: "Hello, Guest"
//   console.log(greet("Alice")); // ✅ Output: "Hello, Alice"
  

//   3️⃣ Object & Interface Enforcement

//   const user = { name: "Alice", age: 25 };

// function getUserInfo(user) {
//   return `User: ${user.name}, Age: ${user.age}`;
// }

// console.log(getUserInfo(user)); // ✅ Output: "User: Alice, Age: 25"
// console.log(getUserInfo({ name: "Bob" })); // ❌ Output: "User: Bob, Age: undefined" (Bug!)


// interface User {
//     name: string;
//     age: number;
//   }
  
//   function getUserInfo(user: User): string {
//     return `User: ${user.name}, Age: ${user.age}`;
//   }
  
//   // console.log(getUserInfo({ name: "Bob" })); // ❌ Error: Property 'age' is missing
//   console.log(getUserInfo({ name: "Alice", age: 25 })); // ✅ Output: "User: Alice, Age: 25"


// 1️⃣ Difference Between interface and type in TypeScript?
// Both interface and type in TypeScript help define the structure of objects, but they have key differences:

// interface User {
//     name: string;
//     age: number;
//   }
  
//   interface User {
//     email: string; // Merges with the previous definition
//   }
  
//   const user: User = { name: "John", age: 30, email: "john@example.com" };
  
//   type User = {
//     name: string;
//     age: number;
//   };
  
//   type Admin = User & { role: string }; // Using intersection
  
//   const admin: Admin = { name: "Alice", age: 25, role: "Manager" };
  
// 3️⃣ Explain Generics in TypeScript
// Generics allow us to create reusable and type-safe functions, classes, and components.

// ✅ Why Use Generics?
// Prevents using any, which loses type safety.
// Allows flexibility while maintaining type constraints.
// Enables code reusability.

// function identity<T>(value: T): T {
//     return value;
//   }
  
//   const num = identity<number>(10); // Returns 10
//   const str = identity<string>("Hello"); // Returns "Hello"
  

// 3️⃣ How Do You Handle Large Lists Efficiently in React? (Virtualization)
// Rendering large lists (e.g., 10,000+ items) in React can cause performance issues. Virtualization helps by rendering only visible items.

// ✅ Solution: Use react-window or react-virtualized

// import { FixedSizeList as List } from "react-window";

// const Row = ({ index, style }) => (
//   <div style={style}>Row {index}</div>
// );

// const LargeList = () => (
//   <List
//     height={500}
//     itemCount={10000}
//     itemSize={35}
//     width={300}
//   >
//     {Row}
//   </List>
// );
