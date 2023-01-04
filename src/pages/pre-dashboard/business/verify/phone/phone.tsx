import { majorScale, minorScale, Pane } from "evergreen-ui"

import MyText from "components/text"
import MyBadge from "components/badge"
import MyButton from "components/button"
import { ReactComponent as EnvelopeSelected } from "components/accordion/icons/envelope-selected.svg"
import MyHeading from "components/heading"
import { MyInput } from "components/input"
import PhoneBig from "../../../layout/icons/phone-big.png"

const Phone = () => (
	<Pane
		paddingTop="20px"
		paddingLeft="20px"
		paddingRight="80px"
		position="relative"
	>
		<Pane alignItems="center" display="flex" marginBottom={minorScale(2)}>
			<EnvelopeSelected />
			<MyHeading fontSize={21} marginLeft={minorScale(5)}>
				Verify your account
			</MyHeading>
			<MyBadge backgroundColor="var(--grey)" marginLeft={minorScale(5)}>
				Please verify
			</MyBadge>
		</Pane>
		<MyText color="var(--grey)" fontSize="16px">
			We are already send to your email:&nbsp;
			<MyText color="var(--dark-green)">215 555 66 77</MyText>
		</MyText>
		<Pane marginTop={minorScale(5)} marginBottom={majorScale(8)}>
			<MyButton isLoading small="true" appearance="black">
				0:59
			</MyButton>
		</Pane>
		<Pane
			width="408px"
			paddingX="30px"
			paddingTop="30px"
			paddingBottom="70px"
			border="1px solid var(--stroke-block)"
			borderRadius="6px"
			boxShadow="0px 2px 6px rgba(0, 0, 0, 0.1)"
		>
			<MyHeading marginBottom={minorScale(5)} fontSize={32}>
				Pass code
			</MyHeading>
			<Pane marginBottom={minorScale(5)} display="flex" gap="8px">
				<MyInput
					type="number"
					width={majorScale(10)}
					height={majorScale(10)}
				/>
				<MyInput
					type="number"
					width={majorScale(10)}
					height={majorScale(10)}
				/>
				<MyInput
					type="number"
					width={majorScale(10)}
					height={majorScale(10)}
				/>
				<MyInput
					type="number"
					width={majorScale(10)}
					height={majorScale(10)}
				/>
			</Pane>
			<MyText color="var(--grey)" fontSize="16px">
				Did’t get a code?&nbsp;
				<MyText
					cursor="pointer"
					textDecoration="underline"
					color="var(--dark-green)"
				>
					Click to button resend
				</MyText>
			</MyText>
		</Pane>
		<Pane position="absolute" right="50px" top="200px">
			<img src={PhoneBig} alt="EnvelopeBig" />
		</Pane>
	</Pane>
)

export default Phone
