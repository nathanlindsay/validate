import type { ValidationFunction } from "./types";

const validateMobileNumber: ValidationFunction = (mobileNumber) => {
	if (typeof mobileNumber === "string") {
		mobileNumber = mobileNumber.replace(/[^\d]+/, "");

		if (mobileNumber.match(/^07\d{9}$/)) {
			return mobileNumber;
		}
	}

	return null;
};

export default validateMobileNumber;
