// Easy Going:
// 1. Write a for loop that will log the numbers 1 through 20.
	// for (let i=1; i <= 20; i++) {
	// 	console.log(i);
	// }

// Get Even:
// Write a for loop that will log only the even numbers in 0 through 200.
// Hint: Think about the increment expression.
	// for (let i=0; i <= 200; i+=2) {
	// 	console.log(i);
	// }

// Excited Kitten:
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// Hint: You will need to use Math.random()

// function randomCatResponse(catResponse) {
//          return catResponse[Math.floor(Math.random()*catResponse.length)];
// }

// let catResponse = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

// console.log(randomCatResponse(catResponse));
// console.log(randomCatResponse(catResponse));
// console.log(randomCatResponse(catResponse));
// console.log(randomCatResponse(catResponse));


// for (let i = 1; i < 21; i++) {
//     console.log("Love me, pet me! HSSSSSS!");
//     if (i % 2 === 0) {
//    console.log(randomCatResponse(catResponse));
//     }
// }


// Fizz Buzz
// NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA
	// Write a javascript application that logs all numbers from 1 - 100.
	// If a number is divisible by 3 log "Fizz" instead of the number.
	// If a number is divisible by 5 log "Buzz" instead of the number.
	// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for (let i = 1; i <= 100; i++) {
// 	console.log(i);
// 		if (i % 3 === 0) {
// 			console.log("Fizz");
// 		} else if (i % 5 === 0) {
// 			console.log("Buzz");
// 		} else (i % 3 === 0 && i % 5 === 0) 
// 			console.log("FizzBuzz");
// 	};


// Getting to Know You:
	// Use the following arrays to answer the questions below (name, age, hometown):
		// const thom = ["Thom", 1000, "Christchurch"]
		// const karolin = ["Karolin", 16, "New York"]
		// const kristyn = ["Kristyn", 5, "Pittsburgh"]
		// const matt = ["Matt H", 186, "Philadelphia"]
	// Matt H. decides that Thom. can't be named "Thom" anymore. Remove "Thom" from the thom array and replace it with "Gameboy".
		// thom[0] = "Gameboy";
		// console.log(thom);
	// Karolin just had her birthday; change Karolin's array to reflect her being a year older.
		// karolin[1] = 17;
		// console.log(karolin);
	// Change Matt H's hometown from Philadelphia to "Gotham City".
		// matt[2] = "Gotham City";
		// console.log(matt);
	// Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".
		// kristyn.pop();
		// kristyn.push("Brooklyn");
		// console.log(kristyn);


// Yell at the Ninja Turtles:
	// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
	// Use a for loop to call toUpperCase() on each of them and print out the result.
		// let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
		// 	for (i = 0; i < ninjaTurtles.length; i++) {
		// 		console.log(ninjaTurtles[i].toUpperCase());
		// 	}


// Return of the Closets: 
	// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

		const kristynsCloset = [
		  "left shoe",
		  "cowboy boots",
		  "right sock",
		  "GA hoodie",
		  "green pants",
		  "yellow knit hat",
		  "marshmallow peeps"
		];

	// // Thom's closet is more complicated. Check out this nested data structure!!
		const thomsCloset = [
		[
		    // These are Thom's shirts
		    "grey button-up",
		    "dark grey button-up",
		    "light blue button-up",
		    "blue button-up",
		  ],[
		    // These are Thom's pants
		    "grey jeans",
		    "jeans",
		    "PJs"
		  ],[
		    // Thom's accessories
		    "wool mittens",
		    "wool scarf",
		    "raybans"
		  ]
		];
	// Alien Attire
	// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! 
	// Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. 
		const kristynsShoe = kristynsCloset.splice(0,1);
		console.log(kristynsShoe);
	// Use that variable to add Kristyn's lost shoe to Thom's accessories array.
		thomsCloset[2].push(kristynsShoe);
		console.log(thomsCloset);
	// Dress Us Up
	// Modify your code to put together 3 separate outfits for Kristyn and Thom. 
	// Put the output in a sentence to tell us what we'll be wearing. Mix and match!
		console.log(`Kristyn is wearing ${kristynsCloset[1]}, ${kristynsCloset[2]}, and ${kristynsCloset[3]}.`);	
		console.log(`Thom is wearing ${thomsCloset[0][1]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][0]}.`);
		console.log(`Thom is wearing ${thomsCloset[0][2]}, ${thomsCloset[1][1]}, and ${thomsCloset[2][2]}.`);	
	


