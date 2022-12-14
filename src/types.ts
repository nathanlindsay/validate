interface Validator {
	(value: string): string | null | Promise<string | null>;
}

interface Validations {
	[name: string]: {
		required?: boolean;

		type?:
			| "bankAccountNumber"
			| "bankSortCode"
			| "checkbox"
			| "currency"
			| "date"
			| "emailAddress"
			| "mobileNumber"
			| "postcode"
			| "uuid";

		validator?: Validator;

		message?: string;
	};
}

export { Validations, Validator };
