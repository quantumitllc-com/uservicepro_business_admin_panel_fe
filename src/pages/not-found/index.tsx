import { Link } from "react-router-dom"
import { Heading, minorScale, Pane } from "evergreen-ui"

import Logo from "../../components/logo"
import styles from "./styles.module.scss"
import MyButton from "../../components/button"

const NotFound = () => {
	return (
		<Pane className={styles.container}>
			<Logo marginBottom={minorScale(7)} />
			<Heading marginBottom={minorScale(7)} size={900}>
				404 Page not found
			</Heading>
			<Pane>
				<Link to="/employee">
					<MyButton small="true" appearance="primary">
						Back to home
					</MyButton>
				</Link>
			</Pane>
		</Pane>
	)
}

export default NotFound