import { minorScale } from "evergreen-ui"
import { Navigate } from "react-router-dom"

import Accordion from "components/accordion"
import { ReactComponent as BriefcaseSelected } from "components/accordion/icons/briefcase-selected.svg"
import { ReactComponent as Briefcase } from "components/accordion/icons/briefcase.svg"
import { ReactComponent as EnvelopeSelected } from "components/accordion/icons/envelope-selected.svg"
import { ReactComponent as EnvelopeWithCircle } from "components/accordion/icons/envelope.svg"
import { useOpenKey } from "components/accordion/hooks/useOpenKey"
import MyBadge from "components/badge"
import { getTokens } from "utils/getTokens"
import { ReactComponent as Home } from "../icons/home.svg"
import { ReactComponent as User } from "../icons/user.svg"
import { ReactComponent as Envelope } from "../icons/envelope.svg"
import { ReactComponent as HomeHover } from "../icons/home-hover.svg"
import { ReactComponent as UserHover } from "../icons/user-hover.svg"
import { ReactComponent as EnvelopeHover } from "../icons/envelope-hover.svg"
import styles from "../styles.module.scss"

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

function Business() {
	const { openKey, handleToggle } = useOpenKey()
	const tokens = getTokens()
	const { preDashboardInfo } = tokens

	if (tokens.preDashboardInfo.isFinished) {
		return <Navigate to="/" />
	}

	const accordionBusiness = [
		{
			icon: <Briefcase />,
			iconSelected: <BriefcaseSelected />,
			heading: "Set up your profile, add-offices some details",
			dynamicBadge: (
				<MyBadge
					backgroundColor={
						preDashboardInfo.isProfileFilled
							? "var(--green)"
							: "var(--grey)"
					}
					marginLeft={minorScale(5)}
				>
					{preDashboardInfo.isProfileFilled
						? "Finished"
						: "Fill up application"}
				</MyBadge>
			),
			text: "Before work you have to fill up the profile section",
			start: "Start application",
			toggle: !preDashboardInfo.isProfileFilled && handleToggle,
		},
		{
			icon: <EnvelopeWithCircle />,
			iconSelected: <EnvelopeSelected />,
			heading: "Verify your account",
			dynamicBadge: (
				<MyBadge
					backgroundColor={
						preDashboardInfo.isFinished
							? "var(--green)"
							: "var(--grey)"
					}
					marginLeft={minorScale(5)}
				>
					{preDashboardInfo.isFinished
						? "Verified"
						: "Verify your account"}
				</MyBadge>
			),
			text: "Before get to access for all services you have to verify your account",
			start: "Verify by email",
			phone: "Verify by phone",
			toggle: preDashboardInfo.isProfileFilled && handleToggle,
		},
	]

	return (
		<ul className={styles.accordion}>
			{accordionBusiness.map(
				({
					heading,
					icon,
					dynamicBadge,
					iconSelected,
					text,
					start,
					phone,
					toggle,
				}) => (
					<Accordion
						key={heading}
						icon={icon}
						iconSelected={iconSelected}
						heading={heading}
						dynamicBadge={dynamicBadge}
						text={text}
						start={start}
						phone={phone}
						toggle={toggle}
						open={openKey === heading}
					/>
				),
			)}
		</ul>
	)
}

export default Business
