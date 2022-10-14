import type { Validator } from "./types";

const validateCurrency: Validator = (currency) => {
	currency = currency.trim();

	if (currency.match(/^\d+\.\d{2}$/)) {
		return currency;
	}

	return null;
};

export default validateCurrency;
