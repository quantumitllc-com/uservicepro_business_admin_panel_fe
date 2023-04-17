import { minorScale } from "evergreen-ui"
import { Navigate } from "react-router-dom"

import Accordion from "pages/pre-dashboard/components/accordion"
import { ReactComponent as BriefcaseSelected } from "pages/pre-dashboard/components/accordion/icons/briefcase-selected.svg"
import { ReactComponent as Briefcase } from "pages/pre-dashboard/components/accordion/icons/briefcase.svg"
import { ReactComponent as EnvelopeSelected } from "pages/pre-dashboard/components/accordion/icons/envelope-selected.svg"
import { ReactComponent as EnvelopeWithCircle } from "pages/pre-dashboard/components/accordion/icons/envelope.svg"
import { useOpenKey } from "pages/pre-dashboard/components/accordion/hooks/useOpenKey"
import MyBadge from "components/badge"
import { getTokens } from "utils/getTokens"

import styles from "../styles.module.scss"

function Business() {
	const { openKey, handleToggle } = useOpenKey()
	const tokens = getTokens()
	const { preDashboardInfo } = tokens

	if (tokens.preDashboardInfo.isFinished) {
		return <Navigate to="/employee" />
	}

	const accordionBusiness = [
		{
			icon: <Briefcase />,
			iconSelected: <BriefcaseSelected />,
			heading: "Set up your user, add-offices some detail",
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
			text: "Before work you have to fill up the user section",
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
