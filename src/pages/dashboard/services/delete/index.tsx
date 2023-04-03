import { Pane, Dialog, TrashIcon } from "evergreen-ui"
import React from "react"
import useBoolean from "hooks/useBoolean"
import { useDelete } from "./useDelete"

type IDelete = {
	id: string
}

export const Delete = ({ id }: IDelete) => {
	const { value, setValue } = useBoolean(false)
	const { handleDelete } = useDelete()

	return (
		<Pane>
			<Dialog
				intent="danger"
				isShown={value}
				title="Delete category"
				onCloseComplete={() => setValue(false)}
				confirmLabel="Delete"
				onConfirm={(close) => {
					handleDelete(id)
					close()
				}}
			>
				Are you sure you want to delete this item?
			</Dialog>

			<Pane
				onClick={() => setValue(true)}
				borderRadius={4}
				padding={8}
				backgroundColor="rgba(235, 82, 82, 0.1)"
			>
				<TrashIcon color="var(--red)" size={25} />
			</Pane>
		</Pane>
	)
}