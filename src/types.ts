interface ValidationFunction {
	(value: string): string | null;
}

interface Validation {
	name: string;
	validation?: ValidationFunction;
	message?: string;
}

export { Validation, ValidationFunction };
