import { Pane, Heading, minorScale, majorScale } from "evergreen-ui"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

import Logo from "shared/ui/logo"
import MyButton from "shared/ui/button"
import { MyInputField, MyInputPasswordField } from "shared/ui/input"
import MyLabel from "shared/ui/label"
import MyCheckbox from "shared/ui/checkbox"
import MyText from "shared/ui/text"
import ButtonBack from "shared/ui/button-back"
import { getIconType } from "./lib/getIconByType"
import styles from "../../styles.module.scss"

function TypeAccount() {
	const { type } = useParams()

	return (
		<Pane className={styles.container}>
			<Logo marginBottom={minorScale(7)} />
			<Heading marginBottom={minorScale(6)} size={900}>
				Sign up
			</Heading>
			<Pane
				display="flex"
				alignItems="center"
				marginBottom={majorScale(5)}
			>
				{getIconType(type)}
				<MyText
					color="var(--dark-green)"
					size="large"
					marginLeft={minorScale(3)}
				>
					Creating {type} account
				</MyText>
			</Pane>
			<Pane className={styles.card}>
				<MyInputField
					type="email"
					label={<MyLabel>Email</MyLabel>}
					marginBottom={minorScale(5)}
					placeholder="Email address"
				/>
				<MyInputPasswordField
					label="Create password"
					marginBottom={minorScale(5)}
				/>
				<MyInputPasswordField label="Confirm password" />
				<MyCheckbox
					marginTop={minorScale(5)}
					marginBottom={minorScale(5)}
					label={<MyLabel>Remember me</MyLabel>}
				/>
				<Link to={`/reg/${type}`}>
					<MyButton marginBottom={minorScale(4)} appearance="primary">
						Sign up
					</MyButton>
				</Link>
			</Pane>
			<MyText color="muted">
				Already have an account?&nbsp;
				<Link to="/sign-in">
					<MyText color="var(--dark-green)">Sign in</MyText>
				</Link>
			</MyText>
			<ButtonBack />
		</Pane>
	)
}

export default TypeAccount
