import type { ValidationFunction } from "./types";

const validateCurrency: ValidationFunction = (currency) => {
	if (typeof currency === "string") {
		currency = currency.trim();

		if (currency.match(/^\d+\.\d{2}$/)) {
			return currency;
		}
	}

	return null;
};

export default validateCurrency;
