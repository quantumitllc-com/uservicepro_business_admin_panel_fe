import { ReactComponent as Briefcase } from "./icons/briefcase.svg"
import { ReactComponent as Envelope } from "./icons/envelope.svg"
import { ReactComponent as Details } from "./icons/details.svg"
import { ReactComponent as BriefcaseSelected } from "./icons/briefcase-selected.svg"
import { ReactComponent as EnvelopeSelected } from "./icons/envelope-selected.svg"
import { ReactComponent as DetailsSelected } from "./icons/details-selected.svg"
import { ReactComponent as Money } from "./icons/money.svg"
import { ReactComponent as MoneySelected } from "./icons/moneySelected.svg"

export const accordionData = [
	{
		icon: <Briefcase />,
		iconSelected: <BriefcaseSelected />,
		heading: "Set up your profile, add some details",
		badge: "Fill up application",
		success: "Finished",
		text: "Before work you have to fill up the profile section",
		start: "Start application",
	},
	{
		icon: <Envelope />,
		iconSelected: <EnvelopeSelected />,
		heading: "Verify your account",
		badge: "Verify your account",
		success: "Verified by email",
		text: "Before get to access for all services you have to verify your account",
		start: "Verify by email",
		verify: "Verify by phone",
	},
	{
		icon: <Details />,
		iconSelected: <DetailsSelected />,
		heading: "Set up your company details",
		badge: "Not finished yet",
		success: "Finished",
		text: "Before work you have to fill up the company details",
		start: "Start application",
	},
]

export const accordionDataBusiness = [
	{
		icon: <Briefcase />,
		iconSelected: <BriefcaseSelected />,
		heading: "Set up your profile, add some details",
		badge: "Fill up application",
		success: "Finished",
		text: "Before work you have to fill up the profile section",
		start: "Start application",
	},
	{
		icon: <Envelope />,
		iconSelected: <EnvelopeSelected />,
		heading: "Verify your account",
		badge: "Verify your account",
		success: "Verified by email",
		text: "Before get to access for all services you have to verify your account",
		start: "Verify by email",
		verify: "Verify by phone",
	},
	{
		icon: <Details />,
		iconSelected: <DetailsSelected />,
		heading: "Set up your Categories, add some categories",
		badge: "Add category",
		success: "Finished",
		text: "Before work you have to add category of service which you will provide",
		start: "Add category",
	},
	{
		icon: <Money />,
		iconSelected: <MoneySelected />,
		heading: "Add payment method",
		badge: "Add payment options",
		success: "Payment method verified",
		text: "Before work in platform you have to add payment options.",
		start: "Add payment",
	},
]
