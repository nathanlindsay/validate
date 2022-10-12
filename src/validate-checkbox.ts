import type { ValidationFunction } from "./types";

const validateCheckbox: ValidationFunction = (checkbox) => {
	if (checkbox) {
		return "true";
	}

	return "false";
};

export default validateCheckbox;
