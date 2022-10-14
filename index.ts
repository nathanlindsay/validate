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
	const errors = {};
	const values = {};

	for (const [name, { required, type, message }] of Object.entries(
		validations
	)) {
		const value = formData.get(name) as string;

		if (required && !value) {
			errors[name] = message || "This is required";
			values[name] = null;
			continue;
		}

		const { validator, defaultMessage } = validators[type];

		const validatedValue = await validator(value);

		if (!validatedValue) {
			errors[name] = message || defaultMessage;
			values[name] = value;
			continue;
		}

		values[name] = validatedValue;
	}

	return {
		errors: Object.keys(errors).length ? errors : null,
		values,
	};
};

export type { Validator };
