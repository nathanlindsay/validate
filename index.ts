import type { ValidationFunction } from "./src/types";
import validate from "./src/validate";
import validateBankAccountNumber from "./src/validate-bank-account-number";
import validateBankSortCode from "./src/validate-bank-sort-code";
import validateCurrency from "./src/validate-currency";
import validateDate from "./src/validate-date";
import validateEmailAddress from "./src/validate-email-address";
import validateMobileNumber from "./src/validate-mobile-number";
import validatePostcode from "./src/validate-postcode";
import validateUuid from "./src/validate-uuid";

export {
	validate,
	validateBankAccountNumber,
	validateBankSortCode,
	validateCurrency,
	validateDate,
	validateEmailAddress,
	validateMobileNumber,
	validatePostcode,
	validateUuid,
	ValidationFunction,
};
