import { Text, Pane, Heading, minorScale, majorScale } from "evergreen-ui"
import { Link } from "react-router-dom"

import Logo from "shared/ui/logo"
import MyButton from "shared/ui/button"
import { MyInput, MyInputPassword } from "shared/ui/input"
import styles from "../styles.module.scss"

function SignIn() {
	return (
		<Pane className={styles.container}>
			<Logo marginBottom={minorScale(7)} />
			<Heading marginBottom={minorScale(7)} size={900}>
				Sign in
			</Heading>
			<MyInput
				type="email"
				marginBottom={minorScale(5)}
				placeholder="Email address"
			/>
			<MyInputPassword marginBottom={minorScale(7)} />
			<MyButton marginBottom={minorScale(4)} appearance="primary">
				Sign in
			</MyButton>
			<Text
				marginBottom={majorScale(5)}
				color="muted"
				cursor="pointer"
				size="large"
			>
				Forgot password?
			</Text>
			<Heading marginBottom={minorScale(4)} size={700} fontWeight={400}>
				Don’t have an account?
			</Heading>
			<Link to="/sign-up">
				<MyButton appearance="outlined">Create new account</MyButton>
			</Link>
		</Pane>
	)
}

export default SignIn
