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

import Logo from "components/logo"
import { Spinner } from "components/spinner"
import MyBadge from "components/badge"
import ButtonLogout from "components/button-logout"
import React, { Suspense, useEffect, useState } from "react"
import { useLogOut } from "services/auth/log-out/useLogOut"
import styles from "../styles.module.scss"
import { tabs } from "../constants"

const LayoutReg = () => {
	const { pathname } = useLocation()
	const activeUrl = pathname.split("/")[3]
	const [selectedIndex, setSelectedIndex] = useState(0)
	const { onSubmit } = useLogOut()

	useEffect(() => {
		function getActiveTab(activeTab: string | undefined): void {
			switch (activeTab) {
				case "user":
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
					backgroundColor="var(--black)"
					marginBottom={majorScale(13)}
				>
					Business account
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
				<ButtonLogout onClick={onSubmit} />
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
					<Suspense fallback={<Spinner />}>
						<Outlet />
					</Suspense>
				</Pane>
			</main>
		</Pane>
	)
}

export default LayoutReg
