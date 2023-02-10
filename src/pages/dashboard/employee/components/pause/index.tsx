import MyBadge from "components/badge"
import MyButton from "components/button"
import MyHeading from "components/heading"
import { Dialog, Pane } from "evergreen-ui"
import { useState } from "react"

const days = [
	{ value: 1, label: "1 day" },
	{ value: 7, label: "7 days" },
	{ value: 14, label: "2 weeks" },
	{ value: 30, label: "1 month" },
	{ value: 365, label: "1 year" },
]

interface IPause {
	isShown: boolean
	setIsShown: () => void
	onPause: (day: number) => void
}

export const Pause = ({ isShown, setIsShown, onPause }: IPause) => {
	const [day, setDay] = useState<number>(0)

	return (
		<Dialog
			width="40%"
			isShown={isShown}
			hasFooter={false}
			hasHeader={false}
			minHeightContent="100%"
			onCloseComplete={setIsShown}
		>
			<Pane padding={20}>
				<MyHeading marginBottom={24} textAlign="center">
					The employee will be paused
				</MyHeading>
				<MyHeading marginBottom={20}>Days</MyHeading>
				<Pane display="flex" gap={15} marginBottom={30}>
					{days.map(({ value, label }) => (
						<MyBadge
							key={value}
							cursor="pointer"
							backgroundColor={
								day === value
									? "var(--dark-green)"
									: "var(--grey)"
							}
							onClick={() => setDay(value)}
						>
							{label}
						</MyBadge>
					))}
				</Pane>
				<Pane display="flex" gap={20}>
					<MyButton
						small="true"
						appearance="primary"
						disabled={day === 0}
						onClick={() => onPause(day)}
					>
						Apply
					</MyButton>
					<MyButton
						small="true"
						appearance="outlined"
						onClick={setIsShown}
					>
						Cancel
					</MyButton>
				</Pane>
			</Pane>
		</Dialog>
	)
}
