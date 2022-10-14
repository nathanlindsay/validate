// I use this for type checking

import { validate } from "./";

const example = async (formData: FormData) =>
	validate(formData, {
		name: {
			message: "Please tell us your name",
		},
		email: {
			type: "emailAddress",
			message: "That email address doesn't look right",
		},
		mobile_number: {
			type: "mobileNumber",
			message: "Please enter the mobile number in the format 07123456789",
		},
	});

const { errors, values } = await example(new FormData());
