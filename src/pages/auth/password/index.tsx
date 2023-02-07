import { Pane, Heading, majorScale } from "evergreen-ui"
import { Link } from "react-router-dom"

import MyText from "components/text"
import { PassowrdType } from "entities/cards/auth/password-type"
import {
	emailIconSet,
	phoneIconSet,
} from "entities/cards/auth/password-type/ui/icons"
import { Header } from "./components/header"
import { ButtonBack } from "./components/button-back"

const Passowrd = () => (
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
					<Link to="email">
						<PassowrdType
							title="Email"
							iconSet={emailIconSet}
							text="Link reset will be send to your email address registered "
						/>
					</Link>
					<Link to="phone">
						<PassowrdType
							title="SMS"
							iconSet={phoneIconSet}
							text="Link reset will be send to your phone number registered"
						/>
					</Link>
				</Pane>
			</Pane>
			<ButtonBack />
		</Pane>
	</Pane>
)

export default Passowrd
