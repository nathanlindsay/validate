import type { ValidationFunction } from "./types";

const validateDate: ValidationFunction = (date) => {
	if (typeof date === "string") {
		date = date.trim();

		if (date.match(/\d{4}-\d{2}-\d{2}/)) {
			return date;
		}
	}

	return null;
};

export default validateDate;
