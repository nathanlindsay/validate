import { Validation } from "./types";

export default (formData: FormData, validations: Validation[]) => {
	const errors: Record<string, string> = {};
	const values: Record<string, string | boolean> = {};

	for (const { name, validation, message } of validations) {
		// Get the value
		const value = formData.get(name) as string;

		// If there's a validation function
		if (validation) {
			// If the value isn't null
			if (value) {
				// Try to validate the value
				const validatedValue = validation(value);

				// If we get a validated value back
				if (validatedValue !== null) {
					// Add the validated value to the values object
					values[name] = validatedValue;
				}
				// If the value isn't valid
				else {
					// Add the error message to the errors object
					errors[name] = message;
					// Add the original value to the values object
					values[name] = value;
				}
			}
			// If the original value is null
			else {
				if (message) {
					// Add the error message to the errors object
					errors[name] = message;
				}
			}
		}

		// If there's no validation function, just add the value to the values object
		values[name] = value;
	}

	return {
		errors: Object.keys(errors).length ? errors : null,
		values,
	};
};
