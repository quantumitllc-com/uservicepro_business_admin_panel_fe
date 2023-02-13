import {
	CalculatorIcon,
	CreditCardIcon,
	GeolocationIcon,
	GlobeNetworkIcon,
	HomeIcon,
	PeopleIcon,
	PieChartIcon,
	TimelineEventsIcon,
	VolumeUpIcon,
	WrenchIcon,
} from "evergreen-ui"

export const sidebarMenu = [
	{
		url: "/",
		icon: HomeIcon,
		text: "Dashboard",
	},
	{
		url: "employee",
		icon: PeopleIcon,
		text: "Employee",
	},
	{
		url: "services",
		icon: WrenchIcon,
		text: "Services",
	},
	{
		url: "statistics",
		icon: PieChartIcon,
		text: "Statistics",
	},
	{
		url: "activity-map",
		icon: GlobeNetworkIcon,
		text: "Activity Map",
	},
	{
		url: "schedules",
		icon: TimelineEventsIcon,
		text: "Schedules",
	},
	{
		url: "offices",
		icon: GeolocationIcon,
		text: "Offices",
	},
	{
		url: "payment",
		icon: CreditCardIcon,
		text: "Payment",
	},
	{
		url: "ads",
		icon: VolumeUpIcon,
		text: "Ads",
	},
	{
		url: "accounting",
		icon: CalculatorIcon,
		text: "Accounting",
	},
]
