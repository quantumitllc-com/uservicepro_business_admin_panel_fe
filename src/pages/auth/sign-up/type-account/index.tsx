import { Pane, Heading, minorScale, majorScale } from "evergreen-ui"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

import Logo from "components/logo"
import MyButton from "components/button"
import { Input } from "components/input"
import MyLabel from "components/label"
import MyCheckbox from "components/checkbox"
import MyText from "components/text"
import ButtonBack from "components/button-back"
import { getIconType } from "./helpers/getIconByType"
import styles from "../../styles.module.scss"
import { useSignUp } from "../useSignUp"

const TypeAccount = () => {
	const { type } = useParams()
	const {
		form: { control, handleSubmit },
		isLoading,
		onSubmit,
	} = useSignUp(type)

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
				<Input
					type="email"
					label="Email"
					name="email"
					control={control}
					marginBottom={minorScale(5)}
					placeholder="Email address"
				/>
				<Input
					type="password"
					label="Create password"
					name="password"
					control={control}
					marginBottom={minorScale(5)}
					placeholder="Password"
				/>
				<Input
					type="password"
					label="Confirm password"
					name="confirmPassword"
					control={control}
					marginBottom={minorScale(5)}
					placeholder="Password"
				/>
				<MyCheckbox
					marginTop={minorScale(5)}
					marginBottom={minorScale(5)}
					label={<MyLabel>Remember me</MyLabel>}
				/>
				<MyButton
					isLoading={isLoading}
					onClick={handleSubmit(onSubmit)}
					marginBottom={minorScale(4)}
					appearance="primary"
				>
					Sign up
				</MyButton>
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
