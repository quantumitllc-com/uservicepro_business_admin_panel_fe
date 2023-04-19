import React from "react"
import { AddIcon, Dialog, Pane } from "evergreen-ui"

import MyButton from "components/button"
import { Table } from "components/table"
import { useAddService } from "./useAddService"

const AddService = ({ office }: any) => {
	const { value, setValue, columns, data, isFetching, isLoading } =
		useAddService({ office })

	return (
		<Pane>
			<Dialog
				width="75%"
				isShown={value}
				title="Add service"
				onCloseComplete={() => setValue(false)}
				confirmLabel="Save"
				footer={<Pane />}
			>
				<Table
					columns={columns}
					data={data}
					isLoading={isLoading}
					isFetching={isFetching}
				/>
			</Dialog>
			<MyButton
				paddingX="15px"
				height="26px"
				borderRadius={30}
				iconBefore={<AddIcon size={15} />}
				small="true"
				appearance="primary"
				backgroundColor="var(--green)"
				fontSize={12}
				onClick={() => setValue(true)}
			>
				Add
			</MyButton>
		</Pane>
	)
}

export default AddService
