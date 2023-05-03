/* eslint-disable react/no-unstable-nested-components */
import { Button, Checkbox, Pane, Popover, SearchInput } from "evergreen-ui"
import styles from "./styles.module.scss"
import { ISearch, useSearch } from "./useSearch"

export const Search = ({ list = [], officeId, serviceId }: ISearch) => {
	const {
		ids,
		data,
		search,
		setIds,
		mutate,
		isLoading,
		handleSearch,
		assignIsLoading,
	} = useSearch({ officeId, serviceId })

	return (
		<Pane className={styles.container}>
			<Popover
				content={({ close }) => (
					<Pane
						width={240}
						height={240}
						display="flex"
						paddingX="20px"
						paddingTop="10px"
						flexDirection="column"
					>
						<Pane flexGrow={1} overflowY="auto">
							{search === ""
								? data?.data
										.filter(
											({ id }: any) =>
												!list.find((v) => v.id === id),
										)
										.map(({ id, name }: any) => (
											<Checkbox
												key={id}
												checked={ids.includes(id)}
												label={name}
												onChange={(e) => {
													if (e.target.checked) {
														setIds((prev) => [
															...prev,
															id,
														])
													} else {
														const newIds =
															ids.filter(
																(v) => v !== id,
															)
														setIds(newIds)
													}
												}}
											/>
										))
								: data?.data
										.filter(
											({ id, name }: any) =>
												name.includes(search) ||
												!list.find((v) => v.id === id),
										)
										.map(({ id, name }: any) => (
											<Checkbox
												key={id}
												checked={ids.includes(id)}
												label={name}
												onChange={(e) => {
													if (e.target.checked) {
														setIds((prev) => [
															...prev,
															id,
														])
													} else {
														const newIds =
															ids.filter(
																(v) => v !== id,
															)
														setIds(newIds)
													}
												}}
											/>
										))}
						</Pane>
						<Pane
							marginY="10px"
							display="flex"
							justifyContent="flex-end"
						>
							<Button
								appearance="primary"
								onClick={() => {
									mutate(undefined, {
										onSuccess: () => {
											close()
										},
									})
								}}
								disabled={assignIsLoading || ids.length === 0}
							>
								Save
							</Button>
						</Pane>
					</Pane>
				)}
			>
				<SearchInput
					value={search}
					onChange={handleSearch}
					placeholder={
						data?.data.length === 0 ||
						data?.data.length === 0 ||
						data?.data?.filter(
							({ id }: any) => !list.find((v) => v.id === id),
						).length === 0
							? "You have no employee"
							: "Type for searching"
					}
					disabled={
						isLoading ||
						data?.data.length === 0 ||
						data?.data?.filter(
							({ id }: any) => !list.find((v) => v.id === id),
						).length === 0
					}
				/>
			</Popover>
		</Pane>
	)
}
