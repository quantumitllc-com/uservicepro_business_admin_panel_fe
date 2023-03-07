import { ReactComponent as IconOrder } from "../../icons/order.svg"
import { ReactComponent as IconHistory } from "../../icons/history.svg"
import { ReactComponent as IconActiveOrder } from "../../icons/active-order.svg"
import { ReactComponent as IconActiveHistory } from "../../icons/active-history.svg"

export const list = [
	{
		path: "/order",
		Icon: IconOrder,
		title: "List of orders",
		IconActive: IconActiveOrder,
	},
	{
		Icon: IconHistory,
		path: "/order/history",
		title: "Archive or orders",
		IconActive: IconActiveHistory,
	},
]
