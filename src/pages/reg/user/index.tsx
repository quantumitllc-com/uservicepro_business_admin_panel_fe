import { useState } from "react"
import {
	majorScale,
	Pane,
	Tablist,
	Tab,
	minorScale,
	Heading,
} from "evergreen-ui"

import ButtonLogout from "shared/ui/button-logout"
import Logo from "shared/ui/logo"
import MyBadge from "shared/ui/badge"
import { accordionData } from "entities/accordion/data"
import Accordion from "entities/accordion"
import MyButton from "shared/ui/button"
import styles from "../styles.module.scss"
import { ReactComponent as Home } from "./icons/home.svg"
import { ReactComponent as UserIcon } from "./icons/user.svg"
import { ReactComponent as Envelope } from "./icons/envelope.svg"
import { ReactComponent as Arrow } from "./icons/arrow.svg"
import { ReactComponent as HomeHover } from "./icons/home-hover.svg"
import { ReactComponent as UserHover } from "./icons/user-hover.svg"
import { ReactComponent as EnvelopeHover } from "./icons/envelope-hover.svg"
import { ReactComponent as ArrowHover } from "./icons/arrow-hover.svg"

function User() {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [tabs] = useState([
		{
			icon: <Home />,
			text: "Home",
			selected: <HomeHover />,
		},
		{
			icon: <UserIcon />,
			text: "Profile settings",
			arrow: <Arrow />,
			arrowSelected: <ArrowHover />,
			selected: <UserHover />,
		},
		{
			icon: <Envelope />,
			text: "Email verification",
			selected: <EnvelopeHover />,
		},
	])

	return (
		<Pane className={styles.container}>
			<nav className={styles.navbar}>
				<Logo />
				<MyBadge
					backgroundColor="var(--green)"
					marginBottom={majorScale(13)}
				>
					User account
				</MyBadge>
				<Tablist display="flex" flexDirection="column">
					{tabs.map((tab, index) => (
						<Tab
							display="flex"
							justifyContent="space-between"
							padding="0"
							fontSize="16px"
							fontFamily="var(--lexend)"
							marginRight="0!important"
							key={index}
							onSelect={() => setSelectedIndex(index)}
							isSelected={index === selectedIndex}
							marginBottom={minorScale(7)}
							backgroundColor={
								index === selectedIndex
									? "transparent!important"
									: ""
							}
							color={
								index === selectedIndex
									? "var(--black)!important"
									: "var(--grey)"
							}
							className={styles.tab}
						>
							<Pane display="flex" alignItems="center" gap="12px">
								{index === selectedIndex || index === 3
									? tab.selected
									: tab.icon}{" "}
								{tab.text}
							</Pane>
							{index === selectedIndex || index === 3 ? (
								tab.arrowSelected
							) : (
								<Pane marginRight={minorScale(2)}>
									{tab.arrow}
								</Pane>
							)}
						</Tab>
					))}
				</Tablist>
			</nav>
			<header className={styles.header}>
				<ButtonLogout />
			</header>
			<main className={styles.main}>
				<Heading
					size={700}
					fontWeight={500}
					fontSize={36}
					marginBottom={majorScale(6)}
				>
					Get Started, Clark
				</Heading>
				<Pane className={styles.accordionContainer}>
					<ul className={styles.accordion}>
						{accordionData
							.slice(0, -1)
							.map(
								(
									{
										heading,
										icon,
										iconSelected,
										badge,
										success,
										text,
										start,
										verify,
									},
									index,
								) => (
									<Accordion
										key={index}
										icon={icon}
										iconSelected={iconSelected}
										heading={heading}
										badge={badge}
										success={success}
										text={text}
										start={start}
										verify={verify}
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
				</Pane>
			</main>
		</Pane>
	)
}

export default User
