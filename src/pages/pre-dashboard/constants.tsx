import { ReactComponent as Home } from "./icons/home.svg"
import { ReactComponent as User } from "./icons/user.svg"
import { ReactComponent as Envelope } from "./icons/envelope.svg"
import { ReactComponent as HomeHover } from "./icons/home-hover.svg"
import { ReactComponent as UserHover } from "./icons/user-hover.svg"
import { ReactComponent as EnvelopeHover } from "./icons/envelope-hover.svg"

export const tabsBusiness = [
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
