import { majorScale, Pane } from "evergreen-ui"

import MyText from "shared/ui/text"
import { ReactComponent as EmptyListSVG } from "./empty-list.svg"

export interface IEmptyList {
	add: string
}

const EmptyList = ({ add }: IEmptyList) => (
	<Pane display="flex" flexDirection="column" alignItems="center">
		<EmptyListSVG />
		<MyText color="var(--grey)" fontSize={21} marginTop={majorScale(6)}>
			Your list is empty please add some {add}
		</MyText>
	</Pane>
)

export default EmptyList
