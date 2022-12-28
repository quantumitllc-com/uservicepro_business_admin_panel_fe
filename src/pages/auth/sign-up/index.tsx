import { Pane, Heading, minorScale } from "evergreen-ui"
import { Link } from "react-router-dom"

import Logo from "components/logo"
import { AccountType } from "entities/cards/auth/account-type"
import ButtonBack from "components/button-back"
import {
	briefIconSet,
	userIconSet,
} from "entities/cards/auth/account-type/ui/icons"
import styles from "../styles.module.scss"

const SignUp = () => (
	<Pane className={styles.container}>
		<Logo marginBottom={minorScale(7)} />
		<Heading marginBottom={minorScale(7)} size={900}>
			Account type
		</Heading>
		<Pane display="flex" gap="28px">
			<Link to="business">
				<AccountType
					iconSet={briefIconSet}
					title="Business account"
					text="This type of account only for service owners"
				/>
			</Link>
			<Link to="user-account">
				<AccountType
					iconSet={userIconSet}
					title="User account"
					text="This type of account only for service users"
				/>
			</Link>
		</Pane>
		<ButtonBack />
	</Pane>
)

export default SignUp
