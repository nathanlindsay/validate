import type { ValidationFunction } from "./types";

const validateBankAccountNumber: ValidationFunction = (accountNumber) => {
	if (typeof accountNumber === "string") {
		accountNumber = accountNumber.replace(/[^\d]+/, "");

		if (accountNumber.match(/^\d{8}$/)) {
			return accountNumber;
		}
	}

	return null;
};

export default validateBankAccountNumber;
