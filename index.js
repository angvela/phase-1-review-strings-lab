// 1. Define the current user
const currentUser = 'Grace Hopper';

// 2. Create a welcome message using template literal
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// 3. Create an excited welcome message (all uppercase)
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// 4. Create a short greeting using just the first initial
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

