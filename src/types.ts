interface Validator {
	(value: string): string | null | Promise<string | null>;
}

interface Validation {
	required?: boolean;

	type:
		| "bankAccountNumber"
		| "bankSortCode"
		| "checkbox"
		| "currency"
		| "date"
		| "emailAddress"
		| "mobileNumber"
		| "postcode"
		| "uuid";

	message?: string;
}

export { Validation, Validator };
