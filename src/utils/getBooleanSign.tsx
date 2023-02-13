import { CrossIcon, TickIcon } from "evergreen-ui"

export const getBooleanSign = (item: string | number | boolean) => {
	if (typeof item === "boolean") {
		if (item) {
			return <TickIcon color="var(--green)" />
		}
		return <CrossIcon color="var(--red)" />
	}

	if (item === "") return <CrossIcon color="var(--red)" />
	return item
}
