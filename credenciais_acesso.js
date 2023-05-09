const alphabetUpper = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const alphabetLower = [..."abcdefghijklmnopqrstuvwxyz"];
const numbers = [..."1234567890"];
const specials = [..."!@#$%&*"];

const generateCode = () => {
    const usableChars = alphabetUpper.concat(alphabetLower, numbers, specials);
    let code = "";

    for (let i = 0; i < 12; i++) {
        code = code + usableChars[Math.floor(Math.random() * usableChars.length)];
    }

    return code;
};

document.write(generateCode());