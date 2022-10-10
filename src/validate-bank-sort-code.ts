import type { ValidationFunction } from "./types";

const validateBankSortCode: ValidationFunction = (sortCode) => {
	sortCode = sortCode.replace(/[^\d]+/, "");

	if (sortCode.match(/^\d{6}$/)) {
		return sortCode;
	}

	return null;
};

export default validateBankSortCode;
