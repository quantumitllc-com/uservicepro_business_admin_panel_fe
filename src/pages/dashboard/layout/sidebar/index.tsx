import {
	Pane,
	PaneProps,
	minorScale,
	HomeIcon,
	PeopleIcon,
	WrenchIcon,
	PieChartIcon,
	GlobeNetworkIcon,
	TimelineEventsIcon,
	GeolocationIcon,
	CreditCardIcon,
	VolumeUpIcon,
	CalculatorIcon,
	IconComponent,
} from "evergreen-ui"
import { NavLink } from "react-router-dom"

import MyHeading from "components/heading"
import MyText from "components/text"
import styles from "./styles.module.scss"

export interface ISidebarItem {
	url: string
	icon: IconComponent
	text: string
}

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
		url: "location",
		icon: GeolocationIcon,
		text: "Location",
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

const Sidebar = (props: PaneProps) => (
	<Pane {...props}>
		<MyHeading marginBottom={20} fontWeight={700} fontSize={28}>
			Menu
		</MyHeading>
		<nav className={styles.nav}>
			{sidebarMenu.map((item: ISidebarItem) => (
				<Pane key={item.url}>
					{item.url === "activity-map" && (
						<MyHeading marginY={12} fontWeight={700} fontSize={28}>
							Service activity
						</MyHeading>
					)}
					<Pane>
						<ul className={styles.list}>
							<li>
								<NavLink to={item.url}>
									{({ isActive }) => (
										<Pane
											backgroundColor={
												isActive
													? "var(--dark-green)"
													: ""
											}
											className={styles.item}
										>
											<item.icon
												color={
													isActive
														? "var(--white)"
														: "var(--grey)"
												}
												size={20}
											/>
											<MyText
												color={
													isActive
														? "var(--white)"
														: "var(--black)"
												}
												marginLeft={minorScale(3)}
												fontWeight={500}
												fontSize={15}
											>
												{item.text}
											</MyText>
										</Pane>
									)}
								</NavLink>
							</li>
						</ul>
					</Pane>
				</Pane>
			))}
		</nav>
	</Pane>
)

export default Sidebar
