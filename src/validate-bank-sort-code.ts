import type { Validator } from "./types";

const validateBankSortCode: Validator = (sortCode) => {
	sortCode = sortCode.replace(/[^\d]+/, "");

	if (sortCode.match(/^\d{6}$/)) {
		return sortCode;
	}

	return null;
};

export default validateBankSortCode;
