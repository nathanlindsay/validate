import type { ValidationFunction } from "./types";

const validateEmailAddress: ValidationFunction = (emailAddress) => {
	emailAddress = emailAddress.replace(/\s/, "");

	if (emailAddress.match(/(.+@.+\..+)/)) {
		return emailAddress;
	}

	return null;
};

export default validateEmailAddress;
