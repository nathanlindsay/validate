import { ValidationFunction } from "./types";

const validatePostcode: ValidationFunction = (postcode) => {
	if (typeof postcode === "string") {
		postcode = postcode.trimStart().trimEnd().toUpperCase();

		if (postcode.match(/^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/)) {
			return postcode;
		}
	}

	return null;
};

export default validatePostcode;
