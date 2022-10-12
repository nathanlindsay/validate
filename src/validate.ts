import type { Validation } from "./types";

export default (formData: FormData, validations: Validation[]) => {
	const errors: Record<string, string> = {};
	const values: Record<string, string> = {};

	for (const { name, validation, message } of validations) {
		// Get the value
		const value = formData.get(name) as string;

		// If there's a validation function
		if (validation) {
			// Try to validate the value
			const validatedValue = validation(value);

			// If we get a validated value back
			if (validatedValue) {
				// Add the validated value to the values object
				values[name] = validatedValue;
			}
			// If we don't get a validated value back
			else {
				// Add the error message to the errors object
				errors[name] = message || "That doesn't look right";
			}
		}
		// If there's no validation function but a message, it just means that the value is required
		else if (message) {
			// If the value is empty, add the error message to the errors object
			if (!value) {
				errors[name] = message;
			}
		}
		// If there's no validation function and no message
		else {
			// Add the value to the values object
			values[name] = value;
		}
	}

	return {
		errors: Object.keys(errors).length ? errors : null,
		values,
	};
};
