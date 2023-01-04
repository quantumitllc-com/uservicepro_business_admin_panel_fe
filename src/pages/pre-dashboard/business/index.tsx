// import { majorScale, minorScale, Pane } from "evergreen-ui"

import Accordion from "components/accordion"
import { ReactComponent as BriefcaseSelected } from "components/accordion/icons/briefcase-selected.svg"
// import { ReactComponent as Details } from "entities/accordion/icons/details.svg"
import { ReactComponent as Briefcase } from "components/accordion/icons/briefcase.svg"
import { ReactComponent as EnvelopeSelected } from "components/accordion/icons/envelope-selected.svg"
// import { ReactComponent as DetailsSelected } from "entities/accordion/icons/details-selected.svg"
// import { ReactComponent as Money } from "entities/accordion/icons/money.svg"
// import { ReactComponent as MoneySelected } from "entities/accordion/icons/money-selected.svg"
import { ReactComponent as EnvelopeWithCircle } from "components/accordion/icons/envelope.svg"
import { useOpenKey } from "components/accordion/hooks/useOpenKey"
import MyBadge from "components/badge"
import { minorScale } from "evergreen-ui"
import { getTokens } from "utils/getTokens"
import { ReactComponent as Home } from "../icons/home.svg"
import { ReactComponent as User } from "../icons/user.svg"
// import { ReactComponent as ToDo } from "../icons/todo.svg"
import { ReactComponent as Envelope } from "../icons/envelope.svg"
import { ReactComponent as HomeHover } from "../icons/home-hover.svg"
import { ReactComponent as UserHover } from "../icons/user-hover.svg"
// import { ReactComponent as ToDoHover } from "../icons/todo-hover.svg"
import { ReactComponent as EnvelopeHover } from "../icons/envelope-hover.svg"
// import { ReactComponent as Payment } from "../icons/payment.svg"
// import { ReactComponent as PaymentSelected } from "../icons/payment-selected.svg"
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
	// {
	// 	icon: <ToDo />,
	// 	text: "Business details",
	// 	selected: <ToDoHover />,
	// },
	// {
	// 	icon: <Payment />,
	// 	text: "Payment method",
	// 	selected: <PaymentSelected />,
	// },
]

function Business() {
	const { openKey, handleToggle } = useOpenKey()
	const tokens = getTokens()
	const { preDashboardInfo } = tokens

	const accordionBusiness = [
		{
			icon: <Briefcase />,
			iconSelected: <BriefcaseSelected />,
			heading: "Set up your profile, add some details",
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
			staticBadge: (
				<MyBadge
					backgroundColor="var(--grey)"
					marginLeft={minorScale(5)}
				>
					Verify your account
				</MyBadge>
			),
			text: "Before get to access for all services you have to verify your account",
			start: "Verify by email",
			phone: "Verify by phone",
			toggle: preDashboardInfo.isProfileFilled && handleToggle,
		},
		// {
		// 	icon: <Details />,
		// 	iconSelected: <DetailsSelected />,
		// 	heading: "Set up your Categories, add some categories",
		// 	badgeText: "Add category",
		// 	successText: "Finished",
		// 	text: "Before work you have to add category of service which you will provide",
		// 	start: "Add category",
		// },
		// {
		// 	icon: <Money />,
		// 	iconSelected: <MoneySelected />,
		// 	heading: "Add payment method",
		// 	badgeText: "Add payment options",
		// 	successText: "Payment method verified",
		// 	text: "Before work in platform you have to add payment options.",
		// 	start: "Add payment",
		// },
	]

	return (
		<ul className={styles.accordion}>
			{accordionBusiness.map(
				({
					heading,
					icon,
					staticBadge,
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
						staticBadge={staticBadge}
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
