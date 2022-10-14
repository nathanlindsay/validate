import type { Validator } from "./types";

const validateUuid: Validator = (uuid) => {
	uuid = uuid.replace(/\s/, "").toLowerCase();

	if (
		uuid.match(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
	) {
		return uuid;
	}

	return null;
};

export default validateUuid;
