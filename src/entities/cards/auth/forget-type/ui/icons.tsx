import { ReactComponent as Email } from "../../icons/email.svg"
import { ReactComponent as EmailHover } from "../../icons/email-hover.svg"
import { ReactComponent as Phone } from "../../icons/phone.svg"
import { ReactComponent as PhoneHover } from "../../icons/phone-hover.svg"
import { IconSet } from "../../icons"

export const emailIconSet: IconSet = {
	default: <Email />,
	hover: <EmailHover />,
}

export const phoneIconSet: IconSet = {
	default: <Phone />,
	hover: <PhoneHover />,
}
