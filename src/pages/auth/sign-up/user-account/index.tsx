import {
	Pane,
	Heading,
	minorScale
} from "evergreen-ui"
import { Link } from "react-router-dom"

import styles from "../../styles.module.scss"
import Logo from "shared/ui/logo"
import ButtonBack from "shared/ui/button-back"
import { UserType } from "entities/cards/auth/user-type"
import { userIconSet } from "entities/cards/auth/account-type/ui/icons"
import { commercialIconSet } from "entities/cards/auth/user-type/ui/icons"

const UserAccount = () => {
	return (
		<Pane className={styles.container}>
			<Logo marginBottom={minorScale(7)} />
			<Heading
				marginBottom={minorScale(7)}
				size={900}
			>
				User type
			</Heading>
			<Pane
				display="grid"
				gap="28px"
			>
				<Link to="/sign-up/user">
					<UserType
						iconSet={userIconSet}
						title="User account"
					/>
				</Link>
				<Link to="/sign-up/commercial">
					<UserType
						iconSet={commercialIconSet}
						title="Commercial account"
					/>
				</Link>
			</Pane>
			<ButtonBack />
		</Pane>
	)
}

export default UserAccount