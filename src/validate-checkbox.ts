import type { ValidationFunction } from "./types";

const validateCheckbox: ValidationFunction = (checkbox) => {
	if (checkbox === "on") {
		return true;
	}

	return false;
};

export default validateCheckbox;
