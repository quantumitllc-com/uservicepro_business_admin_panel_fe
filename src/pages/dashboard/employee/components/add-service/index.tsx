import { AddIcon, Button, SelectMenu } from "evergreen-ui"
import { useAdd } from "./useAdd"

export const AddService = ({ id, list }: { id?: string; list: any[] }) => {
	const {
		data,
		mutate,
		selected,
		isLoading,
		setSelected,
		isLoadingServices,
	} = useAdd(id)
	return (
		<div>
			<SelectMenu
				isMultiSelect
				options={data.data.filter(
					(v: any) => !list.find((a) => a.serviceId === v.value),
				)}
				selected={selected}
				onSelect={(item) => {
					setSelected((prev) => [...prev, item.value])
				}}
				onDeselect={(item) => {
					const filtered = selected.filter((v) => v !== item.value)
					setSelected(filtered)
				}}
				title="Select multiple services"
				onClose={() => {
					if (selected.length > 0) {
						mutate(selected)
					}
				}}
			>
				<Button
					type="button"
					height="40px"
					appearance="primary"
					iconBefore={AddIcon}
					backgroundColor="var(--green)"
					disabled={isLoading || isLoadingServices}
				>
					Add service
				</Button>
			</SelectMenu>
		</div>
	)
}
