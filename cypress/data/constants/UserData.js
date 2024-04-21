function generateRandomEmail() {
    const userName = 'thecortest' + Math.floor(Math.random() * 1000); //Generate random number from 0 to 1000 and add to "thecortest"
    const randomLetters = String.fromCharCode(97 + Math.floor(Math.random() * 26)); //Generate a random letter from a to z
    const domain = 'gmail.com';
    return `${userName}${randomLetters}@${domain}`;
}

export const User = {
    firstName: 'MyName',
    lastName: 'MySurname',
    randomEmail: generateRandomEmail(),
    userPassword: 'G123#rw9Kwsx',
};

//const newlyCreatedUser = User.randomEmail;

export const RegisteredUser = {
    firstName: 'MyName',
    lastName: 'MySurname',
    email: 'thecortest365i@gmail.com', //newlyCreatedUser
    password: 'G123#rw9Kwsx',
};
