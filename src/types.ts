interface ValidationFunction {
	(value: FormDataEntryValue | string | null): string | null;
}

interface Validation {
	name: string;
	validation: ValidationFunction | undefined;
	message: string;
}

export { Validation, ValidationFunction };
