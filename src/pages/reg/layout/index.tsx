import {
	Heading,
	majorScale,
	minorScale,
	Pane,
	Tab,
	Tablist,
} from "evergreen-ui"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router"

import Logo from "shared/ui/logo"
import MyBadge from "shared/ui/badge"
import ButtonLogout from "shared/ui/button-logout"
import { useEffect, useState } from "react"
import styles from "../styles.module.scss"
import { tabsCommercial } from "../commercial"
import { tabsUser } from "../user"
import { tabsBusiness } from "../business"

function getColorType(str: string | undefined) {
	switch (str) {
		case "commercial":
			return "var(--purple)"
		case "user":
			return "var(--green)"
		case "business":
			return "var(--black)"
		default:
			return ""
	}
}

function getTabType(type: string | undefined) {
	switch (type) {
		case "commercial":
			return tabsCommercial
		case "user":
			return tabsUser
		case "business":
			return tabsBusiness
		default:
			return []
	}
}

const LayoutReg = () => {
	const { pathname } = useLocation()
	const type = pathname.split("/")[2]
	const activeUrl = pathname.split("/")[3]
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [tabs] = useState(getTabType(type))

	useEffect(() => {
		function getActiveTab(activeTab: string | undefined): void {
			switch (activeTab) {
				case "profile":
					return setSelectedIndex(1)
				case "email":
					return setSelectedIndex(2)
				case "phone":
					return setSelectedIndex(2)
				case "detail":
					return setSelectedIndex(3)
				case "payment":
					return setSelectedIndex(4)
				default:
					return setSelectedIndex(0)
			}
		}

		getActiveTab(activeUrl)
	}, [activeUrl])

	return (
		<Pane className={styles.container}>
			<nav className={styles.navbar}>
				<Logo />
				<MyBadge
					backgroundColor={getColorType(type)}
					marginBottom={majorScale(13)}
				>
					{type && type[0].toUpperCase() + type.substring(1)} account
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
							key={tab.text}
							disabled
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
								{index === selectedIndex
									? tab.selected
									: tab.icon}{" "}
								{tab.text}
							</Pane>
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
					Get Started
				</Heading>
				<Pane className={styles.accordionContainer}>
					<Outlet />
				</Pane>
			</main>
		</Pane>
	)
}

export default LayoutReg
