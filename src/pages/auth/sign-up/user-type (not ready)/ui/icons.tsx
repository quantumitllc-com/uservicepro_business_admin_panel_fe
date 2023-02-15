import { ReactComponent as Commercial } from "../../components/icons/commercial.svg"
import { ReactComponent as CommercialHover } from "../../components/icons/commercial-hover.svg"
import { ReactComponent as User } from "../../components/icons/user.svg"
import { ReactComponent as UserHover } from "../../components/icons/user-hover.svg"
import { IconSet } from "../../components/icons"

export const commercialIconSet: IconSet = {
	default: <Commercial />,
	hover: <CommercialHover />,
}

export const userIconSet: IconSet = {
	default: <User />,
	hover: <UserHover />,
}
