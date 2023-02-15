import { Heading, Label, majorScale, minorScale, Pane } from "evergreen-ui"

import { Input } from "components/input"
import MyText from "components/text"
import MyButton from "components/button"
import { ReactComponent as EmailHover } from "pages/auth/sign-up/components/icons/email-hover.svg"
import { ButtonBack } from "../components/button-back"
import { Header } from "../components/header"

import { useEmail } from "./useEmail"

const Email = () => {
	const {
		onSubmit,
		isLoading,
		form: { control, handleSubmit },
	} = useEmail()

	return (
		<Pane flexGrow={1} display="flex" height="100vh" flexDirection="column">
			<Header />
			<Pane
				flexGrow={1}
				display="flex"
				overflowY="auto"
				alignItems="center"
				flexDirection="column"
				paddingTop={majorScale(8)}
				paddingBottom={majorScale(8)}
			>
				<Pane
					display="flex"
					minWidth="600px"
					borderRadius={20}
					background="white"
					alignItems="center"
					padding={majorScale(8)}
					flexDirection="column"
					border="1px solid var(--stroke-block)"
					boxShadow="0px 18px 68px rgba(0, 0, 0, 0.1)"
				>
					<Heading size={900}>Forgot Password</Heading>
					<MyText
						color="muted"
						maxWidth="350px"
						textAlign="center"
						marginTop={majorScale(1)}
						marginBottom={majorScale(4)}
					>
						Please, enter email address number. We will send you
						link to your email for reset your password
					</MyText>
					<Pane
						gap="24px"
						width="100%"
						display="flex"
						borderRadius="10px"
						alignItems="center"
						justifyContent="center"
						padding={majorScale(3)}
						marginBottom={majorScale(3)}
						backgroundColor="#FFFFFF"
						border="1px solid #3D8798"
						boxShadow="0px 12px 50px -10px rgba(134, 162, 185, 0.2)"
					>
						<Pane>
							<EmailHover />
						</Pane>
						<Label htmlFor="email">Email</Label>
						<Input
							label=""
							type="email"
							name="email"
							marginBottom={0}
							control={control}
							placeholder="Email address"
						/>
					</Pane>
					<MyButton
						appearance="primary"
						isLoading={isLoading}
						marginBottom={minorScale(4)}
						onClick={handleSubmit(onSubmit)}
					>
						Send Email
					</MyButton>
				</Pane>
				<ButtonBack />
			</Pane>
		</Pane>
	)
}
export default Email
