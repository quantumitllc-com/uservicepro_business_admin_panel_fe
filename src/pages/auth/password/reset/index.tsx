import { Heading, majorScale, minorScale, Pane } from "evergreen-ui"

import { Input } from "components/input"
import MyButton from "components/button"
import { Header } from "../components/header"
import { useReset } from "./useReset"

const Email = () => {
	const {
		onSubmit,
		isLoading,
		form: { control, handleSubmit },
	} = useReset()

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
					<Heading size={900}>Reset Password</Heading>
					<Pane
						width="100%"
						display="flex"
						borderRadius="10px"
						alignItems="center"
						flexDirection="column"
						justifyContent="center"
						padding={majorScale(3)}
						marginBottom={majorScale(3)}
						marginTop={majorScale(3)}
						backgroundColor="#FFFFFF"
						border="1px solid #3D8798"
						boxShadow="0px 12px 50px -10px rgba(134, 162, 185, 0.2)"
					>
						<Input
							type="password"
							label="Create password"
							name="password"
							control={control}
							marginBottom={minorScale(5)}
							placeholder="Password"
						/>
						<Input
							type="password"
							label="Confirm password"
							name="confirmPassword"
							control={control}
							marginBottom={minorScale(5)}
							placeholder="Password"
						/>
					</Pane>
					<MyButton
						appearance="primary"
						isLoading={isLoading}
						marginBottom={minorScale(4)}
						onClick={handleSubmit(onSubmit)}
					>
						Submit
					</MyButton>
				</Pane>
			</Pane>
		</Pane>
	)
}
export default Email
