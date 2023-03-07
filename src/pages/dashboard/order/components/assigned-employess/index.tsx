import { Chip } from "components/chip"
import MyHeading from "components/heading"
import { Pane } from "evergreen-ui"
import { Search } from "../search"
import { useAssigned } from "./useAssigned"

interface IAssign {
	list: string[]
}

export const AssignedEmployess = ({ list }: IAssign) => {
	const { handleDelete, isLoadingDelete } = useAssigned()

	return (
		<div>
			<MyHeading marginTop="55px" marginBottom="24px" fontSize="20px">
				Assigned employess
			</MyHeading>
			<Search />
			<Pane
				width="100%"
				marginTop="20px"
				display="flex"
				flexWrap="wrap"
				gap="10px 20px"
			>
				{list.map((id: string) => (
					<Chip
						key={id}
						title={id}
						disabled={isLoadingDelete}
						onClick={() => handleDelete(id)}
					/>
				))}
			</Pane>
		</div>
	)
}
