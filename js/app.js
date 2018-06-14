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

	// for (let i = 1; i <= 20; i++) {
	// 	console.log("Love me, pet me! HSSSSSS!");
		
	// 		let catTalkArr = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
	// 		function randomCatPhrase(arr) {
	// 			if (arr[i] % 2 === 0) {
	// 			console.log(Math.random(catTalkArr[i]));
	// 			};
	// 		};
	// 	};

//  *** I CAN'T FIGURE OUT THE ABOVE, SO I'M MOVING ON. :( ****


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
		const thom = ["Thom", 1000, "Christchurch"]
		const karolin = ["Karolin", 16, "New York"]
		const kristyn = ["Kristyn", 5, "Pittsburgh"]
		const matt = ["Matt H", 186, "Philadelphia"]
	// Matt H. decides that Thom. can't be named "Thom" anymore. Remove "Thom" from the thom array and replace it with "Gameboy".
		thom[0] = "Gameboy";
		console.log(thom);
	// Karolin just had her birthday; change Karolin's array to reflect her being a year older.
		karolin[1] = 17;
		console.log(karolin);
	// Change Matt H's hometown from Philadelphia to "Gotham City".
		matt[2] = "Gotham City";
		console.log(matt);
	// Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".
		kristyn.pop();
		kristyn.push("Brooklyn");
		console.log(kristyn);


