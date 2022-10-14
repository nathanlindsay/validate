import type { Validator } from "./types";

const validateEmailAddress: Validator = (emailAddress) => {
	emailAddress = emailAddress.replace(/\s/, "");

	if (emailAddress.match(/(.+@.+\..+)/)) {
		return emailAddress;
	}

	return null;
};

export default validateEmailAddress;
