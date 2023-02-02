import { Heading, majorScale, minorScale, Pane } from "evergreen-ui"
import { useEffect } from "react"

import MyText from "components/text"
import MyBadge from "components/badge"
import MyButton from "components/button"
import { ReactComponent as EnvelopeSelected } from "components/accordion/icons/envelope-selected.svg"
import { getTokens } from "utils/getTokens"
import { Navigate } from "react-router-dom"
import EnvelopeBig from "../../../layout/icons/envelope-big.png"
import { useEmail } from "./useEmail"

const Email = () => {
	const tokens = getTokens()
	const { counter, onSubmit } = useEmail()

	useEffect(() => {
		onSubmit()
		// eslint-disable-next-line
	}, [])

	if (tokens.preDashboardInfo.isFinished) {
		return <Navigate to="/" />
	}

	return (
		<Pane
			paddingTop="20px"
			paddingLeft="20px"
			paddingRight="80px"
			position="relative"
		>
			<Pane
				alignItems="center"
				display="flex"
				marginBottom={minorScale(2)}
			>
				<EnvelopeSelected />
				<Heading
					fontFamily="var(--lexend)"
					fontSize={21}
					fontWeight={500}
					marginLeft={minorScale(5)}
				>
					Verify your email
				</Heading>
				<MyBadge
					backgroundColor="var(--grey)"
					marginLeft={minorScale(5)}
				>
					Verify your account
				</MyBadge>
			</Pane>
			<MyText color="var(--grey)" fontSize="16px">
				We are already send to your email:&nbsp;
				<MyText color="var(--dark-green)">{tokens.email}</MyText>
			</MyText>
			<Pane marginTop={minorScale(5)}>
				<MyButton
					isLoading={counter !== 0}
					small="true"
					appearance="black"
					onClick={onSubmit}
				>
					{counter === 0 ? "Send" : `0:${counter}`}
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
}

export default Email
