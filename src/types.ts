interface ValidationFunction {
	(value: string): string | boolean | null;
}

interface Validation {
	name: string;
	validation?: ValidationFunction;
	message: string;
}

export { Validation, ValidationFunction };
