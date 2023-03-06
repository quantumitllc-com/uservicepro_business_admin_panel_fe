import { ReactComponent as IconList } from "../../icons/list.svg"
import { ReactComponent as IconMap } from "../../icons/map.svg"
import { ReactComponent as IconActiveList } from "../../icons/active-list.svg"
import { ReactComponent as IconActiveMap } from "../../icons/active-map.svg"

export const list = [
	{
		path: "/new-activity-map",
		Icon: IconMap,
		title: "Map",
		IconActive: IconActiveMap,
	},
	{
		Icon: IconList,
		path: "/new-activity-map/list",
		title: "List view",
		IconActive: IconActiveList,
	},
]
