const { stdin } = process;

// Display welcome message
console.log('Welcome to ALX, what is your name?');

// Set encoding to read input as strings
stdin.setEncoding('utf8');

// Handle input data
stdin.on('data', (input) => {
  // Trim whitespace and newlines
  const name = input.trim();
  // Display the name
  console.log(`Your name is: ${name}`);
  // Close the program
  console.log('This important software is now closing');
  // Exit the process
  process.exit();
});

// Handle end of input (e.g., when piped input finishes)
stdin.on('end', () => {
  console.log('This important software is now closing');
});
