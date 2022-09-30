interface ValidationFunction {
	(value: FormDataEntryValue | string | null): string | null;
}

interface Validation {
	name: string;
	validation?: ValidationFunction;
	message: string;
}

export { Validation, ValidationFunction };
