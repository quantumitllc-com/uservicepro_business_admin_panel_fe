import {
	Pane,
	Heading,
	majorScale,
	minorScale,
	Button,
	ChevronLeftIcon,
} from "evergreen-ui"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import Logo from "components/logo"
import MyText from "components/text"
import { ForgetType } from "entities/cards/auth/forget-type"
import MyButton from "components/button"
import {
	emailIconSet,
	phoneIconSet,
} from "entities/cards/auth/forget-type/ui/icons"

const Forget = () => {
	const navigate = useNavigate()
	const [type, setType] = useState("")
	const handleChangeType = (e: string) => {
		setType(e)
	}

	return (
		<Pane flexGrow={1} display="flex" height="100vh" flexDirection="column">
			<Pane
				display="flex"
				background="white"
				alignItems="center"
				paddingLeft={majorScale(3)}
				paddingRight={majorScale(5)}
				style={{
					filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))",
				}}
			>
				<Pane flex={1} height={80} alignItems="center" display="flex">
					<Logo />
				</Pane>
				<Pane>
					<MyText color="muted" marginRight={majorScale(3)}>
						Already have an account ?
					</MyText>
					<Link to="/sign-in">
						<Button
							height={42}
							border="none"
							minWidth="150px"
							background="#E2EDF0"
							color="var(--dark-green)"
						>
							Sign in
						</Button>
					</Link>
				</Pane>
			</Pane>
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
					width="100%"
					display="flex"
					maxWidth="40%"
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
						alignItems="center"
						flexDirection="column"
						marginBottom={majorScale(3)}
					>
						<ForgetType
							title="Email"
							iconSet={emailIconSet}
							isActive={type === "email"}
							onClick={() => handleChangeType("email")}
							text="Link reset will be send to your email address registered "
						/>
						<ForgetType
							title="SMS"
							iconSet={phoneIconSet}
							isActive={type === "phone"}
							onClick={() => handleChangeType("phone")}
							text="Link reset will be send to your phone number registered"
						/>
					</Pane>
					<MyButton
						appearance="primary"
						disabled={type === ""}
						marginBottom={minorScale(4)}
					>
						Next
					</MyButton>
					<MyText color="muted">
						Didn`t receive link?
						<MyText color="var(--dark-green)">Resend</MyText>
					</MyText>
				</Pane>
				<Button
					border="none"
					color="var(--grey)"
					marginTop={majorScale(4)}
					fontFamily="var(--lexend)"
					onClick={() => navigate(-1)}
					backgroundColor="transparent"
					iconBefore={
						<ChevronLeftIcon size={15} color="var(--grey)" />
					}
				>
					Back
				</Button>
			</Pane>
		</Pane>
	)
}

export default Forget
