import type { Validator } from "./types";

const validateBankAccountNumber: Validator = (accountNumber) => {
	accountNumber = accountNumber.replace(/[^\d]+/, "");

	if (accountNumber.match(/^\d{8}$/)) {
		return accountNumber;
	}

	return null;
};

export default validateBankAccountNumber;
