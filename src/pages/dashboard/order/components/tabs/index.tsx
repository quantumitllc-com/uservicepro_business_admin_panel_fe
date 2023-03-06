import { NavLink } from "react-router-dom"
import { useParams } from "react-router"
import { list } from "./constants"
import styles from "./styles.module.scss"

export const Tabs = () => {
	const { orderId } = useParams()
	return (
		<div className={styles.container}>
			<nav className={styles.nav}>
				{list.map(({ path, Icon, title, IconActive }) => (
					<NavLink key={title} to={path} end>
						{({ isActive }) => {
							const active =
								isActive || (orderId && path === "/order")
							return (
								<div
									className={
										active ? styles.activeTab : styles.tab
									}
								>
									<div className={styles.icon}>
										{active ? <IconActive /> : <Icon />}
									</div>
									{title}
								</div>
							)
						}}
					</NavLink>
				))}
			</nav>
		</div>
	)
}
