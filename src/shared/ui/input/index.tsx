import React, { FC } from "react"
import {
	EyeOpenIcon,
	EyeOffIcon,
	majorScale,
	minorScale,
	Pane,
	PaneProps,
	TextInput,
	TextInputField,
	TextInputProps,
	TextInputFieldProps,
} from "evergreen-ui"

import useTogglePasswordVisibility from "shared/lib/hooks/useTogglePasswordVisibility"
import styles from "./styles.module.scss"
import MyLabel from "../label"

export const MyInput: FC<TextInputProps> = (props) => (
	<TextInput
		height={majorScale(5)}
		width={majorScale(37)}
		className={styles.input}
		{...props}
	/>
)

export const MyInputField: FC<TextInputFieldProps> = (props) => (
	<TextInputField
		width={majorScale(37)}
		className={`${styles.input} ${styles.inputField}`}
		{...props}
	/>
)

export const MyInputPassword: FC<PaneProps> = (props) => {
	const { passwordVisibility, handlePasswordVisibility } =
		useTogglePasswordVisibility()

	const eyeProps = {
		size: 20,
		className: styles.password,
		color: passwordVisibility ? "var(--dark-green)" : "var(--grey)",
		onClick: handlePasswordVisibility,
	}

	return (
		<Pane {...props} className={styles.container}>
			<MyInput
				paddingRight={minorScale(9)}
				placeholder="Password"
				type={passwordVisibility ? "text" : "password"}
			/>
			{passwordVisibility ? (
				<EyeOpenIcon {...eyeProps} />
			) : (
				<EyeOffIcon {...eyeProps} />
			)}
		</Pane>
	)
}

export const MyInputPasswordField: FC<MyInputPasswordFieldProps> = (props) => {
	const { label } = props
	return (
		<Pane
			{...props}
			className={`${styles.container} ${styles.inputPasswordField}`}
		>
			<MyLabel marginBottom={minorScale(2)}>{label}</MyLabel>
			<MyInputPassword />
		</Pane>
	)
}

interface MyInputPasswordFieldProps extends PaneProps {
	label: string
}
