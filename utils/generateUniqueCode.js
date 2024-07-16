import randomatic from 'randomatic';

// Set to store generated codes
let generatedCodes = new Set();

/**
 * Generates a unique alphanumeric-special character code of a specified length.
 * @param {number} length The length of the code to generate.
 * @returns {string} The generated unique code.
 */

const generateUniqueCode = (length) => {
	let code;

	// Generate a new code until it's unique
	do {
		code = randomatic('Aa0', length); // '*' indicates any character (alpha, numeric, special)
	} while (generatedCodes.has(code));

	// Add the generated code to the set of generated codes
	generatedCodes.add(code);

	return code;
};

export default generateUniqueCode;
