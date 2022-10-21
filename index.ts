import type { Validations, Validator } from "./src/types";
import validateBankAccountNumber from "./src/validate-bank-account-number";
import validateBankSortCode from "./src/validate-bank-sort-code";
import validateCheckbox from "./src/validate-checkbox";
import validateCurrency from "./src/validate-currency";
import validateDate from "./src/validate-date";
import validateEmailAddress from "./src/validate-email-address";
import validateMobileNumber from "./src/validate-mobile-number";
import validatePostcode from "./src/validate-postcode";
import validateUuid from "./src/validate-uuid";

const validators = {
	bankAccountNumber: {
		validator: validateBankAccountNumber,
		defaultMessage: "Please enter the bank account number in the format 12345678",
	},

	bankSortCode: {
		validator: validateBankSortCode,
		defaultMessage: "Please enter the bank sort code in the format 123456",
	},
	checkbox: {
		validator: validateCheckbox,
		defaultMessage: "This is required",
	},
	currency: {
		validator: validateCurrency,
		defaultMessage: "Please enter the amount in the format 123.45",
	},
	date: {
		validator: validateDate,
		defaultMessage: "Please enter the date in the format dd/mm/yyyy",
	},
	emailAddress: {
		validator: validateEmailAddress,
		defaultMessage: "This email address doesn't look right",
	},
	mobileNumber: {
		validator: validateMobileNumber,
		defaultMessage: "Please enter the mobile number in the format 07123456789",
	},
	postcode: {
		validator: validatePostcode,
		defaultMessage: "Please enter the postcode in the format AB1 2CD",
	},
	uuid: {
		validator: validateUuid,
		defaultMessage: "This doesn't look right",
	},
};

export const validate = async (
	formData: FormData,
	validations: Validations
) => {
	const errors: Record<string, string> = {};
	const values: Record<string, string> = {};

	for (const [name, { required, type, validator, message }] of Object.entries(
		validations
	)) {
		// Throw an error if there's both a type and a validator
		if (type && validator) {
			throw new Error("You can't have both a type and a validator");
		}

		// Get the value
		const value = (formData.get(name)?.toString() ?? "").trim();

		// If the value isn't blank
		if (value) {
			// If there's a type
			if (type) {
				// Get the validator and default message
				const { validator, defaultMessage } = validators[type];

				// Validate the value
				const validatedValue = await validator(value);

				// If the value is valid
				if (validatedValue) {
					// Set the value and continue
					values[name] = validatedValue;
					continue;
				}

				// If the value is invalid
				else {
					// Set the error
					errors[name] = message || defaultMessage;
				}
			}

			// If there's a validator
			else if (validator) {
				// Validate the value
				const validatedValue = await validator(value);

				// If the value is valid
				if (validatedValue) {
					// Set the value and continue
					values[name] = validatedValue;
					continue;
				}

				// If the value is invalid
				else {
					// Set the error
					errors[name] = message || "This doesn't look right";
				}
			}
		}

		// If there is no value
		else {
			// If the field is required
			if (required) {
				// Set the error
				errors[name] = message || "This is required";
			}
		}

		// Set the value as the original value
		// We won't get here if we've validated the value
		values[name] = value;
	}

	return {
		errors: Object.keys(errors).length ? errors : null,
		values,
	};
};

export type { Validator };

export {
	validateBankAccountNumber,
	validateBankSortCode,
	validateCheckbox,
	validateCurrency,
	validateDate,
	validateEmailAddress,
	validateMobileNumber,
	validatePostcode,
	validateUuid,
};
