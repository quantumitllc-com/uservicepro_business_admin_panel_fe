import { Pane } from "evergreen-ui"
import { Outlet } from "react-router-dom"

import Header from "./header"
import Sidebar from "./sidebar"
import styles from "./styles.module.scss"

const Dashboard = () => (
	<Pane className={styles.container}>
		<Sidebar className={styles.sidebar} />
		<Pane className={styles.main}>
			<Outlet />
		</Pane>
		<Header className={styles.header} />
	</Pane>
)

export default Dashboard
