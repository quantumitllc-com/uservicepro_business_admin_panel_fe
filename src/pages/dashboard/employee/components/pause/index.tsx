import MyBadge from "components/badge"
import MyButton from "components/button"
import MyHeading from "components/heading"
import { Dialog, Pane, Switch } from "evergreen-ui"

export const Pause = ({ isShown, setIsShown }: any) => (
	<Dialog
		width="40%"
		isShown={isShown}
		hasFooter={false}
		hasHeader={false}
		minHeightContent="100%"
		onCloseComplete={setIsShown}
	>
		<Pane padding={20}>
			<MyHeading marginBottom={24}>
				The employee will be paused{" "}
			</MyHeading>
			<MyHeading marginBottom={20}>Days</MyHeading>
			<Pane display="flex" gap={15} marginBottom={30}>
				<MyBadge backgroundColor="var(--grey)">1 day</MyBadge>
				<MyBadge backgroundColor="var(--dark-green)">7 days</MyBadge>
				<MyBadge backgroundColor="var(--grey)">2 weeks</MyBadge>
				<MyBadge backgroundColor="var(--grey)">1 month</MyBadge>
				<MyBadge backgroundColor="var(--grey)">1 year</MyBadge>
			</Pane>
			<Pane display="flex" gap={20}>
				<MyButton small="true" appearance="primary">
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
