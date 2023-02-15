import { ReactComponent as Home } from "./layout/icons/home.svg"
import { ReactComponent as User } from "./layout/icons/user.svg"
import { ReactComponent as Envelope } from "./layout/icons/envelope.svg"
import { ReactComponent as HomeHover } from "./layout/icons/home-hover.svg"
import { ReactComponent as UserHover } from "./layout/icons/user-hover.svg"
import { ReactComponent as EnvelopeHover } from "./layout/icons/envelope-hover.svg"

export const tabs = [
	{
		icon: <Home />,
		text: "Home",
		selected: <HomeHover />,
	},
	{
		icon: <User />,
		text: "Profile settings",
		selected: <UserHover />,
	},
	{
		icon: <Envelope />,
		text: "Verification",
		selected: <EnvelopeHover />,
	},
]
