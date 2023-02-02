import { Button, majorScale, ChevronLeftIcon } from "evergreen-ui"
import { useNavigate } from "react-router"

export const ButtonBack = () => {
	const navigate = useNavigate()

	return (
		<Button
			border="none"
			color="var(--grey)"
			marginTop={majorScale(4)}
			fontFamily="var(--lexend)"
			onClick={() => navigate(-1)}
			backgroundColor="transparent"
			iconBefore={<ChevronLeftIcon size={15} color="var(--grey)" />}
		>
			Back
		</Button>
	)
}
