import { majorScale, minorScale } from "evergreen-ui"

import Accordion from "entities/accordion"
import MyButton from "shared/ui/button"
import { ReactComponent as Briefcase } from "entities/accordion/icons/briefcase.svg"
import { ReactComponent as BriefcaseSelected } from "entities/accordion/icons/briefcase-selected.svg"
import { ReactComponent as EnvelopeWithCircle } from "entities/accordion/icons/envelope.svg"
import { ReactComponent as EnvelopeSelected } from "entities/accordion/icons/envelope-selected.svg"
import { ReactComponent as Details } from "entities/accordion/icons/details.svg"
import { ReactComponent as DetailsSelected } from "entities/accordion/icons/details-selected.svg"
import { ReactComponent as Home } from "../icons/home.svg"
import { ReactComponent as User } from "../icons/user.svg"
import { ReactComponent as ToDo } from "../icons/todo.svg"
import { ReactComponent as Envelope } from "../icons/envelope.svg"
import { ReactComponent as HomeHover } from "../icons/home-hover.svg"
import { ReactComponent as UserHover } from "../icons/user-hover.svg"
import { ReactComponent as ToDoHover } from "../icons/todo-hover.svg"
import { ReactComponent as EnvelopeHover } from "../icons/envelope-hover.svg"
import styles from "../styles.module.scss"

export const tabsCommercial = [
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
		text: "Email verification",
		selected: <EnvelopeHover />,
	},
	{
		icon: <ToDo />,
		text: "Business details",
		selected: <ToDoHover />,
	},
]

export const accordionCommercial = [
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
		heading: "Set up your company details",
		badgeText: "Not finished yet",
		successText: "Finished",
		text: "Before work you have to fill up the company details",
		start: "Start application",
	},
]

const Commercial = () => (
	<>
		<ul className={styles.accordion}>
			{accordionCommercial.map(
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
					/>
				),
			)}
		</ul>
		<MyButton
			small="true"
			appearance="primary"
			marginLeft={minorScale(5)}
			marginBottom={majorScale(8)}
		>
			Start working
		</MyButton>
	</>
)

export default Commercial
