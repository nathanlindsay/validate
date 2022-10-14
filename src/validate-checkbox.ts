import type { Validator } from "./types";

const validateCheckbox: Validator = (checkbox) => {
	if (checkbox) {
		return "true";
	}

	return "false";
};

export default validateCheckbox;
