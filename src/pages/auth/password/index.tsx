import { Pane, Heading, majorScale, minorScale } from "evergreen-ui"
import { useState } from "react"
import { Link } from "react-router-dom"

import MyText from "components/text"
import { ForgetType } from "pages/auth/password/components/forget-type"
import MyButton from "components/button"
import {
	emailIconSet,
	phoneIconSet,
} from "pages/auth/password/components/forget-type/ui/icons"
import { Header } from "./components/header"
import { ButtonBack } from "./components/button-back"

const Passowrd = () => {
	const [type, setType] = useState("")
	const handleChangeType = (e: string) => {
		setType(e)
	}

	return (
		<Pane flexGrow={1} display="flex" height="100vh" flexDirection="column">
			<Header />
			<Pane
				width="100%"
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
					<Link to={type}>
						<MyButton
							appearance="primary"
							disabled={type === ""}
							marginBottom={minorScale(4)}
						>
							Next
						</MyButton>
					</Link>
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

export default Passowrd
