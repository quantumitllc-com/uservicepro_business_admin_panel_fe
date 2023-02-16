import { Avatar, Pane, minorScale } from "evergreen-ui"

import MyText from "../../../../../../components/text"
import styles from "./styles.module.scss"

const Receiver = () => (
	<Pane display="flex">
		<Avatar
			marginRight={minorScale(2)}
			src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
			size={36}
		/>
		<Pane>
			<Pane
				className={styles.receiver}
				paddingLeft={minorScale(5)}
				paddingBottom={minorScale(8)}
				paddingRight={minorScale(8)}
				paddingTop={minorScale(3)}
				border="1px solid var(--stroke-block)"
			>
				<MyText color="var(--black)">
					Do greatest at in learning steepest. Breakfast extremity
					suffering one who all otherwise suspected.
				</MyText>
			</Pane>
			<MyText color="var(--grey)" fontSize={12} fontWeight={500}>
				14:02
			</MyText>
		</Pane>
	</Pane>
)

export default Receiver
