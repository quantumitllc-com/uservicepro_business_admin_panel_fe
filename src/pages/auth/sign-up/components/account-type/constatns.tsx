import { ReactComponent as Briefcase } from "icons/auth/briefcase.svg"
import { ReactComponent as BriefcaseHover } from "icons/auth/briefcase-hover.svg"
import { ReactComponent as User } from "icons/auth/user.svg"
import { ReactComponent as UserHover } from "icons/auth/user-hover.svg"
import { IconSet } from "icons/auth"

export const briefIconSet: IconSet = {
	default: <Briefcase />,
	hover: <BriefcaseHover />,
}

export const userIconSet: IconSet = {
	default: <User />,
	hover: <UserHover />,
}
