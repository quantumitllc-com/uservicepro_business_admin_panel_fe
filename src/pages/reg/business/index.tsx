import { majorScale, minorScale, Pane } from "evergreen-ui"

import Accordion from "entities/accordion"
import MyButton from "shared/ui/button"
import { ReactComponent as BriefcaseSelected } from "entities/accordion/icons/briefcase-selected.svg"
import { ReactComponent as Details } from "entities/accordion/icons/details.svg"
import { ReactComponent as Briefcase } from "entities/accordion/icons/briefcase.svg"
import { ReactComponent as EnvelopeSelected } from "entities/accordion/icons/envelope-selected.svg"
import { ReactComponent as DetailsSelected } from "entities/accordion/icons/details-selected.svg"
import { ReactComponent as Money } from "entities/accordion/icons/money.svg"
import { ReactComponent as MoneySelected } from "entities/accordion/icons/money-selected.svg"
import { ReactComponent as EnvelopeWithCircle } from "entities/accordion/icons/envelope.svg"
import { useOpenKey } from "entities/accordion/hooks/useOpenKey"
import { ReactComponent as Home } from "../icons/home.svg"
import { ReactComponent as User } from "../icons/user.svg"
import { ReactComponent as ToDo } from "../icons/todo.svg"
import { ReactComponent as Envelope } from "../icons/envelope.svg"
import { ReactComponent as HomeHover } from "../icons/home-hover.svg"
import { ReactComponent as UserHover } from "../icons/user-hover.svg"
import { ReactComponent as ToDoHover } from "../icons/todo-hover.svg"
import { ReactComponent as EnvelopeHover } from "../icons/envelope-hover.svg"
import { ReactComponent as Payment } from "../icons/payment.svg"
import { ReactComponent as PaymentSelected } from "../icons/payment-selected.svg"
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
	{
		icon: <ToDo />,
		text: "Business details",
		selected: <ToDoHover />,
	},
	{
		icon: <Payment />,
		text: "Payment method",
		selected: <PaymentSelected />,
	},
]

export const accordionBusiness = [
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
	{
		icon: <Details />,
		iconSelected: <DetailsSelected />,
		heading: "Set up your Categories, add some categories",
		badgeText: "Add category",
		successText: "Finished",
		text: "Before work you have to add category of service which you will provide",
		start: "Add category",
	},
	{
		icon: <Money />,
		iconSelected: <MoneySelected />,
		heading: "Add payment method",
		badgeText: "Add payment options",
		successText: "Payment method verified",
		text: "Before work in platform you have to add payment options.",
		start: "Add payment",
	},
]

function Business() {
	const { openKey, handleToggle } = useOpenKey()

	return (
		<>
			<ul className={styles.accordion}>
				{accordionBusiness.map(
					({
						heading,
						icon,
						iconSelected,
						badgeText,
						successText,
						text,
						start,
						phone,
					}) => (
						<Accordion
							key={heading}
							icon={icon}
							iconSelected={iconSelected}
							heading={heading}
							badgeText={badgeText}
							successText={successText}
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
					marginTop={majorScale(8)}
				>
					Start working
				</MyButton>
			</Pane>
		</>
	)
}

export default Business
