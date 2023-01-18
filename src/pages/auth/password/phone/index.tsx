import { Heading, Label, majorScale, minorScale, Pane } from "evergreen-ui"

import { Input } from "components/input"
import MyText from "components/text"
import MyButton from "components/button"
import { ButtonBack } from "../components/button-back"
import { Header } from "../components/header"

import { ReactComponent as PhoneActive } from "../icons/phone-active.svg"
import { usePhone } from "./usePhone"

const Phone = () => {
	const {
		form: { control },
	} = usePhone()

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
						textAlign="center"
						marginTop={majorScale(1)}
						marginBottom={majorScale(4)}
					>
						Please Select option to send link reset password
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
							<PhoneActive />
						</Pane>
						<Label htmlFor="phone">Phone</Label>
						<Input
							label=""
							type="tel"
							name="phone"
							marginBottom={0}
							control={control}
							placeholder="Phone number"
						/>
					</Pane>
					<MyButton appearance="primary" marginBottom={minorScale(4)}>
						Send
					</MyButton>
					<Pane display="flex">
						<MyText color="muted">Didn`t receive link?</MyText>
						<MyText
							color="var(--dark-green)"
							marginLeft={minorScale(1)}
						>
							Resend
						</MyText>
					</Pane>
				</Pane>
				<ButtonBack />
			</Pane>
		</Pane>
	)
}

export default Phone
