import type { Validator } from "./types";

const validateDate: Validator = (date) => {
	date = date.trim();

	if (date.match(/\d{4}-\d{2}-\d{2}/)) {
		return date;
	}

	return null;
};

export default validateDate;
