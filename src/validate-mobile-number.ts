import type { Validator } from "./types";

const validateMobileNumber: Validator = (mobileNumber) => {
	mobileNumber = mobileNumber.replace(/[^\d]+/, "");

	if (mobileNumber.match(/^07\d{9}$/)) {
		return mobileNumber;
	}

	return null;
};

export default validateMobileNumber;
