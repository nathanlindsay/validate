import { Validator } from "./types";

const validatePostcode: Validator = (postcode) => {
	postcode = postcode.trimStart().trimEnd().toUpperCase();

	if (postcode.match(/^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/)) {
		return postcode;
	}

	return null;
};

export default validatePostcode;
