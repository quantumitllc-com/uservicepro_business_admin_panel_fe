import { majorScale, minorScale, Pane } from "evergreen-ui"

import Accordion from "components/accordion"
import MyButton from "components/button"
import { ReactComponent as Briefcase } from "components/accordion/icons/briefcase.svg"
import { ReactComponent as BriefcaseSelected } from "components/accordion/icons/briefcase-selected.svg"
import { ReactComponent as EnvelopeWithCircle } from "components/accordion/icons/envelope.svg"
import { ReactComponent as EnvelopeSelected } from "components/accordion/icons/envelope-selected.svg"
import { useOpenKey } from "components/accordion/hooks/useOpenKey"
import { ReactComponent as Home } from "../icons/home.svg"
import { ReactComponent as UserIcon } from "../icons/user.svg"
import { ReactComponent as Envelope } from "../icons/envelope.svg"
import { ReactComponent as HomeHover } from "../icons/home-hover.svg"
import { ReactComponent as UserHover } from "../icons/user-hover.svg"
import { ReactComponent as EnvelopeHover } from "../icons/envelope-hover.svg"
import styles from "../styles.module.scss"

export const tabsUser = [
	{
		icon: <Home />,
		text: "Home",
		selected: <HomeHover />,
	},
	{
		icon: <UserIcon />,
		text: "Profile settings",
		selected: <UserHover />,
	},
	{
		icon: <Envelope />,
		text: "Verification",
		selected: <EnvelopeHover />,
	},
]

export const accordionUser = [
	{
		icon: <Briefcase />,
		iconSelected: <BriefcaseSelected />,
		heading: "Set up your profile, add some details",
		badgeText: "Fill up application",
		successText: "Finished",
		text: "Before work you have to fill up the profile section",
		start: "Start application",
	},
	{
		icon: <EnvelopeWithCircle />,
		iconSelected: <EnvelopeSelected />,
		heading: "Verify your account",
		badgeText: "Verify your account",
		successText: "Verified by email",
		text: "Before get to access for all services you have to verify your account",
		start: "Verify by email",
		phone: "Verify by phone",
	},
]

function User() {
	const { openKey, handleToggle } = useOpenKey()

	return (
		<>
			<ul className={styles.accordion}>
				{accordionUser.map(
					({
						heading,
						icon,
						iconSelected,
						// badgeText,
						// successText,
						text,
						start,
						phone,
					}) => (
						<Accordion
							key={heading}
							icon={icon}
							iconSelected={iconSelected}
							heading={heading}
							// badgeText={badgeText}
							// successText={successText}
							text={text}
							start={start}
							phone={phone}
							toggle={handleToggle}
							open={openKey === heading}
						/>
					),
				)}
			</ul>
			<Pane>
				<MyButton
					small="true"
					appearance="primary"
					marginLeft={minorScale(5)}
					marginBottom={majorScale(8)}
				>
					Start working
				</MyButton>
			</Pane>
		</>
	)
}

export default User
