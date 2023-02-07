import { Pane, PaneProps, minorScale, IconComponent } from "evergreen-ui"
import { NavLink } from "react-router-dom"

import MyHeading from "components/heading"
import MyText from "components/text"
import styles from "./styles.module.scss"
import { sidebarMenu } from "./constants"

export interface ISidebarItem {
	url: string
	icon: IconComponent
	text: string
}

const Sidebar = (props: PaneProps) => (
	<Pane {...props}>
		<MyHeading marginBottom={20} fontWeight={700} fontSize={20}>
			Menu
		</MyHeading>
		<nav className={styles.nav}>
			{sidebarMenu.map((item: ISidebarItem) => (
				<Pane key={item.url}>
					<ul className={styles.list}>
						<li>
							<NavLink to={item.url}>
								{({ isActive }) => (
									<Pane
										backgroundColor={
											isActive ? "var(--dark-green)" : ""
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
			))}
		</nav>
	</Pane>
)

export default Sidebar
