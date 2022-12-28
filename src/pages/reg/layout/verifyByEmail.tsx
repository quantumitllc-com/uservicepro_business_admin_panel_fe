import { Heading, majorScale, minorScale, Pane } from "evergreen-ui"

import MyText from "components/text"
import MyBadge from "components/badge"
import MyButton from "components/button"
import { ReactComponent as EnvelopeSelected } from "entities/accordion/icons/envelope-selected.svg"
import EnvelopeBig from "./icons/envelope-big.png"

const VerifyByEmail = () => (
	<Pane
		paddingTop="20px"
		paddingLeft="20px"
		paddingRight="80px"
		position="relative"
	>
		<Pane alignItems="center" display="flex" marginBottom={minorScale(2)}>
			<EnvelopeSelected />
			<Heading
				fontFamily="var(--lexend)"
				fontSize={21}
				fontWeight={500}
				marginLeft={minorScale(5)}
			>
				Verify your email
			</Heading>
			<MyBadge backgroundColor="var(--grey)" marginLeft={minorScale(5)}>
				Verify your account
			</MyBadge>
		</Pane>
		<MyText color="var(--grey)" fontSize="16px">
			We are already send to your email:&nbsp;
			<MyText color="var(--dark-green)">clark-nelson@info.com</MyText>
		</MyText>
		<Pane marginTop={minorScale(5)}>
			<MyButton isLoading small="true" appearance="black">
				0:59
			</MyButton>
		</Pane>
		<Pane
			display="flex"
			justifyContent="flex-end"
			marginBottom={majorScale(10)}
		>
			<img src={EnvelopeBig} alt="EnvelopeBig" />
		</Pane>
	</Pane>
)

export default VerifyByEmail
