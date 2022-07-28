import { ReactComponent as Briefcase } from "../icons/briefcase.svg"
import { ReactComponent as User } from "../icons/user.svg"
import { ReactComponent as Commercial } from "../icons/commercial.svg"

export function getIconType(type: string | undefined) {
	switch (type) {
		case "business":
			return <Briefcase />
		case "user":
			return <User />
		case "commercial":
			return <Commercial />
		default:
			break
	}

	return null
}
