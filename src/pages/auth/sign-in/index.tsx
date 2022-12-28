import { Text, Pane, Heading, minorScale, majorScale } from "evergreen-ui"
import { Link } from "react-router-dom"

import Logo from "components/logo"
import MyButton from "components/button"
import { Input } from "components/input"
import styles from "../styles.module.scss"
import { useSignIn } from "./useSignIn"

const SignIn = () => {
	const {
		form: { control, handleSubmit },
		isLoading,
		onSubmit,
	} = useSignIn()

	return (
		<Pane className={styles.container}>
			<Logo marginBottom={minorScale(7)} />
			<Heading marginBottom={minorScale(7)} size={900}>
				Sign in
			</Heading>
			<Input
				label=""
				type="email"
				name="email"
				control={control}
				marginBottom={minorScale(5)}
				placeholder="Email address"
			/>
			<Input
				label=""
				type="password"
				name="password"
				control={control}
				marginBottom={minorScale(7)}
				placeholder="Password"
			/>
			{/*<MyInput*/}
			{/*	type="email"*/}
			{/*	marginBottom={minorScale(5)}*/}
			{/*	placeholder="Email address"*/}
			{/*/>*/}
			{/*<MyInputPassword marginBottom={minorScale(7)} />*/}
			<MyButton
				isLoading={isLoading}
				onClick={handleSubmit(onSubmit)}
				marginBottom={minorScale(4)}
				appearance="primary"
			>
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
				<MyButton paddingX={majorScale(9)} appearance="outlined">
					Create new account
				</MyButton>
			</Link>
		</Pane>
	)
}

export default SignIn
